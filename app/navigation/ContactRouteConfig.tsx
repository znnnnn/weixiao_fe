/*
 * 导入视图
 */


import Chat from '@page/contact/Chat'
import Contact from '@page/contact/Contact'

import { NavigationRouteConfigMap,NavigationScreenProps } from 'react-navigation'

import { Button } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import {Icon as BaseIcon} from 'native-base'
import React from 'react'
/*

    --- 路由配置 ---

   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。

*/
const RouteContactConfig: NavigationRouteConfigMap = {
  通讯录: {
    screen: Contact,
    navigationOptions: ({ navigation }:NavigationScreenProps) => ({
      headerTruncatedBackTitle: '通讯录',
      headerTitle: '通讯录',
      headerRight: (
        <Button
          type="primary"
          size="small"
          style={{ height: 30, width: 50, marginRight: 10 }}
          onPress={() => {
            // console.log(params)
            navigation.navigate('首页')
            // console.log(navigation)
            // console.log(navigation.getParam('publish'))
            // navigation.state.routes[2].params._publish()
          }}
        >
          添加
        </Button>
      )
    })
  },
  聊天: {
    screen: Chat,
    navigationOptions: ({ navigation }:NavigationScreenProps) => ({
      headerTruncatedBackTitle: '聊天',
      headerTitle: navigation.getParam('headerTitle', '聊天'),
    })
  },
}

export default RouteContactConfig
