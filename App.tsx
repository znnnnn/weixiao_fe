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
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'

export default createAppContainer(mainTab)
