import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/firebase/config';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setUser, setInitialized, serializeUser } from '../../store/slices/authSlice';
import { LoadingSpinner } from '../common/LoadingSpinner';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { initialized } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Set up auth state listener
    // Note: onAuthStateChanged fires immediately with current auth state,
    // then again whenever auth state changes
    let isInitialized = false;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Serialize user before dispatching to avoid Redux serialization warnings
      dispatch(setUser(serializeUser(user)));
      
      // Only mark as initialized on first auth state determination
      if (!isInitialized) {
        dispatch(setInitialized());
        isInitialized = true;
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  // Show loading spinner while auth state is being determined
  if (!initialized) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

export default AuthProvider;

