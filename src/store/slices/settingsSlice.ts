import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageService } from '../../services/storage';
import { soundService } from '../../services/soundService';

export type WeightUnit = 'kg' | 'lb';

export interface SettingsState {
  weightUnit: WeightUnit;
  timerAlarmOn: boolean;
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

    setTimerAlarmOn: (state, action: PayloadAction<boolean>) => {
      state.timerAlarmOn = action.payload;
      // Persist to localStorage
      LocalStorageService.saveSettings(state);
      
      // If turning off alarm, stop any currently playing sounds
      if (!action.payload) {
        soundService.stop();
      }
    },
  },
});

export const {
  setWeightUnit,
  setTimerAlarmOn,
} = settingsSlice.actions;

export default settingsSlice.reducer;
