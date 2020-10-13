import React from 'react'

import BaseLayout from './BaseLayout'

export default {
  title: 'Layout/BaseLayout',
  component: BaseLayout,
}

const Template = (args) => <BaseLayout {...args} />

export const Primary = Template.bind({})
Primary.args = {}
