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
    <Grid item sm>
      <div className={classes.linkContainer}>
        <div className={classes.linkContent}>
          <div className={classes.headerContainer}>
            <h1>Links</h1>
            <ImportLinksCard />
          </div>
          <div className={classes.headerInfo}>
            <span>Create link</span>
            <span>Manage your links as best you can</span>
          </div>

          <div className={classes.linkContainerItems}>
            <div className={classes.linkFormContainer}>
              {!isAddingNewItem ? (
                <div className={classes.linkFormAdd}>
                  <Tooltip title="Add new link" enterDelay={500} enterNextDelay={500}>
                    <span onClick={() => setIsAddingNewItem((prevState) => !prevState)}>Add new link</span>
                  </Tooltip>
                </div>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <span>
                      <InputLabel>Title</InputLabel>
                      <TextField className={classes.linkFormInput} fullWidth />
                    </span>
                  </Grid>
                  <Grid item xs={6}>
                    <span>
                      <InputLabel>Url</InputLabel>
                      <TextField className={classes.linkFormInput} fullWidth />
                    </span>
                  </Grid>
                  <Grid item xs={2}>
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
              <Grid container>
                <Grid item xs={2}>
                  <span>Date</span>
                </Grid>
                <Grid item xs={4}>
                  <span>Title</span>
                </Grid>
                <Grid item xs={4}>
                  <span>url</span>
                </Grid>
                <Grid item xs={2}>
                  <span>Actions</span>
                </Grid>
              </Grid>
            </div>
            <div className={classes.linkContentItems}>
              {itemMock.map((item) => {
                return (
                  <Grid container key={item.id}>
                    <Grid item xs={2} sx={{ minWidth: 129 }}>
                      <span>
                        <TextField className={classes.linkItemsInput} fullWidth defaultValue={item.created_at} />
                      </span>
                    </Grid>
                    <Grid item xs={4} sx={{ minWidth: 129 }}>
                      <span>
                        <TextField className={classes.linkItemsInput} fullWidth defaultValue={item.title} />
                      </span>
                    </Grid>
                    <Grid item xs={4}>
                      <span>
                        <TextField className={classes.linkItemsInput} fullWidth defaultValue={item.url} />
                      </span>
                    </Grid>
                    <Grid item xs={2}>
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
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}
