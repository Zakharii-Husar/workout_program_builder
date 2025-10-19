import styled from 'styled-components';

export const StartProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
`;

export const ExitButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  padding: ${props => props.theme.spacing.md} 0;
  border: none;
  cursor: pointer;
  margin-top: ${props => props.theme.spacing.lg};
`;
