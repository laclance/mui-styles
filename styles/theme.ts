import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: { main: '#005174', dark: '#1D6C87', light: '#009689', contrastText: 'white' },
    secondary: { main: '#0085B9', dark: '#06A3B1', light: '#86DDFF', contrastText: 'white' },
    text: {
      primary: '#00BEE3',
      secondary: '#1083a6'
    },
    info: {
      main: '#8a6de9'
    },
    success: {
      main: '#33cd5f'
    },
    error: {
      main: '#D93600'
    },
    action: {
      disabledBackground: '',
      disabled: ''
    }
  },
  typography: {
    fontFamily: 'MyriadPro, Arimo, Verdana, "Helvetica Neue", Helvetica, Arial',
    h6: {
      fontSize: 22
    },
    body1: {
      fontSize: 18
    },
    button: {
      fontFamily: 'MyriadProBold, Oswald, Arimo, "trebuchet ms", verdana, arial',
      textTransform: 'none',
      '&.Mui-focused': {
        opacity: 0.8
      }
    }
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {}
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '6px 16px 0px',
          '&.Mui-focused': {},
          '&.Mui-disabled': {
            opacity: 0.3
          },
          '&:hover': {
            opacity: 0.5,
            backgroundColor: '#005174'
          }
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          margin: 0
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard'
      }
    }
  }
});
