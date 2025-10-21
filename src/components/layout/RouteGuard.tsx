import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const location = useLocation();
  
  // If someone tries to access /exercises directly, redirect to /create/exercises
  if (location.pathname === '/exercises') {
    return <Navigate to="/create/exercises" replace />;
  }
  
  return <>{children}</>;
};

export default RouteGuard;
