import { combineReducers } from 'redux'

// reducers
import { reducer as permission } from '../permission/redux'

const rootReducer = combineReducers({ permission })

export default rootReducer
