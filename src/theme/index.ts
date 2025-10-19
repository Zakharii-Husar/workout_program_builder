export const theme = {
  colors: {
    // Modern fitness app color palette
    primary: '#1a1a1a', // Dark charcoal
    secondary: '#ff6b35', // Vibrant orange
    accent: '#4ecdc4', // Teal accent
    background: '#0f0f0f', // Deep black
    surface: '#1e1e1e', // Dark surface
    surfaceLight: '#2a2a2a', // Lighter surface
    text: '#ffffff', // Pure white
    textSecondary: '#b3b3b3', // Light gray
    textMuted: '#666666', // Medium gray
    success: '#4caf50', // Green
    warning: '#ff9800', // Orange
    error: '#f44336', // Red
    border: '#333333', // Dark border
    borderLight: '#444444', // Light border
    shadow: 'rgba(0, 0, 0, 0.3)', // Shadow
    gradient: {
      primary: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      secondary: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
      dark: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    }
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    xxl: '3rem',   // 48px
    xxxl: '4rem',  // 64px
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
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
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
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(255, 107, 53, 0.3)',
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
