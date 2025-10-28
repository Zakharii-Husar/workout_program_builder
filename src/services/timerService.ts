import { store } from '../store';
import { updateTimerState, setTimerStartTimestamp } from '../store/slices/workoutSlice';

class TimerService {
  private intervalId: NodeJS.Timeout | null = null;
  private isRunning = false;

  start() {
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
      this.updateTimerFromTimestamp();
    }, 1000);
  }

  private updateTimerFromTimestamp() {
    const state = store.getState();
    const timerStartTimestamp = state.workouts.runningWorkout?.timerStartTimestamp;
    
    if (!timerStartTimestamp) return;
    
    const now = Date.now();
    const elapsedMs = now - timerStartTimestamp;
    const elapsedSeconds = Math.floor(elapsedMs / 1000);
    
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    
    store.dispatch(updateTimerState({
      isRunning: true,
      minutes,
      seconds,
      milliseconds: 0
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

  resume() {
    const state = store.getState();
    const timerState = state.workouts.runningWorkout?.timerState;
    const timerStartTimestamp = state.workouts.runningWorkout?.timerStartTimestamp;
    
    if (timerState && !timerState.isRunning) {
      // If resuming, we need to adjust the start timestamp to account for paused time
      if (timerStartTimestamp) {
        const now = Date.now();
        const currentElapsedMs = timerState.minutes * 60 * 1000 + timerState.seconds * 1000;
        const newStartTimestamp = now - currentElapsedMs;
        store.dispatch(setTimerStartTimestamp(newStartTimestamp));
      }
      
      store.dispatch(updateTimerState({
        ...timerState,
        isRunning: true
      }));
      this.start();
    }
  }

  reset() {
    this.stop();
    store.dispatch(updateTimerState({
      isRunning: false,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }));
    store.dispatch(setTimerStartTimestamp(0));
  }

  toggle() {
    const state = store.getState();
    const timerState = state.workouts.runningWorkout?.timerState;
    
    if (!timerState) return;
    
    if (timerState.isRunning) {
      this.pause();
    } else {
      this.resume();
    }
  }

  // Initialize timer state if it doesn't exist
  initialize() {
    const state = store.getState();
    const timerState = state.workouts.runningWorkout?.timerState;
    const timerStartTimestamp = state.workouts.runningWorkout?.timerStartTimestamp;
    
    if (!timerState) {
      store.dispatch(updateTimerState({
        isRunning: false,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      }));
    }
    
    // If we have a start timestamp and timer is running, calculate current elapsed time
    if (timerStartTimestamp && timerState?.isRunning) {
      this.updateTimerFromTimestamp();
    }
  }

  // Sync with Redux state changes
  syncWithState() {
    const state = store.getState();
    const timerState = state.workouts.runningWorkout?.timerState;
    
    if (!timerState) {
      this.stop();
      return;
    }
    
    if (timerState.isRunning && !this.isRunning) {
      this.start();
    } else if (!timerState.isRunning && this.isRunning) {
      this.stop();
    }
  }
}

export const timerService = new TimerService();
