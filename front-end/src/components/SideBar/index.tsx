import { useState, useEffect } from 'react'
import { Grid, Box, Tab } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { TabContext, TabList } from '@mui/lab'

import { useStyles } from './styles'

export const SideBar = () => {
  const [router, setRouter] = useState<string>('')
  const navigate = useNavigate()

  const classes = useStyles()

  useEffect(() => {
    if (router !== '') {
      navigate(router)
    }
  }, [router])

  const handleChange = (event: React.SyntheticEvent, routerValeu: string) => {
    setRouter(routerValeu)
  }

  return (
    <Grid item className={classes.sideBarContainer}>
      <TabContext value={router}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList orientation="vertical" onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Links" value="links" />
            <Tab label="User" value="user" />
          </TabList>
        </Box>
      </TabContext>
    </Grid>
  )
}
