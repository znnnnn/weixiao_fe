/*
 * 导入视图
 */

import FindPublish from '@page/find/FindPublish'

import Topic from '@app/page/find/Topic'
import TopicPublish from '@app/page/find/TopicPublish'

import Donate from '@page/find/Donate'
import DonateComment from '@page/find/DonateComment'
import DonateDetail from '@page/find/DonateDetail'
import DonateOfMine from '@page/find/DonateOfMine'
import DonatePay from '@page/find/DonatePay'
import DonatePaySuccess from '@page/find/DonatePaySuccess'

import OfferBusinessCard from '@app/page/find/OfferBusinessCard'
import OfferRealNameAuth from '@app/page/find/OfferRealNameAuth'
import Recruit from '@app/page/find/OfferRecruit'
import Offer from '@page/find/Offer'
import OfferDetail from '@page/find/OfferDetail'
import OfferIdentityAuth from '@page/find/OfferIdentityAuth'

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
const RouteFindConfig: NavigationRouteConfigMap = {
  话题: {
    screen: Topic,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '',
      headerTitle: navigation.getParam('headerTitle', '话题'),
      // headerRight: (
      //   <BaseIcon
      //     active
      //     name="brush"
      //     style={{ color: '#333', fontSize: 24, alignSelf: 'center', marginRight: 10 }}
      //     onPress={() => {
      //       navigation.navigate('发现发布', {
      //         findPublishTitle: navigation.getParam('headerTitle'),
      //         publishType: navigation.getParam('headerTitle')
      //       })
      //     }}
      //   />
      // )
    })
  },
  话题发布:{
    screen: TopicPublish,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '',
      headerTitle: `话题发布`,
      tabBarVisible: false,
      headerRight: (
        <Button
          type="primary"
          size="small"
          style={{ height: 30, width: 50, marginRight: 10 }}
          onPress={() => {
            const {params}: any = navigation.state
            // console.log(params)
            params.publish('话题')
          }}
        >
          保存
        </Button>
      )
    })
  },
  招聘: {
    screen: Offer,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      header: null,
      // headerTruncatedBackTitle: '',
      headerTitle: navigation.getParam('headerTitle', '招聘')
    })
  },
  发现发布: {
    screen: FindPublish,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '',
      headerTitle: `${navigation.getParam('findPublishTitle', '美食')} - 发布`,
      tabBarVisible: false,
      headerRight: (
        <Button
          type="primary"
          size="small"
          style={{ height: 30, width: 50, marginRight: 10 }}
          onPress={() => {
            const {params}: any = navigation.state
            // console.log(params)
            params.publish(navigation.getParam('publishType'))
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
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '身份认证',
      headerTitle: '身份认证',
      tabBarVisible: false
    })
  },
  名片创建: {
    screen: OfferBusinessCard,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '名片创建',
      headerTitle: '名片创建',
      tabBarVisible: false
    })
  },
  实名认证: {
    screen: OfferRealNameAuth,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '实名认证',
      headerTitle: '实名认证',
      tabBarVisible: false
    })
  },
  招聘要求: {
    screen: Recruit,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '招聘要求',
      headerTitle: '招聘要求',
      tabBarVisible: false
    })
  },
  招聘详情: {
    screen: OfferDetail,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // header: null,
      headerTruncatedBackTitle: '招聘详情',
      headerTitle: '招聘详情',
      tabBarVisible: false
    })
  },
  捐赠: {
    screen: Donate,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      header: null,
      tabBarVisible: false
    })
  },
  我的捐赠: {
    screen: DonateOfMine,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '我的捐赠',
      headerTitle: '我的捐赠',
      tabBarVisible: false
    })
  },
  捐赠详情: {
    screen: DonateDetail,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // headerTitle: navigation.getParam('headerTitle', '详情'),
      headerTitle: navigation.getParam('headerTitle', '详情'),
      headerTruncatedBackTitle: '捐赠详情',
      tabBarVisible: false
    })
  },
  爱心捐款: {
    screen: DonatePay,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // headerTitle: navigation.getParam('headerTitle', '详情'),
      headerTitle: '爱心捐款',
      headerTruncatedBackTitle: '爱心捐款',
      tabBarVisible: false
    })
  },
  捐款成功: {
    screen: DonatePaySuccess,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // headerTitle: navigation.getParam('headerTitle', '详情'),
      headerTitle: '捐款成功',
      headerTruncatedBackTitle: '',
      tabBarVisible: false
    })
  },
  爱心留言: {
    screen: DonateComment,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      // headerTitle: navigation.getParam('headerTitle', '详情'),
      headerTitle: '爱心留言',
      headerTruncatedBackTitle: '爱心留言',
      tabBarVisible: false
    })
  }
}

export default RouteFindConfig
