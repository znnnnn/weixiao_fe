/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
// import React, {Component} from 'react';
import mainTab from '@app/navigation/TabNavigator'
import rootReducer from '@store/reducer/index'
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
const store = createStore(rootReducer)

const RootNavigator = createAppContainer(mainTab)
export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}
// export default createAppContainer(mainTab)
