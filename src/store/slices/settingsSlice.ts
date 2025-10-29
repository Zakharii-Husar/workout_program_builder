import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageService } from '../../services/storage';

export type WeightUnit = 'kg' | 'lb';

export interface SettingsState {
  weightUnit: WeightUnit;
  stopwatchAlarmOn: boolean;
}

// Initial state - load from localStorage
const initialState: SettingsState = LocalStorageService.getSettings();

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setWeightUnit: (state, action: PayloadAction<WeightUnit>) => {
      state.weightUnit = action.payload;
      // Persist to localStorage
      LocalStorageService.saveSettings(state);
    },

    setStopwatchAlarmOn: (state, action: PayloadAction<boolean>) => {
      state.stopwatchAlarmOn = action.payload;
      // Persist to localStorage
      LocalStorageService.saveSettings(state);
    },
  },
});

export const {
  setWeightUnit,
  setStopwatchAlarmOn,
} = settingsSlice.actions;

export default settingsSlice.reducer;
