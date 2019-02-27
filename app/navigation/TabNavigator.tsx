import { Button } from '@ant-design/react-native'
import Contact from '@app/page/contact/Index'
import Home from '@app/page/home/Index'
import Icon from '@app/util/icon'
import Find from '@page/find/index'
import Mine from '@page/mine/Index'
import Publish from '@page/publish/Index'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import {
  createBottomTabNavigator,
  NavigationRouteConfigMap,
  TabNavigatorConfig
} from 'react-navigation'

// let MainTab: NavigationContainer
const tabRoute: NavigationRouteConfigMap = {
  首页: {
    screen: Home,
    navigationOptions: ({ navigation, screeProps }) => ({
      // 这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

      // 设置StackNavigator属性
      // header：可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
      headerTitle: '首页',
      // headerBackTitle：'设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null'
      // headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"
      // headerRight：设置导航条右侧。可以是按钮或者其他视图控件
      // headerLeft：设置导航条左侧。可以是按钮或者其他视图控件
      headerStyle: {
        backgroundColor: 'red'
      },
      // headerTitleStyle：设置导航栏文字样式
      // headerBackTitleStyle：设置导航栏‘返回’文字样式
      // headerStyle: styles.navigator,
      // headerTitleStyle: styles.navigatorTitle,
      gesturesEnabled: true,

      // 这里设置Tabbar不同页面可能会不同的属性
      tabBarVisible: true,
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => {
        return <Icon name="shouye" style={{ marginTop: 3, fontSize: 28, color: tintColor }} />
      }
    })
  },
  发现: {
    screen: Find,
    navigationOptions: ({ navigation, screeProps }) => ({
      // 这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

      // 设置StackNavigator属性
      // header: null,
      headerTitle: '发现',
      // headerStyle: styles.navigator,
      // headerTitleStyle: styles.navigatorTitle,
      gesturesEnabled: true,

      // 这里设置Tabbar不同页面可能会不同的属性
      tabBarVisible: true,
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor, focused }) => {
        return (
          <Icon
            name="iconfontzhizuobiaozhun023103"
            style={{ marginTop: 5, fontSize: 23, color: tintColor }}
          />
        )
      }
    })
  },
  发布: {
    screen: Publish,
    navigationOptions: ({ navigation, screeProps }) => ({
      // 这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

      // 设置StackNavigator属性
      header: null,
      headerTitle: '发布',
      // headerStyle: styles.navigator,
      // headerTitleStyle: styles.navigatorTitle,
      gesturesEnabled: true,

      // 这里设置Tabbar不同页面可能会不同的属性
      tabBarVisible: true,
      tabBarLabel: '发布',
      tabBarIcon: ({ tintColor, focused }) => {
        return <Icon name="fabu" style={{ marginTop: 6, fontSize: 25, color: tintColor }} />
      }
    })
  },
  朋友: {
    screen: Contact,
    navigationOptions: ({ navigation, screeProps }) => ({
      // 这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

      // 设置StackNavigator属性
      header: null,
      headerTitle: '朋友',
      // headerStyle: styles.navigator,
      // headerTitleStyle: styles.navigatorTitle,
      gesturesEnabled: true,

      // 这里设置Tabbar不同页面可能会不同的属性
      tabBarVisible: true,
      tabBarLabel: '朋友',
      tabBarIcon: ({ tintColor, focused }) => {
        return <Icon name="xingqiu" style={{ marginTop: 5, fontSize: 26, color: tintColor }} />
      }
    })
  },
  我的: {
    screen: Mine,
    navigationOptions: ({ navigation, screeProps }) => ({
      // 这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

      // 设置StackNavigator属性
      header: null,
      headerTitle: '我的',
      // headerStyle: styles.navigator,
      // headerTitleStyle: styles.navigatorTitle,
      gesturesEnabled: true,

      // 这里设置Tabbar不同页面可能会不同的属性
      tabBarVisible: true,
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => {
        return <Icon name="wo" style={{ marginTop: 6, fontSize: 23, color: tintColor }} />
      }
    })
  }
}

const tabConfig: TabNavigatorConfig = {
  // return {
  //   title:
  //     navigation.state.params && navigation.state.params.title
  //       ? navigation.state.params.title
  //       : 'No Title'
  // }
  // 这里设置的是一般情况下Tabbar共同的属性
  tabBarPosition: 'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
  swipeEnabled: true, // 是否允许在标签之间进行滑动。
  animationEnabled: false, // 是否在更改标签时显示动画。
  lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
  initialRouteName: '', // 设置默认的页面组件
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#29A1F7', // label和icon的前景色 活跃状态下（选中）。
    inactiveTintColor: '#515151', // label和icon的前景色 不活跃状态下(未选中)。
    labelStyle: {
      fontSize: 12,
      marginBottom: 5
    }, // label的样式。
    style: {
      height: 55
    }
  }
}

const tabNavigation = createBottomTabNavigator(tabRoute, tabConfig)
tabNavigation.navigationOptions = ({ navigation, screeProps }) => {
  // console.log(navigation)
  const { routeName } = navigation.state.routes[navigation.state.index]
  const { params } = navigation.state.routes[navigation.state.index]

  // You can do whatever you like here to pick the title based on the route name
  // 返回名称
  const headerTruncatedBackTitle = routeName
  // header栏
  let header
  let headerTitle
  let navigationOptions = {}
  let headerRight
  if (routeName === '首页') {
    // header = null
  }
  switch (routeName) {
    case '发现':
      header = null
      break
    case '发布':
      headerTitle = '发布'
      headerRight = (
        <Button
          type="primary"
          size="small"
          style={{ height: 30, width: 50, marginRight: 10 }}
          onPress={() => {
            // console.log(params)
            params.publish()
            // console.log(navigation)
            // console.log(navigation.getParam('publish'))
            // navigation.state.routes[2].params._publish()
          }}
        >
          发布
        </Button>
      )
      break
    default:
      break
  }

  // 设置的变量需在这里return
  return {
    headerTruncatedBackTitle,
    header,
    headerTitle,
    headerRight
  }
}

export default tabNavigation
