import { Exercise, MuscleGroup } from '../types';
import { muscleGroups } from '../data/data';

export class ExerciseService {
  static getAllMuscleGroups(): MuscleGroup[] {
    return muscleGroups;
  }

  static getExercisesByMuscleGroup(muscleGroupName: string): Exercise[] {
    const muscleGroup = muscleGroups.find((group: MuscleGroup) => 
      group.name.toLowerCase() === muscleGroupName.toLowerCase()
    );
    return muscleGroup ? muscleGroup.exercises : [];
  }

  static searchExercises(query: string): Exercise[] {
    const allExercises = muscleGroups.flatMap((group: MuscleGroup) => group.exercises);
    return allExercises.filter((exercise: Exercise) =>
      exercise.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  static addExerciseToProgram(exercises: Exercise[], newExercise: Exercise): Exercise[] {
    // Allow duplicate exercises since each represents a set
    return [...exercises, newExercise];
  }

  static removeExerciseFromProgram(exercises: Exercise[], exerciseToRemove: Exercise, index?: number): Exercise[] {
    if (index !== undefined) {
      // Remove by index if provided
      return exercises.filter((_, i) => i !== index);
    }
    // Fallback to removing by name (removes all instances)
    return exercises.filter(ex => ex.name !== exerciseToRemove.name);
  }

  static reorderExercises(exercises: Exercise[], fromIndex: number, toIndex: number): Exercise[] {
    const newExercises = [...exercises];
    const [removed] = newExercises.splice(fromIndex, 1);
    newExercises.splice(toIndex, 0, removed);
    return newExercises;
  }
}
