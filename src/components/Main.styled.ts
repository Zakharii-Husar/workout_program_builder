import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 0;
    background-color: blue;
  }
  to {
    opacity: 1;
    background-color: yellow;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
`;

export const EmptyState = styled.div`
  font-size: xx-large;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xl};
`;

export const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${props => props.theme.spacing.md} 0;
  background-color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  cursor: pointer;
  animation: ${fadeOut} 1.5s;
`;
