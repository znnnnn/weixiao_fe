/*
 * 导入视图
 */

import Contact from '@page/contact/Contact'

import SinglePostCardList from '@components/SinglePostCardList'

import UserExperience from '@app/page/mine/UserExperience'
import UserHome from '@app/page/mine/UserHome'
import About from '@page/mine/About'
import AccountSecurity from '@page/mine/AccountSecurity'
import ChangePassword from '@page/mine/ChangePassword'
import ChangePhoneNumber from '@page/mine/ChangePhoneNumber'
import FeedBack from '@page/mine/FeedBack'
import Gerneral from '@page/mine/Gerneral'
import Login from '@page/mine/Login'
import Privacy from '@page/mine/Privacy'
import PrivacyContact from '@page/mine/PrivacyContact'
import PrivacyRadio from '@page/mine/PrivacyRadio'
import Register from '@page/mine/Register'
import SetEducation from '@page/mine/SetEducation'
import SetInformation from '@page/mine/SetImfomation'
import SetPwd from '@page/mine/SetPwd'
import Setting from '@page/mine/Setting'
import UserInfoSetting from '@page/mine/UserInfoSetting'
import Welcome from '@page/mine/Welcome'

import CommentTest from '@components/Comment'
import SinglePost from '@components/SinglePost'

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
    screen: SinglePost,
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
          添加
        </Button>
      )
    })
  },
  卡片文章列表: {
    screen: SinglePostCardList,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '',
      // header: null,
      headerTitle: navigation.getParam('headerTitle', 'some default value')
    })
  },
  用户中心: {
    screen: UserHome,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '用户中心',
      headerTitle: '用户中心',
    })
  },
  编辑个人资料: {
    screen: UserInfoSetting,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '编辑个人资料',
      headerTitle: '编辑个人资料',
      headerRight: (
        <Button
          type="primary"
          size="small"
          style={{ height: 30, width: 50, marginRight: 10 }}
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
      )
    })
  },
  个人经历: {
    screen: UserExperience,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '编辑个人经历',
      headerTitle: '编辑个人经历',
      headerRight: (
        <Button
          type="primary"
          size="small"
          style={{ height: 30, width: 50, marginRight: 10 }}
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
      )
    })
  },
  设置: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '设置',
      headerTitle: '设置'
    })
  },
  账号安全: {
    screen: AccountSecurity,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '账号安全',
      headerTitle: '账号安全'
    })
  },
  修改密码: {
    screen: ChangePassword,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '修改密码',
      headerTitle: '修改密码'
    })
  },
  修改手机号: {
    screen: ChangePhoneNumber,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '修改手机号',
      headerTitle: '修改手机号'
    })
  },
  通用: {
    screen: Gerneral,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '通用',
      headerTitle: '通用'
    })
  },
  关于微校: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '关于微校',
      headerTitle: '关于微校'
    })
  },
  欢迎页: {
    screen: Welcome,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '欢迎',
      headerTitle: '欢迎'
    })
  },
  帮助与反馈: {
    screen: FeedBack,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '帮助与反馈',
      headerTitle: '帮助与反馈'
    })
  },
  隐私: {
    screen: Privacy,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '隐私',
      headerTitle: '隐私'
    })
  },
  权限设置: {
    screen: PrivacyRadio,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '权限设置',
      headerTitle: '权限设置'
    })
  },
  选择好友: {
    screen: PrivacyContact,
    navigationOptions: ({ navigation }) => ({
      headerTruncatedBackTitle: '选择好友',
      headerTitle: '选择好友',
      headerRight: (
        <Button
          type="primary"
          size="small"
          style={{ height: 30, width: 50, marginRight: 10 }}
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
      )
    })
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
}

export default RouteConfig
