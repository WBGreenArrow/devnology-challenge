import { useState } from 'react'
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
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useStyles } from './styles'

export const Authentication = () => {
  const [showPassword, setShowPassword] = useState(false)
  const classes = useStyles()

  return (
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
                <TextField placeholder="user name" fullWidth className={classes.loginInput} />
                <FormControl
                  fullWidth
                  className={
                    showPassword ? classes.loginInput : `${classes.loginInput} ${classes.loginInputPasswordHidden}`
                  }
                >
                  <OutlinedInput
                    id="standard-adornment-password"
                    placeholder="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((prevState) => !prevState)}
                          onMouseDown={() => console.log('teste')}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Button fullWidth className={classes.loginButton} variant="contained">
                  Sign In
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
