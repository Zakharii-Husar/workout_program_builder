import React from 'react';
import { getAllMuscleGroups } from '../../../../services/exerciseService';
import { icons } from '../../../../data';
import ExercisesList from '../../ExercisesList';
import { 
  MuscleGroupContainer,
  MuscleIcon,
  ArrowIcon,
  MuscleNameText,
  ContentWrapper
} from '../index.styled';

interface MuscleGroupsListProps {
  visibleExercises: number[];
  onToggleVisibility: (muscleIndex: number) => void;
  onAddExercise: (exercise: any) => void;
}

const MuscleGroupsList: React.FC<MuscleGroupsListProps> = ({
  visibleExercises,
  onToggleVisibility,
  onAddExercise
}) => {
  const muscleGroups = getAllMuscleGroups();

  return (
    <ContentWrapper>
      {muscleGroups.map((muscle, muscleIndex) => (
        <div key={muscle.name}>
          <MuscleGroupContainer>
            <MuscleIcon src={muscle.img} alt={muscle.name} />
            <MuscleNameText>{muscle.name}</MuscleNameText>
            <ArrowIcon 
              src={icons.arrow} 
              onClick={() => onToggleVisibility(muscleIndex)}
              alt="Toggle exercises"
            />
          </MuscleGroupContainer>
          
          <ExercisesList
            exercises={muscle.exercises}
            primaryIcon="exercise"
            secondaryIcon="add"
            onPrimaryAction={() => {}}
            onSecondaryAction={onAddExercise}
            isVisible={visibleExercises.includes(muscleIndex)}
          />
        </div>
      ))}
    </ContentWrapper>
  );
};

export default MuscleGroupsList;
