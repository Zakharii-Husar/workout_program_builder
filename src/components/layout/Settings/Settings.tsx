import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setWeightUnit, setStopwatchAlarmOn, WeightUnit } from '../../../store/slices/settingsSlice';
import { MainContainer, MainHeader, MainTitle, MainSubtitle } from '../Main/Main.styled';
import {
  SettingsContainer,
  SettingCard,
  SettingHeader,
  SettingTitle,
  SettingDescription,
  SettingContent,
  ToggleContainer,
  ToggleLabel,
  ToggleSwitch,
  RadioGroup,
  RadioOption,
} from './Settings.styled';

const Settings: React.FC = () => {
  const settings = useAppSelector(state => state.settings);
  const dispatch = useAppDispatch();

  const handleWeightUnitChange = (unit: WeightUnit) => {
    dispatch(setWeightUnit(unit));
  };

  const handleStopwatchAlarmToggle = () => {
    dispatch(setStopwatchAlarmOn(!settings.stopwatchAlarmOn));
  };

  return (
    <MainContainer>
      <MainHeader>
        <MainTitle>Settings</MainTitle>
        <MainSubtitle>Configure your preferences</MainSubtitle>
      </MainHeader>
      
      <SettingsContainer>
        {/* Weight Unit Setting */}
        <SettingCard>
          <SettingHeader>
            <SettingTitle>Weight Unit</SettingTitle>
            <SettingDescription>
              Choose your preferred unit for measuring weight
            </SettingDescription>
          </SettingHeader>
          <SettingContent>
            <RadioGroup>
              <RadioOption $checked={settings.weightUnit === 'kg'}>
                <input
                  type="radio"
                  name="weightUnit"
                  value="kg"
                  checked={settings.weightUnit === 'kg'}
                  onChange={() => handleWeightUnitChange('kg')}
                />
                Kilogram (kg)
              </RadioOption>
              <RadioOption $checked={settings.weightUnit === 'lb'}>
                <input
                  type="radio"
                  name="weightUnit"
                  value="lb"
                  checked={settings.weightUnit === 'lb'}
                  onChange={() => handleWeightUnitChange('lb')}
                />
                Pound (lb)
              </RadioOption>
            </RadioGroup>
          </SettingContent>
        </SettingCard>

        {/* Stopwatch Alarm Setting */}
        <SettingCard>
          <SettingHeader>
            <SettingTitle>Stopwatch Alarm</SettingTitle>
            <SettingDescription>
              Enable or disable the alarm sound when the stopwatch reaches target time
            </SettingDescription>
          </SettingHeader>
          <SettingContent>
            <ToggleContainer>
              <ToggleSwitch
                $active={settings.stopwatchAlarmOn}
                onClick={handleStopwatchAlarmToggle}
                aria-label="Toggle stopwatch alarm"
              />
              <ToggleLabel onClick={handleStopwatchAlarmToggle}>
                {settings.stopwatchAlarmOn ? 'Enabled' : 'Disabled'}
              </ToggleLabel>
            </ToggleContainer>
          </SettingContent>
        </SettingCard>
      </SettingsContainer>
    </MainContainer>
  );
};

export default Settings;
