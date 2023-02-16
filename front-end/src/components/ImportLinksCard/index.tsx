import { Box, CircularProgress } from '@material-ui/core'
import { Tooltip } from '@mui/material'
import { useMemo } from 'react'

import { useStyles } from './styles'

type ImportLinksCardProps = {
  isImporting: boolean
  onClick: () => void
}

export const ImportLinksCard = ({ onClick, isImporting }: ImportLinksCardProps) => {
  const classes = useStyles()

  return useMemo(
    () => (
      <div className={classes.importLinksCardContainer}>
        <div className={classes.importLinksCardContant}>
          <span>Import Links</span>
          <span>Import favorites post links from Devgo</span>
          <Tooltip title="Import" enterDelay={500} enterNextDelay={500} onClick={() => onClick()}>
            {!isImporting ? (
              <span className={classes.importLinksBtn}>Import</span>
            ) : (
              <span className={classes.importLinksLoading}>
                <Box alignContent="center" sx={{ border: 'none', display: 'flex', alignItems: 'center' }}>
                  <CircularProgress size={32} />
                </Box>
              </span>
            )}
          </Tooltip>
        </div>
      </div>
    ),
    [isImporting],
  )
}
