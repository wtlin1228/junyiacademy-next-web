import React from 'react'
import PropTypes from 'prop-types'

// utils

// assets

// actions

// components

// self-defined-components

const Login = ({ isLoginProcessing, onLogin }) => {
  const handleLoginButtonClick = (e) => {
    e.preventDefault()
    onLogin()
  }
  return (
    <div>
      <form onSubmit={handleLoginButtonClick}>
        <button type='submit' disabled={isLoginProcessing}>
          {isLoginProcessing ? '登入中' : '點我登入'}
        </button>
      </form>
    </div>
  )
}

Login.propTypes = {
  isLoginProcessing: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
}

export default Login
