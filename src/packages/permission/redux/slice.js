import { createSlice, createAction } from '@reduxjs/toolkit'

const namespace = 'permission'

const initialState = {
  isLoginProcessing: false,
  roles: [], // ['admin', 'developer', 'moderator', 'user']
}

const permissionSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    loginAsync: (state) => {
      state.isLoginProcessing = true
    },
    loginSuccess: (state) => {
      state.isLoginProcessing = false
    },
    loginFailure: (state) => {
      state.isLoginProcessing = false
    },
    fetchPermissionSuccess: (state, action) => {
      console.log(action)
      state.roles = action.payload.roles
    },
    fetchPermissionFailure: (state) => {
      state.roles = initialState.roles
    },
  },
})

permissionSlice.asyncActions = {
  fetchPermissionAsync: createAction(`${namespace}/fetchPermissionAsync`),
}

export const {
  loginAsync,
  loginSuccess,
  loginFailure,
  fetchPermissionSuccess,
  fetchPermissionFailure,
} = permissionSlice.actions

export const { fetchPermissionAsync } = permissionSlice.asyncActions

export default permissionSlice.reducer
