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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  animation: ${fadeIn} 0.6s ease-out;
  max-width: 1200px;
  margin: 0 auto;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  background: ${props => props.theme.colors.surface};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  margin: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;

  /* Ensure any pseudo-elements don't block pointer events */
  &::before,
  &::after {
    pointer-events: none;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.lg};
    margin: ${props => props.theme.spacing.sm};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xxl};
  }
`;

export const EmptyStateTitle = styled.h1`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['4xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.md};
  font-style: italic;
  letter-spacing: 0.25px;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize['5xl']};
  }
`;

export const EmptyStateSubtitle = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
  max-width: 400px;
  line-height: ${props => props.theme.typography.lineHeight.normal};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.sm};
    margin-bottom: ${props => props.theme.spacing.md};
    max-width: 100%;
    padding: 0 ${props => props.theme.spacing.sm};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
    max-width: 500px;
  }
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  width: 100%;
  max-width: 240px;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  font-family: ${props => props.theme.typography.fontFamily.display};
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.md};
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 10;
  pointer-events: auto;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.lg}, ${props => props.theme.shadows.glow};
    animation: ${pulse} 2s infinite;
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
