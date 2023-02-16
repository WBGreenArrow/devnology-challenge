import { useState, useEffect, useMemo } from 'react'
import { Grid, Box, Tab } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { TabContext, TabList } from '@mui/lab'

import LanguageIcon from '@mui/icons-material/Language'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LogoutIcon from '@mui/icons-material/Logout'
import CloseIcon from '@mui/icons-material/Close'

import { useStyles } from './styles'
import { removeTokenFromLocalStorage } from '../../config/auth'

interface ISideBar {
  showMenu: boolean
  onClose: () => void
  changeHeaderText: (textHeader: string) => void
}

export const SideBar = ({ showMenu, onClose, changeHeaderText }: ISideBar) => {
  const [router, setRouter] = useState<string>('')
  const navigate = useNavigate()

  const classes = useStyles()

  useEffect(() => {
    if (router !== '') {
      navigate(router)
      changeHeaderText(router)
      onClose()
    }
  }, [router])

  const handleChange = (event: React.SyntheticEvent, routerValeu: string) => {
    setRouter(routerValeu)
  }

  const handleLogOut = () => {
    removeTokenFromLocalStorage()
    navigate('/login')
  }

  return useMemo(
    () => (
      <Grid
        item
        className={
          !showMenu ? classes.sideBarContainer : ` ${classes.sideBarContainerShow} ${classes.sideBarContainer}`
        }
      >
        <div className={classes.sideBarBtnCloseContainer}>
          <span>{<CloseIcon onClick={onClose} />}</span>
        </div>
        <div className={classes.sideBarContainerHeader}>
          <span>
            <img
              src="https://avatars.githubusercontent.com/u/40796286?s=400&u=2e35648d47b8131896091bc3f1890ab56b347185&v=4"
              alt="user img"
            />
          </span>
          <div className={classes.sideBarContainerHeaderInfo}>
            <span>Wellyson E Brito</span>
            <span>@WellysonBrito</span>
          </div>
        </div>
        <div className={classes.sideBarTabsContainer}>
          <TabContext value={router}>
            <Box sx={{ paddingTop: 5 }}>
              <TabList orientation="vertical" onChange={handleChange}>
                <Tab label="Links" value="links" icon={<LanguageIcon />} iconPosition="start" />
                <Tab label="User" value="user" icon={<ManageAccountsIcon />} iconPosition="start" />
              </TabList>
            </Box>
          </TabContext>
        </div>
        <div className={classes.sideBarContainerFooter}>
          <div onClick={handleLogOut}>
            <span>{<LogoutIcon />}</span>
            <span>Log out</span>
          </div>
        </div>
      </Grid>
    ),
    [router],
  )
}
