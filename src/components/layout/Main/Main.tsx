import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { deleteProgram, startProgram, loadProgramForEdit, createDraft } from '../../../store/slices/programSlice';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import ProgramList from './ProgramList';
import { MainContainer, MainHeader, MainTitle, MainSubtitle, EmptyState, EmptyStateTitle, EmptyStateSubtitle, CreateButton, MenuButton, MenuContainer } from './Main.styled';
import { icons } from '../../../data';

const Main: React.FC = () => {
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

  return (
    <MainContainer>
      <MainHeader>
        <MainTitle>Workout Builder</MainTitle>
        <MainSubtitle>Build, track, and achieve your fitness goals</MainSubtitle>
      </MainHeader>
      
      <MenuContainer>
        <MenuButton onClick={() => navigate('/programs')}>
          <icons.edit />
          Programs
        </MenuButton>
        <MenuButton onClick={() => navigate('/workouts')}>
          <icons.check />
          Workouts History
        </MenuButton>
      </MenuContainer>
    </MainContainer>
  );
};

export default Main;
