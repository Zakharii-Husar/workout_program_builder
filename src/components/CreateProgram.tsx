import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useValidation } from '../hooks/useValidation';
import { ProgramService } from '../services/programService';
import { LoadingSpinner } from './LoadingSpinner';
import ExercisesList from './ExercisesList';
import { icons } from '../data/data';
import { 
  CreateProgramContainer, 
  AddExercisesButton, 
  TimerHeader, 
  SetTimer, 
  EditTime, 
  NameContainer, 
  NameOutput, 
  CancelOrSave 
} from './CreateProgram.styled';

const CreateProgram: React.FC = () => {
  const { state, actions } = useApp();
  const { chosenExercises, editingProgram, savedPrograms } = state;
  const { validateProgram, getError, clearErrors, hasErrors } = useValidation();
  const navigate = useNavigate();
  const { programId } = useParams<{ programId: string }>();
  const location = useLocation();
  
  const isEditMode = location.pathname.startsWith('/edit/');
  const currentProgram = isEditMode && programId ? 
    savedPrograms.find(p => p.id === programId) : null;
  
  const [name, setName] = useState('My Workout');
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with editing program data if in edit mode
  useEffect(() => {
    if (isEditMode && currentProgram) {
      setName(currentProgram.name);
      setTimer(currentProgram.timer);
      actions.setChosenExercises(currentProgram.exercises);
    } else if (editingProgram) {
      setName(editingProgram.name);
      setTimer(editingProgram.timer);
    } else {
      // For create mode, only reset if we're starting completely fresh
      // Don't reset if we already have chosen exercises (coming back from exercises page)
      if (chosenExercises.length === 0) {
        setName('My Workout');
        setTimer(0);
      }
    }
  }, [isEditMode, currentProgram, editingProgram, actions, chosenExercises.length]);

  const handleSaveProgram = async () => {
    clearErrors();
    
    const program = ProgramService.createProgram(
      name, 
      timer, 
      chosenExercises, 
      isEditMode ? programId : editingProgram?.id
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
      if (isEditMode || editingProgram) {
        actions.updateProgram(program);
        alert('The program has been updated!');
      } else {
        actions.addProgram(program);
        alert('The program has been saved!');
      }
      // Reset form
      setName('My Workout');
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

  const handleTimerChange = (increment: number) => {
    const newTimer = timer + increment;
    if (newTimer >= 0) {
      setTimer(newTimer);
    }
  };

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds - minutes * 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner message="Saving program..." />
      </div>
    );
  }

  return (
    <div>
      <CreateProgramContainer>
        <div className="chosenExercises">
          <ExercisesList
            arr={chosenExercises}
            action1={() => {}}
            action2={() => {}}
            icon1="exercise"
            icon2="check"
          />
        </div>

        <AddExercisesButton onClick={() => navigate(isEditMode ? `/edit/${programId}/exercises` : '/create/exercises')}>
          {chosenExercises.length > 0 ? 'Edit Exercises' : 'Add Exercises'}
        </AddExercisesButton>

        <TimerHeader>Time between sets</TimerHeader>
        <SetTimer>
          <div>{formatTime(timer)}</div>
          <EditTime>
            <icons.up 
              onClick={() => handleTimerChange(15)}
            />
            <icons.down 
              onClick={() => handleTimerChange(-15)}
            />
          </EditTime>
        </SetTimer>

        <NameContainer>
          <NameOutput>{name}</NameOutput>
          <input
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
            type="text"
            placeholder="Enter program's name"
            value={name}
          />
        </NameContainer>

        <CancelOrSave>
          <icons.remove 
            onClick={handleCancel}
          />
          <icons.check 
            onClick={handleSaveProgram}
          />
        </CancelOrSave>
      </CreateProgramContainer>
    </div>
  );
};

export default CreateProgram;
