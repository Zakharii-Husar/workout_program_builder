import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
  AuthError,
} from 'firebase/auth';
import { auth } from './firebase/config';

const googleProvider = new GoogleAuthProvider();

export interface AuthErrorInfo {
  code: string;
  message: string;
}

export class AuthService {
  async signInWithEmail(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  }

  async signUpWithEmail(email: string, password: string): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  }

  async signInWithGoogle(): Promise<User> {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      return userCredential.user;
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  }

  getCurrentUser(): User | null {
    return auth.currentUser;
  }

  private handleAuthError(error: AuthError): AuthErrorInfo {
    let message = 'An error occurred during authentication';

    switch (error.code) {
      case 'auth/user-not-found':
        message = 'No account found with this email address';
        break;
      case 'auth/wrong-password':
        message = 'Incorrect password';
        break;
      case 'auth/email-already-in-use':
        message = 'An account with this email already exists';
        break;
      case 'auth/invalid-email':
        message = 'Invalid email address';
        break;
      case 'auth/weak-password':
        message = 'Password should be at least 6 characters';
        break;
      case 'auth/popup-closed-by-user':
        message = 'Sign-in popup was closed';
        break;
      case 'auth/popup-blocked':
        message = 'Sign-in popup was blocked by browser';
        break;
      case 'auth/cancelled-popup-request':
        message = 'Another sign-in popup is already open';
        break;
      default:
        message = error.message || message;
    }

    return {
      code: error.code,
      message,
    };
  }
}

export const authService = new AuthService();

