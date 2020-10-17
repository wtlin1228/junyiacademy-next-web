import React from 'react'
import { StudentLayout } from '@/packages/layout'
import { requireDeveloper } from '@/packages/permission'
import { fetchPermission, getAuthToken } from '@/utils'

function Index() {
  return <StudentLayout>{/* page content start */}</StudentLayout>
}

export async function getServerSideProps({ req }) {
  const cookies = req.headers.cookie || ''

  const serverSideAuthToken = getAuthToken(cookies)
  const { roles } = await fetchPermission(cookies)

  return {
    props: {
      serverSideAuthToken,
      initialReduxState: {
        permission: {
          roles,
        },
      },
    }, // will be passed to the page component as props
  }
}

export default requireDeveloper(Index)
