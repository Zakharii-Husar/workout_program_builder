import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    background-color: red;
  }
  to {
    opacity: 1;
    background-color: blue;
  }
`;

export const ExercisesListContainer = styled.div`
  font-family: ${props => props.theme.typography.fontFamily.primary};
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  padding: ${props => props.theme.spacing.md} 0;
  width: 100%;
  font-size: ${props => props.theme.typography.fontSize.lg};
  animation: ${fadeIn} 1.5s;
  overflow: initial;

  > img {
    /* Empty rule for now */
  }
`;

export const ExerciseName = styled.div`
  text-align: center;
  margin: 0 auto;
  font-size: ${props => props.theme.typography.fontSize.xl};
`;

export const Icon1 = styled.div`
  width: 20%;
  margin-left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: auto;
  }
  
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const Icon2 = styled.div`
  width: 10%;
  margin-right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: auto;
  }
  
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
