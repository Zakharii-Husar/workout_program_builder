import styled from 'styled-components';
import { slideIn } from './animations';

export const MuscleGroupContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, ${props => props.theme.colors.surface}, ${props => props.theme.colors.background});
  padding: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.md} 0;
  border-radius: ${props => props.theme.borderRadius.xl};
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.sm};
  animation: ${slideIn} 0.5s ease-out;
  min-height: 80px;
  gap: ${props => props.theme.spacing.lg};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}05, ${props => props.theme.colors.accent}05);
    border-radius: ${props => props.theme.borderRadius.xl};
    opacity: 0;
    transition: ${props => props.theme.transitions.normal};
  }

  &:hover {
    background: linear-gradient(135deg, ${props => props.theme.colors.background}, ${props => props.theme.colors.surface});
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.lg}, ${props => props.theme.shadows.glow};
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
    margin: ${props => props.theme.spacing.sm} 0;
    min-height: 70px;
    gap: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xl};
    margin: ${props => props.theme.spacing.lg} 0;
    min-height: 90px;
    gap: ${props => props.theme.spacing.xl};
  }
`;

export const MuscleIcon = styled.img`
  width: 64px;
  height: 64px;
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 2px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.white}E6;
  padding: 6px;
  transition: ${props => props.theme.transitions.normal};
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: ${props => props.theme.shadows.md};

  ${MuscleGroupContainer}:hover & {
    border-color: ${props => props.theme.colors.background};
    transform: scale(1.05);
    box-shadow: ${props => props.theme.shadows.lg};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 56px;
    height: 56px;
    padding: 4px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 72px;
    height: 72px;
    padding: 8px;
  }
`;

export const ArrowIcon = styled.div`
  margin-left: auto;
  transition: ${props => props.theme.transitions.normal};
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px; /* controls react-icon size */

  ${MuscleGroupContainer}:hover & {
    transform: translateX(4px) scale(1.1);
    opacity: 0.8;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 20px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const MuscleNameText = styled.div`
  text-align: center;
  margin: 0 auto;
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: ${props => props.theme.shadows.sm};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  ${MuscleGroupContainer}:hover & {
    color: ${props => props.theme.colors.accent};
    transform: translateX(2px);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
  }
`;
