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
  padding-bottom: 100px; /* Add padding to prevent content from being hidden behind sticky button */
`;

export const ExitButton = styled.button`
  position: sticky;
  bottom: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.gradient.primary};
  color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  border: none;
  border-top: 2px solid ${props => props.theme.colors.border};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.lg};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  width: 100%;
  animation: ${fadeIn} 0.3s ease-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.xl}, ${props => props.theme.shadows.glow};
    animation: ${pulse} 2s infinite;
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize['2xl']};
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.xxl};
    
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
