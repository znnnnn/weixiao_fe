import axios from '@util/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
import base from '../base' // 导入接口域名列表

const Topic = {
  /**
   *
   * @param token 用户加密签名
   */
  getTopicNameList() {
    return axios.get(`${base.bd}/topic`)
  },
  addTopic(topicName: string, topicThumb:Array<string>) {
    return axios.post(
      `${base.bd}/topic`,
      JSON.stringify({
        topicName,
        topicThumb
      })
    )
  },
  getTopicList(topicName: string){
    return axios.get(`${base.bd}/posts/topic`,{
      params:{
        topicName
      }
    })
  },
  getTopicThumb(topicName: string){
    return axios.get(`${base.bd}/posts/topic/thumb`,{
      params:{
        topicName
      }
    })
  },
  getTopicByTopicName(topicName: string){
    return axios.get(`${base.bd}/topic/topicName`,{
      params:{
        topicName
      }
    })
  },
  // 其他接口…………
}

export default Topic
