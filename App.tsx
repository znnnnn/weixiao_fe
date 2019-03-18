/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
// import React, {Component} from 'react';
import RouteConfig from '@app/navigation/RouteConfig'
import StackNavigatorConfig from '@app/navigation/StackNavigatorConfig'
import rootReducer from '@app/store/reducer/Index'
import Home from '@page/home/Index'
import Login from '@page/mine/Login'
import { Root } from 'native-base'
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)
const RootNavigator = createAppContainer(createStackNavigator(RouteConfig, StackNavigatorConfig))
export default class App extends React.Component {
  public render() {
    return (
      <Root>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </Root>
    )
  }
}
// export default createAppContainer(mainTab)
