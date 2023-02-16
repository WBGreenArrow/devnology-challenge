import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme?: any) => ({
  inputContainer: {
    width: '100%',
    height: '100%',

    '& .MuiInput-root': {
      height: 42,
      fontFamily: 'Poppins, sans-serif',
      fontSize: 14,
      color: '#62618F',
      backgroundColor: '#EAF0F7',

      borderRadius: 10,

      '&.MuiInput-underline:after': {
        display: 'none',
      },

      '&.MuiInput-underline:before': {
        display: 'none',
      },
    },

    '& .MuiInputBase-input': {
      padding: 16,
    },
  },

  inputContainerTable: {
    width: '100%',
    height: '100%',

    '& .MuiInput-root': {
      height: 24,
      width: '90%',
      fontSize: 16,
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: 'transparent',
      color: '#1A194D',
      fontWeight: 500,

      '&.MuiInput-underline:after': {
        display: 'none',
      },

      '&.MuiInput-underline:before': {
        display: 'none',
      },

      '&.MuiInputBase-root.Mui-disabled': {
        color: 'rgba(0, 0, 0, 0.38)',
      },
    },
  },
}))
