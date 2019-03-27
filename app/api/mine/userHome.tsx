import axios from '@util/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
import base from '../base' // 导入接口域名列表
// import createStore from '../../store/index'
// var store = createStore()

const userHome = {
  /**
   *
   * @param token 用户加密签名
   */
  myhome(token: string) {
    // console.log(qs.stringify(
    //   {
    //     userLogin,
    //     userPass
    //   }
    // ))
    return axios.get(`${base.bd}/usermeta/myhome`, {
      params: { // 请求参数
        token
      }
    })
  },
  updateUserInfo(usermeta:any){
    return axios.put(`${base.bd}/usermeta`, JSON.stringify(usermeta))
  }
  // 其他接口…………
}

export default userHome
