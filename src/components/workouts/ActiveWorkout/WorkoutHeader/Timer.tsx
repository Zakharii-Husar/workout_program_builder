import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { timerService, TimerService } from '../../../../services/timerService';
import { icons } from '../../../../data';
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5';
import { setTimerAlarmOn } from '../../../../store/slices/settingsSlice';
import { 
  TimerContainer, 
  TimerDisplay, 
  TimerButtons,
  TimeValue
} from './Timer.styled';

const Timer: React.FC = () => {
  const { runningWorkout } = useAppSelector((state: any) => state.workouts);
  const { timerAlarmOn } = useAppSelector((state: any) => state.settings);
  const dispatch = useAppDispatch();
  
  const targetRestTimeMs = runningWorkout?.restBetweenSets || 60000; // in milliseconds
  const timerState = runningWorkout?.timerState;
  const timerStartTimestamp = runningWorkout?.timerStartTimestamp;
  
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

  const handleToggleAlarm = () => {
    dispatch(setTimerAlarmOn(!timerAlarmOn));
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
        {/* Start button: starts or resumes */}
        {isRunning ? (
          <icons.start aria-label="Start" />
        ) : (
          <icons.start onClick={handleToggle} aria-label="Start" />
        )}
        {/* Stop when running or not-started; Reset when paused */}
        {isRunning ? (
          <icons.stop onClick={() => timerService.pause()} aria-label="Stop" />
        ) : timerStartTimestamp ? (
          <icons.reset onClick={handleReset} aria-label="Reset" />
        ) : (
          <icons.stop onClick={handleReset} aria-label="Stop" />
        )}
        {timerAlarmOn ? (
          <IoVolumeHigh onClick={handleToggleAlarm} aria-label="Disable timer alarm" />
        ) : (
          <IoVolumeMute onClick={handleToggleAlarm} aria-label="Enable timer alarm" />
        )}
      </TimerButtons>
    </TimerContainer>
  );
};

export default Timer;

