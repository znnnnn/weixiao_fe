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
  },
  getPostsList() {
    return axios.get(`${base.bd}/posts/`)
  },
  getPostsOfType(type: string) {
    return axios.get(`${base.bd}/posts/type/`, {
      params: {
        type
      }
    })
  },
  /**
   * 根据文章ID获取文章内容、评论、分享等信息
   * @param postId 文章ID
   */
  getPostByPostId(postId: number) {
    return axios.get(`${base.bd}/posts/${postId}`)
  },
  deletePostByPostId(postId: number) {
    return axios.delete(`${base.bd}/posts/${postId}`)
  },
  getPostsByPostAuthor(postsAuthor: number) {
    return axios.get(`${base.bd}/posts/user/${postsAuthor}`)
  },
  getPostsOfTypeAndPostAuthor(type: string | null, postsAuthor: number) {
    return axios.get(`${base.bd}/posts/type/user`, {
      params: {
        type,
        postsAuthor
      }
    })
  }

  // 其他接口…………
}

export default Home
