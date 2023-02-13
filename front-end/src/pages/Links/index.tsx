import { useState, useEffect } from 'react'

import { Grid, TextField, Tooltip, InputLabel } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import SaveIcon from '@mui/icons-material/Save'
import { useStyles } from './styles'
import { ImportLinksCard } from '../../components/ImportLinksCard'

const itemMock = [
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    created_at: 'Ferb, 13, 2023',
    title: 'Teste',

    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
  {
    id: 'asdad-asdad2323',
    title: 'Teste',
    created_at: 'Ferb, 13, 2023',
    url: 'http://localhost.teste',
  },
]

export const Links = () => {
  const [isAddingNewItem, setIsAddingNewItem] = useState<boolean>(false)
  const classes = useStyles()

  useEffect(() => {
    return () => {
      setIsAddingNewItem(false)
    }
  }, [])

  return (
    <Grid item xs>
      <div className={classes.linkContainer}>
        <div className={classes.linkContent}>
          <div className={classes.headerContainer}>
            <h1>Links</h1>
          </div>
          <div className={classes.headerInfo}>
            <span>Create link</span>
            <span>Manage your links as best you can</span>
          </div>
          <ImportLinksCard />
          <div className={classes.linkContainerItems}>
            <div className={classes.linkFormContainer}>
              {!isAddingNewItem ? (
                <div className={classes.linkFormAdd}>
                  <Tooltip title="Add new link" enterDelay={500} enterNextDelay={500}>
                    <span onClick={() => setIsAddingNewItem((prevState) => !prevState)}>Add new link</span>
                  </Tooltip>
                </div>
              ) : (
                <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                  <Grid item xs={12} md={4}>
                    <span>
                      <InputLabel>Title</InputLabel>
                      <TextField className={classes.linkFormInput} fullWidth />
                    </span>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <span>
                      <InputLabel>Url</InputLabel>
                      <TextField className={classes.linkFormInput} fullWidth />
                    </span>
                  </Grid>
                  <Grid item xs={12} md>
                    <span>
                      <Tooltip title="Save" enterDelay={500} enterNextDelay={500}>
                        <SaveIcon sx={{ color: '#1A194D', cursor: 'pointer' }} />
                      </Tooltip>
                    </span>
                  </Grid>
                </Grid>
              )}
            </div>
            <div className={classes.linkContainerItemsHeader}>
              <div className={classes.linkContainerItemsHeaderContent}>
                <Grid container wrap="nowrap">
                  <Grid item xs={2} sx={{ minWidth: 129 }}>
                    <span>Date</span>
                  </Grid>
                  <Grid item xs={4} sx={{ minWidth: 129 }}>
                    <span>Title</span>
                  </Grid>
                  <Grid item xs={4}>
                    <span>Url</span>
                  </Grid>
                  <Grid item>
                    <span>Actions</span>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className={classes.linkContentItems}>
              {itemMock.map((item, index) => {
                return (
                  <div
                    className={
                      index % 2 === 0
                        ? `${classes.linkContentItemsBackground} ${classes.linkContentItemsBackgroundColor}`
                        : classes.linkContentItemsBackground
                    }
                  >
                    <Grid container wrap="nowrap" key={item.id} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                      <Grid item xs={8} md={2} sx={{ minWidth: 129 }}>
                        <span className={classes.linkItemsSpanDate}>
                          <TextField
                            className={classes.linkItemsInput}
                            fullWidth
                            disabled
                            defaultValue={item.created_at}
                          />
                        </span>
                      </Grid>
                      <Grid item xs={8} md={4} sx={{ minWidth: 129 }}>
                        <span className={classes.linkItemsSpanTitle}>
                          <TextField className={classes.linkItemsInput} fullWidth defaultValue={item.title} />
                        </span>
                      </Grid>
                      <Grid item xs={8} md={4}>
                        <span className={classes.linkItemsSpanUrl}>
                          <TextField className={classes.linkItemsInput} fullWidth defaultValue={item.url} />
                        </span>
                      </Grid>
                      <Grid item>
                        <div className={classes.linkItemsContainerBtns}>
                          <span>
                            <Tooltip title="Edit" enterDelay={500} enterNextDelay={500}>
                              <CreateIcon sx={{ color: '#1A194D', cursor: 'pointer' }} />
                            </Tooltip>
                          </span>
                          <span>
                            <Tooltip title="Delete" enterDelay={500} enterNextDelay={500}>
                              <HighlightOffIcon sx={{ color: '#1A194D', cursor: 'pointer' }} />
                            </Tooltip>
                          </span>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}
