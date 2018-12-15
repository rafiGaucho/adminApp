import { combineReducers } from 'redux'

import session from './session/reducer.js'
import voice from './chat/reducer.js'

export default combineReducers({
  session,
  voice
})
