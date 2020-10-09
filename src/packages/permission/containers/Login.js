import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// utils
import { getAuthToken } from '../utils'

// assets

// actions
import { loginAsync } from '../redux'

// components
import LoginComponent from '../components/Login'

// self-defined-components

const Login = ({ isLoginProcessing, loginAsync }) => {
  const router = useRouter()

  if (getAuthToken()) {
    router.push('/')
  }

  return (
    <LoginComponent
      isLoginProcessing={isLoginProcessing}
      onLogin={loginAsync}
    />
  )
}

Login.propTypes = {
  isLoginProcessing: PropTypes.bool.isRequired,
  loginAsync: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  isLoginProcessing: state.permission.isLoginProcessing,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loginAsync }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
