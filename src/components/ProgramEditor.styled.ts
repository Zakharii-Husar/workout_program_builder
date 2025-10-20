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
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.md};
  animation: ${fadeIn} 0.6s ease-out;
  max-width: 1400px;
  margin: 0 auto;
  gap: ${props => props.theme.spacing.lg};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.sm};
    gap: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.lg};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
      "step1 step2"
      "step3 step4";
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: ${props => props.theme.spacing.xl};
    gap: ${props => props.theme.spacing.xl};
  }
`;

export const StepContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.md};
  overflow: hidden;
  transition: ${props => props.theme.transitions.normal};
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: ${props => props.theme.shadows.lg};
    transform: translateY(-1px);
  }

  /* Grid area assignments for desktop layout */
  &:nth-child(1) {
    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      grid-area: step1;
    }
  }

  &:nth-child(2) {
    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      grid-area: step2;
    }
  }

  &:nth-child(3) {
    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      grid-area: step3;
    }
  }

  &:nth-child(4) {
    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      grid-area: step4;
    }
  }
`;

export const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.lg};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}15, ${props => props.theme.colors.secondary}15);
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.full};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  box-shadow: ${props => props.theme.shadows.sm};
`;

export const StepTitle = styled.h2`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin: 0;
  letter-spacing: 0.25px;
`;

export const StepContent = styled.div`
  padding: ${props => props.theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AddExercisesButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.md};
  text-transform: uppercase;
  letter-spacing: 0.25px;
  margin-top: ${props => props.theme.spacing.md};
  width: 100%;
  min-height: 44px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.base};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    letter-spacing: 0.5px;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.lg}, ${props => props.theme.shadows.glow};
    animation: ${pulse} 2s infinite;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SetTimer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.sm};

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
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.sm};

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
  flex-direction: column;
  justify-content: center;
  gap: ${props => props.theme.spacing.xs};
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.sm};
  width: 100%;
  min-width: 0;

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: ${props => props.theme.spacing.md};
  }
`;

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xs};
  background: ${props => props.theme.colors.error};
  color: ${props => props.theme.colors.textOnPrimary};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.md};
  text-transform: uppercase;
  letter-spacing: 0.25px;
  flex: 1;
  min-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.sm};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    gap: ${props => props.theme.spacing.sm};
    letter-spacing: 0.5px;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;

    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xs};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.md};
  text-transform: uppercase;
  letter-spacing: 0.25px;
  flex: 1;
  min-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.sm};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    gap: ${props => props.theme.spacing.sm};
    letter-spacing: 0.5px;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.lg}, ${props => props.theme.shadows.glow};
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;

    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 18px;
      height: 18px;
    }
  }
`;
