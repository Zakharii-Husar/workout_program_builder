import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { LoadingSpinner } from './LoadingSpinner';
import Timer from './Timer';
import ExercisesList from './ExercisesList';
import { StartProgramContainer, ExitButton } from './StartProgram.styled';
import { icons } from '../data/data';

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
        arr={exercises}
        icon1="exercise"
        icon2="dot"
        action1={() => {}}
        action2={() => {}}
      />

      <ExitButton onClick={() => navigate('/')}>
        <icons.cancel />
        Exit Workout
      </ExitButton>
    </StartProgramContainer>
  );
};

export default StartProgram;
