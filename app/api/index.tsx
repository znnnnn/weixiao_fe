/**
 * api接口的统一出口
 */
// account的模块接口
import login from './account/login'
import register from './account/register'

// 导出接口
export default {
  login,
  register
}
