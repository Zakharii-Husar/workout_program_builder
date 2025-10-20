import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { LoadingSpinner } from './LoadingSpinner';
import ExercisesList from './ExercisesList';
import { MainContainer, MainHeader, MainTitle, MainSubtitle, EmptyState, EmptyStateTitle, EmptyStateSubtitle, CreateButton } from './Main.styled';
import { icons } from '../data';

const Main: React.FC = () => {
  const { state, actions } = useApp();
  const { savedPrograms } = state;
  const navigate = useNavigate();

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
    navigate(`/start/${program.id}`);
  };

  const handleEditProgram = (program: any) => {
    actions.editProgram(program);
    navigate(`/edit/${program.id}`);
  };

  if (savedPrograms.length === 0) {
    return (
      <MainContainer>
        <MainHeader>
          <MainTitle>Workout Programs</MainTitle>
          <MainSubtitle>Build, track, and achieve your fitness goals</MainSubtitle>
        </MainHeader>
        <EmptyState>
          <EmptyStateTitle>Ready to Build?</EmptyStateTitle>
          <EmptyStateSubtitle>
            Create your first workout program and start your fitness journey. 
            Choose exercises, set timers, and track your progress.
          </EmptyStateSubtitle>
          <CreateButton onClick={() => {
            actions.clearCreateState();
            navigate('/create');
          }}>
            <icons.add />
            CREATE FIRST PROGRAM
          </CreateButton>
        </EmptyState>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <MainHeader>
        <MainTitle>Workout Programs</MainTitle>
        <MainSubtitle>Build, track, and achieve your fitness goals</MainSubtitle>
      </MainHeader>
      <ExercisesList
        icon1="none"
        icon2="remove"
        icon3="edit"
        arr={savedPrograms}
        action1={handleStartProgram}
        action2={handleRemoveProgram}
        action3={handleEditProgram}
      />
      <CreateButton onClick={() => {
        actions.clearCreateState();
        navigate('/create');
      }}>
        <icons.add />
        NEW PROGRAM
      </CreateButton>
    </MainContainer>
  );
};

export default Main;
