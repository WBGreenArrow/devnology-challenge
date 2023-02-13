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

import { Link, Outlet } from 'react-router-dom'

import { useStyles } from './styles'
import { SideBar } from '../../components/SideBar'

export const DashBoard = () => {
  const classes = useStyles()

  return (
    <Container maxWidth={'xl'}>
      <Box sx={{ width: '100%', height: '100vh' }}>
        <Grid container sx={{ height: '100%' }}>
          <SideBar />
          <Link to="/user">Home</Link>
          <Grid item sm>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
