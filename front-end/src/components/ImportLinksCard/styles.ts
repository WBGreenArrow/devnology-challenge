import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme?: any) => ({
  importLinksCardContainer: {
    maxWidth: 280,
    padding: 16,
    position: 'absolute',
    right: 0,
    top: 50,

    [theme.breakpoints.down('xs')]: {
      position: 'inherit',
      display: 'block',
      marginTop: 16,
    },

    backgroundColor: '#EE4D38',
    borderRadius: 16,
  },

  importLinksCardContant: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',

    '& :first-child': {
      fontSize: 16,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      color: '#FFF',
    },

    '& :nth-child(2)': {
      fontSize: 12,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      color: '#FFF',
    },
  },
  importLinksBtn: {
    width: '100%',
    height: 40,

    cursor: 'pointer',

    marginTop: 16,
    fontSize: 16,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    color: '#FFF',

    backgroundColor: 'transparent',
    border: '1px solid #FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  importLinksLoading: {
    width: '100%',
    height: 40,

    marginTop: 16,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
