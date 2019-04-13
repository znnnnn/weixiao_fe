/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
// import createStore from '@src/store/index'
import axios,{AxiosRequestConfig} from 'axios'
import { Spinner,Toast } from 'native-base'
import { NavigationScreenProps, withNavigation } from 'react-navigation'
// import { Toast } from 'vant'

// const store = createStore()
/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = (msg:string) => {
  Toast.show({
    text: msg,
    type: 'danger',
    position:'top'
  })
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
// const toLogin = (navigation:NavigationScreenProps) => {
//   navigation.navigation.navigate
// }

/**
 * 请求失败后的错误统一处理
 * @param status 请求失败的状态码
 */
const errorHandle = (status:number, other: number) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      tip('登录状态过期，请重新登录，自动跳转登录页')
      // toLogin()
      break
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录')
      break
    // 404请求不存在
    case 404:
      tip('请求出了点问题')
      break
    default:
      console.log(other)
  }
}

// 创建axios实例
let instance = axios.create({ timeout: 1000 * 12 })
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.put['Content-Type'] = 'application/json'
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */

// element-ui loading
// var loadinginstace

const pending:any = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const CancelToken = axios.CancelToken
const removePending = (config:AxiosRequestConfig) => {
  for (const p in pending) {
    if (pending[p].u === config.url + '&' + config.method) {
      // 当当前请求在数组中存在时执行函数体
      pending[p].f() // 执行取消操作
      pending.splice(p, 1) // 把这条记录从数组中移除
    }
  }
}
instance.interceptors.request.use(
  (config) => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。

    removePending(config) // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new CancelToken((c) => {
      // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      pending.push({ u: config.url + '&' + config.method, f: c })
    })

    // loadinginstace = Loading.service({ fullscreen: true })
    // const token = '123123123'
    // token && (config.headers.Authorization = token)
    // console.log(config)
    return config
  },
  (error) => {
    // loadinginstace.close()
    // Promise.error(error)
    console.log('axios Error:103,',error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (res) => {
    // loading界面延迟消失
    setTimeout(() => {
      // loadinginstace.close()
    }, 300)
    // console.log(res)
    return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
  },
  // 请求失败
  (error) => {
    // loadinginstace.close()
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      // console.log('http内部',response)
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false)
      // console.log('断网了！')
      Toast.show({
        text: '网络似乎出现了状况/(ㄒoㄒ)/',
        type: 'danger',
        position:'top'
      })
    }
  }
)

export default instance
