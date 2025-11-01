import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail,
  sendEmailVerification as firebaseSendEmailVerification,
  reauthenticateWithCredential,
  EmailAuthProvider,
  User,
  AuthError,
} from 'firebase/auth';
import { auth } from './firebase/config';

export interface AuthErrorInfo {
  code: string;
  message: string;
}

/**
 * Centralized authentication service wrapping Firebase Auth.
 * Provides a clean abstraction layer with proper error handling.
 */
export class AuthService {
  private readonly googleProvider: GoogleAuthProvider;

  constructor() {
    this.googleProvider = new GoogleAuthProvider();
    // Add additional scopes if needed
    this.googleProvider.addScope('email');
    this.googleProvider.addScope('profile');
  }

  /**
   * Signs in a user with email and password.
   */
  async signInWithEmail(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Creates a new user account with email and password.
   */
  async signUpWithEmail(email: string, password: string): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Send email verification after signup
      if (userCredential.user && !userCredential.user.emailVerified) {
        await firebaseSendEmailVerification(userCredential.user);
      }
      return userCredential.user;
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Signs in a user using Google OAuth popup.
   */
  async signInWithGoogle(): Promise<User> {
    try {
      const userCredential = await signInWithPopup(auth, this.googleProvider);
      return userCredential.user;
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Signs out the current user.
   */
  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Sends a password reset email to the user.
   */
  async sendPasswordResetEmail(email: string): Promise<void> {
    try {
      await firebaseSendPasswordResetEmail(auth, email);
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Sends an email verification to the current user.
   */
  async sendEmailVerification(): Promise<void> {
    const user = auth.currentUser;
    if (!user) {
      throw {
        code: 'auth/no-current-user',
        message: 'No user is currently signed in',
      } as AuthErrorInfo;
    }

    try {
      await firebaseSendEmailVerification(user);
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Re-authenticates the current user with email and password.
   * Required for sensitive operations like password change or account deletion.
   */
  async reauthenticateWithEmail(
    email: string,
    password: string
  ): Promise<void> {
    const user = auth.currentUser;
    if (!user || !user.email) {
      throw {
        code: 'auth/no-current-user',
        message: 'No user is currently signed in',
      } as AuthErrorInfo;
    }

    try {
      const credential = EmailAuthProvider.credential(email, password);
      await reauthenticateWithCredential(user, credential);
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Gets the currently signed-in user, or null if no user is signed in.
   */
  getCurrentUser(): User | null {
    return auth.currentUser;
  }

  /**
   * Checks if the current user's email is verified.
   */
  isEmailVerified(): boolean {
    return auth.currentUser?.emailVerified ?? false;
  }

  /**
   * Type guard to check if error is a Firebase AuthError.
   */
  private isAuthError(error: unknown): error is AuthError {
    return (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      typeof (error as any).code === 'string' &&
      (error as any).code.startsWith('auth/')
    );
  }

  /**
   * Centralized error handling for Firebase Auth errors.
   * Translates Firebase error codes to user-friendly messages.
   */
  private handleAuthError(error: unknown): AuthErrorInfo {
    // Type guard ensures we handle the error correctly
    if (!this.isAuthError(error)) {
      return {
        code: 'auth/unknown-error',
        message: 'An unexpected error occurred. Please try again',
      };
    }

    let message = 'An error occurred during authentication';

    // Check for network errors first (handles both code and message-based detection)
    if (
      error.code === 'auth/network-request-failed' ||
      error.message.includes('network') ||
      error.message.includes('Network')
    ) {
      return {
        code: error.code,
        message:
          'Network error. Please check your internet connection and try again.',
      };
    }

    switch (error.code) {
      // Authentication errors
      case 'auth/user-not-found':
        message = 'No account found with this email address';
        break;
      case 'auth/invalid-credential':
        message = 'Invalid email or password';
        break;
      case 'auth/invalid-email':
        message = 'Invalid email address';
        break;
      case 'auth/user-disabled':
        message = 'This account has been disabled';
        break;
      case 'auth/too-many-requests':
        message =
          'Too many failed attempts. Please try again later or reset your password';
        break;

      // Registration errors
      case 'auth/email-already-in-use':
        message = 'An account with this email already exists';
        break;
      case 'auth/weak-password':
        message = 'Password should be at least 6 characters';
        break;
      case 'auth/operation-not-allowed':
        message = 'This sign-in method is not enabled';
        break;

      // Popup/redirect errors
      case 'auth/popup-closed-by-user':
        message = 'Sign-in popup was closed';
        break;
      case 'auth/popup-blocked':
        message = 'Sign-in popup was blocked by browser';
        break;
      case 'auth/cancelled-popup-request':
        message = 'Another sign-in popup is already open';
        break;
      case 'auth/auth-domain-config-required':
        message = 'Authentication domain configuration is required';
        break;

      // Email verification errors
      case 'auth/requires-recent-login':
        message =
          'This operation requires recent authentication. Please sign in again';
        break;

      // Internal errors
      case 'auth/internal-error':
        message = 'An internal error occurred. Please try again later';
        break;
      default:
        // For unknown errors, use Firebase's message if available, otherwise generic
        message =
          error.message && error.message !== error.code
            ? error.message
            : 'An unexpected error occurred. Please try again';
    }

    return {
      code: error.code,
      message,
    };
  }
}

export const authService = new AuthService();

