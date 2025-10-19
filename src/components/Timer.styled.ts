import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 107, 53, 0.6);
  }
`;

export const TimerContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${props => props.theme.colors.gradient.dark};
  border-bottom: 2px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.lg};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xl};
  }
`;

export const Display = styled.div<{ $isFinished?: boolean }>`
  text-align: center;
  font-family: ${props => props.theme.typography.fontFamily.timer};
  font-size: ${props => props.theme.typography.fontSize['4xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.$isFinished ? props.theme.colors.error : props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-shadow: ${props => props.$isFinished 
    ? '0 0 20px rgba(244, 67, 54, 0.6)' 
    : '0 0 10px rgba(255, 107, 53, 0.3)'};
  letter-spacing: 3px;
  font-variant-numeric: tabular-nums;
  animation: ${props => props.$isFinished ? pulse : 'none'} 1s infinite;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize['5xl']};
    letter-spacing: 4px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize['6xl']};
    letter-spacing: 5px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  align-items: center;

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
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.background};
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.lg};
    }

    &:active {
      transform: translateY(0);
    }

    &:nth-child(1) {
      background: ${props => props.theme.colors.gradient.primary};
      color: ${props => props.theme.colors.background};
      border-color: transparent;
      animation: ${pulse} 2s infinite;

      &:hover {
        animation: ${glow} 1s infinite;
      }
    }

    &:nth-child(2) {
      background: ${props => props.theme.colors.error};
      color: ${props => props.theme.colors.text};
      border-color: transparent;

      &:hover {
        background: ${props => props.theme.colors.error};
        transform: translateY(-2px) scale(1.1);
      }
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    svg {
      width: 56px;
      height: 56px;
    }
  }
`;
