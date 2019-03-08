/*
 * 导入视图
 */


import OfferBusinessCard from '@app/page/find/OfferBusinessCard'
import OfferRealNameAuth from '@app/page/find/OfferRealNameAuth'
import Recruit from '@app/page/find/OfferRecruit'
import Topic from '@app/page/find/Topic'
import FindPublish from '@page/find/FindPublish'
import Offer from '@page/find/Offer'
import OfferDetail from '@page/find/OfferDetail'
import OfferIdentityAuth from "@page/find/OfferIdentityAuth"


import {NavigationRouteConfigMap, NavigationScreenProps} from 'react-navigation'

import {Button} from '@ant-design/react-native'
import Icon from '@app/util/icon'
import {Icon as BaseIcon} from 'native-base'
import React from 'react'
/*

    --- 路由配置 ---

   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。

*/
const RouteFindConfig: NavigationRouteConfigMap = {
  话题: {
    screen: Topic,
    navigationOptions: ({navigation}: NavigationScreenProps) => ({
      header: null,
      headerTruncatedBackTitle: '',
      headerTitle: navigation.getParam('headerTitle', '话题'),
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
        <BaseIcon active name="brush" style={{color: '#333', fontSize: 24, alignSelf: 'center', marginRight: 10}}
                  onPress={() => {
                    navigation.navigate('发布')
                  }}/>
      )
    })
  },
  招聘: {
    screen: Offer,
    navigationOptions: ({navigation}: NavigationScreenProps) => ({
      header: null,
      // headerTruncatedBackTitle: '',
      headerTitle: navigation.getParam('headerTitle', '招聘'),
    })
  },
  发现发布: {
    screen: FindPublish,
    navigationOptions: ({navigation}: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '',
      headerTitle: navigation.getParam('headerTitle', '发布'),
      tabBarVisible: false,
      headerRight: (
        <Button
          type="primary"
          size="small"
          style={{height: 30, width: 50, marginRight: 10}}
          onPress={() => {
            // console.log(params)
            navigation.goBack()
            // console.log(navigation)
            // console.log(navigation.getParam('publish'))
            // navigation.state.routes[2].params._publish()
          }}
        >
          保存
        </Button>
        // <BaseIcon active name="brush" style={{color:'#333', fontSize: 24, alignSelf: 'center',marginRight: 10}} onPress={() => {
        //   navigation.navigate('发布')
        // }} />
      )
    })
  },
  身份认证: {
    screen: OfferIdentityAuth,
    navigationOptions: ({navigation}: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '身份认证',
      headerTitle: '身份认证',
      tabBarVisible: false,
    })
  },
  名片创建: {
    screen: OfferBusinessCard,
    navigationOptions: ({navigation}: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '名片创建',
      headerTitle: '名片创建',
      tabBarVisible: false,
    })
  },
  实名认证: {
    screen: OfferRealNameAuth,
    navigationOptions: ({navigation}: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '实名认证',
      headerTitle: '实名认证',
      tabBarVisible: false,
    })
  },
  招聘要求: {
    screen: Recruit,
    navigationOptions: ({navigation}: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '招聘要求',
      headerTitle: '招聘要求',
      tabBarVisible: false,
    })
  },
  招聘详情: {
    screen: OfferDetail,
    navigationOptions: ({navigation}: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '招聘详情',
      headerTitle: '招聘详情',
      tabBarVisible: false,
    })
  }
}

export default RouteFindConfig
