import React from 'react';
import { useTimer } from '../hooks/useTimer';
import { icons } from '../data/data';
import './Timer.css';

interface TimerProps {
  time: number;
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  const {
    isRunning,
    displayTime,
    start,
    pause,
    reset,
    toggle
  } = useTimer(time);

  return (
    <div className="Timer">
      <h2 className="display">{displayTime}</h2>
      <div className="buttonsContainer">
        <img 
          src={isRunning ? icons.pause : icons.start} 
          onClick={toggle}
          alt={isRunning ? 'Pause' : 'Start'}
        />
        <img 
          src={icons.stop} 
          onClick={reset}
          alt="Stop"
        />
      </div>
    </div>
  );
};

export default Timer;
