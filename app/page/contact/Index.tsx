/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _ from 'lodash'
import randomcolor from 'randomcolor'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import AlphabetListView from 'react-native-alphabetlistview'
import { ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

class SectionHeader extends Component {
  public render() {
    // inline styles used for brevity, use a stylesheet when possible
    let textStyle = {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700',
      fontSize: 16
    }

    let viewStyle = {
      backgroundColor: '#ccc'
    }
    return (
      <View style={viewStyle}>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}

class SectionItem extends Component {
  public render() {
    return <Text style={{ color: '#3E3E3E', lineHeight: 20 }}> {this.props.title} </Text>
  }
}

class Cell extends Component {
  public render() {
    return (
      <View style={{ height: 50 }}>
        <Text>{this.props.item}</Text>
      </View>
    )
  }
}

// 姓名分组
// let names = _.groupBy(list, (name: []) => name[0].toUpperCase())
// console.log(object)
export default class SignIn extends React.Component {
  public state = {
    data: {
      A: ['some', 'entries', 'are here'],
      B: ['some', 'entries', 'are here'],
      C: ['some', 'entries', 'are here'],
      D: ['some', 'entries', 'are here'],
      E: ['some', 'entries', 'are here'],
      F: ['some', 'entries', 'are here'],
      G: ['some', 'entries', 'are here'],
      H: ['some', 'entries', 'are here'],
      I: ['some', 'entries', 'are here'],
      J: ['some', 'entries', 'are here'],
      K: ['some', 'entries', 'are here'],
      L: ['some', 'entries', 'are here'],
      M: ['some', 'entries', 'are here'],
      N: ['some', 'entries', 'are here'],
      O: ['some', 'entries', 'are here'],
      P: ['some', 'entries', 'are here'],
      Q: ['some', 'entries', 'are here'],
      R: ['some', 'entries', 'are here'],
      S: ['some', 'entries', 'are here'],
      T: ['some', 'entries', 'are here'],
      U: ['some', 'entries', 'are here'],
      V: ['some', 'entries', 'are here'],
      W: ['some', 'entries', 'are here'],
      X: ['some', 'entries', 'are here'],
      Y: ['some', 'entries', 'are here'],
      Z: ['some', 'entries', 'are here']
    }
  }
  public constructor(props, context) {
    super(props, context)
  }

  public render() {
    return (
      <AlphabetListView
        data={this.state.data}
        cell={Cell}
        cellHeight={49}
        sectionListItem={SectionItem}
        sectionHeader={SectionHeader}
        sectionHeaderHeight={22.5}
      />
    )
  }
}
