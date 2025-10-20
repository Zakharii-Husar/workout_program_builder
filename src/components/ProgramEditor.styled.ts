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

export const ProgramEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.md};
  animation: ${fadeIn} 0.6s ease-out;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.sm};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.lg};
  }
`;

export const AddExercisesButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.md};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: ${props => props.theme.spacing.md} 0;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.lg}, ${props => props.theme.shadows.glow};
    animation: ${pulse} 2s infinite;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const TimerHeader = styled.h2`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin: ${props => props.theme.spacing.lg} 0 ${props => props.theme.spacing.md} 0;
  letter-spacing: 0.25px;
  font-style: italic;
`;

export const SetTimer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.md} 0;
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.md};

  > div {
    font-family: ${props => props.theme.typography.fontFamily.timer};
    font-size: ${props => props.theme.typography.fontSize['3xl']};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text};
    text-shadow: ${props => props.theme.shadows.glow};
    letter-spacing: 2px;
    margin-right: ${props => props.theme.spacing.md};
    font-variant-numeric: tabular-nums;
  }
`;

export const EditTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};

  svg {
    width: 32px;
    height: 32px;
    padding: ${props => props.theme.spacing.xs};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius.full};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.fast};
    border: 1px solid ${props => props.theme.colors.border};

    &:hover {
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.background};
      transform: translateY(-1px) scale(1.05);
      box-shadow: ${props => props.theme.shadows.md};
      border-color: transparent;
    }

    &:active {
      transform: translateY(0) scale(1.02);
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.md} 0;
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.md};

  > input {
    text-align: center;
    background: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.text};
    padding: ${props => props.theme.spacing.sm};
    font-size: ${props => props.theme.typography.fontSize.base};
    font-family: ${props => props.theme.typography.fontFamily.primary};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.sm};
    outline: none;
    transition: ${props => props.theme.transitions.fast};
    width: 100%;
    max-width: 320px;

    &:focus {
      border-color: ${props => props.theme.colors.secondary};
      box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}1A;
    }

    &::placeholder {
      color: ${props => props.theme.colors.text};
    }
  }
`;

export const NameOutput = styled.h1`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['3xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.md};
  letter-spacing: 0.25px;
  text-shadow: ${props => props.theme.shadows.sm};
  font-style: italic;
`;

export const CancelOrSave = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-top: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.md};

  svg {
    width: 36px;
    height: 36px;
    padding: ${props => props.theme.spacing.xs};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius.full};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.fast};
    border: 1px solid ${props => props.theme.colors.border};

    &:hover {
      transform: translateY(-1px);
      box-shadow: ${props => props.theme.shadows.md};
    }

    &:active {
      transform: translateY(0);
    }

    &:nth-child(1) {
      background: ${props => props.theme.colors.error};
      color: ${props => props.theme.colors.textOnPrimary};
      border-color: transparent;

      &:hover {
        background: ${props => props.theme.colors.error};
        transform: translateY(-1px) scale(1.05);
      }
    }

    &:nth-child(2) {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.background};
      border-color: transparent;

      &:hover {
        transform: translateY(-1px) scale(1.05);
        box-shadow: ${props => props.theme.shadows.glow};
      }
    }
  }
`;
