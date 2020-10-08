import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// utils

// assets

// actions

// components
import FooterLinksGroups from './FooterLinksGroups'
import FooterCopyright from './FooterCopyright'
import FooterLicence from './FooterLicence'

// self-defined-components
const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(0, 3.5),

      backgroundColor: '#eee',
    },
    top: {
      padding: theme.spacing(3, 0),
    },
    down: {
      flexDirection: 'column-reverse',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },

      padding: theme.spacing(1.5, 0),
      borderTop: '1px solid #999',
    },
    logo: {
      width: '200px',
    },
    copyright: {
      color: '#999',
      fontSize: '14px',
    },
  }),
  { name: 'Footer' }
)

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Grid container>
        <Grid className={classes.top} item xs={12} container>
          <Grid item xs={6} md={8} container>
            <FooterLinksGroups />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            container
            direction='column'
            justify='space-between'
            alignItems='flex-end'
          >
            <div>語言： 繁 | 簡</div>
            <Grid container direction='column' alignItems='flex-end'>
              <img
                className={classes.logo}
                src='/logo_256.png'
                alt='footer logo'
              />
              <img
                className={classes.windowsStore}
                src='/windows_store.png'
                alt='windows store'
              />
              <Typography className={classes.copyright} component='p'>
                © 2020 Junyi Academy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.down}
          xs={12}
          container
          justify='space-between'
        >
          <FooterCopyright />
          <FooterLicence />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
