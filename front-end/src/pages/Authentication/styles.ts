import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme?: any) => ({
  container: {
    width: '100%',
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerText: {
    width: 547,
    position: 'absolute',

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
  },

  containerImg: {
    width: 562,
    height: 482,
    position: 'relative',
    top: '24%',
    left: '30%',

    '& img': {
      width: '100%',
      height: '100%',
    },
  },

  loginContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginContent: {
    width: 400,
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
