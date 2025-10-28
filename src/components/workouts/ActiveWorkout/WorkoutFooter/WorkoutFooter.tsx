import React from 'react';
import { WorkoutFooterContainer, WorkoutButton } from './WorkoutFooter.styled';
import { icons } from '../../../../data';

interface WorkoutFooterProps {
  isWorkoutActive: boolean;
  onStartWorkout: () => void;
  onEndWorkout: () => void;
  onCancelWorkout: () => void;
  onExit: () => void;
}

const WorkoutFooter: React.FC<WorkoutFooterProps> = ({
  isWorkoutActive,
  onStartWorkout,
  onEndWorkout,
  onCancelWorkout,
  onExit
}) => {
  return (
    <WorkoutFooterContainer>
      {!isWorkoutActive ? (
        <>
          <WorkoutButton onClick={onStartWorkout}>
            <icons.check />
            Start Workout
          </WorkoutButton>
          <WorkoutButton onClick={onExit}>
            <icons.cancel />
            Exit Program
          </WorkoutButton>
        </>
      ) : (
        <>
          <WorkoutButton onClick={onEndWorkout}>
            <icons.check />
            End Workout
          </WorkoutButton>
          <WorkoutButton onClick={onCancelWorkout}>
            <icons.cancel />
            Cancel Workout
          </WorkoutButton>
          <WorkoutButton onClick={onExit}>
            <icons.cancel />
            Exit Program
          </WorkoutButton>
        </>
      )}
    </WorkoutFooterContainer>
  );
};

export default WorkoutFooter;

