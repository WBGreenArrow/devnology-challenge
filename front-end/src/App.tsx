import { ThemeProvider } from '@material-ui/core'
import Routes from './routes'
import { Toaster } from 'react-hot-toast'
import { appTheme } from './themes/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <Toaster
          toastOptions={{
            style: {
              fontSize: 16,
              fontFamily: 'Poppins, sans-serif',
              color: '#1A194D',
              textTransform: 'capitalize',
            },
          }}
        />
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
