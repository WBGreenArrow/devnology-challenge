import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme?: any) => ({
  container: {
    width: '100%',
    height: '100%',

    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      paddingTop: 16,
      flexDirection: 'column-reverse',
      justifyContent: 'center',
    },
  },

  containerText: {
    maxWidth: 547,
    position: 'absolute',
    paddingBottom: 16,

    '& h1': {
      fontSize: 42,
      fontFamily: 'Poppins, sans-serif',
      color: '#1A194D',
      fontWeight: 700,
    },

    '& p': {
      fontSize: 14,
      fontFamily: 'Poppins, sans-serif',
      color: '#62618F',
      fontWeight: 500,
    },

    [theme.breakpoints.down('sm')]: {
      position: 'inherit',

      '& h1': {
        textAlign: 'center',
      },

      '& p': {
        textAlign: 'center',
      },
    },
  },

  containerImg: {
    maxWidth: 562,
    maxHeight: 482,
    width: '80%',
    height: 'auto',

    position: 'relative',
    top: '24%',
    left: '50%',

    '& img': {
      width: '100%',
      height: 'auto',
    },

    [theme.breakpoints.down('sm')]: {
      position: 'inherit',
      width: '100%',
    },
  },

  loginContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  loginContent: {
    maxWidth: 400,
    height: '490',
    '& > div': {
      paddingBottom: 16,
    },

    '& .MuiButton-containedPrimary': {
      borderRadius: 10,
      backgroundColor: '#EE4D38',
    },

    '& .MuiButton-containedPrimary:hover': {
      backgroundColor: '#EE4D38',
    },
  },

  loginInput: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#EAF0F7',
      fontSize: 16,
      fontFamily: 'Poppins, sans-serif',
      color: '#62618F',

      borderRadius: 10,
      '& fieldset': {
        border: 'none',
        outline: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
        outline: 'none',
      },
    },
  },

  loginInputPasswordHidden: {
    '& .MuiOutlinedInput-root': {
      fontWeight: 700,
    },
  },

  loginButton: {
    height: 61,
  },
}))
