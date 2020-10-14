import React from 'react'
import { StudentLayout } from '@/packages/layout'
import { requireDeveloper } from '@/packages/permission'

function Index() {
  return <StudentLayout>{/* page content start */}</StudentLayout>
}

export default requireDeveloper(Index)
