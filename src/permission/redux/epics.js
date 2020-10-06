import { combineEpics, ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { map, switchMap, catchError } from 'rxjs/operators'

import { loginSuccess, loginFailure, loginAsync } from './slice'

const loginEpic = (action$, state$, { request }) =>
  action$.pipe(
    ofType(loginAsync.type),
    switchMap((action) =>
      from(request({ query: action.payload.query })).pipe(
        map((response) => loginSuccess(response)),
        catchError((error) => of(loginFailure(error)))
      )
    )
  )

export default combineEpics(loginEpic)
