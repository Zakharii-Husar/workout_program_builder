import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setWeightUnit, setTimerAlarmOn, WeightUnit } from '../../../store/slices/settingsSlice';
import { logout } from '../../../store/slices/authSlice';
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
  LogoutButton,
} from './Settings.styled';

const Settings: React.FC = () => {
  const settings = useAppSelector(state => state.settings);
  const { user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const handleWeightUnitChange = (unit: WeightUnit) => {
    dispatch(setWeightUnit(unit));
  };

  const handleTimerAlarmToggle = () => {
    dispatch(setTimerAlarmOn(!settings.timerAlarmOn));
  };

  const handleLogout = async () => {
    await dispatch(logout());
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

        {/* Timer Alarm Setting */}
        <SettingCard>
          <SettingHeader>
            <SettingTitle>Timer Alarm</SettingTitle>
            <SettingDescription>
              Enable or disable the alarm sound when the timer reaches target time
            </SettingDescription>
          </SettingHeader>
          <SettingContent>
            <ToggleContainer>
              <ToggleSwitch
                $active={settings.timerAlarmOn}
                onClick={handleTimerAlarmToggle}
                aria-label="Toggle timer alarm"
              />
              <ToggleLabel onClick={handleTimerAlarmToggle}>
                {settings.timerAlarmOn ? 'Enabled' : 'Disabled'}
              </ToggleLabel>
            </ToggleContainer>
          </SettingContent>
        </SettingCard>

        {/* Account Section */}
        {user && (
          <SettingCard>
            <SettingHeader>
              <SettingTitle>Account</SettingTitle>
              <SettingDescription>
                Signed in as {user.email}
              </SettingDescription>
            </SettingHeader>
            <SettingContent>
              <LogoutButton onClick={handleLogout}>
                Sign Out
              </LogoutButton>
            </SettingContent>
          </SettingCard>
        )}
      </SettingsContainer>
    </MainContainer>
  );
};

export default Settings;
