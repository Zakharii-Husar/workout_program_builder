import React from 'react';
import { useNavigate } from 'react-router-dom';
import ExercisesList from '../../../exercises/ExercisesList';
import { Exercise } from '../../../../types';
import { 
  StepContainer,
  StepHeader,
  StepNumber,
  StepTitle,
  StepContent,
  AddExercisesButton
} from '../index.styled';

interface ExerciseStepProps {
  chosenExercises: Exercise[];
  hasExercises: boolean;
  isEditMode: boolean;
  programId: string | null;
  onNavigateToExercises: () => void;
}

const ExerciseStep: React.FC<ExerciseStepProps> = ({
  chosenExercises,
  hasExercises,
  isEditMode,
  programId,
  onNavigateToExercises
}) => {
  const navigate = useNavigate();

  return (
    <StepContainer>
      <StepHeader>
        <StepNumber>1</StepNumber>
        <StepTitle>Add/Edit Exercises</StepTitle>
      </StepHeader>
      <StepContent>
        <div className="chosenExercises">
          <ExercisesList
            exercises={chosenExercises}
            primaryIcon="exercise"
            secondaryIcon="check"
            onPrimaryAction={() => {}}
            onSecondaryAction={() => {}}
          />
        </div>
        <AddExercisesButton onClick={onNavigateToExercises}>
          {hasExercises ? 'Edit Exercises' : 'Add Exercises'}
        </AddExercisesButton>
      </StepContent>
    </StepContainer>
  );
};

export default ExerciseStep;
