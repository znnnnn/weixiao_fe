/*
 * 导入视图
 */
import PostCardDetail from '@page/home/Detail'
import Login from '@page/mine/Login'
import Register from '@page/mine/Register'
import SetEducation from '@page/mine/SetEducation'
import SetInformation from '@page/mine/SetImfomation'
import SetPwd from '@page/mine/SetPwd'

import Test from '@page/home/VideoPlayerScreen'

import {NavigationRouteConfigMap} from 'react-navigation'
import MainTab from './TabNavigator'
/*

    --- 路由配置 ---

   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。

*/
const RouteConfig: NavigationRouteConfigMap = {
  MainTab: {
    screen: MainTab
    // 嵌套tab 因此header要在此关闭
    // navigationOptions: ({ navigation }) => ({ header: null })
  },
  登录: {
    screen: Login,
    navigationOptions: ({navigation}) => ({headerTruncatedBackTitle: '登录'})
  },
  注册: {
    screen: Register,
    navigationOptions: ({navigation}) => ({headerTruncatedBackTitle: '注册'})
  },
  设置密码: {
    screen: SetPwd,
    navigationOptions: ({navigation}) => ({headerTruncatedBackTitle: '设置密码'})
  },
  完善资料: {
    screen: SetInformation,
    navigationOptions: ({navigation}) => ({headerTruncatedBackTitle: '完善资料'})
  },
  完善学历信息: {
    screen: SetEducation,
    navigationOptions: ({navigation}) => ({headerTruncatedBackTitle: '完善学历信息'})
  },
  微校正文: {
    screen: PostCardDetail,
    navigationOptions: ({navigation}) => ({headerTruncatedBackTitle: ''})
  },
  测试: {
    screen: Test,
    navigationOptions: ({navigation}) => ({headerTruncatedBackTitle: '', header: null})
  }
  // 下面三个页面我需要隐藏导航栏
  // NewsDetail: {
  //   screen: NewsDetail,
  //   navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  // },
  // VideoDetail: {
  //   screen: VideoDetail,
  //   navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  // },
  // NewsSearch: {
  //   screen: NewsSearch,
  //   navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  // }
}

export default RouteConfig
