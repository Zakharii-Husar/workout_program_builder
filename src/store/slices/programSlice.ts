import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, WorkoutProgram, Exercise } from '../../types';
import { ProgramService } from '../../services/programService';
import { ExerciseService } from '../../services/exerciseService';
import { generateId } from '../../utils/formatters';

// Initial state
const initialState: AppState = {
  runningProgram: null,
  allPrograms: ProgramService.getSavedPrograms(),
  programDraft: null
};

const programSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {
    // Draft management
    createDraft: (state) => {
      state.programDraft = {
        id: generateId(),
        name: '',
        restBetweenSets: 60,
        exerciseIds: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    },

    loadProgramForEdit: (state, action: PayloadAction<WorkoutProgram>) => {
      state.programDraft = {
        ...action.payload,
        updatedAt: new Date().toISOString()
      };
    },

    updateDraftName: (state, action: PayloadAction<string>) => {
      if (state.programDraft) {
        state.programDraft.name = action.payload;
        state.programDraft.updatedAt = new Date().toISOString();
      }
    },

    updateDraftTimer: (state, action: PayloadAction<number>) => {
      if (state.programDraft) {
        state.programDraft.restBetweenSets = action.payload;
        state.programDraft.updatedAt = new Date().toISOString();
      }
    },

    addDraftExercise: (state, action: PayloadAction<Exercise>) => {
      if (state.programDraft) {
        state.programDraft.exerciseIds.push(action.payload.id);
        state.programDraft.updatedAt = new Date().toISOString();
      }
    },

    removeDraftExercise: (state, action: PayloadAction<number>) => {
      if (state.programDraft) {
        state.programDraft.exerciseIds.splice(action.payload, 1);
        state.programDraft.updatedAt = new Date().toISOString();
      }
    },

    updateDraftExercises: (state, action: PayloadAction<string[]>) => {
      if (state.programDraft) {
        state.programDraft.exerciseIds = action.payload;
        state.programDraft.updatedAt = new Date().toISOString();
      }
    },

    clearDraft: (state) => {
      state.programDraft = null;
    },

    // Program management
    saveDraft: (state) => {
      if (state.programDraft) {
        const result = ProgramService.saveProgram(state.programDraft);
        if (result.success) {
          // If editing existing program, update it in allPrograms
          const existingIndex = state.allPrograms.findIndex(
            p => p.id === state.programDraft!.id
          );
          
          if (existingIndex !== -1) {
            // Update existing program
            state.allPrograms[existingIndex] = state.programDraft;
          } else {
            // Add new program
            state.allPrograms.push(state.programDraft);
          }
          
          state.programDraft = null;
        }
      }
    },

    deleteProgram: (state, action: PayloadAction<string>) => {
      const programToDelete = state.allPrograms.find(p => p.id === action.payload);
      if (programToDelete) {
        const result = ProgramService.removeProgram(programToDelete);
        if (result.success) {
          state.allPrograms = state.allPrograms.filter(p => p.id !== action.payload);
        }
      }
    },

    // Workout management
    startProgram: (state, action: PayloadAction<WorkoutProgram>) => {
      state.runningProgram = action.payload;
    },

    stopProgram: (state) => {
      state.runningProgram = null;
    }
  },
});

export const {
  createDraft,
  loadProgramForEdit,
  updateDraftName,
  updateDraftTimer,
  addDraftExercise,
  removeDraftExercise,
  updateDraftExercises,
  clearDraft,
  saveDraft,
  deleteProgram,
  startProgram,
  stopProgram
} = programSlice.actions;

export default programSlice.reducer;
