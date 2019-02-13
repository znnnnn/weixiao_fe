import Home from '@app/page/home/Index'
import Icon from '@app/util/icon'
import Contact from '@page/contact/Index'
import Find from '@page/find/index'
import Mine from '@page/mine/Index'
import Publish from '@page/publish/Index'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

// let MainTab: NavigationContainer
const MainTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation, screeProps }) => ({
        // 这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

        // 设置StackNavigator属性
        header: null,
        headerTitle: '首页',
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
    Find: {
      screen: Find,
      navigationOptions: ({ navigation, screeProps }) => ({
        // 这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

        // 设置StackNavigator属性
        header: null,
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
    Publish: {
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
    Contact: {
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
    Mine: {
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
  },
  {
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
)
export default MainTab
