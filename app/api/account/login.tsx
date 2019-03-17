/**
 * login模块接口列表
 */

import axios from '@util/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
import base from '../base' // 导入接口域名列表
// import createStore from '../../store/index'
// var store = createStore()

const login = {
  /**
   * 登录
   * @param userLogin 用户名
   * @param userPass 密码
   */
  login(userLogin: string, userPass: string) {
    // console.log(qs.stringify(
    //   {
    //     userLogin,
    //     userPass
    //   }
    // ))
    return axios.post(
      `${base.bd}/user/login`,
      JSON.stringify({
        userLogin,
        userPass
      })
    )
  },

  loginByCode(phone: string, code: string) {
    return axios.post(
      `${base.bd}/user/login/validatecode`,
      JSON.stringify({
        phone,
        code
      })
    )
  },

  sendLoginCode(phone: string) {
    return axios.get(`${base.bd}/user/login/sendsms/${phone}`)
  }
  // 其他接口…………
}

export default login
