/**
 * api接口的统一出口
 */
// account的模块接口
import file from './file'
import home from './home/index'
import login from './mine/login'
import register from './mine/register'
import userHome from './mine/userHome'
import usermeta from './mine/usermeta'
import publish from './publish/publish'

// 导出接口
export default {
  login,
  register,
  file,
  usermeta,
  userHome,
  home,
  publish
}
