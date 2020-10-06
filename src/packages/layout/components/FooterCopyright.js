import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// utils

// assets

// actions

// components

// self-defined-components
const useStyles = makeStyles(
  {
    copyright: {
      color: '#999',
      fontSize: '14px',
      fontWeight: '300',
    },
  },
  { name: 'FooterCopyright' }
)

const FooterCopyright = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={8} container>
      <Grid item xs={12}>
        <Typography className={classes.copyright} component='p'>
          Junyi Academy is derived originally from Khan Academy, and derived
          from Chengzhi Foundation.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.copyright} component='p'>
          More information about Chengzhi Foundation, you can find under:
          http://kistschool.org/.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.copyright} component='p'>
          More information about Khan Academy, you can find under:
          https://www.khanacademy.org/.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default FooterCopyright
