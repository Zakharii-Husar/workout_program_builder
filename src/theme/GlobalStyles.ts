import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily.primary};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: ${props => props.theme.typography.lineHeight.normal};
    font-weight: ${props => props.theme.typography.fontWeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Typography improvements */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography.fontFamily.display};
    font-weight: ${props => props.theme.typography.fontWeight.semibold};
    line-height: ${props => props.theme.typography.lineHeight.tight};
    margin: 0;
    color: ${props => props.theme.colors.text};
    letter-spacing: ${props => props.theme.typography.letterSpacing.tight};
  }

  p {
    margin: 0;
    line-height: ${props => props.theme.typography.lineHeight.relaxed};
  }

  /* Button and interactive element improvements */
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    transition: ${props => props.theme.transitions.fast};
  }

  input, textarea {
    outline: none;
    border: none;
    background: transparent;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.md};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.borderLight};
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent};
    outline-offset: 2px;
    outline-radius: ${props => props.theme.borderRadius.md};
  }

  /* Selection styles */
  ::selection {
    background: ${props => props.theme.colors.accentBlueLight};
    color: ${props => props.theme.colors.text};
  }
`;
