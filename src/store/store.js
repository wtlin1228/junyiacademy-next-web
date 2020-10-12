import { useMemo } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './rootReducer'
import rootEpic from './rootEpic'
import { get, post } from './dependencies'

let store

export const initStore = (initialState) => {
  const epicMiddleware = createEpicMiddleware({ dependencies: { get, post } })

  const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware],
    preloadedState: initialState,
    enhancers: [],
  })

  epicMiddleware.run(rootEpic)

  return store
}

const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
