import { combineReducers } from 'redux'
import handleLogin from './mine/HandleLogin'
import handleRegister from './mine/HandleRegister'
import handleSetInformation from './mine/HandleSetInformation'
import handleSetPwd from './mine/HandleSetPwd'


export default combineReducers({
  handleLogin,
  handleRegister,
  handleSetPwd,
  handleSetInformation
})
