import styled from 'styled-components';
import { fadeIn, slideIn } from './animations';

export const ExercisesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${props => props.theme.colors.white};
  margin: ${props => props.theme.spacing.md} 0;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  transition: ${props => props.theme.transitions.fast};
  animation: ${fadeIn} 0.5s ease-out;
  box-shadow: ${props => props.theme.shadows.sm};
  min-height: 80px;
  gap: ${props => props.theme.spacing.lg};
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  z-index: 1;

  &:hover {
    border-color: ${props => props.theme.colors.gray300};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
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
