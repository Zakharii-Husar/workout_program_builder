import React from 'react';
import { useApp } from '../context/AppContext';
import { LoadingSpinner } from './LoadingSpinner';
import Timer from './Timer';
import ExercisesList from './ExercisesList';
import { StartProgramContainer, ExitButton } from './StartProgram.styled';

const StartProgram: React.FC = () => {
  const { state, actions } = useApp();
  const { runningProgram } = state;

  if (!runningProgram) {
    return (
      <div style={{ display: state.currentDisplay.startProgram }}>
        <LoadingSpinner message="Loading program..." />
      </div>
    );
  }

  const exercises = runningProgram.exercises || [];

  return (
    <StartProgramContainer style={{ display: state.currentDisplay.startProgram }}>
      <Timer time={runningProgram.timer} />
      
      <ExercisesList
        arr={exercises}
        icon1="exercise"
        icon2="dot"
        action1={() => {}}
        action2={() => {}}
      />

      <ExitButton onClick={actions.showMain}>
        Exit
      </ExitButton>
    </StartProgramContainer>
  );
};

export default StartProgram;
