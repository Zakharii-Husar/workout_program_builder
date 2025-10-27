import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateId } from '../../utils/formatters';
import { LocalStorageService } from '../../services/storage';

// Set within a workout session
export interface WorkoutSet {
  id: string;
  exerciseName: string;
  reps: number | null;
  weight: number | null;
  completed: boolean;
  actualRestTime?: number; // Actual rest time taken in seconds
  targetRestTime?: number; // Target rest time for this set in seconds
}

// Workout session state
export interface WorkoutSession {
  workoutSessionId: string;
  programId: string;
  name: string;
  startTime: string; // ISO string
  restBetweenSets: number; // in seconds
  endTime: string | null; // ISO string
  exercises: WorkoutSet[];
}

// Workout state
export interface WorkoutState {
  runningWorkout: WorkoutSession | null;
  workoutHistory: WorkoutSession[];
}

// Initial state
const initialState: WorkoutState = {
  runningWorkout: LocalStorageService.getRunningWorkout(),
  workoutHistory: LocalStorageService.getWorkoutHistory()
};

const workoutSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    // Start a new workout
    startWorkout: (state, action: PayloadAction<{
      programId: string;
      name: string;
      restBetweenSets: number;
      exercises: Array<{ name: string; reps: number | null; weight: number | null }>;
    }>) => {
      const { programId, name, restBetweenSets, exercises } = action.payload;
      
      state.runningWorkout = {
        workoutSessionId: generateId(),
        programId,
        name,
        startTime: new Date().toISOString(),
        restBetweenSets,
        endTime: null,
        exercises: exercises.map(exercise => ({
          id: generateId(),
          exerciseName: exercise.name,
          reps: exercise.reps,
          weight: exercise.weight,
          completed: false,
          targetRestTime: restBetweenSets
        }))
      };
      
      // Persist running workout to localStorage
      LocalStorageService.saveRunningWorkout(state.runningWorkout);
    },

    // Mark a set as completed
    markSetComplete: (state, action: PayloadAction<string>) => {
      if (state.runningWorkout) {
        const set = state.runningWorkout.exercises.find(ex => ex.id === action.payload);
        if (set) {
          set.completed = true;
          // Persist running workout state
          LocalStorageService.saveRunningWorkout(state.runningWorkout);
        }
      }
    },

    // Mark a set as incomplete
    markSetIncomplete: (state, action: PayloadAction<string>) => {
      if (state.runningWorkout) {
        const set = state.runningWorkout.exercises.find(ex => ex.id === action.payload);
        if (set) {
          set.completed = false;
          // Persist running workout state
          LocalStorageService.saveRunningWorkout(state.runningWorkout);
        }
      }
    },

    // Update set details
    updateSet: (state, action: PayloadAction<{
      setId: string;
      updates: Partial<Pick<WorkoutSet, 'reps' | 'weight' | 'actualRestTime' | 'targetRestTime'>>
    }>) => {
      if (state.runningWorkout) {
        const set = state.runningWorkout.exercises.find(ex => ex.id === action.payload.setId);
        if (set) {
          Object.assign(set, action.payload.updates);
          // Persist running workout state
          LocalStorageService.saveRunningWorkout(state.runningWorkout);
        }
      }
    },

    // Record rest time for a completed set
    recordRestTime: (state, action: PayloadAction<{
      setId: string;
      actualRestTime: number;
    }>) => {
      if (state.runningWorkout) {
        const set = state.runningWorkout.exercises.find(ex => ex.id === action.payload.setId);
        if (set) {
          set.actualRestTime = action.payload.actualRestTime;
          // Persist running workout state
          LocalStorageService.saveRunningWorkout(state.runningWorkout);
        }
      }
    },


    // End workout and save to history
    endWorkout: (state) => {
      if (state.runningWorkout) {
        state.runningWorkout.endTime = new Date().toISOString();
        state.workoutHistory.push(state.runningWorkout);
        LocalStorageService.saveWorkoutHistory(state.workoutHistory);
        state.runningWorkout = null;
        // Remove running workout from localStorage since it's now in history
        LocalStorageService.removeRunningWorkout();
      }
    },

    // Cancel workout
    cancelWorkout: (state) => {
      state.runningWorkout = null;
      // Remove running workout from localStorage
      LocalStorageService.removeRunningWorkout();
    }
  },
});

export const {
  startWorkout,
  markSetComplete,
  markSetIncomplete,
  updateSet,
  recordRestTime,
  endWorkout,
  cancelWorkout
} = workoutSlice.actions;

export default workoutSlice.reducer;
