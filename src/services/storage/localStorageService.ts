import { safeJsonParse, safeJsonStringify } from '../../utils/helpers';
import { STORAGE_KEYS } from '../../utils/constants';
import { WorkoutProgram } from '../../types';
import { WorkoutSession } from '../../store/slices/workoutSlice';
import { SettingsState } from '../../store/slices/settingsSlice';

export class LocalStorageService {
  /**
   * Save data to localStorage with error handling
   */
  static setItem<T>(key: string, value: T): boolean {
    try {
      const serializedValue = safeJsonStringify(value);
      localStorage.setItem(key, serializedValue);
      return true;
    } catch (error) {
      console.error(`Error saving to localStorage key "${key}":`, error);
      return false;
    }
  }

  /**
   * Get data from localStorage with error handling
   */
  static getItem<T>(key: string, fallback: T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? safeJsonParse(item, fallback) : fallback;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return fallback;
    }
  }

  /**
   * Remove item from localStorage
   */
  static removeItem(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
      return false;
    }
  }

  /**
   * Clear all localStorage data
   */
  static clear(): boolean {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  }

  // Program-specific methods
  static savePrograms(programs: WorkoutProgram[]): boolean {
    return this.setItem(STORAGE_KEYS.PROGRAMS, programs);
  }

  static getPrograms(): WorkoutProgram[] {
    return this.getItem(STORAGE_KEYS.PROGRAMS, []);
  }

  static removePrograms(): boolean {
    return this.removeItem(STORAGE_KEYS.PROGRAMS);
  }

  // Workout history methods
  static saveWorkoutHistory(history: WorkoutSession[]): boolean {
    return this.setItem(STORAGE_KEYS.WORKOUT_HISTORY, history);
  }

  static getWorkoutHistory(): WorkoutSession[] {
    return this.getItem<WorkoutSession[]>(STORAGE_KEYS.WORKOUT_HISTORY, []);
  }

  static removeWorkoutHistory(): boolean {
    return this.removeItem(STORAGE_KEYS.WORKOUT_HISTORY);
  }

  // Running workout methods (for persistence during active workouts)
  static saveRunningWorkout(workout: WorkoutSession | null): boolean {
    if (workout === null) {
      return this.removeItem(STORAGE_KEYS.RUNNING_WORKOUT);
    }
    return this.setItem(STORAGE_KEYS.RUNNING_WORKOUT, workout);
  }

  static getRunningWorkout(): WorkoutSession | null {
    return this.getItem<WorkoutSession | null>(STORAGE_KEYS.RUNNING_WORKOUT, null);
  }

  static removeRunningWorkout(): boolean {
    return this.removeItem(STORAGE_KEYS.RUNNING_WORKOUT);
  }

  // Settings methods
  static saveSettings(settings: SettingsState): boolean {
    return this.setItem(STORAGE_KEYS.SETTINGS, settings);
  }

  static getSettings(): SettingsState {
    const defaultSettings: SettingsState = {
      weightUnit: 'kg',
      stopwatchAlarmOn: true,
    };
    return this.getItem(STORAGE_KEYS.SETTINGS, defaultSettings);
  }

  static removeSettings(): boolean {
    return this.removeItem(STORAGE_KEYS.SETTINGS);
  }
}
