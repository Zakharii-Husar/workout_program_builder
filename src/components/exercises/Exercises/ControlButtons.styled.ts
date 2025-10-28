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
  background: ${props => props.theme.colors.white};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.lg};
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
    background: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.borderRadius.md};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.fast};
    border: 1px solid ${props => props.theme.colors.border};
    box-shadow: ${props => props.theme.shadows.sm};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.md};
    }

    &:active {
      transform: translateY(0);
    }

    &:nth-child(1) {
      background: ${props => props.theme.colors.accentRed};
      color: ${props => props.theme.colors.white};
      border-color: transparent;

      &:hover {
        background: #b91c1c;
      }
    }

    &:nth-child(2) {
      background: ${props => props.theme.colors.accentAmber};
      color: ${props => props.theme.colors.white};
      border-color: transparent;

      &:hover {
        background: #d97706;
      }
    }

    &:nth-child(3) {
      background: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.white};
      border-color: transparent;

      &:hover {
        background: #1d4ed8;
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
