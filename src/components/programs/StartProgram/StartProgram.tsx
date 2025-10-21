import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import Timer from '../../common/Timer';
import ExercisesList from '../../exercises/ExercisesList';
import { StartProgramContainer, ExitButton } from './StartProgram.styled';
import { icons } from '../../../data';

const StartProgram: React.FC = () => {
  const { state, actions } = useApp();
  const { runningProgram, savedPrograms } = state;
  const navigate = useNavigate();
  const { programId } = useParams<{ programId: string }>();
  
  // Find the program by ID from URL params
  const currentProgram = programId ? savedPrograms.find(p => p.id === programId) : runningProgram;
  
  // If program not found, redirect to main page
  useEffect(() => {
    if (programId && !currentProgram) {
      navigate('/');
    }
  }, [programId, currentProgram, navigate]);

  if (!currentProgram) {
    return (
      <div>
        <LoadingSpinner message="Loading program..." />
      </div>
    );
  }

  const exercises = currentProgram.exercises || [];

  return (
    <StartProgramContainer>
      <Timer time={currentProgram.timer} />
      
      <ExercisesList
        exercises={exercises}
        primaryIcon="exercise"
        secondaryIcon="dot"
        onPrimaryAction={() => {}}
        onSecondaryAction={() => {}}
      />

      <ExitButton onClick={() => navigate('/')}>
        <icons.cancel />
        Exit Workout
      </ExitButton>
    </StartProgramContainer>
  );
};

export default StartProgram;
