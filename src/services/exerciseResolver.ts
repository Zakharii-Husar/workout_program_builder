import { Exercise } from '../types';
import { muscleGroups } from '../data/exercises';

export class ExerciseResolver {
  private static exerciseMap: Map<string, Exercise> = new Map();

  static {
    // Build exercise map from all muscle groups
    muscleGroups.forEach(muscleGroup => {
      muscleGroup.exercises.forEach(exercise => {
        this.exerciseMap.set(exercise.id, exercise);
      });
    });
  }

  /**
   * Resolve exercise ID to exercise object
   */
  static getExerciseById(id: string): Exercise | null {
    return this.exerciseMap.get(id) || null;
  }

  /**
   * Resolve multiple exercise IDs to exercise objects
   */
  static getExercisesByIds(ids: string[]): Exercise[] {
    return ids
      .map(id => this.getExerciseById(id))
      .filter((exercise): exercise is Exercise => exercise !== null);
  }

  /**
   * Get all available exercises
   */
  static getAllExercises(): Exercise[] {
    return Array.from(this.exerciseMap.values());
  }

  /**
   * Get exercises by muscle group
   */
  static getExercisesByMuscleGroup(muscleGroupName: string): Exercise[] {
    const muscleGroup = muscleGroups.find(mg => mg.name === muscleGroupName);
    return muscleGroup ? muscleGroup.exercises : [];
  }
}
