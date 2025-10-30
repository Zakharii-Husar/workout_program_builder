import styled from 'styled-components';

export const Field = styled.div``;

export const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  box-sizing: border-box;
  font-family: ${props => props.theme.typography.fontFamily.primary};
  transition: ${props => props.theme.transitions.fast};
  background: ${props => props.theme.colors.white};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.accentBlueLight};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
`;

export const InputCompact = styled(Input)`
  width: 96px;
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;


