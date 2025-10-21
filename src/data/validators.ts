import { Exercise, MuscleGroup } from '../types';
import { ExerciseValidator } from '../services/validation';

/**
 * Validate exercise data structure
 */
export const validateExerciseData = (exercises: Exercise[]): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!Array.isArray(exercises)) {
    errors.push('Exercises must be an array');
    return { isValid: false, errors };
  }

  exercises.forEach((exercise, index) => {
    const validation = ExerciseValidator.validate(exercise);
    if (!validation.isValid) {
      errors.push(`Exercise ${index + 1}: ${validation.errors.join(', ')}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validate muscle group data structure
 */
export const validateMuscleGroupData = (muscleGroup: MuscleGroup): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!muscleGroup.name || muscleGroup.name.trim() === '') {
    errors.push('Muscle group name is required');
  }

  if (!muscleGroup.img || muscleGroup.img.trim() === '') {
    errors.push('Muscle group image is required');
  }

  if (!Array.isArray(muscleGroup.exercises)) {
    errors.push('Muscle group exercises must be an array');
  } else {
    const exerciseValidation = validateExerciseData(muscleGroup.exercises);
    if (!exerciseValidation.isValid) {
      errors.push(...exerciseValidation.errors);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validate all muscle groups data
 */
export const validateAllMuscleGroupsData = (muscleGroups: MuscleGroup[]): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!Array.isArray(muscleGroups)) {
    errors.push('Muscle groups must be an array');
    return { isValid: false, errors };
  }

  muscleGroups.forEach((muscleGroup, index) => {
    const validation = validateMuscleGroupData(muscleGroup);
    if (!validation.isValid) {
      errors.push(`Muscle group ${index + 1} (${muscleGroup.name || 'unnamed'}): ${validation.errors.join(', ')}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
};
