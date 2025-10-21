import styled from 'styled-components';

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  > input {
    text-align: center;
    background: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.text};
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    font-size: ${props => props.theme.typography.fontSize.lg};
    font-family: ${props => props.theme.typography.fontFamily.primary};
    border: 2px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.lg};
    outline: none;
    transition: ${props => props.theme.transitions.normal};
    width: 100%;
    max-width: 400px;
    position: relative;
    z-index: 1;

    &:focus {
      border-color: ${props => props.theme.colors.accent};
      box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}1A;
      transform: translateY(-1px);
    }

    &::placeholder {
      color: ${props => props.theme.colors.warmGray};
      font-style: italic;
    }

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: ${props => props.theme.typography.fontSize.base};
      padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
      max-width: 300px;
    }
  }
`;

export const NameOutput = styled.h1`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['4xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg};
  letter-spacing: 1px;
  text-shadow: ${props => props.theme.shadows.sm};
  font-style: italic;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;
