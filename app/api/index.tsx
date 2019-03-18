/**
 * api接口的统一出口
 */
// account的模块接口
import login from './mine/login'
import register from './mine/register'

// 导出接口
export default {
  login,
  register
}
