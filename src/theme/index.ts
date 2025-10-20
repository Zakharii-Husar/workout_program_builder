export const theme = {
  colors: {
    // New neutral color palette
    black: '#111111',           // Black - deep, sophisticated
    ivory: '#FAFAF8',           // Ivory - warm, clean white
    taupe: '#D2C7BA',           // Taupe - earthy, balanced
    warmGray: '#8E8E8E',        // Warm Gray - neutral, readable
    dustyBrown: '#B89F8A',      // Hint of Dusty Brown - warm accent
    white: '#FFFFFF',           // Pure white (for high contrast elements)
    
    // 5 Main Theme Colors with proper contrast
    primary: '#111111',         // Black - for primary actions, important elements
    secondary: '#8E8E8E',       // Warm Gray - for secondary actions, less important elements  
    accent: '#B89F8A',          // Dusty Brown - for accents, highlights, interactive elements
    background: '#FAFAF8',      // Ivory - main background color
    surface: '#D2C7BA',         // Taupe - for cards, containers, surfaces
    
    // Text colors based on background
    text: '#111111',            // Black text on light backgrounds (background, surface)
    textOnPrimary: '#FAFAF8',   // Ivory text on primary (black) background
    textOnSecondary: '#FAFAF8', // Ivory text on secondary (gray) background
    textOnAccent: '#111111',    // Black text on accent (dusty brown) background
    
    // Semantic mappings using the 5 main colors
    success: '#8E8E8E',         // Warm Gray for success states
    warning: '#B89F8A',         // Dusty Brown for warning states
    error: '#111111',           // Black for error states
    border: '#D2C7BA',          // Taupe for borders
    borderLight: '#8E8E8E',     // Warm Gray for light borders
    shadow: 'rgba(17, 17, 17, 0.1)', // Black shadow
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.375rem', // 6px
    md: '0.75rem',  // 12px
    lg: '1rem',     // 16px
    xl: '1.25rem',  // 20px
    xxl: '1.5rem',  // 24px
    xxxl: '2rem',   // 32px
  },
  typography: {
    fontFamily: {
      primary: "'Source Serif Pro', 'Georgia', serif",
      display: "'Playfair Display', 'Georgia', serif",
      muscle: "'Orbitron', 'Courier New', monospace",
      timer: "'Orbitron', 'Courier New', monospace",
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '0.875rem', // 14px
      lg: '1rem',      // 16px
      xl: '1.125rem',  // 18px
      '2xl': '1.25rem', // 20px
      '3xl': '1.5rem',  // 24px
      '4xl': '1.875rem', // 30px
      '5xl': '2.25rem',  // 36px
      '6xl': '2.5rem',   // 40px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    }
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  borderRadius: {
    sm: '0.25rem',  // 4px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1rem',     // 16px
    full: '9999px', // Full rounded
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(17, 17, 17, 0.05)',
    md: '0 4px 6px -1px rgba(17, 17, 17, 0.1), 0 2px 4px -1px rgba(17, 17, 17, 0.06)',
    lg: '0 10px 15px -3px rgba(17, 17, 17, 0.1), 0 4px 6px -2px rgba(17, 17, 17, 0.05)',
    xl: '0 20px 25px -5px rgba(17, 17, 17, 0.1), 0 10px 10px -5px rgba(17, 17, 17, 0.04)',
    glow: '0 0 20px rgba(17, 17, 17, 0.2)',
    warmGlow: '0 0 20px rgba(184, 159, 138, 0.3)',
    taupeGlow: '0 0 20px rgba(210, 199, 186, 0.3)',
  },
  animations: {
    fadeIn: `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
    slideIn: `
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `,
    pulse: `
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }
    `,
    bounce: `
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
          transform: translate3d(0,0,0);
        }
        40%, 43% {
          transform: translate3d(0, -8px, 0);
        }
        70% {
          transform: translate3d(0, -4px, 0);
        }
        90% {
          transform: translate3d(0, -2px, 0);
        }
      }
    `,
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  }
};

export type Theme = typeof theme;
