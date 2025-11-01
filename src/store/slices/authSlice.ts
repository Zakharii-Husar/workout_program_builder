import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { authService, AuthErrorInfo } from '../../services/authService';

/**
 * Serializable user data extracted from Firebase User object.
 * This prevents Redux serialization warnings and allows proper state persistence.
 */
export interface SerializedUser {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  displayName: string | null;
  photoURL: string | null;
}

/**
 * Converts Firebase User object to serializable format.
 */
export function serializeUser(user: User | null): SerializedUser | null {
  if (!user) return null;
  return {
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName,
    photoURL: user.photoURL,
  };
}

interface AuthState {
  user: SerializedUser | null;
  loading: boolean;
  error: AuthErrorInfo | null;
  initialized: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  initialized: false,
};

// Async thunks
export const signInWithEmail = createAsyncThunk(
  'auth/signInWithEmail',
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const user = await authService.signInWithEmail(email, password);
      return user;
    } catch (error) {
      return rejectWithValue(error as AuthErrorInfo);
    }
  }
);

export const signUpWithEmail = createAsyncThunk(
  'auth/signUpWithEmail',
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const user = await authService.signUpWithEmail(email, password);
      return user;
    } catch (error) {
      return rejectWithValue(error as AuthErrorInfo);
    }
  }
);

export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const user = await authService.signInWithGoogle();
      return user;
    } catch (error) {
      return rejectWithValue(error as AuthErrorInfo);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authService.logout();
    } catch (error) {
      return rejectWithValue(error as AuthErrorInfo);
    }
  }
);

export const sendPasswordReset = createAsyncThunk(
  'auth/sendPasswordReset',
  async (email: string, { rejectWithValue }) => {
    try {
      await authService.sendPasswordResetEmail(email);
    } catch (error) {
      return rejectWithValue(error as AuthErrorInfo);
    }
  }
);

export const sendEmailVerification = createAsyncThunk(
  'auth/sendEmailVerification',
  async (_, { rejectWithValue }) => {
    try {
      await authService.sendEmailVerification();
    } catch (error) {
      return rejectWithValue(error as AuthErrorInfo);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SerializedUser | null>) => {
      state.user = action.payload;
      state.initialized = true;
    },
    clearError: (state) => {
      state.error = null;
    },
    setInitialized: (state) => {
      state.initialized = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // Sign in with email
      .addCase(signInWithEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = serializeUser(action.payload);
        state.error = null;
      })
      .addCase(signInWithEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as AuthErrorInfo;
      })
      // Sign up with email
      .addCase(signUpWithEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpWithEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = serializeUser(action.payload);
        state.error = null;
      })
      .addCase(signUpWithEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as AuthErrorInfo;
      })
      // Sign in with Google
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = serializeUser(action.payload);
        state.error = null;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as AuthErrorInfo;
      })
      // Logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as AuthErrorInfo;
      })
      // Send password reset
      .addCase(sendPasswordReset.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendPasswordReset.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendPasswordReset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as AuthErrorInfo;
      })
      // Send email verification
      .addCase(sendEmailVerification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendEmailVerification.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendEmailVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as AuthErrorInfo;
      });
  },
});

export const { setUser, clearError, setInitialized } = authSlice.actions;
export default authSlice.reducer;

