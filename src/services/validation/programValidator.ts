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

    // Timer validation
    if (!program.timer || program.timer <= 0) {
      errors.push('Rest time must be greater than 0 seconds');
    } else if (program.timer > 600) { // 10 minutes max
      errors.push('Rest time cannot exceed 10 minutes');
    }

    // Exercises validation
    if (!program.exercises || program.exercises.length === 0) {
      errors.push(`At least ${EXERCISE.MIN_EXERCISES_REQUIRED} exercise is required`);
    } else if (program.exercises.length > EXERCISE.MAX_EXERCISES_PER_PROGRAM) {
      errors.push(`Cannot have more than ${EXERCISE.MAX_EXERCISES_PER_PROGRAM} exercises in a program`);
    }

    // Validate individual exercises
    if (program.exercises) {
      program.exercises.forEach((exercise, index) => {
        if (!exercise.name || exercise.name.trim() === '') {
          errors.push(`Exercise ${index + 1} must have a name`);
        }
        if (!exercise.img || exercise.img.trim() === '') {
          errors.push(`Exercise ${index + 1} must have an image`);
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
   * Validate timer value
   */
  static validateTimer(timer: number): { isValid: boolean; error?: string } {
    if (timer < 0) {
      return { isValid: false, error: 'Rest time cannot be negative' };
    }
    if (timer > 600) {
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
