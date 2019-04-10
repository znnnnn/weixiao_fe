/**
 * 接口域名的管理
 */
// import createStore from '../store/index'
// var store = createStore()

const base = {
  // sq: '/api', // 在线地址api -> '/api'在'webpack.config.client.js中映射为'http://101.132.141.130:82/api/'
  sq: 'http://101.132.141.130:82/api', // 在线地址api -> '/api'在'webpack.config.client.js中映射为'http://101.132.141.130:82/api/'
  bd: 'http://172.20.10.3:8080' // '本地开发api  数据mock模拟'
  // token: store.state.token
}

// http://101.132.141.130:82/api/report/rank/0

export default base
