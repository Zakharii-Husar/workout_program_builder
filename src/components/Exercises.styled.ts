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
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding: 0;
  box-shadow: ${props => props.theme.shadows.sm};
  display: flex;
  align-items: center;
  position: relative;
`;

export const ChosenExercise = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0;
  justify-content: flex-start;
  align-items: center;
  min-height: 48px;
  padding: ${props => props.theme.spacing.sm};
  overflow-x: auto;
  overflow-y: hidden;
  flex: 1;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Hide scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: ${props => props.theme.borderRadius.sm};
    border: 1px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.white}E6;
    padding: 4px;
    transition: ${props => props.theme.transitions.fast};
    box-shadow: ${props => props.theme.shadows.sm};
    margin-right: ${props => props.theme.spacing.xs};

    &:hover {
      transform: scale(1.05);
      border-color: ${props => props.theme.colors.secondary};
      box-shadow: ${props => props.theme.shadows.sm};
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xs};
    
    img {
      width: 40px;
      height: 40px;
      padding: 3px;
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.md};
    
    img {
      width: 56px;
      height: 56px;
      padding: 5px;
    }
  }
`;

export const ExerciseContainer = styled.div`
  position: relative;
  margin-right: ${props => props.theme.spacing.xs};
  flex-shrink: 0;

  &:last-child {
    margin-right: 0;
  }
`;

export const ExerciseCountBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${props => props.theme.colors.error};
  color: ${props => props.theme.colors.white};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.md};
  z-index: 1;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 18px;
    height: 18px;
    font-size: 10px;
    top: -6px;
    right: -6px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 22px;
    height: 22px;
    font-size: 13px;
    top: -9px;
    right: -9px;
  }
`;

export const ScrollButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  ${props => props.$position}: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.black};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.black}66;
  }
`;

export const ControlButtons = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.gradient.dark};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.md};

  svg {
    width: 36px;
    height: 100%;
    padding: ${props => props.theme.spacing.xs};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius.full};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.fast};
    border: 1px solid ${props => props.theme.colors.border};

    &:hover {
      transform: translateY(-1px);
      box-shadow: ${props => props.theme.shadows.md};
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
        transform: translateY(-1px) scale(1.05);
      }
    }

    &:nth-child(2) {
      background: ${props => props.theme.colors.warning};
      color: ${props => props.theme.colors.background};
      border-color: transparent;

      &:hover {
        background: ${props => props.theme.colors.warning};
        transform: translateY(-1px) scale(1.05);
      }
    }

    &:nth-child(3) {
      background: ${props => props.theme.colors.gradient.primary};
      color: ${props => props.theme.colors.background};
      border-color: transparent;

      &:hover {
        transform: translateY(-1px) scale(1.05);
        box-shadow: ${props => props.theme.shadows.glow};
      }
    }
  }
`;

export const MuscleGroupContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.gradient.dark};
  padding: ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.sm};
  animation: ${slideIn} 0.5s ease-out;
  min-height: 64px;
  gap: ${props => props.theme.spacing.sm};

  &:hover {
    background: ${props => props.theme.colors.surfaceLight};
    border-color: ${props => props.theme.colors.secondary};
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.sm};
    margin: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.xs};
    min-height: 56px;
    gap: ${props => props.theme.spacing.xs};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.lg};
    margin: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    min-height: 72px;
  }
`;

export const MuscleIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.sm};
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.white}E6;
  padding: 4px;
  transition: ${props => props.theme.transitions.fast};
  flex-shrink: 0;

  ${MuscleGroupContainer}:hover & {
    border-color: ${props => props.theme.colors.secondary};
    transform: scale(1.02);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    padding: 3px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 56px;
    height: 56px;
    padding: 5px;
  }
`;

export const ArrowIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: auto;
  transition: ${props => props.theme.transitions.fast};
  filter: invert(1);
  flex-shrink: 0;

  ${MuscleGroupContainer}:hover & {
    transform: translateX(2px);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 16px;
    height: 16px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`;

export const MuscleNameText = styled.div`
  text-align: center;
  margin: 0 auto;
  font-family: ${props => props.theme.typography.fontFamily.muscle};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: ${props => props.theme.shadows.sm};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${MuscleGroupContainer}:hover & {
    color: ${props => props.theme.colors.secondary};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.base};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.xl};
  }
`;

export const ControlButton = styled.div<{ $isVisible?: boolean }>`
  display: ${props => props.$isVisible !== undefined ? (props.$isVisible ? 'flex' : 'none') : 'flex'};
`;

// Media query for mobile
export const MobileExercisesContainer = styled(ExercisesContainer)`
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
