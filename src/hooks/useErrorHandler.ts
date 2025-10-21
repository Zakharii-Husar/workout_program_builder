import { useState, useCallback } from 'react';
import { AppError, ErrorState } from '../types';

export const useErrorHandler = () => {
  const [errors, setErrors] = useState<AppError[]>([]);

  const addError = useCallback((error: Omit<AppError, 'timestamp'>) => {
    const newError: AppError = {
      ...error,
      timestamp: new Date()
    };
    
    setErrors(prev => {
      // Check if error with same code already exists
      const existingIndex = prev.findIndex(e => e.code === error.code);
      if (existingIndex >= 0) {
        // Replace existing error
        const updated = [...prev];
        updated[existingIndex] = newError;
        return updated;
      }
      // Add new error
      return [...prev, newError];
    });
  }, []);

  const removeError = useCallback((code: string) => {
    setErrors(prev => prev.filter(error => error.code !== code));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const getError = useCallback((code: string) => {
    return errors.find(error => error.code === code);
  }, [errors]);

  const hasError = useCallback((code: string) => {
    return errors.some(error => error.code === code);
  }, [errors]);

  const errorState: ErrorState = {
    errors,
    hasErrors: errors.length > 0,
    addError,
    removeError,
    clearErrors
  };

  return {
    ...errorState,
    getError,
    hasError
  };
};
