export interface Exercise {
  img: string;
  name: string;
}

export interface MuscleGroup {
  img: string;
  name: string;
  exercises: Exercise[];
}

export interface WorkoutProgram {
  id: string;
  name: string;
  timer: number;
  exercises: Exercise[];
}

export interface AppState {
  chosenExercises: Exercise[];
  runningProgram: WorkoutProgram | null;
  savedPrograms: WorkoutProgram[];
  editingProgram: WorkoutProgram | null;
}

export interface AppContextType {
  state: AppState;
  actions: {
    startProgram: (program: WorkoutProgram) => void;
    setChosenExercises: (exercises: Exercise[]) => void;
    setRunningProgram: (program: WorkoutProgram | null) => void;
    addProgram: (program: WorkoutProgram) => void;
    removeProgram: (program: WorkoutProgram) => void;
    editProgram: (program: WorkoutProgram) => void;
    updateProgram: (program: WorkoutProgram) => void;
    clearCreateState: () => void;
  };
}

export interface TimerState {
  isRunning: boolean;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface LoadingState {
  isLoading: boolean;
  message?: string;
}
