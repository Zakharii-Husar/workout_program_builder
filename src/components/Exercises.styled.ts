import styled from 'styled-components';

export const ExercisesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MuscleName = styled.div`
  font-family: ${props => props.theme.typography.fontFamily.muscle};
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  text-shadow: 1px 1px 2px white;
`;

export const ChosenExercisesContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.colors.surface};
`;

export const ChosenExercise = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  * {
    width: 2rem;
    border: 2px solid black;
  }
`;

export const ControlButtons = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.background};

  * {
    width: 1.5rem;
    padding: ${props => props.theme.spacing.sm} 0;
  }
`;

export const MuscleGroupContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.md} 0;
  width: 100%;
  font-size: ${props => props.theme.typography.fontSize.lg};
  cursor: pointer;
`;

export const MuscleIcon = styled.img`
  width: 20%;
  margin-left: 5%;
`;

export const ArrowIcon = styled.img`
  width: 10%;
  margin-right: 5%;
`;

export const MuscleNameText = styled.div`
  text-align: center;
  margin: 0 auto;
  font-size: ${props => props.theme.typography.fontSize.xl};
`;

// Media query for mobile
export const MobileExercisesContainer = styled(ExercisesContainer)`
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
