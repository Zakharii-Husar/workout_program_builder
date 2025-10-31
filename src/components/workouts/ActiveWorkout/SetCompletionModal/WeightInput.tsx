import React from 'react';
import { Field, Label, LabelRow, InputCompactWide, UnitToggleWrapper, UnitToggle, UnitToggleThumb, UnitOption } from './WeightInput.styled';

interface WeightInputProps {
  value: string;
  onChange: (value: string) => void;
  unit: 'kg' | 'lb';
  onUnitChange: (unit: 'kg' | 'lb') => void;
}

const WeightInput: React.FC<WeightInputProps> = ({ value, onChange, unit, onUnitChange }) => {
  const handleUnitToggle = (newUnit: 'kg' | 'lb') => {
    if (newUnit === unit) return;
    onUnitChange(newUnit);
  };

  return (
    <Field>
      <LabelRow>
        <Label htmlFor="weight">WEIGHT (OPTIONAL)</Label>
        <UnitToggleWrapper>
          <UnitOption type="button" onClick={() => handleUnitToggle('kg')} $active={unit === 'kg'}>KG</UnitOption>
          <UnitToggle type="button" onClick={() => handleUnitToggle(unit === 'kg' ? 'lb' : 'kg')} $isOn={unit === 'lb'} aria-label="Toggle weight unit">
            <UnitToggleThumb $isOn={unit === 'lb'} />
          </UnitToggle>
          <UnitOption type="button" onClick={() => handleUnitToggle('lb')} $active={unit === 'lb'}>LB</UnitOption>
        </UnitToggleWrapper>
      </LabelRow>
      <InputCompactWide
        id="weight"
        type="number"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        inputMode="decimal"
        placeholder="0.0"
        min="0"
        step="0.1"
      />
    </Field>
  );
};

export default WeightInput;

