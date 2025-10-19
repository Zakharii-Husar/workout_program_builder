import { useState, useCallback } from 'react';
import { ValidationError } from '../types';

export const useValidation = () => {
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const validateProgram = useCallback((program: { name: string; timer: number; exercises: any[] }) => {
    const newErrors: ValidationError[] = [];

    if (!program.name || program.name.trim() === '') {
      newErrors.push({ field: 'name', message: 'Program name is required' });
    }

    if (!program.timer || program.timer <= 0) {
      newErrors.push({ field: 'timer', message: 'Rest time must be greater than 0' });
    }

    if (!program.exercises || program.exercises.length === 0) {
      newErrors.push({ field: 'exercises', message: 'At least one exercise is required' });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const getError = useCallback((field: string) => {
    return errors.find(error => error.field === field)?.message;
  }, [errors]);

  return {
    errors,
    validateProgram,
    clearErrors,
    getError,
    hasErrors: errors.length > 0
  };
};
