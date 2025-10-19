import { useState, useEffect, useCallback } from 'react';
import { TimerState } from '../types';

export const useTimer = (initialTime: number) => {
  const [timerState, setTimerState] = useState<TimerState>(() => {
    const minutes = Math.floor(initialTime / 60);
    const seconds = initialTime - minutes * 60;
    return {
      isRunning: false,
      minutes,
      seconds,
      milliseconds: 0
    };
  });

  const [isFinished, setIsFinished] = useState(false);

  const start = useCallback(() => {
    setTimerState(prev => ({ ...prev, isRunning: true }));
  }, []);

  const pause = useCallback(() => {
    setTimerState(prev => ({ ...prev, isRunning: false }));
  }, []);

  const reset = useCallback(() => {
    const minutes = Math.floor(initialTime / 60);
    const seconds = initialTime - minutes * 60;
    setTimerState({
      isRunning: false,
      minutes,
      seconds,
      milliseconds: 0
    });
    setIsFinished(false);
  }, [initialTime]);

  const toggle = useCallback(() => {
    setTimerState(prev => {
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
    });
  }, [initialTime]);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerState.isRunning) {
      interval = setInterval(() => {
        setTimerState(prev => {
          let { minutes, seconds, milliseconds } = prev;

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
            return {
              isRunning: false,
              minutes: 0,
              seconds: 0,
              milliseconds: 0
            };
          }

          return { ...prev, minutes, seconds, milliseconds };
        });
      }, 10);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerState.isRunning]);

  // Update initial time when prop changes
  useEffect(() => {
    const minutes = Math.floor(initialTime / 60);
    const seconds = initialTime - minutes * 60;
    setTimerState(prev => ({
      ...prev,
      minutes,
      seconds,
      milliseconds: 0
    }));
    setIsFinished(false);
  }, [initialTime]);

  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  const displayTime = `${formatTime(timerState.minutes)}:${formatTime(timerState.seconds)}:${formatTime(timerState.milliseconds)}`;

  return {
    ...timerState,
    isFinished,
    displayTime,
    start,
    pause,
    reset,
    toggle
  };
};
