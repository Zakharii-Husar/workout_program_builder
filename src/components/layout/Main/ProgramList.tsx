import React from 'react';
import { WorkoutProgram } from '../../../types';
import { 
  ExercisesListContainer, 
  ExerciseName, 
  Icon1, 
  Icon2, 
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
        <ExercisesListContainer key={`${program.name}-${index}`}>
          <Icon1 $hidden={true}></Icon1>
          <ExerciseName 
            $isCentered={true}
            onClick={() => onStartProgram(program)} 
          >
            {index + 1}. {program.name}
          </ExerciseName>
          <IconContainer>
            <Icon2>
              <icons.edit onClick={() => onEditProgram(program)} />
            </Icon2>
            <Icon2>
              <icons.remove onClick={() => onRemoveProgram(program)} />
            </Icon2>
          </IconContainer>
        </ExercisesListContainer>
      ))}
    </>
  );
};

export default ProgramList;
