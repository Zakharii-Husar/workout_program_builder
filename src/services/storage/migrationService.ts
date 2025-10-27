import { WorkoutProgram, Exercise } from '../../types';
import { generateId } from '../../utils/formatters';
import { ExerciseResolver } from '../exerciseResolver';

export class MigrationService {
  /**
   * Migrate programs to new structure with exercise IDs
   */
  static migratePrograms(programs: any[]): WorkoutProgram[] {
    const migratedPrograms = programs.map(program => {
      if (!program.id) {
        return {
          ...program,
          id: generateId(),
          createdAt: program.createdAt || new Date().toISOString(),
          updatedAt: program.updatedAt || new Date().toISOString()
        };
      }
      
      // Migrate from old structure (exercises array) to new structure (exerciseIds array)
      if (program.exercises && Array.isArray(program.exercises) && !program.exerciseIds) {
        const exerciseIds = program.exercises
          .map((exercise: any) => {
            // Try to find exercise by name first
            const allExercises = ExerciseResolver.getAllExercises();
            const foundExercise = allExercises.find(e => e.name === exercise.name);
            return foundExercise ? foundExercise.id : null;
          })
          .filter((id: string | null): id is string => id !== null);
        
        return {
          ...program,
          restBetweenSets: program.timer || program.restBetweenSets || 60,
          exerciseIds,
          updatedAt: new Date().toISOString()
        };
      }
      
      return program;
    });
    
    return migratedPrograms;
  }

  /**
   * Migrate a single program
   */
  static migrateProgram(program: any): WorkoutProgram {
    if (!program.id) {
      return {
        ...program,
        id: generateId(),
        createdAt: program.createdAt || new Date().toISOString(),
        updatedAt: program.updatedAt || new Date().toISOString()
      };
    }
    return program;
  }

  /**
   * Check if programs need migration
   */
  static needsMigration(programs: any[]): boolean {
    return programs.some(program => !program.id);
  }

  /**
   * Get migration version for future migrations
   */
  static getMigrationVersion(): number {
    return 1; // Increment for future migrations
  }
}
