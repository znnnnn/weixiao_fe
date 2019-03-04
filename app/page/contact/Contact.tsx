/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _ from 'lodash'
import React, { Component } from 'react'
import { AppRegistry, ScrollView, StyleSheet, Text, View } from 'react-native'
import AlphabetListView from 'react-native-alphabetlistview'
import { ListItem } from 'react-native-elements'

class SectionHeader extends Component {
  public render() {
    // inline styles used for brevity, use a stylesheet when possible
    let textStyle = {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700',
      fontSize: 20
    }

    return (
      <View style={{ height: 35, justifyContent: 'center', paddingLeft: 10 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '300',
            backgroundColor: '#fff',
            height: 35,
            lineHeight: 35
          }}
        >
          {this.props.title}
        </Text>
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
      <ListItem
        title={this.props.item.name}
        // subtitle={item.subtitle}
        leftAvatar={{ source: { uri: this.props.item.avatar_url } }}
        bottomDivider
      />
    )
  }
}

export default class Contact extends React.Component {
  public state = {
    // data: {
    //   A: ['some', 'entries', 'are here'],
    //   B: ['some', 'entries', 'are here'],
    //   C: ['some', 'entries', 'are here'],
    //   D: ['some', 'entries', 'are here'],
    //   E: ['some', 'entries', 'are here'],
    //   F: ['some', 'entries', 'are here'],
    //   G: ['some', 'entries', 'are here'],
    //   H: ['some', 'entries', 'are here'],
    //   I: ['some', 'entries', 'are here'],
    //   J: ['some', 'entries', 'are here'],
    //   K: ['some', 'entries', 'are here'],
    //   L: ['some', 'entries', 'are here'],
    //   M: ['some', 'entries', 'are here'],
    //   N: ['some', 'entries', 'are here'],
    //   O: ['some', 'entries', 'are here'],
    //   P: ['some', 'entries', 'are here'],
    //   Q: ['some', 'entries', 'are here'],
    //   R: ['some', 'entries', 'are here'],
    //   S: ['some', 'entries', 'are here'],
    //   T: ['some', 'entries', 'are here'],
    //   U: ['some', 'entries', 'are here'],
    //   V: ['some', 'entries', 'are here'],
    //   W: ['some', 'entries', 'are here'],
    //   X: ['some', 'entries', 'are here'],
    //   Y: ['some', 'entries', 'are here'],
    //   Z: ['some', 'entries', 'are here']
    // }
    data: [
      {
        name: 'Amy Farha',
        avatar_url:
          'http://111.231.116.130/wp-content/uploads/2019/02/googlelogo_color_272x92dp.png',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        subtitle: 'Vice Chairman'
      }
    ]
  }
  public constructor(props, context) {
    super(props, context)
  }

  public componentDidMount = () => {}

  public generateData = () => {
    let data = _.groupBy(
      this.state.data,
      (list: { name: string; avatar_url: string; subtitle: string }) => list.name[0].toUpperCase()
    )
    return data
  }

  public render() {
    return (
      // <ScrollView>

      //   <View>
      <AlphabetListView
        // data={this.state.data}
        data={this.generateData()}
        cell={Cell}
        cellHeight={49}
        sectionListItem={SectionItem}
        sectionHeader={SectionHeader}
        sectionHeaderHeight={35}
      />
      // </View>
      // </ScrollView>
    )
  }
}
