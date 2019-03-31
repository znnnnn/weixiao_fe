import axios from '@util/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
import base from '../base' // 导入接口域名列表
// import createStore from '../../store/index'
// var store = createStore()

const publish = {
  /**
   *
   * @param token 用户加密签名
   */
  post(posts: any) {
    // console.log(qs.stringify(
    //   {
    //     userLogin,
    //     userPass
    //   }
    // ))
    return axios.post(`${base.bd}/posts`, JSON.stringify(posts))
  }
  // 其他接口…………
}

export default publish
