import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { timerService } from '../../../../services/timerService';
import { icons } from '../../../../data';
import { 
  RestTimerContainer, 
  RestTimerDisplay, 
  RestTimerButtons,
  ElapsedTime,
  TargetTime,
  Separator
} from './RestStopwatch.styled';

const RestStopwatch: React.FC = () => {
  const { runningWorkout } = useAppSelector((state: any) => state.workouts);
  
  const targetRestTime = runningWorkout?.restBetweenSets || 60;
  const timerState = runningWorkout?.timerState || { isRunning: false, minutes: 0, seconds: 0, milliseconds: 0 };
  
  const { isRunning, minutes, seconds } = timerState;
  const elapsedSeconds = minutes * 60 + seconds;
  const isOvercount = elapsedSeconds > targetRestTime;

  // Initialize timer service and sync with Redux state
  useEffect(() => {
    timerService.initialize();
    timerService.syncWithState();
    
    // Subscribe to Redux state changes to sync timer service
    const unsubscribe = timerService.syncWithState;
    
    return () => {
      // Don't stop the timer service when component unmounts
      // It should continue running in the background
    };
  }, []);

  // Sync timer service with Redux state changes
  useEffect(() => {
    timerService.syncWithState();
  }, [isRunning]);

  const handleToggle = () => {
    timerService.toggle();
  };

  const handleReset = () => {
    timerService.reset();
  };


  return (
    <RestTimerContainer $isOvercount={isOvercount}>
      <RestTimerDisplay $isOvercount={isOvercount}>
        <ElapsedTime $isOvercount={isOvercount}>
          {Math.floor(elapsedSeconds / 60).toString().padStart(2, '0')}:
          {(elapsedSeconds % 60).toString().padStart(2, '0')}
        </ElapsedTime>
        <Separator> / </Separator>
        <TargetTime>
          {Math.floor(targetRestTime / 60).toString().padStart(2, '0')}:
          {(targetRestTime % 60).toString().padStart(2, '0')}
        </TargetTime>
      </RestTimerDisplay>
      
      <RestTimerButtons>
        {isRunning ? (
          <icons.pause onClick={handleToggle} />
        ) : (
          <icons.start onClick={handleToggle} />
        )}
        <icons.stop onClick={handleReset} />
      </RestTimerButtons>
    </RestTimerContainer>
  );
};

export default RestStopwatch;

