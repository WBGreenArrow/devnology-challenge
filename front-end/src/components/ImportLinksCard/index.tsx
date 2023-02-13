import { Tooltip } from '@mui/material'

import { useStyles } from './styles'

export const ImportLinksCard = () => {
  const classes = useStyles()

  return (
    <div className={classes.importLinksCardContainer}>
      <div className={classes.importLinksCardContant}>
        <span>Import Links</span>
        <span>Import favorites post links from Devgo</span>
        <Tooltip title="Import" enterDelay={500} enterNextDelay={500}>
          <span>Import</span>
        </Tooltip>
      </div>
    </div>
  )
}
