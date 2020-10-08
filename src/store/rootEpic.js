import { combineEpics } from 'redux-observable'
import { catchError } from 'rxjs/operators'

// epics
import { epic as permissionEpic } from 'packages/permission/redux'

const epics = [permissionEpic]

const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )

export default rootEpic
