import { Outlet } from 'react-router-dom'
import { Container, Box, Grid } from '@mui/material'

import { SideBar } from '../../components/SideBar'
import { useStyles } from './styles'

export const DashBoard = () => {
  return (
    <Container maxWidth={'xl'}>
      <Box sx={{ width: '100%', height: '100vh' }}>
        <Grid container sx={{ height: '100%' }}>
          <SideBar />
          <Outlet />
        </Grid>
      </Box>
    </Container>
  )
}
