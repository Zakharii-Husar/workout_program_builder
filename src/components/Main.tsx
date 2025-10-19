import React from 'react';
import { useApp } from '../context/AppContext';
import { LoadingSpinner } from './LoadingSpinner';
import ExercisesList from './ExercisesList';
import './Main.css';

const Main: React.FC = () => {
  const { state, actions } = useApp();
  const { savedPrograms } = state;

  const handleRemoveProgram = (program: any) => {
    try {
      actions.removeProgram(program);
    } catch (error) {
      console.error('Error removing program:', error);
      alert('Failed to remove program. Please try again.');
    }
  };

  const handleStartProgram = (program: any) => {
    actions.startProgram(program);
  };

  if (savedPrograms.length === 0) {
    return (
      <div style={{ display: state.currentDisplay.main }} className="Main">
        <div className="empty">You don't have programs yet.</div>
        <div onClick={actions.showCreateProgram} className="createBtn">
          NEW PROGRAM
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: state.currentDisplay.main }} className="Main">
      <ExercisesList
        icon1="none"
        icon2="remove"
        arr={savedPrograms}
        action1={handleStartProgram}
        action2={handleRemoveProgram}
      />
      <div onClick={actions.showCreateProgram} className="createBtn">
        NEW PROGRAM
      </div>
    </div>
  );
};

export default Main;
