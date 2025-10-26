import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks';
import { createDraft } from '../../../store/slices/programSlice';
import { MainContainer, MainHeader, MainTitle, MainSubtitle, MenuButton, MenuContainer } from './Main.styled';
import { icons } from '../../../data';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <MainContainer>
      <MainHeader>
        <MainTitle>Workout Builder</MainTitle>
        <MainSubtitle>Build, track, and achieve your fitness goals</MainSubtitle>
      </MainHeader>
      
      <MenuContainer>
        <MenuButton onClick={() => {
          dispatch(createDraft());
          navigate('/create');
        }}>
          <icons.add />
          Create Program
        </MenuButton>
        <MenuButton onClick={() => navigate('/programs')}>
          <icons.edit />
          MyPrograms
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
