import React from 'react'
import { StudentLayout } from 'src/packages/layout'
import { requireDeveloper } from 'src/packages/permission'

function Index() {
  return <StudentLayout>{/* page content start */}</StudentLayout>
}

export default requireDeveloper(Index)
