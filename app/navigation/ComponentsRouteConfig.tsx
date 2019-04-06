/*
 * 导入视图
 */

import SinglePost from '@app/components/SinglePost'
import CommentTest from '@components/Comment'
import SinglePostCardList from '@components/SinglePostCardList'

import { NavigationRouteConfigMap, NavigationScreenProps } from 'react-navigation'

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
const RouteComponentsConfig: NavigationRouteConfigMap = {
  微校正文: {
    screen: SinglePost,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '微校正文',
      headerTitle: '微校正文'
    })
  },
  卡片文章列表: {
    screen: SinglePostCardList,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '',
      // header: null,
      headerTitle: navigation.getParam('headerTitle', '列表'),
      headerRight: (
        <BaseIcon
          active
          name="brush"
          style={{ color: '#333', fontSize: 24, alignSelf: 'center', marginRight: 10 }}
          onPress={() => {
            navigation.navigate('发现发布', {
              findPublishTitle: navigation.getParam('headerTitle'),
              publishType: navigation.getParam('headerTitle')
            })
          }}
        />
      )
    })
  }
}

export default RouteComponentsConfig
