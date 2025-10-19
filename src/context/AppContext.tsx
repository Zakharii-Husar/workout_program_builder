import React, { createContext, useContext, useReducer, useMemo, ReactNode } from 'react';
import { AppState, AppContextType, WorkoutProgram, Exercise } from '../types';

// Initial state
const initialState: AppState = {
  currentDisplay: {
    main: "flex",
    createProgram: "none",
    exercises: "none",
    startProgram: "none"
  },
  chosenExercises: [],
  runningProgram: null,
  savedPrograms: JSON.parse(localStorage.getItem("Exarr") || "[]")
};

// Action types
type AppAction =
  | { type: 'SHOW_CREATE_PROGRAM' }
  | { type: 'SHOW_CHOOSE_EXERCISES' }
  | { type: 'SHOW_MAIN' }
  | { type: 'START_PROGRAM'; payload: WorkoutProgram }
  | { type: 'SET_CHOSEN_EXERCISES'; payload: Exercise[] }
  | { type: 'SET_RUNNING_PROGRAM'; payload: WorkoutProgram | null }
  | { type: 'ADD_PROGRAM'; payload: WorkoutProgram }
  | { type: 'REMOVE_PROGRAM'; payload: WorkoutProgram };

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  const visibilityOfComponents = {
    main: "none",
    createProgram: "none",
    exercises: "none",
    startProgram: "none"
  };

  switch (action.type) {
    case 'SHOW_CREATE_PROGRAM':
      return {
        ...state,
        currentDisplay: { ...visibilityOfComponents, createProgram: "flex" }
      };
    case 'SHOW_CHOOSE_EXERCISES':
      return {
        ...state,
        currentDisplay: { ...visibilityOfComponents, exercises: "flex" }
      };
    case 'SHOW_MAIN':
      return {
        ...state,
        currentDisplay: { ...visibilityOfComponents, main: "flex" }
      };
    case 'START_PROGRAM':
      return {
        ...state,
        currentDisplay: { ...visibilityOfComponents, startProgram: "flex" },
        runningProgram: action.payload
      };
    case 'SET_CHOSEN_EXERCISES':
      return {
        ...state,
        chosenExercises: action.payload
      };
    case 'SET_RUNNING_PROGRAM':
      return {
        ...state,
        runningProgram: action.payload
      };
    case 'ADD_PROGRAM':
      const newPrograms = [...state.savedPrograms, action.payload];
      localStorage.setItem("Exarr", JSON.stringify(newPrograms));
      return {
        ...state,
        savedPrograms: newPrograms
      };
    case 'REMOVE_PROGRAM':
      const filteredPrograms = state.savedPrograms.filter(p => p !== action.payload);
      localStorage.setItem("Exarr", JSON.stringify(filteredPrograms));
      return {
        ...state,
        savedPrograms: filteredPrograms
      };
    default:
      return state;
  }
};

// Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const actions = useMemo(() => ({
    showCreateProgram: () => dispatch({ type: 'SHOW_CREATE_PROGRAM' }),
    showChooseExercises: () => dispatch({ type: 'SHOW_CHOOSE_EXERCISES' }),
    showMain: () => dispatch({ type: 'SHOW_MAIN' }),
    startProgram: (program: WorkoutProgram) => dispatch({ type: 'START_PROGRAM', payload: program }),
    setChosenExercises: (exercises: Exercise[]) => dispatch({ type: 'SET_CHOSEN_EXERCISES', payload: exercises }),
    setRunningProgram: (program: WorkoutProgram | null) => dispatch({ type: 'SET_RUNNING_PROGRAM', payload: program }),
    addProgram: (program: WorkoutProgram) => dispatch({ type: 'ADD_PROGRAM', payload: program }),
    removeProgram: (program: WorkoutProgram) => dispatch({ type: 'REMOVE_PROGRAM', payload: program })
  }), []);

  const contextValue = useMemo(() => ({ state, actions }), [state, actions]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
