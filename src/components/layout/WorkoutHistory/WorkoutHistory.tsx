import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { WorkoutSession, WorkoutSet } from '../../../store/slices/workoutSlice';
import { MainContainer, MainHeader, MainTitle, MainSubtitle, EmptyState, EmptyStateTitle, EmptyStateSubtitle } from '../Main/Main.styled';
import {
  WorkoutHistoryContainer,
  WorkoutCard,
  WorkoutHeader as CardHeader,
  WorkoutTitle,
  WorkoutMeta,
  MetaItem,
  CompletionStats,
  SetDetailsSection,
  SetDetailsTitle,
  SetDetailsList,
  SetItem,
  SetItemName,
  SetItemDetails
} from './WorkoutHistory.styled';

const WorkoutHistory: React.FC = () => {
  const { workoutHistory } = useAppSelector(state => state.workouts);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatSetDetails = (exercise: WorkoutSet): string => {
    if (!exercise.completed) return 'Not completed';
    
    const details = [];
    if (exercise.reps) details.push(`${exercise.reps} reps`);
    if (exercise.weight) details.push(`@ ${exercise.weight}kg`);
    if (exercise.actualRestTime) details.push(`Rest: ${formatTime(exercise.actualRestTime)}`);
    
    return details.join(' • ');
  };

  if (workoutHistory.length === 0) {
    return (
      <MainContainer>
        <MainHeader>
          <MainTitle>Workout History</MainTitle>
          <MainSubtitle>Track your progress and see your achievements</MainSubtitle>
        </MainHeader>
        
        <EmptyState>
          <EmptyStateTitle>No Workouts Yet</EmptyStateTitle>
          <EmptyStateSubtitle>
            Start a workout to begin tracking your progress. 
            Your completed workouts will appear here.
          </EmptyStateSubtitle>
        </EmptyState>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <MainHeader>
        <MainTitle>Workout History</MainTitle>
        <MainSubtitle>Track your progress and see your achievements</MainSubtitle>
      </MainHeader>
      
      <WorkoutHistoryContainer>
        {workoutHistory.map((workout: WorkoutSession) => (
          <WorkoutCard key={workout.workoutSessionId}>
            <CardHeader>
              <WorkoutTitle>{workout.name}</WorkoutTitle>
              <WorkoutMeta>
                <MetaItem>
                  Started: {new Date(workout.startTime).toLocaleString()}
                </MetaItem>
                <MetaItem>
                  Ended: {workout.endTime ? new Date(workout.endTime).toLocaleString() : 'N/A'}
                </MetaItem>
                <CompletionStats>
                  Sets completed: {workout.exercises.filter(ex => ex.completed).length} / {workout.exercises.length}
                </CompletionStats>
              </WorkoutMeta>
            </CardHeader>

            <SetDetailsSection>
              <SetDetailsTitle>Set Details</SetDetailsTitle>
              <SetDetailsList>
                {workout.exercises.map((exercise, index) => (
                  <SetItem key={`${workout.workoutSessionId}-${exercise.id}-${index}`} $completed={exercise.completed}>
                    <SetItemName>{exercise.exerciseName}:</SetItemName>
                    <SetItemDetails>{formatSetDetails(exercise)}</SetItemDetails>
                  </SetItem>
                ))}
              </SetDetailsList>
            </SetDetailsSection>
          </WorkoutCard>
        ))}
      </WorkoutHistoryContainer>
    </MainContainer>
  );
};

export default WorkoutHistory;
