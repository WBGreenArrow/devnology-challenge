import { ThemeProvider } from '@material-ui/core'
import { appTheme } from './themes/theme'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
