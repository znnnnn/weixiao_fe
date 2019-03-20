/*
 * 导入视图
 */

import UserExperience from '@app/page/mine/UserExperience'
import UserHome from '@app/page/mine/UserHome'
import About from '@page/mine/About'
import AccountSecurity from '@page/mine/AccountSecurity'
import ChangePassword from '@page/mine/ChangePassword'
import ChangePhoneNumber from '@page/mine/ChangePhoneNumber'
import FeedBack from '@page/mine/FeedBack'
import ForgetPassword from '@page/mine/ForgetPassword'
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
const RouteMineConfig: NavigationRouteConfigMap = {
  用户中心: {
    screen: UserHome,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '用户中心',
      headerTitle: '用户中心'
    })
  },
  编辑个人资料: {
    screen: UserInfoSetting,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
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
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
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
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '设置',
      headerTitle: '设置'
    })
  },
  账号安全: {
    screen: AccountSecurity,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '账号安全',
      headerTitle: '账号安全'
    })
  },
  修改密码: {
    screen: ChangePassword,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '修改密码',
      headerTitle: '修改密码'
    })
  },
  修改手机号: {
    screen: ChangePhoneNumber,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '修改手机号',
      headerTitle: '修改手机号'
    })
  },
  通用: {
    screen: Gerneral,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '通用',
      headerTitle: '通用'
    })
  },
  关于微校: {
    screen: About,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '关于微校',
      headerTitle: '关于微校'
    })
  },
  欢迎页: {
    screen: Welcome,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '欢迎',
      headerTitle: '欢迎'
    })
  },
  帮助与反馈: {
    screen: FeedBack,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '帮助与反馈',
      headerTitle: '帮助与反馈'
    })
  },
  隐私: {
    screen: Privacy,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '隐私',
      headerTitle: '隐私'
    })
  },
  权限设置: {
    screen: PrivacyRadio,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '权限设置',
      headerTitle: '权限设置'
    })
  },
  选择好友: {
    screen: PrivacyContact,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
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
  },
  登录: {
    screen: Login,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '登录',
      header: null
    })
  },
  注册: {
    screen: Register,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '注册'
    })
  },
  设置密码: {
    screen: SetPwd,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '设置密码'
    })
  },
  完善资料: {
    screen: SetInformation,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '完善资料'
    })
  },
  完善学历信息: {
    screen: SetEducation,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '完善学历信息'
    })
  },
  忘记密码: {
    screen: ForgetPassword,
    navigationOptions: ({ navigation }: NavigationScreenProps) => ({
      headerTruncatedBackTitle: '忘记密码'
    })
  }
}

export default RouteMineConfig
