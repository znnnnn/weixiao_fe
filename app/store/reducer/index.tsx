import { combineReducers } from 'redux'
import handleLogin from './mine/HandleLogin'
import handleRegister from './mine/HandleRegister'

export default combineReducers({
  handleLogin,
  handleRegister
})
