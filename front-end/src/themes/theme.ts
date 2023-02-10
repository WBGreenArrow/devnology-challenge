import { createTheme } from '@material-ui/core/'

import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

export const appTheme = createTheme({
  typography: {
    h1: {
      fontSize: '5rem',
    },
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
})
