import React from 'react'

import Header from './Header'

export default {
  title: 'Layout/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
