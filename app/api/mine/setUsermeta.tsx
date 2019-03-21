/**
 * login模块接口列表
 */

import axios from '@util/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
import base from '../base' // 导入接口域名列表
// import createStore from '../../store/index'
// var store = createStore()

const register = {
  /**
   * 登录
   * @param userLogin 用户名
   * @param userPass 密码
   */
  setUsermeta(usermeta:Object) {
    // console.log(qs.stringify(
    //   {
    //     userLogin,
    //     userPass
    //   }
    // ))
    console.log(JSON.stringify(usermeta))
    return axios.post(
      `${base.bd}/usermeta/set`,
      JSON.stringify(usermeta)
    )
  }
  // 其他接口…………
}

export default register
