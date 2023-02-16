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
      <Container maxWidth={'xl'}>
        <Box sx={{ width: '100%', height: '100vh' }}>
          <Grid container sx={{ height: '100%', flexDirection: { xs: 'column', md: 'row' } }}>
            <Grid item md>
              <div className={classes.container}>
                <div className={classes.containerText}>
                  <h1>Sign In to Recharge Direct</h1>
                  <p> if you don’t have an account you can Register here!</p>
                </div>
                <div className={classes.containerImg}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/4ca4/9fd9/c2b30ffb9ef403891144443190e5a478?Expires=1676851200&Signature=bOqtOz6xrrupQk3ohFj9ftfGM1GMDJw8B3lRAEJ6taRkk3qR-pmza6tBE5YpArxXeFtd6BJDm1KxhUWOBr~llkyBcCK5oYx-JbHruPUQHq0HzAPPq-6AcnwJI3dwD4PYagKQ3OpwIrkLS5ShxyXERTt9v501~-5hBZHlYka~U10Lck4ssQCYchvvilhsJIDOpPCCFsW2CaCuwfuWML3fvAj48wMbCXSnPZDRdvkoutjUMjTBRTt56rt7etCBOI9ui9BO3gWahABa8Yblk5J47N3StjkBiNWHSAm9jPm9YIqCtSc4UySm3Iw-pgDJAbxQ1sCkSRnotHdmQltDb1LSOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="Man downing"
                  />
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
                  <Button className={classes.loginButton} fullWidth variant="contained" onClick={handleAuthenticate}>
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
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
  )
}
