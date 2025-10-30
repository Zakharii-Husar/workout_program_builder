import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { TimerService } from '../../../../services/timerService';
import { icons } from '../../../../data';
import { setWeightUnit } from '../../../../store/slices/settingsSlice';
import { weightConversionService } from '../../../../services/weightConversionService';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  FormContainer,
  Section,
  SectionHeader,
  SectionTitle,
  SectionBody,
  InputGroup,
  FieldsRow,
  Field,
  Label,
  LabelRow,
  Input,
  InputCompact,
  InputCompactWide,
  ButtonGroup,
  SaveButton,
  CancelButton,
  UnitToggleWrapper,
  UnitToggle,
  UnitToggleThumb,
  UnitOption,
  TimeInputs,
  TimeColumn,
  TimeUnit,
  TimeColon,
  TimeCurrent
} from './SetCompletionModal.styled';
import {
  DigitWrapper,
  DigitColumns,
  DigitColumn,
  DigitButton,
  DigitInput,
  DigitSeparator
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

  const timerStartTimestamp = useAppSelector((state: any) => state.workouts.runningWorkout?.timerStartTimestamp);
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

  const formatTime = (milliseconds: number): string => {
    const { minutes, seconds } = TimerService.millisecondsToMinutesAndSeconds(milliseconds);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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

  // Digit helpers
  const getMinuteDigits = (): [number, number] => {
    const minutesNum = Math.max(0, Math.min(59, Number(restMinutes) || 0));
    const tens = Math.floor(minutesNum / 10);
    const ones = minutesNum % 10;
    return [tens, ones];
  };

  const getSecondDigits = (): [number, number] => {
    const secondsNum = Math.max(0, Math.min(59, Number(restSeconds) || 0));
    const tens = Math.floor(secondsNum / 10);
    const ones = secondsNum % 10;
    return [tens, ones];
  };

  const setDigits = (mTens: number, mOnes: number, sTens: number, sOnes: number) => {
    const minutesNum = Math.max(0, Math.min(59, mTens * 10 + mOnes));
    const secondsNum = Math.max(0, Math.min(59, sTens * 10 + sOnes));
    setRestMinutes(String(minutesNum));
    setRestSeconds(secondsNum.toString().padStart(2, '0'));
    setActualRestTime(Math.max(0, TimerService.minutesAndSecondsToMilliseconds(minutesNum, secondsNum)));
  };

  const onDigitChange = (pos: 'mT' | 'mO' | 'sT' | 'sO') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const char = e.target.value.replace(/\D/g, '').slice(0, 1);
    const val = char === '' ? 0 : parseInt(char, 10);
    let [mT, mO] = getMinuteDigits();
    let [sT, sO] = getSecondDigits();
    if (pos === 'mT') mT = Math.max(0, Math.min(5, val));
    if (pos === 'mO') mO = Math.max(0, Math.min(9, val));
    if (pos === 'sT') sT = Math.max(0, Math.min(5, val));
    if (pos === 'sO') sO = Math.max(0, Math.min(9, val));
    setDigits(mT, mO, sT, sO);
  };

  const bumpDigit = (pos: 'mT' | 'mO' | 'sT' | 'sO', delta: 1 | -1) => () => {
    let [mT, mO] = getMinuteDigits();
    let [sT, sO] = getSecondDigits();
    if (pos === 'mT') mT = (mT + delta + 6) % 6;
    if (pos === 'mO') mO = (mO + delta + 10) % 10;
    if (pos === 'sT') sT = (sT + delta + 6) % 6;
    if (pos === 'sO') sO = (sO + delta + 10) % 10;
    setDigits(mT, mO, sT, sO);
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
          <Section>
            <SectionHeader>
              <SectionTitle>Performance</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <FieldsRow>
                <Field>
                  <Label htmlFor="reps">Reps (optional)</Label>
                  <InputCompact
                    id="reps"
                    type="number"
                    value={reps}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReps(e.target.value)}
                    placeholder="Enter reps"
                    min="0"
                  />
                </Field>

                <Field>
                  <LabelRow>
                    <Label htmlFor="weight">Weight (optional)</Label>
                    <UnitToggleWrapper>
                      <UnitOption type="button" onClick={() => setUnit('kg')} $active={localUnit === 'kg'}>KG</UnitOption>
                      <UnitToggle type="button" onClick={() => setUnit(localUnit === 'kg' ? 'lb' : 'kg')} $isOn={localUnit === 'lb'} aria-label="Toggle weight unit">
                        <UnitToggleThumb $isOn={localUnit === 'lb'} />
                      </UnitToggle>
                      <UnitOption type="button" onClick={() => setUnit('lb')} $active={localUnit === 'lb'}>LB</UnitOption>
                    </UnitToggleWrapper>
                  </LabelRow>
                  <InputCompactWide
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    min="0"
                    step="0.1"
                  />
                </Field>
              </FieldsRow>
            </SectionBody>
          </Section>

          <Section>
            <SectionHeader>
              <SectionTitle>Rest</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <InputGroup>
                <Label>Rest Time</Label>
                <DigitWrapper>
                  <DigitColumns>
                    <DigitColumn>
                      <DigitButton type="button" onClick={bumpDigit('mT', 1)}>▲</DigitButton>
                      <DigitInput
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={getMinuteDigits()[0]}
                        onChange={onDigitChange('mT')}
                      />
                      <DigitButton type="button" onClick={bumpDigit('mT', -1)}>▼</DigitButton>
                    </DigitColumn>
                    <DigitColumn>
                      <DigitButton type="button" onClick={bumpDigit('mO', 1)}>▲</DigitButton>
                      <DigitInput
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={getMinuteDigits()[1]}
                        onChange={onDigitChange('mO')}
                      />
                      <DigitButton type="button" onClick={bumpDigit('mO', -1)}>▼</DigitButton>
                    </DigitColumn>
                    <DigitSeparator>:</DigitSeparator>
                    <DigitColumn>
                      <DigitButton type="button" onClick={bumpDigit('sT', 1)}>▲</DigitButton>
                      <DigitInput
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={getSecondDigits()[0]}
                        onChange={onDigitChange('sT')}
                      />
                      <DigitButton type="button" onClick={bumpDigit('sT', -1)}>▼</DigitButton>
                    </DigitColumn>
                    <DigitColumn>
                      <DigitButton type="button" onClick={bumpDigit('sO', 1)}>▲</DigitButton>
                      <DigitInput
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={getSecondDigits()[1]}
                        onChange={onDigitChange('sO')}
                      />
                      <DigitButton type="button" onClick={bumpDigit('sO', -1)}>▼</DigitButton>
                    </DigitColumn>
                  </DigitColumns>
                </DigitWrapper>
                <TimeCurrent>
                  Current: {formatTime(actualRestTime)}
                </TimeCurrent>
              </InputGroup>
            </SectionBody>
          </Section>

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

