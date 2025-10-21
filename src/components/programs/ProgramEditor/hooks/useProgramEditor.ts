import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useApp } from '../../../../context/AppContext';
import { ProgramService } from '../../../../services/programService';
import { PROGRAM } from '../../../../utils/constants';
import { WorkoutProgram, Exercise, NavigationState } from '../../../../types';

export const useProgramEditor = () => {
  const { state, actions } = useApp();
  const { chosenExercises, editingProgram, savedPrograms } = state;
  const navigate = useNavigate();
  const { programId } = useParams<{ programId: string }>();
  const location = useLocation();

  // Navigation state
  const navigationState: NavigationState = {
    isEditMode: location.pathname.startsWith('/edit/'),
    programId: programId || null,
    currentPath: location.pathname
  };

  // Form state
  const [name, setName] = useState<string>(PROGRAM.DEFAULT_NAME);
  const [timer, setTimer] = useState(PROGRAM.DEFAULT_NAME === 'My Workout' ? 0 : 60);
  const [isLoading, setIsLoading] = useState(false);

  // Get current program for edit mode
  const currentProgram = navigationState.isEditMode && programId ? 
    savedPrograms.find(p => p.id === programId) : null;

  // Initialize form with program data
  useEffect(() => {
    if (navigationState.isEditMode && currentProgram) {
      setName(currentProgram.name);
      setTimer(currentProgram.timer);
      actions.setChosenExercises(currentProgram.exercises);
    } else if (editingProgram) {
      setName(editingProgram.name);
      setTimer(editingProgram.timer);
    } else {
      // For create mode, only reset if we're starting completely fresh
      if (chosenExercises.length === 0) {
        setName(PROGRAM.DEFAULT_NAME);
        setTimer(0);
      }
    }
  }, [navigationState.isEditMode, currentProgram, editingProgram, actions, chosenExercises.length]);

  // Timer controls
  const handleTimerChange = (increment: number) => {
    const newTimer = timer + increment;
    if (newTimer >= 0) {
      setTimer(newTimer);
    }
  };

  // Program actions
  const handleSaveProgram = async () => {
    const program = ProgramService.createProgram(
      name, 
      timer, 
      chosenExercises, 
      navigationState.isEditMode ? programId : editingProgram?.id
    );
    
    const validation = ProgramService.validateProgram(program);
    
    if (!validation.isValid) {
      validation.errors.forEach(error => {
        console.error('Validation error:', error);
      });
      alert(validation.errors.join('\n'));
      return;
    }

    setIsLoading(true);
    
    try {
      if (navigationState.isEditMode || editingProgram) {
        actions.updateProgram(program);
        alert('The program has been updated!');
      } else {
        actions.addProgram(program);
        alert('The program has been saved!');
      }
      
      // Reset form and navigate
      setName(PROGRAM.DEFAULT_NAME);
      setTimer(0);
      actions.clearCreateState();
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
    chosenExercises,
    navigationState,
    
    // Actions
    setName,
    handleTimerChange,
    handleSaveProgram,
    handleCancel,
    handleNavigateToExercises,
    
    // Computed values
    hasExercises: chosenExercises.length > 0,
    isEditMode: navigationState.isEditMode,
    isUpdating: navigationState.isEditMode || !!editingProgram
  };
};
