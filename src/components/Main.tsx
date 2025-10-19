import React from 'react';
import { useApp } from '../context/AppContext';
import { LoadingSpinner } from './LoadingSpinner';
import ExercisesList from './ExercisesList';
import { MainContainer, EmptyState, CreateButton } from './Main.styled';

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
      <MainContainer style={{ display: state.currentDisplay.main }}>
        <EmptyState>You don't have programs yet.</EmptyState>
        <CreateButton onClick={actions.showCreateProgram}>
          NEW PROGRAM
        </CreateButton>
      </MainContainer>
    );
  }

  return (
    <MainContainer style={{ display: state.currentDisplay.main }}>
      <ExercisesList
        icon1="none"
        icon2="remove"
        arr={savedPrograms}
        action1={handleStartProgram}
        action2={handleRemoveProgram}
      />
      <CreateButton onClick={actions.showCreateProgram}>
        NEW PROGRAM
      </CreateButton>
    </MainContainer>
  );
};

export default Main;
