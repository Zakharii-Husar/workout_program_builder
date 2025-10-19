import React from 'react';
import { useApp } from '../context/AppContext';
import { LoadingSpinner } from './LoadingSpinner';
import ExercisesList from './ExercisesList';
import { MainContainer, EmptyState, EmptyStateTitle, EmptyStateSubtitle, CreateButton } from './Main.styled';
import { icons } from '../data/data';

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
        <EmptyState>
          <EmptyStateTitle>Ready to Build?</EmptyStateTitle>
          <EmptyStateSubtitle>
            Create your first workout program and start your fitness journey. 
            Choose exercises, set timers, and track your progress.
          </EmptyStateSubtitle>
          <CreateButton onClick={actions.showCreateProgram}>
            <icons.add />
            CREATE FIRST PROGRAM
          </CreateButton>
        </EmptyState>
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
        <icons.add />
        NEW PROGRAM
      </CreateButton>
    </MainContainer>
  );
};

export default Main;
