import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
  animation: ${fadeIn} 0.4s ease-out;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: ${props => props.theme.spacing.lg};
  }
`;

export const SettingCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.sm};
  transition: ${props => props.theme.transitions.fast};

  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.lg};
  }
`;

export const SettingHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const SettingTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

export const SettingDescription = styled.p`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
`;

export const SettingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

// Toggle Switch Styling
export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

export const ToggleLabel = styled.label`
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  user-select: none;
`;

export const ToggleSwitch = styled.button<{ $active: boolean }>`
  position: relative;
  width: 52px;
  height: 28px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.gray300};
  border: none;
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.sm};

  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:active {
    transform: scale(0.98);
  }

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.$active ? '26px' : '2px'};
    width: 24px;
    height: 24px;
    border-radius: ${props => props.theme.borderRadius.full};
    background: ${props => props.theme.colors.white};
    transition: ${props => props.theme.transitions.normal};
    box-shadow: ${props => props.theme.shadows.sm};
  }
`;

// Radio Button Group Styling
export const RadioGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  flex-wrap: wrap;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
  }
`;

export const RadioOption = styled.label<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border: 2px solid ${props => props.$checked ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => props.$checked ? props.theme.colors.gray50 : props.theme.colors.white};
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.$checked ? props.theme.typography.fontWeight.semibold : props.theme.typography.fontWeight.medium};
  color: ${props => props.$checked ? props.theme.colors.primary : props.theme.colors.text};
  user-select: none;
  min-width: 120px;
  justify-content: center;

  &:hover {
    border-color: ${props => props.$checked ? props.theme.colors.primary : props.theme.colors.gray400};
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.sm};
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    min-width: unset;
  }

  input {
    margin: 0;
    cursor: pointer;
    width: 18px;
    height: 18px;
    accent-color: ${props => props.theme.colors.primary};
  }
`;

export const LogoutButton = styled.button`
  margin-top: ${props => props.theme.spacing.xl};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textOnPrimary};
  background: ${props => props.theme.colors.accentRed};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  width: 100%;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }
`;