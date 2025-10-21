import { WorkoutProgram } from '../../types';
import { PROGRAM } from '../../utils/constants';

/**
 * Default workout programs
 */
export const DEFAULT_PROGRAMS: Omit<WorkoutProgram, 'id'>[] = [
  {
    name: 'Quick Full Body',
    timer: 60,
    exercises: []
  },
  {
    name: 'Upper Body Focus',
    timer: 90,
    exercises: []
  },
  {
    name: 'Lower Body Focus',
    timer: 75,
    exercises: []
  },
  {
    name: 'Cardio Circuit',
    timer: 45,
    exercises: []
  }
];

/**
 * Create a default program with a generated ID
 */
export const createDefaultProgram = (name: string, timer: number = 60): WorkoutProgram => {
  return {
    id: '', // Will be generated when saved
    name,
    timer,
    exercises: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
};
