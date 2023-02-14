import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme?: any) => ({
  outletContainer: {
    width: '100%',
    height: '100%',
  },
  outletContent: {
    height: '100%',
    padding: '65px  72px 16px  72px ',
    position: 'relative',

    [theme.breakpoints.down('sm')]: {
      padding: 16,
    },
  },

  headerContent: {
    width: '100%',
    height: 60,

    '& > h1': {
      fontSize: 32,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      color: '#1A194D',

      textTransform: 'capitalize',
    },
  },

  menuHamburger: {
    display: 'none',
    padding: '16px 0px 0px 16px',

    '& svg': {
      width: 32,
      height: 32,
    },

    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },

  outletContainerFooter: {
    width: '100%',
    padding: '30px 0px',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',

    '& h2': {
      textAlign: 'center',
      fontSize: 14,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      color: '#62618F',
    },
    '& h3': {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 700,
      fontFamily: 'Poppins, sans-serif',
    },
  },
}))
