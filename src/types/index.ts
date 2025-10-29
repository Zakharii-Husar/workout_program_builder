// Settings types (re-exported from settingsSlice for convenience)
export type { WeightUnit, SettingsState } from '../store/slices/settingsSlice';

// Base types
export interface Exercise {
  id: string;
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
  restBetweenSets: number;
  exerciseIds: string[];
  createdAt?: string; // ISO string
  updatedAt?: string; // ISO string
}

// App state types
export interface AppState {
  runningProgram: WorkoutProgram | null;
  allPrograms: WorkoutProgram[];
  programDraft: WorkoutProgram | null;
}

// Workout state types (re-exported from workoutSlice for convenience)
export type { WorkoutSet, WorkoutSession, WorkoutState } from '../store/slices/workoutSlice';

export interface AppContextType {
  state: AppState;
  actions: AppActions;
}

export interface AppActions {
  // Draft management
  createDraft: () => void;
  loadProgramForEdit: (program: WorkoutProgram) => void;
  updateDraftName: (name: string) => void;
  updateDraftTimer: (timer: number) => void;
  addDraftExercise: (exercise: Exercise) => void;
  removeDraftExercise: (index: number) => void;
  updateDraftExercises: (exercises: Exercise[]) => void;
  clearDraft: () => void;
  
  // Program management
  saveDraft: () => void;
  deleteProgram: (programId: string) => void;
  
  // Workout management
  startProgram: (program: WorkoutProgram) => void;
  stopProgram: () => void;
}

// Timer types
export interface TimerState {
  isRunning: boolean;
  minutes: number;
  seconds: number;
  milliseconds: number;
  isOvertime?: boolean;
}


// Validation types
export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}


// Loading types
export interface LoadingState {
  isLoading: boolean;
  message?: string;
}

// Component prop types
export type IconType = 'arrow' | 'exercise' | 'muscle' | 'add' | 'check' | 'remove' | 'dot' | 'edit' | 'cancel' | 'undo' | 'up' | 'down' | 'none';

export interface ExerciseListAction {
  (element: Exercise, index?: number): void;
}

export interface ExerciseListProps {
  exercises: Exercise[];
  primaryIcon: IconType;
  secondaryIcon: IconType;
  tertiaryIcon?: IconType;
  onPrimaryAction: ExerciseListAction;
  onSecondaryAction: ExerciseListAction;
  onTertiaryAction?: ExerciseListAction;
  style?: React.CSSProperties;
  isVisible?: boolean;
  checkedIndices?: number[]; // External control of which exercises are marked as done
}

// Service types
export interface ProgramValidationResult {
  isValid: boolean;
  errors: string[];
}



// Error types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: string; // ISO string
}

