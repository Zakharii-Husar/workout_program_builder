import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { weightConversionService } from '../../../services/weightConversionService';
import { WorkoutSession, WorkoutSet } from '../../../store/slices/workoutSlice';
import { MainContainer, MainHeader, MainTitle, MainSubtitle, EmptyState, EmptyStateTitle, EmptyStateSubtitle } from '../../layout/Main/Main.styled';
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
  const weightUnit = useAppSelector(state => state.settings.weightUnit);

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDuration = (milliseconds: number): string => {
    if (!Number.isFinite(milliseconds) || milliseconds <= 0) return '—';
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const formatDateWithWeekday = (dateStr: string): string => {
    const date = new Date(dateStr);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = weekdays[date.getDay()];
    const datePart = date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    return `${datePart} · ${day}`;
  };

  const formatSetDetails = (exercise: WorkoutSet): string => {
    if (!exercise.completed) return 'Not completed';
    
    const details = [] as string[];
    if (exercise.reps) details.push(`${exercise.reps} reps`);
    if (typeof exercise.weightGrams !== 'undefined') {
      const displayVal = weightConversionService.gramsToDisplay(exercise.weightGrams, weightUnit);
      const formatted = Number.isFinite(displayVal) ? parseFloat(displayVal.toFixed(1)).toString() : '';
      details.push(`@ ${formatted}${weightUnit}`);
    }
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
                  {formatDateWithWeekday(workout.startTime)}
                </MetaItem>
                <MetaItem>
                  Duration: {workout.endTime ? formatDuration(new Date(workout.endTime).getTime() - new Date(workout.startTime).getTime()) : '—'}
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


