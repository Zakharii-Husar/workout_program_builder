import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.typography.fontFamily.primary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  #root {
    min-height: 100vh;
  }
`;
