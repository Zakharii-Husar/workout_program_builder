import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { timerService, TimerService } from '../../../../services/timerService';
import { icons } from '../../../../data';
import { 
  TimerContainer, 
  TimerDisplay, 
  TimerButtons,
  TimeValue
} from './Timer.styled';

const Timer: React.FC = () => {
  const { runningWorkout } = useAppSelector((state: any) => state.workouts);
  
  const targetRestTimeMs = runningWorkout?.restBetweenSets || 60000; // in milliseconds
  const timerState = runningWorkout?.timerState;
  
  // If no timer state exists, use target rest time as initial state
  const { isRunning, minutes, seconds, isOvertime } = timerState || { 
    isRunning: false, 
    ...TimerService.millisecondsToMinutesAndSeconds(targetRestTimeMs),
    milliseconds: targetRestTimeMs, 
    isOvertime: false 
  };

  // Initialize timer service and sync with Redux state
  useEffect(() => {
    timerService.initialize(targetRestTimeMs);
    timerService.syncWithState(targetRestTimeMs);
    
    // Subscribe to Redux state changes to sync timer service
    const unsubscribe = timerService.syncWithState;
    
    return () => {
      // Don't stop the timer service when component unmounts
      // It should continue running in the background
    };
  }, []);

  // Sync timer service with Redux state changes
  useEffect(() => {
    timerService.syncWithState(targetRestTimeMs);
  }, [isRunning]);

  const handleToggle = () => {
    timerService.toggle(targetRestTimeMs);
  };

  const handleReset = () => {
    timerService.reset(targetRestTimeMs);
  };

  // Format display - handle negative values for overtime
  const formatMinutes = () => {
    const absMinutes = Math.abs(minutes);
    return absMinutes.toString().padStart(2, '0');
  };

  const formatSeconds = () => {
    const absSeconds = Math.abs(seconds);
    return absSeconds.toString().padStart(2, '0');
  };

  return (
    <TimerContainer $isOvertime={isOvertime || false}>
      <TimerDisplay $isOvertime={isOvertime || false}>
        {isOvertime && '-'}
        <TimeValue>{formatMinutes()}:{formatSeconds()}</TimeValue>
      </TimerDisplay>
      
      <TimerButtons>
        {isRunning ? (
          <icons.pause onClick={handleToggle} />
        ) : (
          <icons.start onClick={handleToggle} />
        )}
        <icons.stop onClick={handleReset} />
      </TimerButtons>
    </TimerContainer>
  );
};

export default Timer;

