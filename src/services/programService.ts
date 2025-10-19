import { WorkoutProgram, Exercise } from '../types';

export class ProgramService {
  static saveProgram(program: WorkoutProgram): void {
    try {
      const existingPrograms = this.getSavedPrograms();
      const updatedPrograms = [...existingPrograms, program];
      localStorage.setItem("Exarr", JSON.stringify(updatedPrograms));
    } catch (error) {
      console.error('Error saving program:', error);
      throw new Error('Failed to save program');
    }
  }

  static getSavedPrograms(): WorkoutProgram[] {
    try {
      const programs = localStorage.getItem("Exarr");
      return programs ? JSON.parse(programs) : [];
    } catch (error) {
      console.error('Error loading programs:', error);
      return [];
    }
  }

  static removeProgram(program: WorkoutProgram): void {
    try {
      const existingPrograms = this.getSavedPrograms();
      const updatedPrograms = existingPrograms.filter(p => p !== program);
      localStorage.setItem("Exarr", JSON.stringify(updatedPrograms));
    } catch (error) {
      console.error('Error removing program:', error);
      throw new Error('Failed to remove program');
    }
  }

  static createProgram(name: string, timer: number, exercises: Exercise[]): WorkoutProgram {
    return {
      name: name.trim(),
      timer,
      exercises: [...exercises]
    };
  }

  static validateProgram(program: Partial<WorkoutProgram>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!program.name || program.name.trim() === '') {
      errors.push('Program name is required');
    }

    if (!program.timer || program.timer <= 0) {
      errors.push('Rest time must be greater than 0 seconds');
    }

    if (!program.exercises || program.exercises.length === 0) {
      errors.push('At least one exercise is required');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}
