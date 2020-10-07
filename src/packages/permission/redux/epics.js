import { combineEpics, ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { map, switchMap, catchError } from 'rxjs/operators'

import {
  loginSuccess,
  loginFailure,
  loginAsync,
  fetchPermissionSuccess,
  fetchPermissionFailure,
  fetchPermissionAsync,
} from './slice'

const loginEpic = (action$, state$, { post }) =>
  action$.pipe(
    ofType(loginAsync.type),
    switchMap(() =>
      from(
        post('/api/login', { email: 'wtlin1228', password: 'changeme' })
      ).pipe(
        map((response) => loginSuccess(response)),
        catchError((error) => of(loginFailure(error)))
      )
    )
  )

const permissionEpic = (action$, $state, { get }) =>
  action$.pipe(
    ofType(fetchPermissionAsync.type),
    switchMap(() =>
      from(get('/api/permission', {})).pipe(
        map((response) => fetchPermissionSuccess(response.data)),
        catchError((error) => of(fetchPermissionFailure(error)))
      )
    )
  )

export default combineEpics(loginEpic, permissionEpic)
