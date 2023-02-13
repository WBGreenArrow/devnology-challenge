import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme?: any) => ({
  sideBarContainer: {
    width: 260,
    heigth: '100%',

    backgroundColor: '#F8F8FF',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))
