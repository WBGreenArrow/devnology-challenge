import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { api } from '../../config/api'
import { getTokenFromLocalStorage, removeTokenFromLocalStorage, saveTokenToLocalStorage } from '../../config/auth'
import {
  Container,
  Box,
  Grid,
  TextField,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
  IconButton,
  CircularProgress,
} from '@mui/material'

import ImgBackground from '../../assets/webSite.png'
import { useStyles } from './styles'

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const classes = useStyles()

  const notify = (message: string) => toast.error(message)

  const userData = getTokenFromLocalStorage()

  useEffect(() => {
    if (userData?.token) {
      navigate('/')
    }
  }, [])

  const handleAuthenticate = async () => {
    if (userName === '') {
      notify('Username Is Required!')
      return
    }

    if (password === '') {
      notify('Passeord Is Required!')
      return
    }
    setIsLoading(true)
    try {
      const { data: userData } = await api.post('/authenticate', {
        username: userName,
        password,
      })

      api.defaults.headers.common['Authorization'] = userData.token

      saveTokenToLocalStorage(userData)
      navigate('/')
    } catch (error: any) {
      notify(error.response.data.message)
    }
    setIsLoading(false)
  }

  return (
    !userData && (
      <div style={{ width: '100vw', height: '100vh' }} className={classes.containerMain}>
        <Container maxWidth={'xl'}>
          <Grid
            container
            className={classes.gridContainer}
            sx={{ width: '100%', height: '100%', flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Grid item sm>
              <div className={classes.container}>
                <div className={classes.containerText}>
                  <h1>Sign In to Devnology Links</h1>
                  <p> Organize and manage your links quickly and efficiently!</p>
                </div>
                <div className={classes.containerImg}>
                  <img src={ImgBackground} alt="Man downing" />
                </div>
              </div>
            </Grid>
            <Grid item sm>
              <div className={classes.loginContainer}>
                <div className={classes.loginContent}>
                  <TextField
                    placeholder="user name"
                    fullWidth
                    className={classes.loginInput}
                    onChange={(event) => setUserName(event.target.value)}
                  />
                  <FormControl fullWidth className={classes.loginInput}>
                    <OutlinedInput
                      placeholder="password"
                      type={showPassword ? 'text' : 'password'}
                      onChange={(event) => setPassword(event.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword((prevState) => !prevState)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <span className={classes.loginButton} onClick={handleAuthenticate}>
                    {isLoading ? (
                      <Box
                        sx={{
                          display: 'flex',
                          '& .MuiCircularProgress-circle': {
                            color: '#1A194D',
                          },
                        }}
                      >
                        <CircularProgress size={32} />
                      </Box>
                    ) : (
                      'Sign In'
                    )}
                  </span>
                  <span
                    className={classes.loginButtonSingUp}
                    onClick={() => {
                      navigate('/register')
                      removeTokenFromLocalStorage()
                    }}
                  >
                    Sign Up
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  )
}
