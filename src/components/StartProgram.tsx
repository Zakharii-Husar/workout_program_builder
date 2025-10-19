import React from 'react';
import { useApp } from '../context/AppContext';
import { LoadingSpinner } from './LoadingSpinner';
import Timer from './Timer';
import ExercisesList from './ExercisesList';
import './StartProgram.css';

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
    <div style={{ display: state.currentDisplay.startProgram }} className="StartProgram">
      <Timer time={runningProgram.timer} />
      
      <ExercisesList
        arr={exercises}
        icon1="exercise"
        icon2="dot"
        action1={() => {}}
        action2={() => {}}
      />

      <button 
        className="exitBtn"
        onClick={actions.showMain}
      >
        Exit
      </button>
    </div>
  );
};

export default StartProgram;
