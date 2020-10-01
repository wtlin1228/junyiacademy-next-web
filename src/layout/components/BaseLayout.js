import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

// utils

// assets

// actions

// components
import Header from './Header'
import Footer from './Footer'

// self-defined-components
const useStyles = makeStyles(
  {
    root: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
    },
  },
  { name: 'BaseLayout' }
)

const BaseLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}

export default BaseLayout
