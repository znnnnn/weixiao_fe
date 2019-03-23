import axios from '@util/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
import base from '../base' // 导入接口域名列表
// import createStore from '../../store/index'
// var store = createStore()

const Home = {
  /**
   * 登录
   * @param userLogin 用户名
   * @param userPass 密码
   */
  getUsermetaList() {
    // console.log(qs.stringify(
    //   {
    //     userLogin,
    //     userPass
    //   }
    // ))
    return axios.get(`${base.bd}/usermeta/`)
  }
  // 其他接口…………
}

export default Home
