import { WorkoutProgram, ValidationResult } from '../../types';
import { PROGRAM, EXERCISE } from '../../utils/constants';

export class ProgramValidator {
  /**
   * Validate a workout program
   */
  static validate(program: Partial<WorkoutProgram>): ValidationResult {
    const errors: string[] = [];

    // Name validation
    if (!program.name || program.name.trim() === '') {
      errors.push('Program name is required');
    } else if (program.name.length < PROGRAM.MIN_NAME_LENGTH) {
      errors.push(`Program name must be at least ${PROGRAM.MIN_NAME_LENGTH} character long`);
    } else if (program.name.length > PROGRAM.MAX_NAME_LENGTH) {
      errors.push(`Program name must be no more than ${PROGRAM.MAX_NAME_LENGTH} characters long`);
    }

    // Timer validation - now in milliseconds
    if (!program.restBetweenSets || program.restBetweenSets < 1000) { // At least 1 second (1000ms)
      errors.push('Rest time must be at least 1 second');
    } else if (program.restBetweenSets > 600000) { // 10 minutes max (600000ms)
      errors.push('Rest time cannot exceed 10 minutes');
    }

    // Exercises validation
    if (!program.exerciseIds || program.exerciseIds.length === 0) {
      errors.push(`At least ${EXERCISE.MIN_EXERCISES_REQUIRED} exercise is required`);
    } else if (program.exerciseIds.length > EXERCISE.MAX_EXERCISES_PER_PROGRAM) {
      errors.push(`Cannot have more than ${EXERCISE.MAX_EXERCISES_PER_PROGRAM} exercises in a program`);
    }

    // Validate individual exercises
    if (program.exerciseIds) {
      program.exerciseIds.forEach((exerciseId, index) => {
        if (!exerciseId || exerciseId.trim() === '') {
          errors.push(`Exercise ${index + 1} must have a valid ID`);
        }
      });
    }

    return {
      isValid: errors.length === 0,
      errors: errors.map(error => ({ field: 'general', message: error }))
    };
  }

  /**
   * Validate program name
   */
  static validateName(name: string): { isValid: boolean; error?: string } {
    if (!name || name.trim() === '') {
      return { isValid: false, error: 'Program name is required' };
    }
    if (name.length < PROGRAM.MIN_NAME_LENGTH) {
      return { isValid: false, error: `Program name must be at least ${PROGRAM.MIN_NAME_LENGTH} character long` };
    }
    if (name.length > PROGRAM.MAX_NAME_LENGTH) {
      return { isValid: false, error: `Program name must be no more than ${PROGRAM.MAX_NAME_LENGTH} characters long` };
    }
    return { isValid: true };
  }

  /**
   * Validate timer value (in milliseconds)
   */
  static validateTimer(timer: number): { isValid: boolean; error?: string } {
    if (timer < 0) {
      return { isValid: false, error: 'Rest time cannot be negative' };
    }
    if (timer > 600000) { // 10 minutes max (600000ms)
      return { isValid: false, error: 'Rest time cannot exceed 10 minutes' };
    }
    return { isValid: true };
  }

  /**
   * Validate exercises array
   */
  static validateExercises(exercises: any[]): { isValid: boolean; error?: string } {
    if (!exercises || exercises.length === 0) {
      return { isValid: false, error: `At least ${EXERCISE.MIN_EXERCISES_REQUIRED} exercise is required` };
    }
    if (exercises.length > EXERCISE.MAX_EXERCISES_PER_PROGRAM) {
      return { isValid: false, error: `Cannot have more than ${EXERCISE.MAX_EXERCISES_PER_PROGRAM} exercises in a program` };
    }
    return { isValid: true };
  }
}
