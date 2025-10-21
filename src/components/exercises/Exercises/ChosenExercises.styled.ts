import styled from 'styled-components';

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
