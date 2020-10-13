import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

// utils

// assets
import BadgeExample from '../assets/badge_example.png'

// actions

// components

// self-defined-components
const useStyles = makeStyles(
  (theme) => ({
    root: { padding: theme.spacing(2) },
    badge: {
      margin: theme.spacing(1, 0),
      width: theme.spacing(12.5),
      height: theme.spacing(12.5),
    },
    text: {
      margin: theme.spacing(1, 0),
    },
  }),
  { name: 'LeftMenuProfile' }
)

const LeftMenuProfile = () => {
  const classes = useStyles()

  return (
    <Grid
      className={classes.root}
      container
      direction='column'
      alignItems='center'
    >
      <Avatar className={classes.badge} alt='badge' src={BadgeExample} />
      <Typography className={classes.text}>Leo.Lin</Typography>
      <Typography className={classes.text}>能量：14,307</Typography>
      <Typography className={classes.text}>精熟：0</Typography>
    </Grid>
  )
}

LeftMenuProfile.propTypes = {}

export default LeftMenuProfile
