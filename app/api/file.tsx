/**
 * login模块接口列表
 */

import axios from '@util/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
import base from './base' // 导入接口域名列表
// import createStore from '../../store/index'

const file = {
  upload(file: any) {
    return axios.post(`${base.bd}/upload`, file, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
  },

  uploads(files: any[]) {
    return axios.post(`${base.bd}/uploads`, files, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  // 其他接口…………
}

export default file
