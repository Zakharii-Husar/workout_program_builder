// Export all exercise data
export { armsExercises } from './arms';
export { backExercises } from './back';
export { chestExercises } from './chest';
export { legsExercises } from './legs';
export { shouldersExercises } from './shoulders';
export { coreExercises } from './core';

// Export all muscle groups as an array
import { armsExercises } from './arms';
import { backExercises } from './back';
import { chestExercises } from './chest';
import { legsExercises } from './legs';
import { shouldersExercises } from './shoulders';
import { coreExercises } from './core';
import { MuscleGroup } from '../../types';

export const muscleGroups: MuscleGroup[] = [
  armsExercises,
  backExercises,
  chestExercises,
  legsExercises,
  shouldersExercises,
  coreExercises
];
