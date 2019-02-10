import React from 'react'
import { Text, View } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  public render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  public render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    )
  }
}

class IconWithBadge extends React.Component {
  public render() {
    const { name, badgeCount, color, size } = this.props
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
          </View>
        )}
      </View>
    )
  }
}

const HomeIconWithBadge = (props) => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />
}

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state
  let iconName
  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`
    // We want to add badges to home tab icon
  } else if (routeName === 'Settings') {
    iconName = `ios-options${focused ? '' : '-outline'}`
  }

  // You can return any component that you like here!
  return <Text />
}

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Settings: { screen: SettingsScreen }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor)
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }
    }
  )
)
