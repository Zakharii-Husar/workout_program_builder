import React from 'react';
import { WorkoutProgram } from '../../../types';
import { 
  ExercisesListContainer, 
  ExerciseName, 
  ExerciseIcon, 
  ActionIcon, 
  IconContainer 
} from '../../exercises/ExercisesList/index.styled';
import { icons } from '../../../data';

interface ProgramListProps {
  programs: WorkoutProgram[];
  onStartProgram: (program: WorkoutProgram) => void;
  onRemoveProgram: (program: WorkoutProgram) => void;
  onEditProgram: (program: WorkoutProgram) => void;
}

const ProgramList: React.FC<ProgramListProps> = ({
  programs,
  onStartProgram,
  onRemoveProgram,
  onEditProgram
}) => {
  return (
    <>
      {programs.map((program, index) => (
        <ExercisesListContainer key={program.id}>
          <ExerciseIcon $hidden={true}></ExerciseIcon>
          <ExerciseName 
            $isCentered={true}
            onClick={() => onStartProgram(program)} 
          >
            {index + 1}. {program.name}
          </ExerciseName>
          <IconContainer>
            <ActionIcon>
              <icons.edit onClick={() => onEditProgram(program)} />
            </ActionIcon>
            <ActionIcon>
              <icons.remove onClick={() => onRemoveProgram(program)} />
            </ActionIcon>
          </IconContainer>
        </ExercisesListContainer>
      ))}
    </>
  );
};

export default ProgramList;
