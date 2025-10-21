import { AppError } from '../types';

/**
 * Application error codes
 */
export const ERROR_CODES = {
  // Program errors
  PROGRAM_SAVE_FAILED: 'PROGRAM_SAVE_FAILED',
  PROGRAM_LOAD_FAILED: 'PROGRAM_LOAD_FAILED',
  PROGRAM_DELETE_FAILED: 'PROGRAM_DELETE_FAILED',
  PROGRAM_UPDATE_FAILED: 'PROGRAM_UPDATE_FAILED',
  PROGRAM_VALIDATION_FAILED: 'PROGRAM_VALIDATION_FAILED',
  
  // Exercise errors
  EXERCISE_ADD_FAILED: 'EXERCISE_ADD_FAILED',
  EXERCISE_REMOVE_FAILED: 'EXERCISE_REMOVE_FAILED',
  EXERCISE_VALIDATION_FAILED: 'EXERCISE_VALIDATION_FAILED',
  
  // Storage errors
  STORAGE_SAVE_FAILED: 'STORAGE_SAVE_FAILED',
  STORAGE_LOAD_FAILED: 'STORAGE_LOAD_FAILED',
  STORAGE_CLEAR_FAILED: 'STORAGE_CLEAR_FAILED',
  
  // Navigation errors
  NAVIGATION_FAILED: 'NAVIGATION_FAILED',
  INVALID_ROUTE: 'INVALID_ROUTE',
  
  // Timer errors
  TIMER_START_FAILED: 'TIMER_START_FAILED',
  TIMER_PAUSE_FAILED: 'TIMER_PAUSE_FAILED',
  TIMER_RESET_FAILED: 'TIMER_RESET_FAILED',
  
  // Sound errors
  SOUND_PLAY_FAILED: 'SOUND_PLAY_FAILED',
  SOUND_PERMISSION_DENIED: 'SOUND_PERMISSION_DENIED',
  
  // General errors
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  PERMISSION_DENIED: 'PERMISSION_DENIED'
} as const;

export type ErrorCode = typeof ERROR_CODES[keyof typeof ERROR_CODES];

/**
 * Error messages mapping
 */
export const ERROR_MESSAGES: Record<ErrorCode, string> = {
  [ERROR_CODES.PROGRAM_SAVE_FAILED]: 'Failed to save program. Please try again.',
  [ERROR_CODES.PROGRAM_LOAD_FAILED]: 'Failed to load programs. Please refresh the page.',
  [ERROR_CODES.PROGRAM_DELETE_FAILED]: 'Failed to delete program. Please try again.',
  [ERROR_CODES.PROGRAM_UPDATE_FAILED]: 'Failed to update program. Please try again.',
  [ERROR_CODES.PROGRAM_VALIDATION_FAILED]: 'Program validation failed. Please check your input.',
  
  [ERROR_CODES.EXERCISE_ADD_FAILED]: 'Failed to add exercise. Please try again.',
  [ERROR_CODES.EXERCISE_REMOVE_FAILED]: 'Failed to remove exercise. Please try again.',
  [ERROR_CODES.EXERCISE_VALIDATION_FAILED]: 'Exercise validation failed. Please check your input.',
  
  [ERROR_CODES.STORAGE_SAVE_FAILED]: 'Failed to save data. Please check your browser storage.',
  [ERROR_CODES.STORAGE_LOAD_FAILED]: 'Failed to load data. Please refresh the page.',
  [ERROR_CODES.STORAGE_CLEAR_FAILED]: 'Failed to clear data. Please try again.',
  
  [ERROR_CODES.NAVIGATION_FAILED]: 'Navigation failed. Please try again.',
  [ERROR_CODES.INVALID_ROUTE]: 'Invalid route. Please check the URL.',
  
  [ERROR_CODES.TIMER_START_FAILED]: 'Failed to start timer. Please try again.',
  [ERROR_CODES.TIMER_PAUSE_FAILED]: 'Failed to pause timer. Please try again.',
  [ERROR_CODES.TIMER_RESET_FAILED]: 'Failed to reset timer. Please try again.',
  
  [ERROR_CODES.SOUND_PLAY_FAILED]: 'Failed to play sound. Please check your audio settings.',
  [ERROR_CODES.SOUND_PERMISSION_DENIED]: 'Audio permission denied. Please allow audio in your browser.',
  
  [ERROR_CODES.UNKNOWN_ERROR]: 'An unknown error occurred. Please try again.',
  [ERROR_CODES.NETWORK_ERROR]: 'Network error. Please check your connection.',
  [ERROR_CODES.PERMISSION_DENIED]: 'Permission denied. Please check your browser settings.'
};

/**
 * Get error message by code
 */
export const getErrorMessage = (code: ErrorCode): string => {
  return ERROR_MESSAGES[code] || ERROR_MESSAGES[ERROR_CODES.UNKNOWN_ERROR];
};

/**
 * Create error object
 */
export const createError = (
  code: ErrorCode,
  details?: any,
  message?: string
): Omit<AppError, 'timestamp'> => {
  return {
    code,
    message: message || getErrorMessage(code),
    details
  };
};
