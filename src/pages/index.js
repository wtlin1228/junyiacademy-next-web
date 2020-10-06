import React from 'react'
import { StudentLayout } from 'src/layout'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginAsync } from 'src/permission/redux'

export default function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginAsync({ query: '1234' }))
  }, [dispatch])

  return <StudentLayout>{/* page content start */}</StudentLayout>
}
