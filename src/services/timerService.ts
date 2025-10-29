import { store } from '../store';
import { updateTimerState, setTimerStartTimestamp } from '../store/slices/workoutSlice';
import { soundService } from './soundService';

class TimerService {
  private intervalId: NodeJS.Timeout | null = null;
  private isRunning = false;
  private hasNotifiedZero = false; // Track if we've already played the sound when hitting 0

  // Conversion utilities
  static millisecondsToSeconds(ms: number): number {
    return Math.floor(ms / 1000);
  }

  static millisecondsToMinutes(ms: number): number {
    return Math.floor(ms / 60000);
  }

  static millisecondsToMinutesAndSeconds(ms: number): { minutes: number; seconds: number } {
    const totalSeconds = this.millisecondsToSeconds(ms);
    return {
      minutes: Math.floor(totalSeconds / 60),
      seconds: totalSeconds % 60
    };
  }

  static secondsToMilliseconds(seconds: number): number {
    return seconds * 1000;
  }

  static minutesAndSecondsToMilliseconds(minutes: number, seconds: number): number {
    return (minutes * 60 + seconds) * 1000;
  }

  start(targetRestTimeMs: number) {
    if (this.isRunning) return;
    
    this.isRunning = true;
    
    // Set start timestamp if not already set
    const state = store.getState();
    const timerStartTimestamp = state.workouts.runningWorkout?.timerStartTimestamp;
    
    if (!timerStartTimestamp) {
      const now = Date.now();
      store.dispatch(setTimerStartTimestamp(now));
    }
    
    this.intervalId = setInterval(() => {
      this.updateTimerFromTimestamp(targetRestTimeMs);
    }, 100);
  }

  private updateTimerFromTimestamp(targetRestTimeMs: number) {
    const state = store.getState();
    const timerStartTimestamp = state.workouts.runningWorkout?.timerStartTimestamp;
    const settings = state.settings;
    
    if (!timerStartTimestamp) return;
    
    const now = Date.now();
    const elapsedMs = now - timerStartTimestamp;
    const remainingMs = targetRestTimeMs - elapsedMs;
    
    // Check if we just hit zero or entered overtime
    const isOvertime = remainingMs < 0;
    const justHitZero = !isOvertime && remainingMs < 100 && remainingMs >= 0; // Within last 100ms of target time
    
    // Calculate display values
    const displayMs = remainingMs < 0 ? -remainingMs : remainingMs;
    const { minutes: displayMinutes, seconds: displaySeconds } = TimerService.millisecondsToMinutesAndSeconds(displayMs);
    
    // Play sound when timer reaches zero (if settings allow and we haven't notified yet)
    if (justHitZero && !this.hasNotifiedZero && settings?.timerAlarmOn) {
      this.hasNotifiedZero = true;
      soundService.playBellWithPermissionRequest(3);
    }
    
    // Also play sound when entering overtime (once per second to avoid spam)
    if (isOvertime && displaySeconds === 0 && settings?.timerAlarmOn) {
      soundService.playBellWithPermissionRequest(1);
    }
    
    store.dispatch(updateTimerState({
      isRunning: true,
      minutes: isOvertime ? -displayMinutes : displayMinutes,
      seconds: isOvertime ? -displaySeconds : displaySeconds,
      milliseconds: remainingMs,
      isOvertime
    }));
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
  }

  pause() {
    this.stop();
    const state = store.getState();
    const timerState = state.workouts.runningWorkout?.timerState;
    
    if (timerState) {
      store.dispatch(updateTimerState({
        ...timerState,
        isRunning: false
      }));
    }
  }

  resume(targetRestTimeMs: number) {
    const state = store.getState();
    const timerState = state.workouts.runningWorkout?.timerState;
    const timerStartTimestamp = state.workouts.runningWorkout?.timerStartTimestamp;
    
    if (timerState && !timerState.isRunning) {
      // If resuming, we need to adjust the start timestamp to account for paused time
      if (timerStartTimestamp) {
        const now = Date.now();
        const currentElapsedMs = targetRestTimeMs - (timerState.milliseconds || 0);
        const newStartTimestamp = now - currentElapsedMs;
        store.dispatch(setTimerStartTimestamp(newStartTimestamp));
      }
      
      store.dispatch(updateTimerState({
        ...timerState,
        isRunning: true
      }));
      this.start(targetRestTimeMs);
    }
  }

  reset(targetRestTimeMs: number) {
    this.stop();
    this.hasNotifiedZero = false; // Reset notification flag
    const { minutes, seconds } = TimerService.millisecondsToMinutesAndSeconds(targetRestTimeMs);
    store.dispatch(updateTimerState({
      isRunning: false,
      minutes,
      seconds,
      milliseconds: targetRestTimeMs,
      isOvertime: false
    }));
    store.dispatch(setTimerStartTimestamp(0));
  }

  toggle(targetRestTimeMs: number) {
    const state = store.getState();
    const timerState = state.workouts.runningWorkout?.timerState;
    
    if (!timerState) return;
    
    if (timerState.isRunning) {
      this.pause();
    } else {
      this.resume(targetRestTimeMs);
    }
  }

  // Initialize timer state if it doesn't exist
  initialize(targetRestTimeMs: number) {
    const state = store.getState();
    const timerState = state.workouts.runningWorkout?.timerState;
    const timerStartTimestamp = state.workouts.runningWorkout?.timerStartTimestamp;
    
    if (!timerState) {
      const { minutes, seconds } = TimerService.millisecondsToMinutesAndSeconds(targetRestTimeMs);
      store.dispatch(updateTimerState({
        isRunning: false,
        minutes,
        seconds,
        milliseconds: targetRestTimeMs,
        isOvertime: false
      }));
    }
    
    // If we have a start timestamp and timer is running, calculate current elapsed time
    if (timerStartTimestamp && timerState?.isRunning) {
      this.updateTimerFromTimestamp(targetRestTimeMs);
    }
  }

  // Sync with Redux state changes
  syncWithState(targetRestTimeMs: number) {
    const state = store.getState();
    const timerState = state.workouts.runningWorkout?.timerState;
    
    if (!timerState) {
      this.stop();
      return;
    }
    
    if (timerState.isRunning && !this.isRunning) {
      this.start(targetRestTimeMs);
    } else if (!timerState.isRunning && this.isRunning) {
      this.stop();
    }
  }
}

export const timerService = new TimerService();
export { TimerService };
