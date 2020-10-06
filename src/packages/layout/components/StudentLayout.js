import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import SchoolIcon from '@material-ui/icons/School'
import StarsIcon from '@material-ui/icons/Stars'
import FlagIcon from '@material-ui/icons/Flag'
import CreateIcon from '@material-ui/icons/Create'
import InsertChartIcon from '@material-ui/icons/InsertChart'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import MessageIcon from '@material-ui/icons/Message'
import EventIcon from '@material-ui/icons/Event'
import DonutSmallIcon from '@material-ui/icons/DonutSmall'
import AddCommentIcon from '@material-ui/icons/AddComment'

// utils

const mainMenuConfig = [
  { route: '/', title: '學習主頁', icon: <SchoolIcon /> },
  { route: '/', title: '徽章', icon: <StarsIcon /> },
  { route: '/', title: '我的目標', icon: <FlagIcon /> },
  { route: '/', title: '我的任務', icon: <CreateIcon /> },
  { route: '/', title: '技能進展', icon: <InsertChartIcon /> },
  { route: '/', title: '加班級', icon: <PersonAddIcon /> },
  { route: '/', title: '班級討論區', icon: <MessageIcon /> },
]

const secondaryMenuConfig = [
  { route: '/', title: '活動', icon: <EventIcon /> },
  { route: '/', title: '專注', icon: <DonutSmallIcon /> },
  { route: '/', title: '留言', icon: <AddCommentIcon /> },
]

// assets

// actions

// components
import Header from './Header'
import Footer from './Footer'
import LeftMenu from './LeftMenu'

// self-defined-components
const useStyles = makeStyles(
  {
    root: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
    },
    content: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
    },
  },
  { name: 'StudentLayout' }
)

const StudentLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <LeftMenu
          mainMenuConfig={mainMenuConfig}
          secondaryMenuConfig={secondaryMenuConfig}
        />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

StudentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}

export default StudentLayout
