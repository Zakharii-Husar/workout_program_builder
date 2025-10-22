import React from 'react';
import { icons } from '../../../../data';
import { ControlButtons as ControlButtonsStyled, ControlButton } from '../index.styled';

interface ControlButtonsProps {
  hasExercises: boolean;
  onClearAll: () => void;
  onCancel: () => void;
  onRemoveLast: () => void;
  onSave: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  hasExercises,
  onClearAll,
  onCancel,
  onRemoveLast,
  onSave
}) => {
  return (
    <ControlButtonsStyled>
      <ControlButton>
        <icons.remove 
          onClick={onClearAll}
        />
      </ControlButton>
      <ControlButton>
        <icons.cancel 
          onClick={onCancel}
        />
      </ControlButton>
      <ControlButton $isVisible={hasExercises}>
        <icons.undo
          onClick={onRemoveLast}
        />
      </ControlButton>
      <ControlButton>
        <icons.check 
          onClick={onSave}
        />
      </ControlButton>
    </ControlButtonsStyled>
  );
};

export default ControlButtons;
