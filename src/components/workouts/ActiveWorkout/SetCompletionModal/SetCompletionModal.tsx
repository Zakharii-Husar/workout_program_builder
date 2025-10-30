import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { TimerService } from '../../../../services/timerService';
import { icons } from '../../../../data';
import { setWeightUnit } from '../../../../store/slices/settingsSlice';
import { weightConversionService } from '../../../../services/weightConversionService';
import RepsInput from './RepsInput';
import WeightInput from './WeightInput';
import TimeInput from './TimeInput';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  FormContainer,
  StepsGrid,
  StepCard,
  StepNumber,
  Actions,
  SaveButton,
  CancelButton
} from './SetCompletionModal.styled';

interface SetCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    reps: number | null;
    weightGrams: number | null;
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

  const timerState = useAppSelector((state: any) => state.workouts.runningWorkout?.timerState);
  const preferredUnit = useAppSelector((state: any) => state.settings.weightUnit);
  const dispatch = useAppDispatch();
  const [localUnit, setLocalUnit] = useState<'kg' | 'lb'>(preferredUnit);

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
      setLocalUnit(preferredUnit);
    }
  }, [isOpen, targetRestTime, preferredUnit]);

  const handleSave = () => {
    const repsValue = reps.trim() === '' ? null : parseInt(reps, 10);
    const weightValue = weight.trim() === '' ? null : parseFloat(weight);
    const weightGrams =
      weightValue === null || !Number.isFinite(weightValue)
        ? null
        : weightConversionService.displayToGrams(weightValue, localUnit);
    
    onSave({
      reps: repsValue,
      weightGrams,
      actualRestTime
    });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const setUnit = (newUnit: 'kg' | 'lb') => {
    if (newUnit === localUnit) return;
    if (weight.trim() !== '') {
      const currentVal = parseFloat(weight);
      if (Number.isFinite(currentVal)) {
        const grams = weightConversionService.displayToGrams(currentVal, localUnit);
        const converted = weightConversionService.gramsToDisplay(grams, newUnit);
        setWeight(converted.toFixed(1).replace(/\.0$/, ''));
      }
    }
    setLocalUnit(newUnit);
    dispatch(setWeightUnit(newUnit));
  };

  const handleMinutesChange = (value: string) => {
    setRestMinutes(value);
    const minutesNum = Number(value);
    const secondsNum = Number(restSeconds);
    setActualRestTime(Math.max(0, TimerService.minutesAndSecondsToMilliseconds(minutesNum, secondsNum)));
  };

  const handleSecondsChange = (value: string) => {
    setRestSeconds(value);
    const minutesNum = Number(restMinutes);
    const secondsNum = Number(value);
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
          <StepsGrid>
            <StepCard>
              <StepNumber>1</StepNumber>
              <RepsInput value={reps} onChange={setReps} />
            </StepCard>
            <StepCard>
              <StepNumber>2</StepNumber>
              <WeightInput 
                value={weight} 
                onChange={setWeight} 
                unit={localUnit} 
                onUnitChange={setUnit}
              />
            </StepCard>
            <StepCard>
              <StepNumber>3</StepNumber>
              <TimeInput
                restMinutes={restMinutes}
                restSeconds={restSeconds}
                actualRestTime={actualRestTime}
                onMinutesChange={handleMinutesChange}
                onSecondsChange={handleSecondsChange}
              />
            </StepCard>
            <StepCard>
              <StepNumber>4</StepNumber>
              <Actions>
                <CancelButton onClick={handleCancel}>
                  <icons.cancel />
                  Cancel
                </CancelButton>
                <SaveButton onClick={handleSave}>
                  <icons.check />
                  Save Set
                </SaveButton>
              </Actions>
            </StepCard>
          </StepsGrid>
        </FormContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SetCompletionModal;

