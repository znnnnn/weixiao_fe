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
      params: {
        // 请求参数
        token
      }
    })
  },
  updateUserInfo(usermeta: any) {
    return axios.put(`${base.bd}/usermeta`, JSON.stringify(usermeta))
  },
  addFollow(follow: any) {
    return axios.post(`${base.bd}/follow`, JSON.stringify(follow))
  },
  findFollowByUserId(userId: number) {
    return axios.get(`${base.bd}/follow/user/${userId}`)
  },
  findMineFollowByUserId(userId: number) {
    return axios.get(`${base.bd}/follow/user/mine/${userId}`)
  },
  deleteFollowByUserId(userId: number, followUserId: number) {
    return axios.delete(`${base.bd}/follow`, {
      params: {
        userId,
        followUserId
      }
    })
  }
  // 其他接口…………
}

export default userHome
