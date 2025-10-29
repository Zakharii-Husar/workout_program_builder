import React from 'react';
import { icons } from '../../../../data';
import { formatTime } from '../../../../utils/formatters';
import { 
  StepContainer,
  StepHeader,
  StepNumber,
  StepTitle,
  StepContent,
  SetTimer,
  EditTime
} from '../index.styled';

interface TimerStepProps {
  timer: number; // in milliseconds
  onTimerChange: (increment: number) => void; // increment in seconds
}

const TimerStep: React.FC<TimerStepProps> = ({
  timer,
  onTimerChange
}) => {
  return (
    <StepContainer>
      <StepHeader>
        <StepNumber>2</StepNumber>
        <StepTitle>Set Time Between Sets</StepTitle>
      </StepHeader>
      <StepContent>
        <SetTimer>
          <div>{formatTime(timer)}</div>
          <EditTime>
            <icons.up 
              onClick={() => onTimerChange(15)}
            />
            <icons.down 
              onClick={() => onTimerChange(-15)}
            />
          </EditTime>
        </SetTimer>
      </StepContent>
    </StepContainer>
  );
};

export default TimerStep;
