import { Exercise } from '../../types';

export class ExerciseValidator {
  /**
   * Validate a single exercise
   */
  static validate(exercise: Partial<Exercise>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!exercise.name || exercise.name.trim() === '') {
      errors.push('Exercise name is required');
    }

    if (!exercise.img || exercise.img.trim() === '') {
      errors.push('Exercise image is required');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Validate exercise name
   */
  static validateName(name: string): { isValid: boolean; error?: string } {
    if (!name || name.trim() === '') {
      return { isValid: false, error: 'Exercise name is required' };
    }
    if (name.length > 100) {
      return { isValid: false, error: 'Exercise name must be no more than 100 characters long' };
    }
    return { isValid: true };
  }

  /**
   * Validate exercise image
   */
  static validateImage(img: string): { isValid: boolean; error?: string } {
    if (!img || img.trim() === '') {
      return { isValid: false, error: 'Exercise image is required' };
    }
    
    // Basic URL validation
    try {
      new URL(img);
    } catch {
      // If it's not a URL, check if it's a valid file path
      if (!img.startsWith('/') && !img.startsWith('./') && !img.startsWith('../')) {
        return { isValid: false, error: 'Exercise image must be a valid URL or file path' };
      }
    }

    return { isValid: true };
  }
}
