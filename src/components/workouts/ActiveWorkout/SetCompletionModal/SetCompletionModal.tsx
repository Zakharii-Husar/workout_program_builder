import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { icons } from '../../../../data';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  FormContainer,
  InputGroup,
  Label,
  Input,
  ButtonGroup,
  SaveButton,
  CancelButton,
  TimeDisplay
} from './SetCompletionModal.styled';

interface SetCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    reps: number | null;
    weight: number | null;
    actualRestTime: number; // in milliseconds
  }) => void;
  exerciseName: string;
  targetRestTime: number; // in milliseconds
}

const SetCompletionModal: React.FC<SetCompletionModalProps> = ({
  isOpen,
  onClose,
  onSave,
  exerciseName,
  targetRestTime
}) => {
  const [reps, setReps] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [actualRestTime, setActualRestTime] = useState<number>(targetRestTime); // Already in milliseconds

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setReps('');
      setWeight('');
      setActualRestTime(targetRestTime); // Already in milliseconds
    }
  }, [isOpen, targetRestTime]);

  const handleSave = () => {
    const repsValue = reps.trim() === '' ? null : parseInt(reps, 10);
    const weightValue = weight.trim() === '' ? null : parseFloat(weight);
    
    onSave({
      reps: repsValue,
      weight: weightValue,
      actualRestTime
    });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const incrementTime = () => {
    setActualRestTime(prev => prev + 15000); // Increment by 15 seconds (15000ms)
  };

  const decrementTime = () => {
    setActualRestTime(prev => Math.max(0, prev - 15000)); // Decrement by 15 seconds (15000ms), minimum 0
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Complete Set - {exerciseName}</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <icons.cancel />
          </ModalCloseButton>
        </ModalHeader>

        <FormContainer>
          <InputGroup>
            <Label htmlFor="reps">Reps (optional)</Label>
            <Input
              id="reps"
              type="number"
              value={reps}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReps(e.target.value)}
              placeholder="Enter reps"
              min="0"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="weight">Weight (optional)</Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}
              placeholder="Enter weight"
              min="0"
              step="0.1"
            />
          </InputGroup>

          <InputGroup>
            <Label>Rest Time</Label>
            <TimeDisplay>
              <icons.down onClick={decrementTime} />
              <span>{formatTime(actualRestTime)}</span>
              <icons.up onClick={incrementTime} />
            </TimeDisplay>
          </InputGroup>

          <ButtonGroup>
            <CancelButton onClick={handleCancel}>
              <icons.cancel />
              Cancel
            </CancelButton>
            <SaveButton onClick={handleSave}>
              <icons.check />
              Save Set
            </SaveButton>
          </ButtonGroup>
        </FormContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SetCompletionModal;

