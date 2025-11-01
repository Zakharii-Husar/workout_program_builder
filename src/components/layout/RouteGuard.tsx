import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const location = useLocation();
  const { user, initialized } = useAppSelector((state) => state.auth);
  
  // Wait for auth to initialize
  if (!initialized) {
    return null; // Or a loading spinner
  }

  // Redirect to login if not authenticated (except for login page itself)
  if (!user && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  // Redirect to home if authenticated and trying to access login
  if (user && location.pathname === '/login') {
    return <Navigate to="/" replace />;
  }
  
  // If someone tries to access /exercises directly, redirect to /create/exercises
  if (location.pathname === '/exercises') {
    return <Navigate to="/create/exercises" replace />;
  }
  
  return <>{children}</>;
};

export default RouteGuard;
