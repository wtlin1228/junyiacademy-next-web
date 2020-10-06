import { createSlice, createAction } from '@reduxjs/toolkit'

const namespace = 'permission'

const initialState = {
  foo: '',
}

const permissionSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.foo = action.payload.foo
    },
    loginFailure: (state) => {
      state.foo = 'login error!!!'
    },
  },
})

permissionSlice.asyncActions = {
  loginAsync: createAction(`${namespace}/loginAsync`),
}

export const { loginSuccess, loginFailure } = permissionSlice.actions

export const { loginAsync } = permissionSlice.asyncActions

export default permissionSlice.reducer
