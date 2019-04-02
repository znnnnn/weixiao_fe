import axios from '@util/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
import base from '../base' // 导入接口域名列表
// import createStore from '../../store/index'
// var store = createStore()

const upvote = {
  upvote(upvote: any) {
    // console.log(qs.stringify(
    //   {
    //     userLogin,
    //     userPass
    //   }
    // ))
    return axios.post(`${base.bd}/upvote`, JSON.stringify(upvote))
  },

  deleteUpvoteByUserId(postId: number,userId: number) {
    return axios.delete(`${base.bd}/upvote`, {
      params: {
        postId,
        userId,
      }
    })
  }
  // 其他接口…………
}

export default upvote
