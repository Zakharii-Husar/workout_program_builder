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
  background: ${props => props.theme.colors.surface};
  margin: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.border};
  transition: ${props => props.theme.transitions.fast};
  animation: ${fadeIn} 0.5s ease-out;
  box-shadow: ${props => props.theme.shadows.sm};
  min-height: 64px;
  gap: ${props => props.theme.spacing.sm};

  &:hover {
    background: ${props => props.theme.colors.surfaceLight};
    border-color: ${props => props.theme.colors.borderLight};
    transform: translateY(-0.5px);
    box-shadow: ${props => props.theme.shadows.sm};
  }

  &:nth-child(even) {
    animation: ${slideIn} 0.5s ease-out;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.xs};
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    min-height: 56px;
    gap: ${props => props.theme.spacing.xs};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    min-height: 72px;
  }
`;

export const ExerciseName = styled.div`
  flex: 1;
  text-align: left;
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  line-height: ${props => props.theme.typography.lineHeight.normal};
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};
  padding: 0 ${props => props.theme.spacing.sm};
  display: flex;
  align-items: center;
  min-height: 32px;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.sm};
    padding: 0 ${props => props.theme.spacing.xs};
    min-height: 28px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
    min-height: 36px;
  }
`;

export const Icon1 = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.sm};
    border: 1px solid ${props => props.theme.colors.border};
    background-color: rgba(255, 255, 255, 0.9);
    padding: 3px;
    transition: ${props => props.theme.transitions.fast};
    box-shadow: ${props => props.theme.shadows.sm};

    &:hover {
      border-color: ${props => props.theme.colors.secondary};
      transform: scale(1.02);
      box-shadow: ${props => props.theme.shadows.sm};
    }
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors.textSecondary};
    transition: ${props => props.theme.transitions.fast};

    &:hover {
      color: ${props => props.theme.colors.secondary};
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 56px;
    height: 56px;
    
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const Icon2 = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.sm};
    border: 1px solid ${props => props.theme.colors.border};
    background-color: rgba(255, 255, 255, 0.9);
    padding: 2px;
    transition: ${props => props.theme.transitions.fast};
    box-shadow: ${props => props.theme.shadows.sm};

    &:hover {
      border-color: ${props => props.theme.colors.secondary};
      transform: scale(1.02);
      box-shadow: ${props => props.theme.shadows.sm};
    }
  }
  
  svg {
    width: 24px;
    height: 24px;
    padding: ${props => props.theme.spacing.xs};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius.full};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.fast};
    border: 1px solid ${props => props.theme.colors.border};

    &:hover {
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.background};
      transform: translateY(-2px) scale(1.1);
      box-shadow: ${props => props.theme.shadows.lg};
      border-color: transparent;
    }

    &:active {
      transform: translateY(0) scale(1.05);
    }

    /* Special styling for remove/trash icons */
    &[data-icon-type="remove"] {
      padding: 2px;
      background: ${props => props.theme.colors.surface};
      border: 2px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.textSecondary};
      border-radius: ${props => props.theme.borderRadius.sm};

      &:hover {
        background: ${props => props.theme.colors.error || '#ff4444'};
        color: ${props => props.theme.colors.background};
        border-color: ${props => props.theme.colors.error || '#ff4444'};
        transform: translateY(-1px) scale(1.05);
        box-shadow: ${props => props.theme.shadows.md};
      }
    }

    /* Special styling for square icons (dot case) */
    &[data-icon-type="square"] {
      background: transparent;
      border: 2px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.textSecondary};
      border-radius: ${props => props.theme.borderRadius.sm};
      padding: ${props => props.theme.spacing.xs};

      &:hover {
        background: ${props => props.theme.colors.surface};
        color: ${props => props.theme.colors.secondary};
        border-color: ${props => props.theme.colors.secondary};
        transform: translateY(-1px) scale(1.05);
        box-shadow: ${props => props.theme.shadows.md};
      }

      &[data-checked="true"] {
        background: ${props => props.theme.colors.success};
        color: ${props => props.theme.colors.background};
        border-color: ${props => props.theme.colors.success};
        
        &:hover {
          background: ${props => props.theme.colors.success};
          color: ${props => props.theme.colors.background};
          transform: translateY(-1px) scale(1.05);
          box-shadow: ${props => props.theme.shadows.lg};
        }
      }
    }

    /* Special styling for edit icons */
    &[data-icon-type="edit"] {
      padding: 2px;
      background: ${props => props.theme.colors.surface};
      border: 2px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.textSecondary};
      border-radius: ${props => props.theme.borderRadius.sm};

      &:hover {
        background: ${props => props.theme.colors.warning || '#ffa500'};
        color: ${props => props.theme.colors.background};
        border-color: ${props => props.theme.colors.warning || '#ffa500'};
        transform: translateY(-1px) scale(1.05);
        box-shadow: ${props => props.theme.shadows.md};
      }
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 36px;
    height: 36px;
    
    svg {
      width: 28px;
      height: 28px;
      padding: ${props => props.theme.spacing.xs};
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 44px;
    height: 44px;
    
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;
