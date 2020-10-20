# Conventions

## Component

### Presentational component

snippet prefix: jc

```js
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

// utils

// assets

// actions

// components

// self-defined-components
const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { name: 'Example' }
)

const Example = ({}) => {
  const classes = useStyles()

  return <div className={classes.root}></div>
}

Example.propTypes = {}

export default Example
```

### Container component

Use container component to connect to redux store.

snippet prefix: jcr

```js
import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// utils

// assets

// actions
import { exampleAction } from '../redux'

// components
import ExampleComponent from '../components/Example'

// self-defined-components

const Example = ({}) => {
  return <ExampleComponent />
}

Example.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Example)
```

## Redux

### Slice

We use @reduxjs/toolkit to create reducers, action creators and action types.

snippet prefix: jsl

```js
import { createSlice, createAction } from '@reduxjs/toolkit'

const namespace = 'example'

const initialState = {
  foo: 'bar',
}

const exampleSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    exampleAction: (state, action) => {
      state.foo = action.payload.foo
    },
  },
})

exampleSlice.asyncActions = {
  exampleActionAsync: createAction(`${namespace}/exampleActionAsync`),
}

export const { exampleAction } = exampleSlice.actions

export const { exampleActionAsync } = exampleSlice.asyncActions

export default exampleSlice.reducer
```

### Epic

It is a function which takes a stream of actions and returns a stream of actions. Actions in, actions out.

snippet prefix: jep

```js
import { combineEpics, ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { map, switchMap, catchError } from 'rxjs/operators'

import {
  getSuccess,
  getFailure,
  getAsync,
  postSuccess,
  postFailure,
  postAsync,
} from './slice'

export const postEpic = (action$, state$, { post }) =>
  action$.pipe(
    ofType(loginAsync.type),
    switchMap(() =>
      from(post('/api/foo', { foo: 'bar' })).pipe(
        map((response) => loginSuccess(response)),
        catchError((error) => of(loginFailure(error)))
      )
    )
  )

export const getEpic = (action$, $state, { get }) =>
  action$.pipe(
    ofType(fetchPermissionAsync.type),
    switchMap(() =>
      from(get('/api/foo', { foo: 'bar' })).pipe(
        map((response) => fetchPermissionSuccess(response.data)),
        catchError((error) => of(fetchPermissionFailure(error)))
      )
    )
  )

export default combineEpics(postEpic, getEpic)
```

## Unit Test

### Component

snippet prefix: jcut

```js
import React from 'react'
import { render, screen } from '@/tests'
import userEvent from '@testing-library/user-event'

import Example from '../Example'

test('render component with custom renderer', () => {
  const options = {
    initialState: {},
  }

  render(<Example foo={'foo'} bar={'bar'} />, options)

  // Act and Expect ...
})
```

### Component with api mock

snippet prefix: jcutm

```js
import React from 'react'
import { render, waitFor, screen } from '@/tests'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Example from '../Example'

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('render App', () => {
  const options = {
    initialState: {},
  }

  render(<Example />, options)

  // Act and Expect ...
})

test('handlers server error', async () => {
  server.use(
    // override the initial 'GET /greeting' request handler
    // to return a 500 Server Error
    rest.get('/greeting', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )

  const options = {
    initialState: {},
  }

  render(<Example />, options)

  // Act and Expect ...
})
```

## Redux

### Epic

snippet prefix: jeput

```js
import { TestScheduler } from 'rxjs/testing'
import { getSuccess, getFailure, getAsync } from '../slice'
import { getEpic } from '../epics'

test('getEpic happy case', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toStrictEqual(expected)
  })

  const RESPONSE = {
    foo: 'bar',
  }

  testScheduler.run(({ hot, cold, expectObservable }) => {
    const action$ = hot('-a-a', {
      a: getAsync(),
    })
    const state$ = null
    const dependencies = {
      get: () =>
        cold('--a', {
          a: RESPONSE,
        }),
    }

    const output$ = loginEpic(action$, state$, dependencies)

    expectObservable(output$).toBe('-----a', {
      a: {
        type: getSuccess.type,
        payload: RESPONSE,
      },
    })
  })
})

test('getEpic sad case', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toStrictEqual(expected)
  })

  testScheduler.run(({ hot, cold, expectObservable }) => {
    const action$ = hot('-a-a', {
      a: getAsync(),
    })
    const state$ = null
    const dependencies = {
      get: () => cold('--#'),
    }

    const output$ = getEpic(action$, state$, dependencies)

    expectObservable(output$).toBe('-----a', {
      a: {
        type: getFailure.type,
        payload: 'error',
      },
    })
  })
})
```
