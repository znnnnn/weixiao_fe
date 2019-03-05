/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _ from 'lodash'
import {
  Body,
  CheckBox,
  Container,
  Content,
  Header,
  Left,
  ListItem,
  Text,
  Thumbnail
} from 'native-base'
import React, { Component } from 'react'
import { Alert, AppRegistry, ScrollView, StyleSheet, View } from 'react-native'
import AlphabetListView from 'react-native-alphabetlistview'

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

interface CellProps {
  sectionId: string
  title: string
  item: any,
  onSelect: Function
}

class Cell extends Component<CellProps> {
  public state = {
    checked: true
  }
  public constructor(props: CellProps) {
    super(props)
  }

  public onCellSelect = () =>
    this.setState(
      {
        checked: !this.state.checked
      },
      () => console.log(this.props)
    )

  public render() {
    return (
      <ListItem thumbnail  onPress={() => {
        // console.log(this.state)
        // this.onCellSelect()
        this.props.onSelect.bind(this)
        this.props.onSelect('这是子组件传过来的参数哦')
      }}>
        <CheckBox checked={this.state.checked} onPress={this.onCellSelect} />
        <Left>
          <Thumbnail
            style={{ marginLeft: 15, alignSelf: 'center' }}
            small
            source={{ uri: this.props.item.avatar_url }}
          />
        </Left>
        <Body>
          <Text style={{ color: '#3E3E3E', lineHeight: 20 }}>{this.props.item.name}</Text>
        </Body>
      </ListItem>
    )
  }
}

export default class Contact extends React.Component {
  public state = {
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

  public someFunction(value) {
    Alert.alert(value)
    console.log(value)
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
        onCellSelect={(value) => this.someFunction(value)}
      />
      // </View>
      // </ScrollView>
    )
  }
}
