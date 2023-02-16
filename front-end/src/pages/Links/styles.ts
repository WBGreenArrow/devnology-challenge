import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme?: any) => ({
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

    [theme.breakpoints.down('xs')]: {
      paddingTop: 16,
    },
  },

  linkContentItemsBackground: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
  },

  linkContentItemsNoData: {
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },

  linkContentItemsBackgroundColor: {
    backgroundColor: '#F8F8FF',
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

      [theme.breakpoints.down('sm')]: {
        justifyContent: 'end',
      },
    },
  },

  linkFormInput: {
    width: '100%',

    '& .MuiOutlinedInput-root': {
      height: 42,
      fontFamily: 'Poppins, sans-serif',
      fontSize: 14,
      color: '#62618F',
      backgroundColor: '#EAF0F7',

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

  linkContainerItemsHeaderContent: {
    width: '100%',
    padding: '0px 16px',
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

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  linkContentItems: {
    width: '100%',
    height: 500,
    overflowY: 'auto',

    display: 'flex',
    flexDirection: 'column',

    '& span': {
      width: '100%',
      height: 56,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      fontFamily: 'Poppins, sans-serif',
      fontSize: 16,
      color: '#1A194D',
    },
  },

  linkItemsSpan: {
    [theme.breakpoints.down('sm')]: {
      '&::before': {
        content: ' attr(name-label)": " ',
        display: 'block',
        paddingRight: 6,
        fontWeight: 500,
      },
    },
  },

  linkItemsInput: {
    width: '100%',

    '& .MuiOutlinedInput-root': {
      height: 24,

      fontSize: 16,
      fontFamily: 'Poppins, sans-serif',
      color: '#1A194D',
      fontWeight: 500,

      [theme.breakpoints.down('sm')]: {
        fontWeight: '400',
      },

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

    [theme.breakpoints.down('sm')]: {
      '&::before': {
        content: '"Actions:"',
        display: 'flex',
        alignItems: 'center',
        paddingRight: 6,

        fontSize: 16,
        fontFamily: 'Poppins, sans-serif',
        color: '#1A194D',
        fontWeight: 500,
      },

      '& :last-child': {
        marginLeft: 32,
      },

      '& svg': {
        width: 32,
        height: 32,
      },
    },
  },

  linkLoadingContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& svg': {
      color: '#1A194D',
    },
  },
}))
