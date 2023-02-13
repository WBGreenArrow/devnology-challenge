import { useState, useEffect } from 'react'
import { Grid, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useStyles } from './styles'

import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

export const SideBar = () => {
  const [router, setRouter] = useState('')
  const navigate = useNavigate()
  const classes = useStyles()

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setRouter(newValue)
  }

  useEffect(() => {
    if (router !== '') {
      navigate(router.toLowerCase())
    }
  }, [router])

  return (
    <Grid item className={classes.sideBarContainer}>
      <TabContext value={router}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="Links" />
            <Tab label="Item Two" value="User" />
          </TabList>
        </Box>
      </TabContext>
    </Grid>
  )
}
