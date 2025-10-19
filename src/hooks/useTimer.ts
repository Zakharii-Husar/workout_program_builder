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
  }, [initialTime]);

  const toggle = useCallback(() => {
    setTimerState(prev => ({ ...prev, isRunning: !prev.isRunning }));
  }, []);

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
            // Timer finished
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
  }, [initialTime]);

  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  const displayTime = `${formatTime(timerState.minutes)}:${formatTime(timerState.seconds)}:${formatTime(timerState.milliseconds)}`;

  return {
    ...timerState,
    displayTime,
    start,
    pause,
    reset,
    toggle
  };
};
