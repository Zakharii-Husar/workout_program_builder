import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { 
  updateDraftName, 
  updateDraftTimer, 
  updateDraftExercises, 
  saveDraft, 
  clearDraft,
  createDraft
} from '../../../../store/slices/programSlice';
import { ProgramService } from '../../../../services/programService';
import { ExerciseResolver } from '../../../../services/exerciseResolver';
import { PROGRAM } from '../../../../utils/constants';
import { WorkoutProgram, Exercise } from '../../../../types';

export const useProgramEditor = () => {
  const dispatch = useAppDispatch();
  const { programDraft } = useAppSelector(state => state.programs);
  const navigate = useNavigate();
  const { programId } = useParams<{ programId: string }>();
  const location = useLocation();

  // Navigation state
  const navigationState = {
    isEditMode: location.pathname.startsWith('/edit/'),
    programId: programId || null,
    currentPath: location.pathname
  };

  // Form state - use programDraft directly for persistence
  const [isLoading, setIsLoading] = useState(false);

  // Initialize draft for new programs if not already created
  useEffect(() => {
    if (!navigationState.isEditMode && !programDraft) {
      dispatch(createDraft());
    }
  }, [navigationState.isEditMode, programDraft, dispatch]);
  
  // Get form values from programDraft
  const name = programDraft?.name ?? PROGRAM.DEFAULT_NAME;
  const timer = programDraft?.restBetweenSets || 60;

  // Timer controls
  const handleTimerChange = (increment: number) => {
    const newTimer = timer + increment;
    if (newTimer >= 0) {
      dispatch(updateDraftTimer(newTimer));
    }
  };

  // Update draft name when form changes
  const handleNameChange = (newName: string) => {
    dispatch(updateDraftName(newName));
  };

  // Program actions
  const handleSaveProgram = async () => {
    if (!programDraft) return;
    
    // If name is empty or only whitespace, set it to default name before saving
    const programToValidate = {
      ...programDraft,
      name: (!programDraft.name || programDraft.name.trim() === '') 
        ? PROGRAM.DEFAULT_NAME 
        : programDraft.name
    };
    
    // Update the draft with the default name if it was empty
    if (programToValidate.name !== programDraft.name) {
      dispatch(updateDraftName(programToValidate.name));
    }
    
    const validation = ProgramService.validateProgram(programToValidate);
    
    if (!validation.isValid) {
      validation.errors.forEach(error => {
        console.error('Validation error:', error);
      });
      alert(validation.errors.join('\n'));
      return;
    }

    setIsLoading(true);
    
    try {
      dispatch(saveDraft());
      alert(navigationState.isEditMode ? 'The program has been updated!' : 'The program has been saved!');
      navigate('/');
    } catch (error) {
      console.error('Error saving program:', error);
      alert('Failed to save program. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleNavigateToExercises = () => {
    const exercisesPath = navigationState.isEditMode 
      ? `/edit/${programId}/exercises` 
      : '/create/exercises';
    navigate(exercisesPath);
  };

  return {
    // State
    name,
    timer,
    isLoading,
    chosenExercises: ExerciseResolver.getExercisesByIds(programDraft?.exerciseIds || []),
    navigationState,
    
    // Actions
    setName: handleNameChange,
    handleTimerChange,
    handleSaveProgram,
    handleCancel,
    handleNavigateToExercises,
    
    // Computed values
    hasExercises: (programDraft?.exerciseIds?.length || 0) > 0,
    isEditMode: navigationState.isEditMode,
    isUpdating: navigationState.isEditMode
  };
};
