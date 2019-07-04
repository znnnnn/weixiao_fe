/*
 * @Description: 
 * @version: 
 * @Author: znnnnn
 * @Date: 2019-07-04 08:44:51
 * @LastEditors: znnnnn
 * @LastEditTime: 2019-07-04 09:07:32
 */
/**
 * 接口域名的管理
 */
// import createStore from '../store/index'
// var store = createStore()

const base = {
  // sq: '/api', // 在线地址api -> '/api'在'webpack.config.client.js中映射为'http://101.132.141.130:82/api/'
  sq: 'http://139.224.134.32:8080', // 在线地址api -> '/api'在'webpack.config.client.js中映射为'http://101.132.141.130:82/api/'
  // bd: 'http://172.20.10.3:8080'  // '本地开发api  数据mock模拟'
  bd: 'http://139.224.134.32:8080' // 腾讯云
  // token: store.state.token
}

// http://101.132.141.130:82/api/report/rank/0

export default base
