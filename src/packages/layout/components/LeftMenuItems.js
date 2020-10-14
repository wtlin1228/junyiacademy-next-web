import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

// utils

// assets

// actions

// components
import { BaseNextLink } from '@/packages/base'

// self-defined-components
const LeftMenuItems = ({ navItems }) => (
  <>
    {navItems.map(({ route, title, icon }) => (
      <BaseNextLink href={route} key={`menu-item-${title}`}>
        <ListItem button>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      </BaseNextLink>
    ))}
  </>
)

LeftMenuItems.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    })
  ),
}

export default LeftMenuItems
