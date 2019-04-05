import axios from '@util/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
import base from '../base' // 导入接口域名列表
// import createStore from '../../store/index'
// var store = createStore()

const comment = {
  send(comment: any) {
    // console.log(qs.stringify(
    //   {
    //     userLogin,
    //     userPass
    //   }
    // ))
    return axios.post(`${base.bd}/comments`, JSON.stringify(comment))
  },

  // 其他接口…………
}

export default comment
