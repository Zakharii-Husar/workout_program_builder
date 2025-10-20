import styled, { keyframes } from 'styled-components';

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

export const ExerciseName = styled.div<{ $isCentered?: boolean }>`
  flex: 1;
  text-align: left;
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.$isCentered ? props.theme.typography.fontSize['3xl'] : props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  line-height: ${props => props.theme.typography.lineHeight.tight};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  padding: 0 ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-left: ${props => props.$isCentered ? '5%' : 'auto'};
  position: relative;
  z-index: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.colors.accent};
    transform: translateX(2px);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.$isCentered ? props.theme.typography.fontSize['2xl'] : props.theme.typography.fontSize.lg};
    padding: 0 ${props => props.theme.spacing.md};
    min-height: 36px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.$isCentered ? props.theme.typography.fontSize['4xl'] : props.theme.typography.fontSize['2xl']};
    min-height: 44px;
  }
`;

export const Icon1 = styled.div<{ $hidden?: boolean }>`
  width: 64px;
  height: 64px;
  display: ${props => props.$hidden ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.lg};
    border: 2px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.white}E6;
    padding: 4px;
    transition: ${props => props.theme.transitions.normal};
    box-shadow: ${props => props.theme.shadows.md};

    &:hover {
      border-color: ${props => props.theme.colors.accent};
      transform: scale(1.05);
      box-shadow: ${props => props.theme.shadows.lg};
    }
  }
  
  svg {
    width: 32px;
    height: 32px;
    color: ${props => props.theme.colors.text};
    transition: ${props => props.theme.transitions.normal};

    &:hover {
      color: ${props => props.theme.colors.accent};
      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 56px;
    height: 56px;
    
    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 72px;
    height: 72px;
    
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const AddSetButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  cursor: pointer;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.background};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  font-family: ${props => props.theme.typography.fontFamily.display};
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.md};
  min-width: 80px;
  max-width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px) scale(1.05);
    box-shadow: ${props => props.theme.shadows.lg};
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
    box-shadow: ${props => props.theme.shadows.md};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.xs};
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    min-width: 70px;
    max-width: 100px;
    height: 36px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.base};
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    min-width: 90px;
    max-width: 140px;
    height: 44px;
  }
`;

export const ExercisesListWrapper = styled.div<{ $isVisible: boolean }>`
  display: ${props => props.$isVisible ? 'block' : 'none'};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: ${props => props.theme.transitions.normal};
  width: 100%;
  max-width: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  align-items: center;
  padding-right: ${props => props.theme.spacing.sm};
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding-right: ${props => props.theme.spacing.md};
    gap: ${props => props.theme.spacing.sm};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-right: ${props => props.theme.spacing.xl};
    gap: ${props => props.theme.spacing.lg};
  }
`;

export const Icon2 = styled.div`
  width: 56px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.lg};
    border: 2px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.white}E6;
    padding: 3px;
    transition: ${props => props.theme.transitions.normal};
    box-shadow: ${props => props.theme.shadows.md};

    &:hover {
      border-color: ${props => props.theme.colors.accent};
      transform: scale(1.05);
      box-shadow: ${props => props.theme.shadows.lg};
    }
  }
  
  svg {
    width: 32px;
    height: 32px;
    padding: ${props => props.theme.spacing.sm};
    background: linear-gradient(135deg, ${props => props.theme.colors.surface}, ${props => props.theme.colors.background});
    border-radius: ${props => props.theme.borderRadius.lg};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.normal};
    border: 2px solid ${props => props.theme.colors.border};
    box-shadow: ${props => props.theme.shadows.sm};

    &:hover {
      background: linear-gradient(135deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
      color: ${props => props.theme.colors.background};
      transform: translateY(-3px) scale(1.1);
      box-shadow: ${props => props.theme.shadows.lg};
      border-color: transparent;
    }

    &:active {
      transform: translateY(-1px) scale(1.05);
    }

    /* Special styling for remove/trash icons */
    &[data-icon-type="remove"] {
      padding: ${props => props.theme.spacing.sm};
      background: linear-gradient(135deg, ${props => props.theme.colors.surface}, ${props => props.theme.colors.background});
      border: 2px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.text};
      border-radius: ${props => props.theme.borderRadius.lg};

      &:hover {
        background: linear-gradient(135deg, ${props => props.theme.colors.error}, ${props => props.theme.colors.primary});
        color: ${props => props.theme.colors.white};
        border-color: transparent;
        transform: translateY(-3px) scale(1.1);
        box-shadow: ${props => props.theme.shadows.lg};
      }
    }

    /* Special styling for square icons (dot case) */
    &[data-icon-type="square"] {
      background: transparent;
      border: 2px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.text};
      border-radius: ${props => props.theme.borderRadius.lg};
      padding: ${props => props.theme.spacing.sm};

      &:hover {
        background: linear-gradient(135deg, ${props => props.theme.colors.surface}, ${props => props.theme.colors.background});
        color: ${props => props.theme.colors.accent};
        border-color: ${props => props.theme.colors.accent};
        transform: translateY(-2px) scale(1.05);
        box-shadow: ${props => props.theme.shadows.md};
      }

      &[data-checked="true"] {
        background: linear-gradient(135deg, ${props => props.theme.colors.success}, ${props => props.theme.colors.accent});
        color: ${props => props.theme.colors.background};
        border-color: transparent;
        
        &:hover {
          background: linear-gradient(135deg, ${props => props.theme.colors.success}, ${props => props.theme.colors.accent});
          color: ${props => props.theme.colors.background};
          transform: translateY(-2px) scale(1.05);
          box-shadow: ${props => props.theme.shadows.lg};
        }
      }
    }

    /* Special styling for edit icons */
    &[data-icon-type="edit"] {
      padding: ${props => props.theme.spacing.sm};
      background: linear-gradient(135deg, ${props => props.theme.colors.surface}, ${props => props.theme.colors.background});
      border: 2px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.text};
      border-radius: ${props => props.theme.borderRadius.lg};

      &:hover {
        background: linear-gradient(135deg, ${props => props.theme.colors.warning}, ${props => props.theme.colors.accent});
        color: ${props => props.theme.colors.white};
        border-color: transparent;
        transform: translateY(-3px) scale(1.1);
        box-shadow: ${props => props.theme.shadows.lg};
      }
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 48px;
    height: 36px;
    
    svg {
      width: 28px;
      height: 28px;
      padding: ${props => props.theme.spacing.xs};
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 64px;
    height: 44px;
    
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
