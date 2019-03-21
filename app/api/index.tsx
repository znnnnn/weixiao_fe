/**
 * api接口的统一出口
 */
// account的模块接口
import file from './file'
import login from './mine/login'
import register from './mine/register'
import setUsermeta from './mine/setUsermeta'

// 导出接口
export default {
  login,
  register,
  file,
  setUsermeta
}
