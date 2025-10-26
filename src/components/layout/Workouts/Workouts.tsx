import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { MainContainer, MainHeader, MainTitle, MainSubtitle, EmptyState, EmptyStateTitle, EmptyStateSubtitle } from '../Main/Main.styled';

const Workouts: React.FC = () => {
  const { workoutHistory } = useAppSelector(state => state.workouts);

  if (workoutHistory.length === 0) {
    return (
      <MainContainer>
        <MainHeader>
          <MainTitle>Workouts History</MainTitle>
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
        <MainTitle>Workouts History</MainTitle>
        <MainSubtitle>Track your progress and see your achievements</MainSubtitle>
      </MainHeader>
      
      <div>
        {workoutHistory.map((workout) => (
          <div key={workout.id} style={{ 
            background: '#f5f5f5', 
            padding: '16px', 
            margin: '8px 0', 
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}>
            <h3>{workout.name}</h3>
            <p>Started: {new Date(workout.startTime).toLocaleString()}</p>
            <p>Ended: {workout.endTime ? new Date(workout.endTime).toLocaleString() : 'N/A'}</p>
            <p>Sets completed: {workout.exercises.filter(ex => ex.completed).length} / {workout.exercises.length}</p>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default Workouts;
