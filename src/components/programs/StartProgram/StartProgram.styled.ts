import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
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

export const StartProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  position: relative;
`;

export const WorkoutControls = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  margin: ${props => props.theme.spacing.lg} 0;
  padding: 0 ${props => props.theme.spacing.lg};
  flex-wrap: wrap;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
    margin: ${props => props.theme.spacing.md} 0;
    padding: 0 ${props => props.theme.spacing.md};
  }
`;

export const WorkoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.sm};
  flex: 1;
  max-width: 200px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.sm};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    flex: none;
    width: 100%;
    max-width: none;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
    max-width: 220px;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 16px;
      height: 16px;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 20px;
      height: 20px;
    }
  }
`;
