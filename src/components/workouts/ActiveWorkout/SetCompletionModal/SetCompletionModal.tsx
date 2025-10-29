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
  CancelButton
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
  const [actualRestTime, setActualRestTime] = useState<number>(targetRestTime); // milliseconds
  const [restTimeInput, setRestTimeInput] = useState<string>(''); // mm:ss or seconds

  const timerStartTimestamp = useAppSelector((state: any) => state.workouts.runningWorkout?.timerStartTimestamp);
  const timerState = useAppSelector((state: any) => state.workouts.runningWorkout?.timerState);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setReps('');
      setWeight('');

      // Derive elapsed using timer's accumulated remaining time at open time (freeze value)
      const remainingMs: number | undefined = timerState?.milliseconds;
      let derivedElapsed = typeof remainingMs === 'number'
        ? Math.max(0, targetRestTime - remainingMs)
        : 0;

      // If elapsed is zero/invalid, default to program target rest time
      if (!Number.isFinite(derivedElapsed) || derivedElapsed <= 0) {
        derivedElapsed = targetRestTime;
      }

      setActualRestTime(derivedElapsed);
      setRestTimeInput(formatTime(derivedElapsed));
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

  const parseTimeInputToMs = (value: string): number | null => {
    const trimmed = value.trim();
    if (trimmed === '') return null;
    // Accept formats: mm:ss, m:ss, ss, m
    if (trimmed.includes(':')) {
      const parts = trimmed.split(':');
      if (parts.length !== 2) return null;
      const minutes = Number(parts[0]);
      const seconds = Number(parts[1]);
      if (!Number.isFinite(minutes) || !Number.isFinite(seconds) || seconds < 0 || seconds >= 60) return null;
      return Math.max(0, (minutes * 60 + seconds) * 1000);
    }
    const secondsOnly = Number(trimmed);
    if (!Number.isFinite(secondsOnly)) return null;
    return Math.max(0, secondsOnly * 1000);
  };

  const handleRestTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRestTimeInput(value);
    const ms = parseTimeInputToMs(value);
    if (ms !== null) {
      setActualRestTime(ms);
    }
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
            <Input
              id="restTime"
              type="text"
              inputMode="numeric"
              value={restTimeInput}
              onChange={handleRestTimeChange}
              placeholder="mm:ss or seconds"
            />
            <div style={{ marginTop: 6, fontSize: 12, color: '#6b7280' }}>
              Current: {formatTime(actualRestTime)}
            </div>
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

