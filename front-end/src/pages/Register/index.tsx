import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

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
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { api } from '../../config/api'
import { getTokenFromLocalStorage, saveTokenToLocalStorage } from '../../config/auth'
import ImgBackground from '../../assets/man.png'
import { useStyles } from './styles'

export const Register = () => {
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
      const { data: userData } = await api.post('/users', {
        username: userName,
        password,
      })

      saveTokenToLocalStorage(userData)
      navigate('/')
    } catch (error: any) {
      notify(error.response.data.message)
    }
    setIsLoading(false)
  }

  return (
    !userData && (
      <Container maxWidth={'xl'}>
        <Box sx={{ width: '100%', height: '100vh' }}>
          <Grid container sx={{ height: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
            <Grid item md>
              <div className={classes.container}>
                <div className={classes.containerText}>
                  <h1>Create you account on Devnology Links</h1>
                  <p> and manage your links from anywhere and anytime!</p>
                </div>
                <div className={classes.containerImg}>
                  <img src={ImgBackground} alt="Man downing" />
                </div>
              </div>
            </Grid>
            <Grid item md>
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
                      'Sign Up'
                    )}
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
  )
}
