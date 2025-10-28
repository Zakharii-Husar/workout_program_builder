export const theme = {
  colors: {
    // Modern minimalist color palette
    black: '#0A0A0A',           // Deep black - ultra minimal
    white: '#FFFFFF',           // Pure white
    gray50: '#FAFAFA',          // Background gray
    gray100: '#F5F5F5',         // Light gray surfaces
    gray200: '#E5E5E5',         // Borders
    gray300: '#D4D4D4',         // Light dividers
    gray400: '#A3A3A3',         // Muted text
    gray500: '#737373',         // Secondary text
    gray600: '#525252',         // Primary text
    gray900: '#171717',         // Dark surfaces
    accentBlue: '#2563EB',      // Modern blue accent
    accentBlueLight: '#DBEAFE', // Light blue background
    accentGreen: '#16A34A',     // Success green
    accentRed: '#DC2626',       // Error red
    accentAmber: '#F59E0B',     // Warning amber
    
    // Main Theme Colors
    primary: '#0A0A0A',         // Deep black for primary actions
    secondary: '#525252',       // Gray for secondary elements
    accent: '#2563EB',          // Modern blue for accents
    background: '#FFFFFF',      // White background
    surface: '#FAFAFA',         // Light gray for cards
    
    // Text colors
    text: '#171717',            // Primary text
    textSecondary: '#525252',   // Secondary text
    textMuted: '#A3A3A3',       // Muted text
    textOnPrimary: '#FFFFFF',   // White text on dark
    textOnAccent: '#FFFFFF',    // White text on accent
    
    // Semantic colors
    success: '#16A34A',
    warning: '#F59E0B',
    error: '#DC2626',
    info: '#2563EB',
    border: '#E5E5E5',
    borderLight: '#F5F5F5',
    shadow: 'rgba(10, 10, 10, 0.04)',
    shadowMedium: 'rgba(10, 10, 10, 0.08)',
    shadowLarge: 'rgba(10, 10, 10, 0.12)',
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
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      handwriting: "'Kalam', cursive",
      timer: "'Space Mono', 'Courier New', monospace",
      muscle: "'Space Mono', 'Courier New', monospace",
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',   // 48px
      '6xl': '3.75rem', // 60px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
      wider: '0.05em',
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
    sm: '0 1px 2px rgba(10, 10, 10, 0.04)',
    md: '0 4px 8px rgba(10, 10, 10, 0.06)',
    lg: '0 8px 16px rgba(10, 10, 10, 0.08)',
    xl: '0 16px 32px rgba(10, 10, 10, 0.12)',
    inner: 'inset 0 2px 4px rgba(10, 10, 10, 0.04)',
    glow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
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
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  }
};

export type Theme = typeof theme;
