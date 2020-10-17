import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

// utils
import { getAuthToken } from '../utils'

// assets

// actions
import { fetchPermissionAsync } from '../redux'

// components
import { BaseLayout } from '@/packages/layout'

// self-defined-components

const Authorization = (allowedRole) => (WrappedComponent) => {
  const usePermission = () => {
    const dispatch = useDispatch()

    return {
      permission: useSelector((state) => state.permission),
      fetchPermission: () => dispatch(fetchPermissionAsync()),
    }
  }

  const WithAuthorization = ({ serverSideAuthToken }) => {
    const router = useRouter()
    const isServerSide = typeof window === 'undefined'

    const { permission, fetchPermission } = usePermission()
    const authToken = serverSideAuthToken || getAuthToken()
    const isAuthenticated = permission.roles.includes(allowedRole)

    useEffect(() => {
      if (!isServerSide && authToken && !isAuthenticated) {
        fetchPermission()
      }
    }, [isServerSide, authToken, isAuthenticated])

    if (!isServerSide && !authToken) {
      router.push('/login')
    }

    if (isAuthenticated) {
      return <WrappedComponent />
    }

    return <BaseLayout />
  }

  WithAuthorization.propTypes = {
    serverSideAuthToken: PropTypes.string.isRequired,
  }

  return WithAuthorization
}

Authorization.propTypes = {
  allowedRole: PropTypes.string.isRequired,
}

export default Authorization
