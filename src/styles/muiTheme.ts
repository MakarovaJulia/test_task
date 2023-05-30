import { alpha, createTheme, colors } from '@mui/material';
import { Theme } from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1208 + 48,
    },
  },
  spacing: 4,
  palette: {
    primary: {
      main: colors.teal[500],
    },
    secondary: {
      main: colors.indigo[800],
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '48px',
      lineHeight: '56px',
    },
    h2: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '34px',
      lineHeight: '40px',
    },
    h3: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '32px',
    },
    h4: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
    },
    h5: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: 375,
          backgroundColor: '#fff !important',
        },
        main: {
          flex: '1 0 auto',
        },
        '#root': {
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        '.router-link': {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        text: {
          backgroundColor: 'transparent',
          transition: 'all .4s ease',
          '&:hover': {
            color: '',
            backgroundColor: 'transparent',
          },
        },
        textPrimary: {
          color: '',
          '&:hover': {
            color: '',
            backgroundColor: 'transparent',
          },
        },
        textSecondary: {
          color: '',
          '&:hover': {
            color: '',
            backgroundColor: 'transparent',
          },
        },
        containedPrimary: {
          backgroundColor: colors.teal[500],
          boxShadow: 'none',
          fontWeight: 'bold',
          border: `1px solid ${alpha(colors.teal[700], 0.12)}`,
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: alpha(colors.teal[500], 0.7),
          },
        },
        containedSecondary: {
          backgroundColor: '#FAFAFA',
          boxShadow: 'none',
          color: colors.teal[500],
          fontWeight: 'bold',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          display: 'block',
          marginBottom: 8,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 40,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(0, 0, 0, 0.12)',
          borderRadius: 12,
          boxShadow: 'none',
        },
      },
    },
  },
});
