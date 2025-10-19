import React from 'react';
import { useTimer } from '../hooks/useTimer';
import { icons } from '../data/data';
import { TimerContainer, Display, ButtonsContainer } from './Timer.styled';

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
    <TimerContainer>
      <Display>{displayTime}</Display>
      <ButtonsContainer>
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
      </ButtonsContainer>
    </TimerContainer>
  );
};

export default Timer;
