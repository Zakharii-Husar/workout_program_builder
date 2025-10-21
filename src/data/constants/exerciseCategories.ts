/**
 * Exercise category constants
 */

export const EXERCISE_CATEGORIES = {
  CHEST: 'chest',
  BACK: 'back',
  LEGS: 'legs',
  SHOULDERS: 'shoulders',
  ARMS: 'arms',
  CORE: 'core'
} as const;

export type ExerciseCategory = typeof EXERCISE_CATEGORIES[keyof typeof EXERCISE_CATEGORIES];

export const CATEGORY_DISPLAY_NAMES: Record<ExerciseCategory, string> = {
  [EXERCISE_CATEGORIES.CHEST]: 'Chest',
  [EXERCISE_CATEGORIES.BACK]: 'Back',
  [EXERCISE_CATEGORIES.LEGS]: 'Legs',
  [EXERCISE_CATEGORIES.SHOULDERS]: 'Shoulders',
  [EXERCISE_CATEGORIES.ARMS]: 'Arms',
  [EXERCISE_CATEGORIES.CORE]: 'Core'
};

export const CATEGORY_ORDER: ExerciseCategory[] = [
  EXERCISE_CATEGORIES.CHEST,
  EXERCISE_CATEGORIES.BACK,
  EXERCISE_CATEGORIES.LEGS,
  EXERCISE_CATEGORIES.SHOULDERS,
  EXERCISE_CATEGORIES.ARMS,
  EXERCISE_CATEGORIES.CORE
];
