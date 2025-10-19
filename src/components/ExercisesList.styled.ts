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
  margin: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  transition: ${props => props.theme.transitions.fast};
  animation: ${fadeIn} 0.5s ease-out;
  box-shadow: ${props => props.theme.shadows.sm};
  min-height: 80px;
  gap: ${props => props.theme.spacing.md};

  &:hover {
    background: ${props => props.theme.colors.surfaceLight};
    border-color: ${props => props.theme.colors.borderLight};
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:nth-child(even) {
    animation: ${slideIn} 0.5s ease-out;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    min-height: 70px;
    gap: ${props => props.theme.spacing.sm};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
    min-height: 90px;
  }
`;

export const ExerciseName = styled.div`
  flex: 1;
  text-align: left;
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  line-height: ${props => props.theme.typography.lineHeight.normal};
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};
  padding: 0 ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  min-height: 40px;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.base};
    padding: 0 ${props => props.theme.spacing.sm};
    min-height: 35px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.xl};
    min-height: 45px;
  }
`;

export const Icon1 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.md};
    border: 2px solid ${props => props.theme.colors.border};
    transition: ${props => props.theme.transitions.fast};
    box-shadow: ${props => props.theme.shadows.sm};

    &:hover {
      border-color: ${props => props.theme.colors.secondary};
      transform: scale(1.05);
      box-shadow: ${props => props.theme.shadows.md};
    }
  }
  
  svg {
    width: 32px;
    height: 32px;
    color: ${props => props.theme.colors.textSecondary};
    transition: ${props => props.theme.transitions.fast};

    &:hover {
      color: ${props => props.theme.colors.secondary};
      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    
    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 70px;
    height: 70px;
    
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const Icon2 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.md};
    border: 2px solid ${props => props.theme.colors.border};
    transition: ${props => props.theme.transitions.fast};
    box-shadow: ${props => props.theme.shadows.sm};

    &:hover {
      border-color: ${props => props.theme.colors.secondary};
      transform: scale(1.05);
      box-shadow: ${props => props.theme.shadows.md};
    }
  }
  
  svg {
    width: 32px;
    height: 32px;
    padding: ${props => props.theme.spacing.sm};
    background: ${props => props.theme.colors.surface};
    border-radius: ${props => props.theme.borderRadius.full};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.fast};
    border: 2px solid ${props => props.theme.colors.border};

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
