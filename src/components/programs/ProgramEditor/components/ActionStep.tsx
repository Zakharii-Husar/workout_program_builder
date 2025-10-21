import React from 'react';
import { icons } from '../../../../data';
import { 
  StepContainer,
  StepHeader,
  StepNumber,
  StepTitle,
  StepContent,
  CancelOrSave,
  CancelButton,
  SaveButton
} from '../index.styled';

interface ActionStepProps {
  isEditMode: boolean;
  onSave: () => void;
  onCancel: () => void;
}

const ActionStep: React.FC<ActionStepProps> = ({
  isEditMode,
  onSave,
  onCancel
}) => {
  return (
    <StepContainer>
      <StepHeader>
        <StepNumber>4</StepNumber>
        <StepTitle>{isEditMode ? 'Update Program' : 'Create Program'}</StepTitle>
      </StepHeader>
      <StepContent>
        <CancelOrSave>
          <SaveButton onClick={onSave}>
            <icons.check />
            <span>{isEditMode ? 'Update' : 'Create'}</span>
          </SaveButton>
          <CancelButton onClick={onCancel}>
            <icons.cancel />
            <span>Cancel</span>
          </CancelButton>
        </CancelOrSave>
      </StepContent>
    </StepContainer>
  );
};

export default ActionStep;
