import { WorkoutProgram, Exercise, ProgramValidationResult } from '../types';
import { LocalStorageService, MigrationService } from './storage';
import { ProgramValidator } from './validation';
import { generateId, ERROR_CODES, createError } from '../utils';

export class ProgramService {
  static saveProgram(program: WorkoutProgram): { success: boolean; error?: any } {
    try {
      const existingPrograms = this.getSavedPrograms();
      const updatedPrograms = [...existingPrograms, program];
      const success = LocalStorageService.savePrograms(updatedPrograms);
      
      if (!success) {
        throw new Error('Failed to save to localStorage');
      }
      
      return { success: true };
    } catch (error) {
      console.error('Error saving program:', error);
      return { 
        success: false, 
        error: createError(ERROR_CODES.PROGRAM_SAVE_FAILED, error) 
      };
    }
  }

  static getSavedPrograms(): WorkoutProgram[] {
    try {
      const programs = LocalStorageService.getPrograms();
      return MigrationService.migratePrograms(programs);
    } catch (error) {
      console.error('Error loading programs:', error);
      return [];
    }
  }

  static removeProgram(program: WorkoutProgram): { success: boolean; error?: any } {
    try {
      const existingPrograms = this.getSavedPrograms();
      const updatedPrograms = existingPrograms.filter(p => p.id !== program.id);
      const success = LocalStorageService.savePrograms(updatedPrograms);
      
      if (!success) {
        throw new Error('Failed to save to localStorage');
      }
      
      return { success: true };
    } catch (error) {
      console.error('Error removing program:', error);
      return { 
        success: false, 
        error: createError(ERROR_CODES.PROGRAM_DELETE_FAILED, error) 
      };
    }
  }

  static updateProgram(updatedProgram: WorkoutProgram): { success: boolean; error?: any } {
    try {
      const existingPrograms = this.getSavedPrograms();
      const updatedPrograms = existingPrograms.map(p => 
        p.id === updatedProgram.id ? { ...updatedProgram, updatedAt: new Date() } : p
      );
      const success = LocalStorageService.savePrograms(updatedPrograms);
      
      if (!success) {
        throw new Error('Failed to save to localStorage');
      }
      
      return { success: true };
    } catch (error) {
      console.error('Error updating program:', error);
      return { 
        success: false, 
        error: createError(ERROR_CODES.PROGRAM_UPDATE_FAILED, error) 
      };
    }
  }

  static createProgram(name: string, timer: number, exercises: Exercise[], id?: string): WorkoutProgram {
    const now = new Date();
    return {
      id: id || generateId(),
      name: name.trim(),
      timer,
      exercises: [...exercises],
      createdAt: id ? undefined : now, // Only set createdAt for new programs
      updatedAt: now
    };
  }

  static validateProgram(program: Partial<WorkoutProgram>): ProgramValidationResult {
    const result = ProgramValidator.validate(program);
    return {
      isValid: result.isValid,
      errors: result.errors.map(error => error.message)
    };
  }

  static getProgramById(id: string): WorkoutProgram | null {
    const programs = this.getSavedPrograms();
    return programs.find(p => p.id === id) || null;
  }

  static searchPrograms(query: string): WorkoutProgram[] {
    const programs = this.getSavedPrograms();
    const searchTerm = query.toLowerCase();
    return programs.filter(program => 
      program.name.toLowerCase().includes(searchTerm)
    );
  }
}
