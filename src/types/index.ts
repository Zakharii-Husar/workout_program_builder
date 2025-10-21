// Base types
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
  createdAt?: Date;
  updatedAt?: Date;
}

// App state types
export interface AppState {
  chosenExercises: Exercise[];
  runningProgram: WorkoutProgram | null;
  savedPrograms: WorkoutProgram[];
  editingProgram: WorkoutProgram | null;
}

export interface AppContextType {
  state: AppState;
  actions: AppActions;
}

export interface AppActions {
  startProgram: (program: WorkoutProgram) => void;
  setChosenExercises: (exercises: Exercise[]) => void;
  setRunningProgram: (program: WorkoutProgram | null) => void;
  addProgram: (program: WorkoutProgram) => void;
  removeProgram: (program: WorkoutProgram) => void;
  editProgram: (program: WorkoutProgram) => void;
  updateProgram: (program: WorkoutProgram) => void;
  clearCreateState: () => void;
}

// Timer types
export interface TimerState {
  isRunning: boolean;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export interface TimerControls {
  start: () => void;
  pause: () => void;
  reset: () => void;
  toggle: () => void;
}

export interface TimerHook extends TimerState, TimerControls {
  isFinished: boolean;
  displayTime: string;
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

export interface ValidationHook {
  errors: ValidationError[];
  validateProgram: (program: Partial<WorkoutProgram>) => boolean;
  clearErrors: () => void;
  getError: (field: string) => string | undefined;
  hasErrors: boolean;
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
}

// Service types
export interface ProgramValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ExerciseServiceMethods {
  getAllMuscleGroups: () => MuscleGroup[];
  getExercisesByMuscleGroup: (muscleGroupName: string) => Exercise[];
  searchExercises: (query: string) => Exercise[];
  addExerciseToProgram: (exercises: Exercise[], newExercise: Exercise) => Exercise[];
  removeExerciseFromProgram: (exercises: Exercise[], exerciseToRemove: Exercise, index?: number) => Exercise[];
  reorderExercises: (exercises: Exercise[], fromIndex: number, toIndex: number) => Exercise[];
}

// Navigation types
export interface NavigationState {
  isEditMode: boolean;
  programId: string | null;
  currentPath: string;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

export interface ErrorState {
  errors: AppError[];
  hasErrors: boolean;
  addError: (error: Omit<AppError, 'timestamp'>) => void;
  removeError: (code: string) => void;
  clearErrors: () => void;
}
