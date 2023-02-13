import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme?: any) => ({
  linkContainer: {
    width: '100%',
    height: '100%',
  },
  linkContent: {
    padding: '65px 72px',
    position: 'relative',
  },

  headerContainer: {
    width: '100%',
    height: 60,

    '& > h1': {
      fontSize: 32,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      color: '#1A194D',
    },
  },

  linkFormAdd: {
    display: 'flex',
    justifyContent: 'end',
    '& span': {
      width: 120,
      height: 38,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1A194D',

      cursor: 'pointer',
      fontSize: 16,
      borderRadius: 8,
      fontFamily: 'Poppins, sans-serif',
      color: '#FFF',
    },
  },

  headerInfo: {
    display: 'flex',
    flexDirection: 'column',

    paddingTop: 45,

    '& :first-child': {
      fontSize: 16,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      color: '#1A194D',
    },

    '& :nth-child(2)': {
      fontSize: 14,
      fontFamily: 'Poppins, sans-serif',
      color: '#62618F',
    },
  },

  linkContainerItems: {
    maxWidth: 900,
    height: 261,
    paddingTop: 50,

    '& ::-webkit-scrollbar': {
      width: 7,
    },

    '& ::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(98, 97, 143, 0)',
      borderRadius: 10,
    },

    '& ::-webkit-scrollbar-thumb': {
      background: '#FFF',
      borderRadius: 10,
    },

    '&:hover': {
      '& ::-webkit-scrollbar-track': {
        backgroundColor: 'rgba(98, 97, 143, 0.1)',
      },

      '& ::-webkit-scrollbar-thumb': {
        background: '#EE4D38',
      },
    },
  },

  linkFormContainer: {
    width: '100%',

    paddingBottom: 32,

    '& span label': {
      fontSize: 14,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      color: '#1A194D',
    },
    '& :nth-child(3) span': {
      paddingTop: 16,
      width: '100%',
      height: '100%',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
    },
  },

  linkFormInput: {
    width: '100%',

    '& .MuiOutlinedInput-root': {
      backgroundColor: '#EAF0F7',
      fontSize: 14,
      height: 42,
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

    '& > input': {
      paddingLeft: 0,
    },
  },

  linkContainerItemsHeader: {
    width: '100%',

    display: 'flex',
    justifyContent: 'space-between',

    '& span': {
      fontSize: 14,
      fontFamily: 'Poppins, sans-serif',
      color: '#62618F',
    },
  },

  linkContentItems: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll',

    display: 'flex',
    flexDirection: 'column',

    '& span': {
      width: '100%',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      fontSize: 16,
      fontFamily: 'Poppins, sans-serif',
      color: '#1A194D',
    },
  },

  linkItemsInput: {
    width: '100%',

    '& .MuiOutlinedInput-root': {
      height: 24,

      //   backgroundColor: '#EAF0F7',
      fontSize: 16,
      fontFamily: 'Poppins, sans-serif',
      color: '#1A194D',
      fontWeight: 500,

      '& fieldset': {
        border: 'none',
        outline: 'none',
      },
      '& > input': {
        paddingLeft: 0,
      },
    },
  },

  linkItemsContainerBtns: {
    display: 'flex',
    flexDirection: 'row',

    '& span': {
      width: 32,
    },
  },
}))
