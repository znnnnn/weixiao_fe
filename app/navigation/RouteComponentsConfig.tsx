/*
 * 导入视图
 */



import CommentTest from '@components/Comment'
import SinglePost from '@components/SinglePost'
import SinglePostCardList from '@components/SinglePostCardList'

import { NavigationRouteConfigMap,NavigationScreenProps } from 'react-navigation'

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
    navigationOptions: ({ navigation }:NavigationScreenProps) => ({ headerTruncatedBackTitle: '' })
  },
  卡片文章列表: {
    screen: SinglePostCardList,
    navigationOptions: ({ navigation }:NavigationScreenProps) => ({
      headerTruncatedBackTitle: '',
      // header: null,
      headerTitle: navigation.getParam('headerTitle', 'some default value'),
      headerRight: (
        // <Button
        //   type="primary"
        //   size="small"
        //   style={{ height: 30, width: 50, marginRight: 10 }}
        //   onPress={() => {
        //     // console.log(params)
        //     navigation.goBack()
        //     // console.log(navigation)
        //     // console.log(navigation.getParam('publish'))
        //     // navigation.state.routes[2].params._publish()
        //   }}
        // >
        //   保存
        // </Button>
        <BaseIcon
          active
          name="brush"
          style={{ color: '#333', fontSize: 24, alignSelf: 'center', marginRight: 10 }}
          onPress={() => {
            navigation.navigate('发布')
          }}
        />
      )
    })
  }
}


export default RouteComponentsConfig
