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
    isFinished,
    displayTime,
    start,
    pause,
    reset,
    toggle
  } = useTimer(time);

  return (
    <TimerContainer>
      <Display $isFinished={isFinished}>{displayTime}</Display>
      <ButtonsContainer>
        {isRunning ? (
          <icons.pause onClick={toggle} />
        ) : (
          <icons.start onClick={toggle} />
        )}
        <icons.stop onClick={reset} />
      </ButtonsContainer>
    </TimerContainer>
  );
};

export default Timer;
