import styled from 'styled-components';

export const WorkoutFooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 100;
  background: ${props => props.theme.colors.white};
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  flex-wrap: wrap;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
    padding: ${props => props.theme.spacing.md};
  }
`;

export const WorkoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadows.sm};
  flex: 1;
  max-width: 200px;

  &:hover {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.textOnAccent};
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.sm};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    flex: none;
    width: 100%;
    max-width: none;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
    max-width: 220px;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 16px;
      height: 16px;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 20px;
      height: 20px;
    }
  }
`;

