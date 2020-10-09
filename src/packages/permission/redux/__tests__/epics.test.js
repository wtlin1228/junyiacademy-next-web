import { TestScheduler } from 'rxjs/testing'
import {
  loginSuccess,
  loginFailure,
  loginAsync,
  fetchPermissionSuccess,
  fetchPermissionFailure,
  fetchPermissionAsync,
} from '../slice'
import { loginEpic, permissionEpic } from '../epics'

test('loginEpic happy case', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toStrictEqual(expected)
  })

  const LOGIN_RESPONSE = {
    foo: 'bar',
  }

  testScheduler.run(({ hot, cold, expectObservable }) => {
    const action$ = hot('-a-a', {
      a: loginAsync(),
    })
    const state$ = null
    const dependencies = {
      post: () =>
        cold('--a', {
          a: LOGIN_RESPONSE,
        }),
    }

    const output$ = loginEpic(action$, state$, dependencies)

    expectObservable(output$).toBe('-----a', {
      a: {
        type: loginSuccess.type,
        payload: LOGIN_RESPONSE,
      },
    })
  })
})

test('loginEpic sad case', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toStrictEqual(expected)
  })

  testScheduler.run(({ hot, cold, expectObservable }) => {
    const action$ = hot('-a-a', {
      a: loginAsync(),
    })
    const state$ = null
    const dependencies = {
      post: () => cold('--#'),
    }

    const output$ = loginEpic(action$, state$, dependencies)

    expectObservable(output$).toBe('-----a', {
      a: {
        type: loginFailure.type,
        payload: 'error',
      },
    })
  })
})

test('permissionEpic happy case', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toStrictEqual(expected)
  })

  const FETCH_PERMISSION_RESPONSE = {
    data: { foo: 'bar' },
  }

  testScheduler.run(({ hot, cold, expectObservable }) => {
    const action$ = hot('-a-a', {
      a: fetchPermissionAsync(),
    })
    const state$ = null
    const dependencies = {
      get: () =>
        cold('--a', {
          a: FETCH_PERMISSION_RESPONSE,
        }),
    }

    const output$ = permissionEpic(action$, state$, dependencies)

    expectObservable(output$).toBe('-----a', {
      a: {
        type: fetchPermissionSuccess.type,
        payload: FETCH_PERMISSION_RESPONSE.data,
      },
    })
  })
})

test('permissionEpic sad case', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toStrictEqual(expected)
  })

  testScheduler.run(({ hot, cold, expectObservable }) => {
    const action$ = hot('-a-a', {
      a: fetchPermissionAsync(),
    })
    const state$ = null
    const dependencies = {
      get: () => cold('--#'),
    }

    const output$ = permissionEpic(action$, state$, dependencies)

    expectObservable(output$).toBe('-----a', {
      a: {
        type: fetchPermissionFailure.type,
        payload: 'error',
      },
    })
  })
})
