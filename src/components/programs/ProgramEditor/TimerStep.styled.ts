import styled from 'styled-components';

export const SetTimer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, ${props => props.theme.colors.background}, ${props => props.theme.colors.surface});
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  border: 2px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}05, ${props => props.theme.colors.accent}05);
    border-radius: ${props => props.theme.borderRadius.xl};
  }

  > div {
    font-family: ${props => props.theme.typography.fontFamily.timer};
    font-size: ${props => props.theme.typography.fontSize['4xl']};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text};
    text-shadow: ${props => props.theme.shadows.sm};
    letter-spacing: 3px;
    margin-right: ${props => props.theme.spacing.lg};
    font-variant-numeric: tabular-nums;
    position: relative;
    z-index: 1;

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: ${props => props.theme.typography.fontSize['3xl']};
      letter-spacing: 2px;
      margin-right: ${props => props.theme.spacing.md};
    }
  }
`;

export const EditTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  position: relative;
  z-index: 1;

  svg {
    width: 40px;
    height: 40px;
    padding: ${props => props.theme.spacing.sm};
    background: linear-gradient(135deg, ${props => props.theme.colors.surface}, ${props => props.theme.colors.background});
    border-radius: ${props => props.theme.borderRadius.full};
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: ${props => props.theme.transitions.normal};
    border: 2px solid ${props => props.theme.colors.border};
    box-shadow: ${props => props.theme.shadows.sm};

    &:hover {
      background: linear-gradient(135deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
      color: ${props => props.theme.colors.background};
      transform: translateY(-2px) scale(1.1);
      box-shadow: ${props => props.theme.shadows.lg};
      border-color: transparent;
    }

    &:active {
      transform: translateY(0) scale(1.05);
    }

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 36px;
      height: 36px;
      padding: ${props => props.theme.spacing.xs};
    }
  }
`;
