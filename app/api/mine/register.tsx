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
  register(userLogin: string, userPass: string) {
    // console.log(qs.stringify(
    //   {
    //     userLogin,
    //     userPass
    //   }
    // ))
    return axios.post(
      `${base.bd}/user/register`,
      JSON.stringify({
        userLogin,
        userPass
      })
    )
  },

  registerByCode(phone: string, code: string) {
    return axios.post(
      `${base.bd}/user/register/validatecode`,
      JSON.stringify({
        phone,
        code
      })
    )
  },

  sendRegisterCode(phone: string) {
    return axios.get(`${base.bd}/user/register/sendsms/${phone}`)
  }
  // 其他接口…………
}

export default register
