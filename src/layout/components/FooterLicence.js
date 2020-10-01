import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

// utils

// assets

// actions

// components

// self-defined-components
const useStyles = makeStyles(
  (theme) => ({
    root: {
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-end',
      },

      margin: theme.spacing(1, 0),
    },
    licenceLink: {
      padding: theme.spacing(0, 1),

      color: '#999',
      fontSize: '14px',

      '&:last-child': {
        borderLeft: '1px solid #999',
      },
    },
  }),
  { name: 'FooterLicence' }
)

const FooterLicence = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} item xs={12} md={4} container>
      <Link
        className={classes.licenceLink}
        href='https://www.junyiacademy.org/about/policy'
        target='_blank'
        rel='noreferrer'
      >
        資訊安全政策
      </Link>
      <Link
        className={classes.licenceLink}
        href='https://www.junyiacademy.org/about/licence'
        target='_blank'
        rel='noreferrer'
      >
        內容授權說明
      </Link>
    </Grid>
  )
}

export default FooterLicence
