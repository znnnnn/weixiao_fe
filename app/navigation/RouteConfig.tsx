/*
 * 导入视图
 */
import FindDetail from '@app/page/find/Detail'
import Contact from '@page/contact/Contact'
import DetailPost from '@page/find/DetailPost'
import PostCardDetail from '@page/home/Detail'
import Login from '@page/mine/Login'
import Register from '@page/mine/Register'
import SetEducation from '@page/mine/SetEducation'
import SetInformation from '@page/mine/SetImfomation'
import SetPwd from '@page/mine/SetPwd'

import CommentTest from '@components/Comment'
import Test from '@page/home/VideoPlayerScreen'

import { NavigationRouteConfigMap } from 'react-navigation'
import MainTab from './TabNavigator'

import { Button } from '@ant-design/react-native'
import Icon from '@app/util/icon'
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
  登录: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({ headerTruncatedBackTitle: '登录' })
  },
  注册: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({ headerTruncatedBackTitle: '注册' })
  },
  设置密码: {
    screen: SetPwd,
    navigationOptions: ({ navigation }) => ({ headerTruncatedBackTitle: '设置密码' })
  },
  完善资料: {
    screen: SetInformation,
    navigationOptions: ({ navigation }) => ({ headerTruncatedBackTitle: '完善资料' })
  },
  完善学历信息: {
    screen: SetEducation,
    navigationOptions: ({ navigation }) => ({ headerTruncatedBackTitle: '完善学历信息' })
  },
  微校正文: {
    screen: PostCardDetail,
    navigationOptions: ({ navigation }) => ({ headerTruncatedBackTitle: '' })
  },
  通讯录: {
    screen: Contact,
    navigationOptions: ({ navigation }) => ({
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
          添加好友
        </Button>
      )
    })
  },
  发现详情页: {
    screen: FindDetail,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '',
      // header: null,
      headerTitle: navigation.getParam('headerTitle', 'some default value')
    })
  },
  发现详情文章页: {
    screen: DetailPost
  },
  测试: {
    screen: CommentTest,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '',
      header: null
    })
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
