import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

// utils
const drawerWidth = 240

// assets

// actions

// components
import LeftMenuItems from './LeftMenuItems'
import LeftMenuProfile from './LeftMenuProfile'

// self-defined-components
const useStyles = makeStyles(
  (theme) => ({
    root: {
      marginTop: '3px',
      display: 'flex',
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    drawer: {
      flexShrink: 0,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      height: '100%',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: '100%',
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
  }),
  { name: 'LeftMenu' }
)

const LeftMenu = ({ mainMenuConfig, secondaryMenuConfig }) => {
  const classes = useStyles()
  const theme = useTheme()
  const showToggle = useMediaQuery(theme.breakpoints.down('sm'))

  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (showToggle) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [showToggle])

  return (
    <nav className={classes.root}>
      <Drawer
        variant='permanent'
        className={classes.drawer}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        {!showToggle && <LeftMenuProfile />}
        {showToggle && (
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => setOpen(!open)}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
        )}
        <Divider />
        <List>
          <LeftMenuItems navItems={mainMenuConfig} />
        </List>
        <Divider />
        <List>
          <ListSubheader inset>其他</ListSubheader>
          <LeftMenuItems navItems={secondaryMenuConfig} />
        </List>
      </Drawer>
    </nav>
  )
}

const menuConfigShape = PropTypes.arrayOf(
  PropTypes.shape({
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  })
)

LeftMenu.propTypes = {
  mainMenuConfig: menuConfigShape,
  secondaryMenuConfig: menuConfigShape,
}

export default LeftMenu
