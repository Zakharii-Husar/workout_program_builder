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
  padding: ${props => props.theme.spacing.xxxl};
  text-align: center;
  background: ${props => props.theme.colors.gradient.dark};
  border-radius: ${props => props.theme.borderRadius.xl};
  margin: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.lg};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xl};
    margin: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.xxxl};
  }
`;

export const EmptyStateTitle = styled.h1`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['5xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-style: italic;
  letter-spacing: 0.5px;

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
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xxl};
  max-width: 500px;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.base};
    margin-bottom: ${props => props.theme.spacing.xl};
    max-width: 100%;
    padding: 0 ${props => props.theme.spacing.md};
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
  gap: ${props => props.theme.spacing.sm};
  width: 100%;
  max-width: 300px;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.gradient.primary};
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-family: ${props => props.theme.typography.fontFamily.display};
  border-radius: ${props => props.theme.borderRadius.lg};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.lg};
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;

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
`;
