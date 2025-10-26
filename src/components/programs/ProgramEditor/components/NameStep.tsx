import React from 'react';
import { 
  StepContainer,
  StepHeader,
  StepNumber,
  StepTitle,
  StepContent,
  NameContainer,
  NameOutput
} from '../index.styled';

interface NameStepProps {
  name: string;
  onNameChange: (name: string) => void;
}

const NameStep: React.FC<NameStepProps> = ({
  name,
  onNameChange
}) => {
  const displayName = name || 'My Workout';
  
  return (
    <StepContainer>
      <StepHeader>
        <StepNumber>3</StepNumber>
        <StepTitle>Name Your Program</StepTitle>
      </StepHeader>
      <StepContent>
        <NameContainer>
          <NameOutput>{displayName}</NameOutput>
          <input
            onInput={(e) => onNameChange((e.target as HTMLInputElement).value)}
            type="text"
            placeholder="Enter Program Name"
            value={name}
          />
        </NameContainer>
      </StepContent>
    </StepContainer>
  );
};

export default NameStep;
