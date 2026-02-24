import { createTheme } from '@mui/material/styles';

const buttonStyles = {
  borderRadius: '999px',
  textTransform: 'none',
  fontWeight: 600,
  background: '#1976d2',
  color: '#ffffff',
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
  '&:hover': {
    background: '#f0f0f0',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#222222',
      secondary: '#888888',
    },
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: buttonStyles,
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
    primary: {
      main: '#90caf9',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: buttonStyles,
      },
    },
  },
});