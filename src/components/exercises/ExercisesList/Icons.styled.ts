import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  align-items: center;
  padding-right: ${props => props.theme.spacing.sm};
  position: relative;
  z-index: 5;
  
  /* Ensure any pseudo-elements don't block pointer events */
  &::before,
  &::after {
    pointer-events: none;
  }
  
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
  position: relative;
  z-index: 10;
  
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
    transition: ${props => props.theme.transitions.fast};
    border: 1px solid ${props => props.theme.colors.border};
    position: relative;
    z-index: 11;
    pointer-events: auto;

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
