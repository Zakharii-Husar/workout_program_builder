/**
 * Application-wide constants
 */

// Timer constants
export const TIMER = {
  DEFAULT_REST_TIME: 60, // 1 minute in seconds
  INCREMENT_STEP: 15, // 15 seconds increment/decrement
  MIN_REST_TIME: 0,
  MAX_REST_TIME: 600, // 10 minutes max
} as const;

// Exercise constants
export const EXERCISE = {
  MIN_EXERCISES_REQUIRED: 1,
  MAX_EXERCISES_PER_PROGRAM: 50,
} as const;

// Program constants
export const PROGRAM = {
  DEFAULT_NAME: 'My Workout',
  MAX_NAME_LENGTH: 100,
  MIN_NAME_LENGTH: 1,
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  PROGRAMS: 'Exarr',
  SETTINGS: 'workout_settings',
} as const;

// Animation durations (in milliseconds)
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Sound settings
export const SOUND = {
  DEFAULT_VOLUME: 0.7,
  BELL_REPEAT_COUNT: 3,
} as const;

// UI constants
export const UI = {
  SCROLL_STEP: 200,
  MUSCLE_GROUP_SCROLL_OFFSET: 100,
} as const;
