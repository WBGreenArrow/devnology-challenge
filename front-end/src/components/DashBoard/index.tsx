import { useState } from 'react'

import { Outlet as RouterComponent } from 'react-router-dom'
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
        <Grid container>
          <SideBar
            showMenu={showMenu}
            onClose={handleCloseMenu}
            changeHeaderText={(textHeader) => handleChangeHeaderText(textHeader)}
          />
          <Grid item xs sx={{ height: '100%' }}>
            <span className={classes.menuHamburger}>
              <MenuIcon onClick={() => setShowMenu((prevStats) => !prevStats)} />
            </span>
            <div className={classes.outletContainer}>
              <div className={classes.outletContent}>
                <div className={classes.headerContent}>
                  <h1>{headerText}</h1>
                </div>
                <RouterComponent />
              </div>
              <div className={classes.outletContainerFooter}>
                <h2>Made with ❤️ by</h2>
                <h3>Wellyson E Brito</h3>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
