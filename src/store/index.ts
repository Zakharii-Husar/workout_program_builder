import { configureStore } from '@reduxjs/toolkit';
import programReducer from './slices/programSlice';
import workoutReducer from './slices/workoutSlice';

export const store = configureStore({
  reducer: {
    programs: programReducer,
    workouts: workoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
