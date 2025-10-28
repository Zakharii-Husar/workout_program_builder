import React from 'react';
import { useTimer } from '../../../../hooks/useTimer';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { recordRestTime } from '../../../../store/slices/workoutSlice';
import { icons } from '../../../../data';
import { 
  RestTimerContainer, 
  RestTimerDisplay, 
  RestTimerButtons,
  ElapsedTime,
  TargetTime,
  Separator
} from './RestTimer.styled';

const RestTimer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { runningWorkout } = useAppSelector((state: any) => state.workouts);
  
  const targetRestTime = runningWorkout?.restBetweenSets || 60;
  
  const {
    isRunning,
    minutes,
    seconds,
    isOvercount,
    displayTime,
    targetDisplayTime,
    toggle,
    reset,
    setElapsedTime
  } = useTimer(0, { mode: 'stopwatch', targetTime: targetRestTime });

  const elapsedSeconds = minutes * 60 + seconds;


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
          <icons.pause onClick={toggle} />
        ) : (
          <icons.start onClick={toggle} />
        )}
        <icons.stop onClick={reset} />
      </RestTimerButtons>
    </RestTimerContainer>
  );
};

export default RestTimer;

