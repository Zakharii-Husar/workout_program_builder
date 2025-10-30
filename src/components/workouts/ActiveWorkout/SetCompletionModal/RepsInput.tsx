import React from 'react';
import { Field, Label, InputCompact } from './RepsInput.styled';

interface RepsInputProps {
  value: string;
  onChange: (value: string) => void;
}

const RepsInput: React.FC<RepsInputProps> = ({ value, onChange }) => {
  return (
    <Field>
      <Label htmlFor="reps">Reps (optional)</Label>
      <InputCompact
        id="reps"
        type="number"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder="Enter reps"
        min="0"
      />
    </Field>
  );
};

export default RepsInput;

