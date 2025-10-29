import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { TimerService } from '../../../../services/timerService';
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
  const [restMinutes, setRestMinutes] = useState<string>('0');
  const [restSeconds, setRestSeconds] = useState<string>('00');

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
      const { minutes, seconds } = TimerService.millisecondsToMinutesAndSeconds(derivedElapsed);
      setRestMinutes(String(minutes));
      setRestSeconds(seconds.toString().padStart(2, '0'));
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
    const { minutes, seconds } = TimerService.millisecondsToMinutesAndSeconds(milliseconds);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const sanitizeToNonNegativeInt = (value: string): string => {
    const onlyDigits = value.replace(/[^0-9]/g, '');
    if (onlyDigits === '') return '0';
    // Remove leading zeros except when the value is exactly '0'
    return String(parseInt(onlyDigits, 10));
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeToNonNegativeInt(e.target.value);
    setRestMinutes(sanitized);
    const minutesNum = Number(sanitized);
    const secondsNum = Number(restSeconds);
    setActualRestTime(Math.max(0, TimerService.minutesAndSecondsToMilliseconds(minutesNum, secondsNum)));
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // discard decimals and non-digits, clamp to 0-59
    const onlyDigits = e.target.value.replace(/[^0-9]/g, '');
    let secondsNum = onlyDigits === '' ? 0 : parseInt(onlyDigits, 10);
    if (!Number.isFinite(secondsNum) || secondsNum < 0) secondsNum = 0;
    if (secondsNum > 59) secondsNum = 59;
    const secondsStr = secondsNum.toString().padStart(2, '0');
    setRestSeconds(secondsStr);
    const minutesNum = Number(restMinutes);
    setActualRestTime(Math.max(0, TimerService.minutesAndSecondsToMilliseconds(minutesNum, secondsNum)));
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
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Input
                  id="restMinutes"
                  type="text"
                  inputMode="numeric"
                  value={restMinutes}
                  onChange={handleMinutesChange}
                  placeholder="0"
                />
                <span style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>min</span>
              </div>
              <div style={{ fontSize: 24, paddingBottom: 16 }}>:</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Input
                  id="restSeconds"
                  type="text"
                  inputMode="numeric"
                  value={restSeconds}
                  onChange={handleSecondsChange}
                  placeholder="00"
                />
                <span style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>sec</span>
              </div>
            </div>
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

