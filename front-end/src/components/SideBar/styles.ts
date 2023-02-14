import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme?: any) => ({
  sideBarContainer: {
    width: 260,
    height: '100vh',
    position: 'fixed',

    padding: '62px 16px 16px 16px',
    transition: 'ease-in 0.5s',

    backgroundColor: '#F8F8FF',

    '& button': {
      color: '#62618F',
      fontFamily: 'Poppins, sans-serif',
      fontSize: 14,
      fontWeight: 500,
      justifyContent: 'start',
      paddingLeft: 16,
    },

    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: '100%',
      padding: '20px 16px 16px 16px',

      position: 'fixed',
      zIndex: 100,
      left: -500,

      '& button': {
        fontSize: 18,
        minHeight: '60px !important',
      },
    },

    '& 	.MuiTab-root.Mui-selected': {
      color: '#1A194D',
    },

    '& .MuiTabs-indicator.css-10d9dml-MuiTabs-indicator': {
      width: 6,
      left: 0,
      borderRadius: 24,
      backgroundColor: '#EE6338',
    },

    '& .MuiTab-root': {
      minHeight: 32,
    },
  },

  sideBarContainerShow: {
    [theme.breakpoints.down('sm')]: {
      left: 0,
    },
  },

  sideBarBtnCloseContainer: {
    display: 'flex',
    alignItmes: 'center',
    justifyContent: 'end',

    '& span svg': {
      width: 32,
      height: 32,
    },

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  sideBarTabsContainer: {
    width: '100%',
  },

  sideBarContainerHeader: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '& span img': {
      width: 68,
      heigth: 68,
      borderRadius: 16,
    },
  },

  sideBarContainerHeaderInfo: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 14,

    '& :first-child': {
      color: '#1A194D',
      fontFamily: 'Poppins, sans-serif',
      fontSize: 17,
      fontWeight: 700,
    },

    '& :last-child': {
      color: '#62618F',
      fontFamily: 'Poppins, sans-serif',
      fontSize: 14,
      fontWeight: 400,
    },
  },
}))
