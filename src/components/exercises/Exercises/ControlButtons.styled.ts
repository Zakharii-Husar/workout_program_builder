import styled from 'styled-components';

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

export const ControlButton = styled.div<{ $isVisible?: boolean }>`
  display: ${props => props.$isVisible !== undefined ? (props.$isVisible ? 'flex' : 'none') : 'flex'};
`;
