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
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.lg};
  padding-top: calc(80px + ${props => props.theme.spacing.lg});
  padding-bottom: calc(120px + ${props => props.theme.spacing.lg});
  gap: ${props => props.theme.spacing.lg};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
    padding-top: calc(70px + ${props => props.theme.spacing.md});
    padding-bottom: calc(100px + ${props => props.theme.spacing.md});
    gap: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xl};
    padding-top: calc(90px + ${props => props.theme.spacing.xl});
    padding-bottom: calc(140px + ${props => props.theme.spacing.xl});
    gap: ${props => props.theme.spacing.xl};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: ${props => props.theme.spacing.xxxl};
    padding-top: calc(90px + ${props => props.theme.spacing.xxxl});
    padding-bottom: calc(140px + ${props => props.theme.spacing.xxxl});
    gap: ${props => props.theme.spacing.xxxl};
  }
`;

export const ChosenExercisesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  border-bottom: 2px solid ${props => props.theme.colors.border};
  padding: 0;
  box-shadow: ${props => props.theme.shadows.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  height: 80px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    min-height: 70px;
    height: 70px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-height: 90px;
    height: 90px;
  }
`;

export const ChosenExercise = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: ${props => props.theme.spacing.lg};
  width: 100%;
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
    padding: ${props => props.theme.spacing.md};
    
    img {
      width: 40px;
      height: 40px;
      padding: 3px;
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xl};
    
    img {
      width: 56px;
      height: 56px;
      padding: 5px;
    }
  }
`;

export const PlaceholderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  text-align: center;
  opacity: 0.8;
  font-style: italic;
  letter-spacing: 0.5px;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.base};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.xl};
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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  border-top: 2px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.lg};
    gap: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xxl};
    gap: ${props => props.theme.spacing.xl};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: ${props => props.theme.spacing.xxxl};
  }

  svg {
    width: 48px;
    height: 48px;
    padding: ${props => props.theme.spacing.sm};
    background: linear-gradient(135deg, ${props => props.theme.colors.surface}, ${props => props.theme.colors.background});
    border-radius: ${props => props.theme.borderRadius.xl};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.normal};
    border: 2px solid ${props => props.theme.colors.border};
    box-shadow: ${props => props.theme.shadows.md};

    &:hover {
      transform: translateY(-3px) scale(1.1);
      box-shadow: ${props => props.theme.shadows.lg};
    }

    &:active {
      transform: translateY(-1px) scale(1.05);
    }

    &:nth-child(1) {
      background: linear-gradient(135deg, ${props => props.theme.colors.error}, ${props => props.theme.colors.primary});
      color: ${props => props.theme.colors.background};
      border-color: transparent;

      &:hover {
        background: linear-gradient(135deg, ${props => props.theme.colors.error}, ${props => props.theme.colors.accent});
        transform: translateY(-3px) scale(1.1);
        box-shadow: ${props => props.theme.shadows.lg};
      }
    }

    &:nth-child(2) {
      background: linear-gradient(135deg, ${props => props.theme.colors.warning}, ${props => props.theme.colors.accent});
      color: ${props => props.theme.colors.background};
      border-color: transparent;

      &:hover {
        background: linear-gradient(135deg, ${props => props.theme.colors.warning}, ${props => props.theme.colors.primary});
        transform: translateY(-3px) scale(1.1);
        box-shadow: ${props => props.theme.shadows.lg};
      }
    }

    &:nth-child(3) {
      background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
      color: ${props => props.theme.colors.background};
      border-color: transparent;

      &:hover {
        background: linear-gradient(135deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
        transform: translateY(-3px) scale(1.1);
        box-shadow: ${props => props.theme.shadows.lg}, ${props => props.theme.shadows.glow};
      }
    }

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 40px;
      height: 40px;
      padding: ${props => props.theme.spacing.xs};
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 56px;
      height: 56px;
      padding: ${props => props.theme.spacing.md};
    }
  }
`;

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

export const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  transition: ${props => props.theme.transitions.normal};
  filter: invert(0);
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  ${MuscleGroupContainer}:hover & {
    transform: translateX(4px) scale(1.1);
    filter: invert(0.5);
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

export const ControlButton = styled.div<{ $isVisible?: boolean }>`
  display: ${props => props.$isVisible !== undefined ? (props.$isVisible ? 'flex' : 'none') : 'flex'};
`;

export const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 100%;
`;

// Media query for mobile
export const MobileExercisesContainer = styled(ExercisesContainer)`
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
