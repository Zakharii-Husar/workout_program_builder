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
  name: string;
  timer: number;
  exercises: Exercise[];
}

export interface AppState {
  currentDisplay: {
    main: string;
    createProgram: string;
    exercises: string;
    startProgram: string;
  };
  chosenExercises: Exercise[];
  runningProgram: WorkoutProgram | null;
  savedPrograms: WorkoutProgram[];
}

export interface AppContextType {
  state: AppState;
  actions: {
    showCreateProgram: () => void;
    showChooseExercises: () => void;
    showMain: () => void;
    startProgram: (program: WorkoutProgram) => void;
    setChosenExercises: (exercises: Exercise[]) => void;
    setRunningProgram: (program: WorkoutProgram | null) => void;
    addProgram: (program: WorkoutProgram) => void;
    removeProgram: (program: WorkoutProgram) => void;
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
