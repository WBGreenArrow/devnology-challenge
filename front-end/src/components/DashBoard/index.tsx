import { useState } from 'react'

import { Outlet } from 'react-router-dom'
import { Container, Box, Grid } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { SideBar } from '../../components/SideBar'
import { useStyles } from './styles'

export const DashBoard = () => {
  const classes = useStyles()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [headerText, setHeaderText] = useState<string>('')

  const handleCloseMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  const handleChangeHeaderText = (textHeader: string) => {
    setHeaderText(() => textHeader)
  }
  return (
    <Container maxWidth={'xl'}>
      <Box sx={{ width: '100%', height: '100vh' }}>
        <Grid container sx={{ height: '100%' }}>
          <SideBar
            showMenu={showMenu}
            onClose={handleCloseMenu}
            changeHeaderText={(textHeader) => handleChangeHeaderText(textHeader)}
          />
          <Grid item xs>
            <span className={classes.menuHamburger}>
              <MenuIcon onClick={() => setShowMenu((prevStats) => !prevStats)} />
            </span>
            <div className={classes.outletContainer}>
              <div className={classes.outletContent}>
                <div className={classes.headerContent}>
                  <h1>{headerText}</h1>
                </div>
                <Outlet />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
