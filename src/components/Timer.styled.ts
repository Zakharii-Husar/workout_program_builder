import styled from 'styled-components';

export const TimerContainer = styled.div`
  font-family: ${props => props.theme.typography.fontFamily.display};
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
`;

export const Display = styled.h2`
  text-align: center;
  justify-content: center;
  font-size: ${props => props.theme.typography.fontSize['2xl']};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  * {
    width: 2rem;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    * {
      width: 4rem;
    }
  }
`;

export const MobileDisplay = styled(Display)`
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
  }
`;
