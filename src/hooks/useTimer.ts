import { useState, useEffect, useCallback } from 'react';
import { TimerState } from '../types';
import { soundService } from '../services/soundService';

export type TimerMode = 'countdown' | 'stopwatch';

export interface TimerConfig {
  mode: TimerMode;
  targetTime?: number; // For stopwatch mode, this is the target rest time
}

export const useTimer = (initialTime: number, config?: TimerConfig) => {
  const mode = config?.mode || 'countdown';
  const targetTime = config?.targetTime || initialTime;
  
  const [timerState, setTimerState] = useState<TimerState>(() => {
    if (mode === 'stopwatch') {
      return {
        isRunning: false,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      };
    } else {
      const minutes = Math.floor(initialTime / 60);
      const seconds = initialTime - minutes * 60;
      return {
        isRunning: false,
        minutes,
        seconds,
        milliseconds: 0
      };
    }
  });

  const [isFinished, setIsFinished] = useState(false);
  const [isOvercount, setIsOvercount] = useState(false);

  const start = useCallback(() => {
    setTimerState(prev => ({ ...prev, isRunning: true }));
  }, []);

  const pause = useCallback(() => {
    setTimerState(prev => ({ ...prev, isRunning: false }));
  }, []);

  const reset = useCallback(() => {
    if (mode === 'stopwatch') {
      setTimerState({
        isRunning: false,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      });
      setIsOvercount(false);
    } else {
      const minutes = Math.floor(initialTime / 60);
      const seconds = initialTime - minutes * 60;
      setTimerState({
        isRunning: false,
        minutes,
        seconds,
        milliseconds: 0
      });
      setIsFinished(false);
    }
  }, [initialTime, mode]);

  const toggle = useCallback(() => {
    setTimerState(prev => {
      if (mode === 'stopwatch') {
        return { ...prev, isRunning: !prev.isRunning };
      } else {
        // If timer is at 0:00:00 and not running, reset it before starting
        if (!prev.isRunning && prev.minutes === 0 && prev.seconds === 0 && prev.milliseconds === 0) {
          const minutes = Math.floor(initialTime / 60);
          const seconds = initialTime - minutes * 60;
          setIsFinished(false);
          return {
            isRunning: true,
            minutes,
            seconds,
            milliseconds: 0
          };
        }
        return { ...prev, isRunning: !prev.isRunning };
      }
    });
  }, [initialTime, mode]);

  const setElapsedTime = useCallback((totalSeconds: number) => {
    if (mode === 'stopwatch') {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      setTimerState({
        isRunning: false,
        minutes,
        seconds,
        milliseconds: 0
      });
      setIsOvercount(totalSeconds > targetTime);
    }
  }, [mode, targetTime]);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerState.isRunning) {
      interval = setInterval(() => {
        setTimerState(prev => {
          let { minutes, seconds, milliseconds } = prev;

          if (mode === 'stopwatch') {
            // Count up
            milliseconds += 1;
            if (milliseconds >= 100) {
              milliseconds = 0;
              seconds += 1;
            }
            if (seconds >= 60) {
              seconds = 0;
              minutes += 1;
            }
            
            const totalSeconds = minutes * 60 + seconds;
            setIsOvercount(totalSeconds > targetTime);
            
            return { ...prev, minutes, seconds, milliseconds };
          } else {
            // Count down
            if (milliseconds > 0) {
              milliseconds -= 1;
            } else if (seconds > 0) {
              seconds -= 1;
              milliseconds = 99;
            } else if (minutes > 0) {
              minutes -= 1;
              seconds = 59;
              milliseconds = 99;
            } else {
              // Timer finished - stop running but keep the 0:00:00 display
              setIsFinished(true);
              // Play bell sound 3 times when timer finishes
              soundService.playBellWithPermissionRequest(3);
              return {
                isRunning: false,
                minutes: 0,
                seconds: 0,
                milliseconds: 0
              };
            }

            return { ...prev, minutes, seconds, milliseconds };
          }
        });
      }, mode === 'stopwatch' ? 10 : 10);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerState.isRunning, mode, targetTime]);

  // Update initial time when prop changes (only for countdown mode)
  useEffect(() => {
    if (mode === 'countdown') {
      const minutes = Math.floor(initialTime / 60);
      const seconds = initialTime - minutes * 60;
      setTimerState(prev => ({
        ...prev,
        minutes,
        seconds,
        milliseconds: 0
      }));
      setIsFinished(false);
    }
  }, [initialTime, mode]);

  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  const displayTime = `${formatTime(timerState.minutes)}:${formatTime(timerState.seconds)}:${formatTime(timerState.milliseconds)}`;
  
  // For stopwatch mode, also provide formatted target time
  const formatTargetTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const targetDisplayTime = mode === 'stopwatch' ? formatTargetTime(targetTime) : '';
  const fullDisplay = mode === 'stopwatch' ? `${formatTime(timerState.minutes)}:${formatTime(timerState.seconds)} / ${targetDisplayTime}` : displayTime;

  return {
    ...timerState,
    isFinished,
    isOvercount,
    displayTime,
    targetDisplayTime,
    fullDisplay,
    mode,
    targetTime,
    start,
    pause,
    reset,
    toggle,
    setElapsedTime
  };
};
