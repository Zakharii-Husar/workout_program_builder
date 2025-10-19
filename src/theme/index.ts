export const theme = {
  colors: {
    // Current colors from CSS files
    primary: '#0000FF', // blue
    secondary: '#FFFF00', // yellow
    background: '#000000', // black
    surface: '#FF0000', // red
    text: '#FFFFFF', // white
    textSecondary: '#000000', // black
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  typography: {
    fontFamily: {
      primary: "'Special Elite', sans-serif",
      display: "'Tourney', sans-serif",
      muscle: "'Black Ops One', sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
  },
  breakpoints: {
    mobile: '600px',
  },
  animations: {
    fadeIn: `
      @keyframes fadeIn {
        from {
          opacity: 0;
          background-color: red;
        }
        to {
          opacity: 1;
          background-color: blue;
        }
      }
    `,
    fadeOut: `
      @keyframes fadeOut {
        from {
          opacity: 0;
          background-color: blue;
        }
        to {
          opacity: 1;
          background-color: yellow;
        }
      }
    `,
  },
};

export type Theme = typeof theme;
