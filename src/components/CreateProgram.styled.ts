import styled from 'styled-components';

export const CreateProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
`;

export const AddExercisesButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  padding: ${props => props.theme.spacing.md} 0;
  border: none;
  cursor: pointer;
`;

export const TimerHeader = styled.h1`
  color: ${props => props.theme.colors.text};
`;

export const SetTimer = styled.div`
  font-family: ${props => props.theme.typography.fontFamily.display};
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  font-weight: 900;
  font-size: ${props => props.theme.typography.fontSize['5xl']};
  color: ${props => props.theme.colors.primary};
`;

export const EditTime = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => props.theme.spacing.sm};

  * {
    width: 3rem;
    margin: ${props => props.theme.spacing.sm} 0;
  }
`;

export const Exercise = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  > input {
    text-align: center;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: ${props => props.theme.spacing.sm} 0;
    font-size: ${props => props.theme.typography.fontSize.lg};
    border: none;
    outline: none;
  }
`;

export const NameOutput = styled.h1`
  font-size: ${props => props.theme.typography.fontSize['3xl']};
  color: ${props => props.theme.colors.primary};
`;

export const CancelOrSave = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: ${props => props.theme.spacing.md} 0;
  background-color: ${props => props.theme.colors.secondary};

  * {
    width: 10%;
  }
`;
