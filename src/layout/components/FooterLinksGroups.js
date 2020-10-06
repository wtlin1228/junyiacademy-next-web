import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'

// utils

// assets

// actions

// components

// self-defined-components
const useStyles = makeStyles(
  (theme) => ({
    linksGroupDivider: {
      borderBottom: '1px solid #999',
      width: '140px',

      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    linksGroup: {
      padding: theme.spacing(0, 2.5, 2.5, 2.5),

      [theme.breakpoints.down('sm')]: {
        '&:not(:first-child)': {
          padding: theme.spacing(2.5),
        },
      },

      [theme.breakpoints.up('md')]: {
        justifyContent: 'center',

        padding: 0,

        '&:not(:last-child)': {
          borderRight: '1px solid #999',
        },
      },
    },
    listTitle: {
      color: '#64b243',
      fontSize: '18px',
    },
    list: {
      listStyle: 'none',
    },
    listItem: {
      padding: theme.spacing(0.25, 0),
    },
    listItemLink: {
      color: '#4a4a4a',
    },
  }),
  { name: 'FooterLinksGroups' }
)

const FooterLinksGroups = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.linksGroup} item xs={12} md={4} container>
        <div>
          <Typography className={classes.listTitle} component='h3'>
            關於我們
          </Typography>
          <List>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='http://blog-junyiacademy.org/'
                target='_blank'
                rel='noreferrer'
              >
                認識基金會
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='https://official.junyiacademy.org/about/the-team/'
                target='_blank'
                rel='noreferrer'
              >
                團隊成員
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='https://official.junyiacademy.org/about/our-partners/'
                target='_blank'
                rel='noreferrer'
              >
                幕後英雄
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='https://issuu.com/junyiacademyfoundation/docs/___________'
                target='_blank'
                rel='noreferrer'
              >
                公益報告
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='https://donate.junyiacademy.org/?utm_source=junyiacademy&amp;utm_medium=homepage&amp;utm_campaign=footer'
                target='_blank'
                rel='noreferrer'
              >
                支持我們
              </Link>
            </ListItem>
          </List>
        </div>
      </Grid>
      <div className={classes.linksGroupDivider} />
      <Grid className={classes.linksGroup} item xs={12} md={4} container>
        <div>
          <Typography className={classes.listTitle} component='h3'>
            相關連結
          </Typography>
          <List>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='#'
                target='_blank'
                rel='noreferrer'
              >
                訂閱電子報
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='https://www.facebook.com/JunyiAcademy/'
                target='_blank'
                rel='noreferrer'
              >
                Facebook粉絲團
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='https://www.junyiacademy.org/statistics'
                target='_blank'
                rel='noreferrer'
              >
                平台使用數據
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='https://www.junyiacademy.org/event/star-exploration-2019/'
                target='_blank'
                rel='noreferrer'
              >
                星空探險隊
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='https://docs.google.com/forms/d/e/1FAIpQLSfVw_Gaj9rXR_w_b04yNce_7GvH09EN31kjhzcmQ6FkfiXG8Q/viewform'
                target='_blank'
                rel='noreferrer'
              >
                研習申請表單
              </Link>
            </ListItem>
          </List>
        </div>
      </Grid>
      <div className={classes.linksGroupDivider} />
      <Grid className={classes.linksGroup} item xs={12} md={4} container>
        <div>
          <Typography className={classes.listTitle} component='h3'>
            幫助中心
          </Typography>
          <List>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='https://www.junyiacademy.org/junyi-teacher-resources/new-topic-1059'
                target='_blank'
                rel='noreferrer'
              >
                使用手冊
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='http://help.junyiacademy.org/'
                target='_blank'
                rel='noreferrer'
              >
                常見問題
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                className={classes.listItemLink}
                href='#'
                target='_blank'
                rel='noreferrer'
              >
                回報問題
              </Link>
            </ListItem>
          </List>
        </div>
      </Grid>
    </>
  )
}

export default FooterLinksGroups
