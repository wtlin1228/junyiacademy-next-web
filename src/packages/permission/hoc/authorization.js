import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

// utils
import { getAuthToken } from '../utils'

// assets

// actions
import { loginAsync, fetchPermissionAsync } from 'src/packages/permission/redux'

// components
import { BaseLayout } from 'src/packages/layout'

// self-defined-components

const Authorization = (allowedRole) => (WrappedComponent) => {
  const usePermission = () => {
    const dispatch = useDispatch()

    return {
      permission: useSelector((state) => state.permission),
      fetchPermission: () => dispatch(fetchPermissionAsync()),
      login: () => dispatch(loginAsync()),
    }
  }

  const WithAuthorization = () => {
    const isServerSide = typeof window === 'undefined'

    const { permission, fetchPermission, login } = usePermission()
    const authToken = getAuthToken()
    const isAuthenticated = permission.roles.includes(allowedRole)

    useEffect(() => {
      if (!isServerSide && authToken) {
        fetchPermission()
      }
    }, [isServerSide, authToken])

    // TODO(leo.lin): Move login logic into login page
    useEffect(() => {
      if (!isServerSide && !authToken) {
        login()
      }
    }, [isServerSide, authToken])

    if (isServerSide) {
      return <BaseLayout />
    }

    if (!getAuthToken()) {
      // TODO(leo.lin): Redirect to a real login page
      return <BaseLayout>Login page</BaseLayout>
    }

    if (isAuthenticated) {
      return <WrappedComponent />
    }

    // TODO(leo.lin): Redirect to a real empty page
    return <BaseLayout />
  }

  return WithAuthorization
}

Authorization.propTypes = {
  allowedRole: PropTypes.string.isRequired,
}

export default Authorization
