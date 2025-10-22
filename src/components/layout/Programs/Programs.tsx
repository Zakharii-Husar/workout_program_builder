import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { deleteProgram, startProgram, loadProgramForEdit, createDraft } from '../../../store/slices/programSlice';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import ProgramList from '../Main/ProgramList';
import { MainContainer, MainHeader, MainTitle, MainSubtitle, EmptyState, EmptyStateTitle, EmptyStateSubtitle, CreateButton } from '../Main/Main.styled';
import { icons } from '../../../data';

const Programs: React.FC = () => {
  const dispatch = useAppDispatch();
  const { allPrograms } = useAppSelector(state => state.programs);
  const navigate = useNavigate();

  const handleRemoveProgram = (program: any) => {
    try {
      dispatch(deleteProgram(program.id));
    } catch (error) {
      console.error('Error removing program:', error);
      alert('Failed to remove program. Please try again.');
    }
  };

  const handleStartProgram = (program: any) => {
    dispatch(startProgram(program));
    navigate(`/start/${program.id}`);
  };

  const handleEditProgram = (program: any) => {
    dispatch(loadProgramForEdit(program));
    navigate(`/edit/${program.id}`);
  };

  if (allPrograms.length === 0) {
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
            dispatch(createDraft());
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
      <ProgramList
        programs={allPrograms}
        onStartProgram={handleStartProgram}
        onRemoveProgram={handleRemoveProgram}
        onEditProgram={handleEditProgram}
      />
      <CreateButton onClick={() => {
        dispatch(createDraft());
        navigate('/create');
      }}>
        <icons.add />
        NEW PROGRAM
      </CreateButton>
    </MainContainer>
  );
};

export default Programs;
