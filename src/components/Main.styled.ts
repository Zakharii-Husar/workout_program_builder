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
  padding: ${props => props.theme.spacing.lg};
  gap: ${props => props.theme.spacing.xl};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
    gap: ${props => props.theme.spacing.lg};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xl};
    gap: ${props => props.theme.spacing.xxl};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: ${props => props.theme.spacing.xxxl};
    gap: ${props => props.theme.spacing.xxxl};
  }
`;

// Header section
export const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.lg};

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: ${props => props.theme.spacing.xl};
  }
`;

export const MainTitle = styled.h1`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['4xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin: 0;
  letter-spacing: 0.5px;
  text-shadow: ${props => props.theme.shadows.sm};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize['5xl']};
  }
`;

export const MainSubtitle = styled.p`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.warmGray};
  margin: ${props => props.theme.spacing.sm} 0 0 0;
  font-style: italic;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.base};
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: ${props => props.theme.spacing.xxxl};
  text-align: center;
  background: linear-gradient(135deg, ${props => props.theme.colors.surface}, ${props => props.theme.colors.background});
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  position: relative;
  overflow: hidden;

  /* Ensure any pseudo-elements don't block pointer events */
  &::before,
  &::after {
    pointer-events: none;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}05, ${props => props.theme.colors.accent}05);
    border-radius: ${props => props.theme.borderRadius.xl};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xl};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.xxxl};
  }
`;

export const EmptyStateTitle = styled.h2`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['5xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-style: italic;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize['6xl']};
  }
`;

export const EmptyStateSubtitle = styled.p`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.warmGray};
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 500px;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  position: relative;
  z-index: 1;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.base};
    margin-bottom: ${props => props.theme.spacing.lg};
    max-width: 100%;
    padding: 0 ${props => props.theme.spacing.sm};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.xl};
    max-width: 600px;
  }
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  width: 100%;
  max-width: 300px;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  font-family: ${props => props.theme.typography.fontFamily.display};
  border-radius: ${props => props.theme.borderRadius.xl};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.lg};
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 10;
  pointer-events: auto;
  min-height: 60px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
    border-radius: ${props => props.theme.borderRadius.xl};
    z-index: -1;
    opacity: 0;
    transition: ${props => props.theme.transitions.normal};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    min-height: 52px;
    max-width: 280px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize['2xl']};
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.xxl};
    min-height: 68px;
    max-width: 350px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.xl}, ${props => props.theme.shadows.glow};
    
    &::before {
      opacity: 0.1;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 20px;
      height: 20px;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 28px;
      height: 28px;
    }
  }
`;
