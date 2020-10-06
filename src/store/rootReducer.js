import { combineReducers } from 'redux'

// reducers
import { reducer as permission } from 'src/permission/redux'

const rootReducer = combineReducers({ permission })

export default rootReducer
