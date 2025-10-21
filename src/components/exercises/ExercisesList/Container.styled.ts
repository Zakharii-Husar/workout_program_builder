import styled from 'styled-components';
import { fadeIn, slideIn } from './animations';

export const ExercisesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(135deg, ${props => props.theme.colors.surface}, ${props => props.theme.colors.background});
  margin: ${props => props.theme.spacing.md} 0;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 2px solid ${props => props.theme.colors.border};
  transition: ${props => props.theme.transitions.normal};
  animation: ${fadeIn} 0.5s ease-out;
  box-shadow: ${props => props.theme.shadows.md};
  min-height: 80px;
  gap: ${props => props.theme.spacing.lg};
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  z-index: 1;

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

  &:nth-child(even) {
    animation: ${slideIn} 0.5s ease-out;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: ${props => props.theme.spacing.sm} 0;
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    min-height: 70px;
    gap: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin: ${props => props.theme.spacing.lg} 0;
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.xxl};
    min-height: 90px;
    gap: ${props => props.theme.spacing.xl};
  }
`;

export const ExercisesListWrapper = styled.div<{ $isVisible: boolean }>`
  display: ${props => props.$isVisible ? 'block' : 'none'};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: ${props => props.theme.transitions.normal};
  width: 100%;
  max-width: 100%;
`;
