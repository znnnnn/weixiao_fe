/**
 * login模块接口列表
 */

import axios from '@util/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块
import base from './base' // 导入接口域名列表
// import createStore from '../../store/index'

const file = {
  upload(file: any) {
    return axios.post(
      `${base.bd}/upload`,
      JSON.stringify({
        file
      }),
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data'
          // 'Content-Language': React.NativeModules.RNI18n.locale,
        },
      }
    )
  },

  uploads(files: any[]) {
    return axios.post(
      `${base.bd}/uploads`,
      JSON.stringify({
        files
      })
    )
  }

  // 其他接口…………
}

export default file
