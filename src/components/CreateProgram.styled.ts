import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const CreateProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.lg};
  animation: ${fadeIn} 0.6s ease-out;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xl};
  }
`;

export const AddExercisesButton = styled.button`
  background: ${props => props.theme.colors.gradient.primary};
  color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.lg};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: ${props => props.theme.spacing.lg} 0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.xl}, ${props => props.theme.shadows.glow};
    animation: ${pulse} 2s infinite;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const TimerHeader = styled.h2`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['3xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin: ${props => props.theme.spacing.xl} 0 ${props => props.theme.spacing.lg} 0;
  letter-spacing: 0.5px;
  font-style: italic;
`;

export const SetTimer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.gradient.dark};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.lg} 0;
  border: 2px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.lg};

  > div {
    font-family: ${props => props.theme.typography.fontFamily.timer};
    font-size: ${props => props.theme.typography.fontSize['4xl']};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text};
    text-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
    letter-spacing: 3px;
    margin-right: ${props => props.theme.spacing.lg};
    font-variant-numeric: tabular-nums;
  }
`;

export const EditTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};

  svg {
    width: 40px;
    height: 40px;
    padding: ${props => props.theme.spacing.sm};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius.full};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.fast};
    border: 2px solid ${props => props.theme.colors.border};

    &:hover {
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.background};
      transform: translateY(-2px) scale(1.1);
      box-shadow: ${props => props.theme.shadows.lg};
      border-color: transparent;
    }

    &:active {
      transform: translateY(0) scale(1.05);
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.gradient.dark};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.lg} 0;
  border: 2px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.lg};

  > input {
    text-align: center;
    background: transparent;
    color: ${props => props.theme.colors.text};
    padding: ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.typography.fontSize.lg};
    font-family: ${props => props.theme.typography.fontFamily.primary};
    border: 2px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.md};
    outline: none;
    transition: ${props => props.theme.transitions.fast};
    width: 100%;
    max-width: 400px;

    &:focus {
      border-color: ${props => props.theme.colors.secondary};
      box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
    }

    &::placeholder {
      color: ${props => props.theme.colors.textMuted};
    }
  }
`;

export const NameOutput = styled.h1`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['4xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-style: italic;
`;

export const CancelOrSave = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.gradient.dark};
  border-radius: ${props => props.theme.borderRadius.xl};
  margin-top: ${props => props.theme.spacing.lg};
  border: 2px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.lg};

  svg {
    width: 48px;
    height: 48px;
    padding: ${props => props.theme.spacing.sm};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius.full};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.fast};
    border: 2px solid ${props => props.theme.colors.border};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.lg};
    }

    &:active {
      transform: translateY(0);
    }

    &:nth-child(1) {
      background: ${props => props.theme.colors.error};
      color: ${props => props.theme.colors.text};
      border-color: transparent;

      &:hover {
        background: ${props => props.theme.colors.error};
        transform: translateY(-2px) scale(1.1);
      }
    }

    &:nth-child(2) {
      background: ${props => props.theme.colors.gradient.primary};
      color: ${props => props.theme.colors.background};
      border-color: transparent;

      &:hover {
        transform: translateY(-2px) scale(1.1);
        box-shadow: ${props => props.theme.shadows.glow};
      }
    }
  }
`;
