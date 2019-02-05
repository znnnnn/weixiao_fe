/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import React, {Component} from 'react';
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
// import Test from './app/page/mine/Test'
import SignIn from './app/page/mine/SignIn'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
})

interface Props {
  name: string
}
export default class App extends Component<Props> {
  public render() {
    return (
      <View style={styles.root}>
        <SignIn />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
