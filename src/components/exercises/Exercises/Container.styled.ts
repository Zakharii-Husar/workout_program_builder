import styled from 'styled-components';

export const ExercisesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.lg};
  padding-top: calc(80px + ${props => props.theme.spacing.lg});
  padding-bottom: calc(120px + ${props => props.theme.spacing.lg});
  gap: ${props => props.theme.spacing.lg};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
    padding-top: calc(70px + ${props => props.theme.spacing.md});
    padding-bottom: calc(100px + ${props => props.theme.spacing.md});
    gap: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xl};
    padding-top: calc(90px + ${props => props.theme.spacing.xl});
    padding-bottom: calc(140px + ${props => props.theme.spacing.xl});
    gap: ${props => props.theme.spacing.xl};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: ${props => props.theme.spacing.xxxl};
    padding-top: calc(90px + ${props => props.theme.spacing.xxxl});
    padding-bottom: calc(140px + ${props => props.theme.spacing.xxxl});
    gap: ${props => props.theme.spacing.xxxl};
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 100%;
`;

// Media query for mobile
export const MobileExercisesContainer = styled(ExercisesContainer)`
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
