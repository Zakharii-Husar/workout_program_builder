import { WorkoutProgram } from '../../types';
import { generateId } from '../../utils/formatters';

export class MigrationService {
  /**
   * Migrate programs to add IDs if they don't exist
   */
  static migratePrograms(programs: any[]): WorkoutProgram[] {
    const migratedPrograms = programs.map(program => {
      if (!program.id) {
        return {
          ...program,
          id: generateId(),
          createdAt: program.createdAt || new Date(),
          updatedAt: program.updatedAt || new Date()
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
        createdAt: program.createdAt || new Date(),
        updatedAt: program.updatedAt || new Date()
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
