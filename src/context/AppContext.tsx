import React, { createContext, useContext, useReducer, useMemo, ReactNode } from 'react';
import { AppState, AppContextType, WorkoutProgram, Exercise } from '../types';

// Migration function to add IDs to existing programs
const migratePrograms = (programs: any[]): WorkoutProgram[] => {
  const migratedPrograms = programs.map(program => {
    if (!program.id) {
      return {
        ...program,
        id: Date.now().toString(36) + Math.random().toString(36).substr(2)
      };
    }
    return program;
  });
  
  // Save migrated programs back to localStorage if any were migrated
  if (migratedPrograms.some(p => !programs.find(orig => orig.id === p.id))) {
    localStorage.setItem("Exarr", JSON.stringify(migratedPrograms));
  }
  
  return migratedPrograms;
};

// Initial state
const initialState: AppState = {
  chosenExercises: [],
  runningProgram: null,
  savedPrograms: migratePrograms(JSON.parse(localStorage.getItem("Exarr") || "[]")),
  editingProgram: null
};

// Action types
type AppAction =
  | { type: 'START_PROGRAM'; payload: WorkoutProgram }
  | { type: 'SET_CHOSEN_EXERCISES'; payload: Exercise[] }
  | { type: 'SET_RUNNING_PROGRAM'; payload: WorkoutProgram | null }
  | { type: 'ADD_PROGRAM'; payload: WorkoutProgram }
  | { type: 'REMOVE_PROGRAM'; payload: WorkoutProgram }
  | { type: 'EDIT_PROGRAM'; payload: WorkoutProgram }
  | { type: 'UPDATE_PROGRAM'; payload: WorkoutProgram }
  | { type: 'CLEAR_CREATE_STATE' };

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'START_PROGRAM':
      return {
        ...state,
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
      const filteredPrograms = state.savedPrograms.filter(p => p.id !== action.payload.id);
      localStorage.setItem("Exarr", JSON.stringify(filteredPrograms));
      return {
        ...state,
        savedPrograms: filteredPrograms
      };
    case 'EDIT_PROGRAM':
      return {
        ...state,
        editingProgram: action.payload,
        chosenExercises: action.payload.exercises
      };
    case 'UPDATE_PROGRAM':
      const updatedPrograms = state.savedPrograms.map(p => 
        p.id === action.payload.id ? action.payload : p
      );
      localStorage.setItem("Exarr", JSON.stringify(updatedPrograms));
      return {
        ...state,
        savedPrograms: updatedPrograms,
        editingProgram: null,
        chosenExercises: []
      };
    case 'CLEAR_CREATE_STATE':
      return {
        ...state,
        chosenExercises: [],
        editingProgram: null
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
    startProgram: (program: WorkoutProgram) => dispatch({ type: 'START_PROGRAM', payload: program }),
    setChosenExercises: (exercises: Exercise[]) => dispatch({ type: 'SET_CHOSEN_EXERCISES', payload: exercises }),
    setRunningProgram: (program: WorkoutProgram | null) => dispatch({ type: 'SET_RUNNING_PROGRAM', payload: program }),
    addProgram: (program: WorkoutProgram) => dispatch({ type: 'ADD_PROGRAM', payload: program }),
    removeProgram: (program: WorkoutProgram) => dispatch({ type: 'REMOVE_PROGRAM', payload: program }),
    editProgram: (program: WorkoutProgram) => dispatch({ type: 'EDIT_PROGRAM', payload: program }),
    updateProgram: (program: WorkoutProgram) => dispatch({ type: 'UPDATE_PROGRAM', payload: program }),
    clearCreateState: () => dispatch({ type: 'CLEAR_CREATE_STATE' })
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
