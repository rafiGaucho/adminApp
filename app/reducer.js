import { combineReducers } from 'redux'

import session from './store/session/reducer.js'
import voice from './store/voice/reducer.js'

export default combineReducers({
  session,
  voice
})
