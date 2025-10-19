import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ExercisesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

export const ChosenExercisesContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${props => props.theme.colors.gradient.dark};
  border-bottom: 2px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.md};
`;

export const ChosenExercise = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  justify-content: center;
  align-items: center;
  min-height: 60px;

  img {
    width: 40px;
    height: 40px;
    border-radius: ${props => props.theme.borderRadius.md};
    border: 2px solid ${props => props.theme.colors.border};
    transition: ${props => props.theme.transitions.fast};
    box-shadow: ${props => props.theme.shadows.sm};

    &:hover {
      transform: scale(1.1);
      border-color: ${props => props.theme.colors.secondary};
      box-shadow: ${props => props.theme.shadows.md};
    }
  }
`;

export const ControlButtons = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.gradient.dark};
  border-top: 2px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.lg};

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
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.lg};
    }

    &:active {
      transform: translateY(0);
    }

    &:nth-child(1) {
      background: ${props => props.theme.colors.error};
      color: ${props => props.theme.colors.text};
      border-color: transparent;

      &:hover {
        background: ${props => props.theme.colors.error};
        transform: translateY(-2px) scale(1.1);
      }
    }

    &:nth-child(2) {
      background: ${props => props.theme.colors.warning};
      color: ${props => props.theme.colors.background};
      border-color: transparent;

      &:hover {
        background: ${props => props.theme.colors.warning};
        transform: translateY(-2px) scale(1.1);
      }
    }

    &:nth-child(3) {
      background: ${props => props.theme.colors.gradient.primary};
      color: ${props => props.theme.colors.background};
      border-color: transparent;

      &:hover {
        transform: translateY(-2px) scale(1.1);
        box-shadow: ${props => props.theme.shadows.glow};
      }
    }
  }
`;

export const MuscleGroupContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.gradient.dark};
  padding: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};
  border: 2px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.sm};
  animation: ${slideIn} 0.5s ease-out;
  min-height: 80px;
  gap: ${props => props.theme.spacing.md};

  &:hover {
    background: ${props => props.theme.colors.surfaceLight};
    border-color: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
    margin: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    min-height: 70px;
    gap: ${props => props.theme.spacing.sm};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xl};
    margin: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    min-height: 90px;
  }
`;

export const MuscleIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.borderRadius.md};
  border: 2px solid ${props => props.theme.colors.border};
  transition: ${props => props.theme.transitions.fast};
  flex-shrink: 0;

  ${MuscleGroupContainer}:hover & {
    border-color: ${props => props.theme.colors.secondary};
    transform: scale(1.05);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 70px;
    height: 70px;
  }
`;

export const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  transition: ${props => props.theme.transitions.fast};
  filter: invert(1);
  flex-shrink: 0;

  ${MuscleGroupContainer}:hover & {
    transform: translateX(4px);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 28px;
    height: 28px;
  }
`;

export const MuscleNameText = styled.div`
  text-align: center;
  margin: 0 auto;
  font-family: ${props => props.theme.typography.fontFamily.muscle};
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${MuscleGroupContainer}:hover & {
    color: ${props => props.theme.colors.secondary};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.xl};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
  }
`;

// Media query for mobile
export const MobileExercisesContainer = styled(ExercisesContainer)`
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
