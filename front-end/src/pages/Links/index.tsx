import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { Grid, TextField, Tooltip } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import SaveIcon from '@mui/icons-material/Save'
import { useStyles } from './styles'
import { ImportLinksCard } from '../../components/ImportLinksCard'
import { api } from '../../config/api'
import { getTokenFromLocalStorage, removeTokenFromLocalStorage } from '../../config/auth'
import { useNavigate } from 'react-router-dom'
import { formatedDate } from '../../utils'
import { Input } from '../../components/Input'

type BookmarkProps = {
  id?: string
  label: string
  url: string
  created_at?: Date
}

export const Links = () => {
  const [data, setData] = useState<[BookmarkProps] | []>([])
  const [isAddingNewItem, setIsAddingNewItem] = useState<boolean>(false)
  const [editingBookmark, setEditingBookmark] = useState<BookmarkProps | undefined>()
  const [newBookmark, setNewBookmark] = useState<BookmarkProps | undefined>()

  const navigate = useNavigate()
  const classes = useStyles()
  const userData = getTokenFromLocalStorage()

  const errorNotify = (message: string) => toast.error(message)
  const sucesssNotify = (message: string) => toast.success(message)

  useEffect(() => {
    getBookmarkList()
  }, [])

  const getBookmarkList = async () => {
    try {
      const reponse = await api.post('/bookmarks', {
        user_id: userData?.user_id,
      })
      setData(() => reponse.data.bookMarksList)
    } catch (error: any) {
      if (error.response.status === 401) {
        handleLogOut()
        return
      }
      errorNotify('Error to get data!')
    }
  }

  const saveBookmark = async () => {
    try {
      const { data } = await api.post('/bookmark', {
        user_id: userData?.user_id,
        ...newBookmark,
      })
      sucesssNotify('Saved successfully!')
      //@ts-ignore
      setData((prevState) => [...prevState, data.bookmark])
      setIsAddingNewItem(false)
      setNewBookmark(() => undefined)
    } catch (error: any) {
      errorNotify('Error to save bookmark!')
    }
  }

  const updateBookmark = async (id, index) => {
    try {
      const response = await api.patch(`/bookmark/${id}`, {
        ...editingBookmark,
      })
      sucesssNotify('Updated successfully!')
      //@ts-ignore
      const currentBookmarkList = data
      currentBookmarkList[index] = response.data.bookmarkUpdated

      setData(() => [...currentBookmarkList])
      setEditingBookmark(() => undefined)
    } catch (error: any) {
      errorNotify('Error to update bookmark!')
    }
  }

  const deleteBookmark = async (id) => {
    try {
      const response = await api.delete(`/bookmark/${id}`)
      const newBookMarkList = data.filter((item) => item.id !== response.data.bookmarkDeleted.id)
      //@ts-ignore
      setData(() => [...newBookMarkList])
      sucesssNotify('Deleted successfully!')
    } catch (error: any) {
      errorNotify('Error to delete bookmark!')
    }
  }

  const handleLogOut = () => {
    removeTokenFromLocalStorage()
    navigate('/login')
  }

  const setFocusInputEdit = (id) => {
    const inputField = document.getElementById(id) as HTMLInputElement
    inputField?.focus()
  }

  // const onChange = useCallback((attr: any, value: string) => {
  //   setNewBookmark((preveState: any) => {
  //     let currentItem = { ...preveState }
  //     currentItem[attr] = value
  //     return currentItem
  //   })
  // }, [])

  const onChange = (attr: any, value: string) => {
    setNewBookmark((preveState: any) => {
      let currentItem = { ...preveState }
      currentItem[attr] = value
      return currentItem
    })
  }

  const onChangeEdit = (attr: any, value: string) => {
    setEditingBookmark((preveState: any) => {
      let currentItem = { ...preveState }
      currentItem[attr] = value
      return currentItem
    })
  }

  return (
    <div>
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
                <Input
                  label="Title"
                  initValue={newBookmark?.['label'] || ''}
                  onChange={(valeu: string) => {
                    onChange('label', valeu)
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <span>
                  <Input
                    label="Url"
                    initValue={newBookmark?.['url'] || ''}
                    onChange={(valeu: string) => {
                      onChange('url', valeu)
                    }}
                  />
                </span>
              </Grid>
              <Grid item xs={12} md>
                <span onClick={saveBookmark}>
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
          {data.length ? (
            data.map((item, index: number) => {
              return (
                <div
                  className={
                    index % 2 === 0
                      ? `${classes.linkContentItemsBackground} ${classes.linkContentItemsBackgroundColor}`
                      : classes.linkContentItemsBackground
                  }
                >
                  <Grid container wrap="nowrap" key={item.id} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <Grid item md={2} sx={{ minWidth: 129 }}>
                      <span className={classes.linkItemsSpan} name-label="Date">
                        <TextField
                          className={classes.linkItemsInput}
                          disabled
                          value={
                            !(editingBookmark?.id === item.id)
                              ? formatedDate(item.created_at)
                              : formatedDate(editingBookmark?.created_at)
                          }
                        />
                      </span>
                    </Grid>
                    <Grid item md={4} sx={{ minWidth: 129 }}>
                      <span className={classes.linkItemsSpan} name-label="Title">
                        <Input
                          id={item.id}
                          tableInput={true}
                          disabled={!(editingBookmark?.id === item.id)}
                          initValue={!(editingBookmark?.id === item.id) ? item.label : editingBookmark?.label}
                          onChange={(valeu: string) => {
                            onChangeEdit('label', valeu)
                          }}
                        />
                        {/* <TextField
                          id={item.id}
                          className={classes.linkItemsInput}
                          disabled={!(editingBookmark?.id === item.id)}
                          onChange={(event) => onChangeEdit('label', event.target.value)}
                          value={}
                        /> */}
                      </span>
                    </Grid>
                    <Grid item md={4}>
                      <span className={classes.linkItemsSpan} name-label="Url">
                        {/* <TextField
                          className={classes.linkItemsInput}
                          disabled={!(editingBookmark?.id === item.id)}
                          value={!(editingBookmark?.id === item.id) ? item.url : editingBookmark?.url}
                        /> */}
                        <Input
                          tableInput={true}
                          disabled={!(editingBookmark?.id === item.id)}
                          initValue={!(editingBookmark?.id === item.id) ? item.url : editingBookmark?.url}
                          onChange={(valeu: string) => {
                            onChangeEdit('url', valeu)
                          }}
                        />
                      </span>
                    </Grid>
                    <Grid item>
                      <div className={classes.linkItemsContainerBtns}>
                        <span>
                          <Tooltip title={editingBookmark?.id ? 'Save' : 'Edit'} enterDelay={500} enterNextDelay={500}>
                            {editingBookmark?.id === item.id ? (
                              <SaveIcon
                                sx={{ color: '#1A194D', cursor: 'pointer' }}
                                onClick={() => updateBookmark(item.id, index)}
                              />
                            ) : (
                              <CreateIcon
                                sx={{ color: '#1A194D', cursor: 'pointer' }}
                                onClick={() => {
                                  setEditingBookmark(() => item)
                                  setTimeout(() => {
                                    setFocusInputEdit(item.id)
                                  }, 100)
                                }}
                              />
                            )}
                          </Tooltip>
                        </span>
                        <span>
                          <Tooltip title="Delete" enterDelay={500} enterNextDelay={500}>
                            <HighlightOffIcon
                              sx={{ color: '#1A194D', cursor: 'pointer' }}
                              onClick={() => deleteBookmark(item.id)}
                            />
                          </Tooltip>
                        </span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              )
            })
          ) : (
            <Grid item sx={{ maxWidth: 652, minHeight: 300 }}>
              <div className={`${classes.linkContentItemsNoData} ${classes.linkContentItemsBackgroundColor}`}>
                <span>{'No data do show'}</span>
              </div>
            </Grid>
          )}
        </div>
      </div>
    </div>
  )
}
