import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateId } from '../../utils/formatters';

// Load workout history from localStorage
const loadWorkoutHistory = (): WorkoutSession[] => {
  try {
    const saved = localStorage.getItem('workoutHistory');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Convert date strings back to Date objects
      return parsed.map((workout: any) => ({
        ...workout,
        startTime: new Date(workout.startTime),
        endTime: workout.endTime ? new Date(workout.endTime) : null
      }));
    }
  } catch (error) {
    console.error('Error loading workout history:', error);
  }
  return [];
};

// Save workout history to localStorage
const saveWorkoutHistory = (history: WorkoutSession[]) => {
  try {
    localStorage.setItem('workoutHistory', JSON.stringify(history));
  } catch (error) {
    console.error('Error saving workout history:', error);
  }
};

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
  workoutHistory: WorkoutSession[];
}

// Initial state
const initialState: WorkoutState = {
  runningWorkout: null,
  workoutHistory: loadWorkoutHistory()
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


    // End workout and save to history
    endWorkout: (state) => {
      if (state.runningWorkout) {
        state.runningWorkout.endTime = new Date();
        state.workoutHistory.push(state.runningWorkout);
        saveWorkoutHistory(state.workoutHistory);
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
