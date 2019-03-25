import { combineReducers } from 'redux'
import handleLogin from './mine/HandleLogin'
import HandleMyUsermeta from './mine/HandleMyUsermeta'
import handleRegister from './mine/HandleRegister'
import HandleSetEducation from './mine/HandleSetEducation'
import handleSetInformation from './mine/HandleSetInformation'
import handleSetPwd from './mine/HandleSetPwd'


export default combineReducers({
  handleLogin,
  handleRegister,
  handleSetPwd,
  handleSetInformation,
  HandleSetEducation,
  HandleMyUsermeta
})
