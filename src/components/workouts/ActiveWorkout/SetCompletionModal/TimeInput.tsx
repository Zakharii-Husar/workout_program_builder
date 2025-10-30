import React from 'react';
import { TimerService } from '../../../../services/timerService';
import { InputGroup, Label, DigitWrapper, DigitColumns, DigitColumn, DigitButton, DigitInput, DigitSeparator, TimeCurrent } from './SetCompletionModal.styled';

interface TimeInputProps {
  restMinutes: string;
  restSeconds: string;
  actualRestTime: number;
  onMinutesChange: (value: string) => void;
  onSecondsChange: (value: string) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({
  restMinutes,
  restSeconds,
  actualRestTime,
  onMinutesChange,
  onSecondsChange
}) => {
  const formatTime = (milliseconds: number): string => {
    const { minutes, seconds } = TimerService.millisecondsToMinutesAndSeconds(milliseconds);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const sanitizeToNonNegativeInt = (value: string): string => {
    const onlyDigits = value.replace(/[^0-9]/g, '');
    if (onlyDigits === '') return '0';
    return String(parseInt(onlyDigits, 10));
  };

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
    onMinutesChange(String(minutesNum));
    onSecondsChange(secondsNum.toString().padStart(2, '0'));
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

  return (
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
  );
};

export default TimeInput;

