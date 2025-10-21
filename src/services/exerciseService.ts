import { Exercise, MuscleGroup } from '../types';
import { muscleGroups } from '../data';
import { ExerciseValidator } from './validation';

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
    // Validate exercise before adding
    const validation = ExerciseValidator.validate(newExercise);
    if (!validation.isValid) {
      console.warn('Invalid exercise:', validation.errors);
      return exercises;
    }
    
    // Allow duplicate exercises since each represents a set
    return [...exercises, newExercise];
  }

  static removeExerciseFromProgram(exercises: Exercise[], exerciseToRemove: Exercise, index?: number): Exercise[] {
    if (index !== undefined && index >= 0 && index < exercises.length) {
      // Remove by index if provided and valid
      return exercises.filter((_, i) => i !== index);
    }
    
    // Fallback to removing by name (removes all instances)
    return exercises.filter(ex => ex.name !== exerciseToRemove.name);
  }

  static reorderExercises(exercises: Exercise[], fromIndex: number, toIndex: number): Exercise[] {
    if (fromIndex < 0 || fromIndex >= exercises.length || toIndex < 0 || toIndex >= exercises.length) {
      console.warn('Invalid indices for reordering exercises');
      return exercises;
    }

    const newExercises = [...exercises];
    const [removed] = newExercises.splice(fromIndex, 1);
    newExercises.splice(toIndex, 0, removed);
    return newExercises;
  }

  static getExerciseByName(name: string): Exercise | null {
    const allExercises = muscleGroups.flatMap((group: MuscleGroup) => group.exercises);
    return allExercises.find(exercise => 
      exercise.name.toLowerCase() === name.toLowerCase()
    ) || null;
  }

  static getMuscleGroupByExercise(exerciseName: string): MuscleGroup | null {
    return muscleGroups.find(group => 
      group.exercises.some(exercise => 
        exercise.name.toLowerCase() === exerciseName.toLowerCase()
      )
    ) || null;
  }

  static validateExercise(exercise: Partial<Exercise>): { isValid: boolean; errors: string[] } {
    return ExerciseValidator.validate(exercise);
  }
}
