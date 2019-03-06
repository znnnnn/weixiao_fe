/*
 * 导入视图
 */
// import Test from '@page/home/VideoPlayerScreen'

import { NavigationRouteConfigMap,NavigationScreenProps } from 'react-navigation'
import RouteComponentsConfig from './RouteComponentsConfig'
import RouteContactConfig from './RouteContactConfig'
import RouteFindConfig from './RouteFindConfig'
import RouteMineConfig from './RouteMineConfig'
import MainTab from './TabNavigator'

import { Button } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import { Icon as BaseIcon } from 'native-base'
import React from 'react'
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
  ...RouteFindConfig,
  ...RouteContactConfig,
  ...RouteMineConfig,
  ...RouteComponentsConfig
}

// 测试: {
//   screen: CommentTest,
//   navigationOptions: ({ navigation }) => ({
//     headerTruncatedBackTitle: '',
//     header: null
//   })
// }

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

export default RouteConfig
