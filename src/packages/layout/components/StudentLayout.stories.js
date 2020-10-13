import React from 'react'

import StudentLayout from './StudentLayout'

export default {
  title: 'Layout/StudentLayout',
  component: StudentLayout,
}

const Template = (args) => <StudentLayout {...args} />

export const Primary = Template.bind({})
Primary.args = {}
