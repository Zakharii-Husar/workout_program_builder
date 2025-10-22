import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateId } from '../../utils/formatters';

// Set within a workout session
export interface WorkoutSet {
  id: string;
  exerciseName: string;
  reps: number | null;
  weight: number | null;
  completed: boolean;
}

// Workout session state
export interface WorkoutSession {
  id: string;
  programId: string;
  name: string;
  startTime: Date;
  restBetweenSets: number; // in seconds
  endTime: Date | null;
  exercises: WorkoutSet[];
}

// Workout state
export interface WorkoutState {
  runningWorkout: WorkoutSession | null;
}

// Initial state
const initialState: WorkoutState = {
  runningWorkout: null
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
        id: generateId(),
        programId,
        name,
        startTime: new Date(),
        restBetweenSets,
        endTime: null,
        exercises: exercises.map(exercise => ({
          id: generateId(),
          exerciseName: exercise.name,
          reps: exercise.reps,
          weight: exercise.weight,
          completed: false
        }))
      };
    },

    // Mark a set as completed
    markSetComplete: (state, action: PayloadAction<string>) => {
      if (state.runningWorkout) {
        const set = state.runningWorkout.exercises.find(ex => ex.id === action.payload);
        if (set) {
          set.completed = true;
        }
      }
    },

    // Mark a set as incomplete
    markSetIncomplete: (state, action: PayloadAction<string>) => {
      if (state.runningWorkout) {
        const set = state.runningWorkout.exercises.find(ex => ex.id === action.payload);
        if (set) {
          set.completed = false;
        }
      }
    },

    // Update set details
    updateSet: (state, action: PayloadAction<{
      setId: string;
      updates: Partial<Pick<WorkoutSet, 'reps' | 'weight'>>
    }>) => {
      if (state.runningWorkout) {
        const set = state.runningWorkout.exercises.find(ex => ex.id === action.payload.setId);
        if (set) {
          Object.assign(set, action.payload.updates);
        }
      }
    },


    // End workout
    endWorkout: (state) => {
      if (state.runningWorkout) {
        state.runningWorkout.endTime = new Date();
        state.runningWorkout = null;
      }
    },

    // Cancel workout
    cancelWorkout: (state) => {
      state.runningWorkout = null;
    }
  },
});

export const {
  startWorkout,
  markSetComplete,
  markSetIncomplete,
  updateSet,
  endWorkout,
  cancelWorkout
} = workoutSlice.actions;

export default workoutSlice.reducer;
