import { ListView } from '@ant-design/react-native'
import _ from 'lodash'
import {
  Body,
  Container,
  Content,
  H3,
  Header,
  Left,
  List,
  ListItem,
  Right,
  Subtitle,
  Text,
  Thumbnail,
  Title,
  View
} from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import api from '@app/api'
import OfferItem from './OfferItem'

export interface ItemProps extends NavigationScreenProps {
  job: string
  address: {
    value: string
    children: {
      value?: string
    }
  }
  experience: string
  edu: string
  salary: string
  thumb: string
  HR: string
  HRPosition: string
}

interface State {
  data: ItemProps[]
  layout: string
  avatar: any
  avatarLength: number
}
const EDU_DATA = require('@page/mine/SetEducationEdu.json')
class BottomtabOfferItem extends React.Component<any, State> {
  public state: State = {
    data: [
      // {
      //   job: '平面设计师',
      //   address: {
      //     value: '杭州',
      //     children: {
      //       value: '长河'
      //     }
      //   },
      //   experience: '1-3年',
      //   edu: EDU_DATA[_.random(0, 7)].label,
      //   salary: '5K - 8K',
      //   thumb: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      //   HR: 'alice',
      //   HRPosition: 'CEO'
      // }
    ],
    layout: 'list',
    avatar: [],
    avatarLength: 0
  }

  public sleep = (time: any) => new Promise((resolve) => setTimeout(() => resolve(), time))
  public onFetch = async (page = 1, startFetch: any, abortFetch: any) => {
    try {
      let pageLimit = 30
      if (this.state.layout === 'grid') pageLimit = 60
      const skip = (page - 1) * pageLimit

      // let rowData = Array.from({ length: pageLimit }, (_, index) => `item -> ${index + skip}`)

      // Generate dummy data
      let rowData = []
      // let rowData: Item[] = [

      // ]
      for (let index = 0; index < pageLimit; index++) {
        rowData.push(this.state)
      }

      // Simulate the end of the list if there is no more data returned from the server
      if (page === 4) {
        rowData = []
      }

      // Simulate the network loading in ES7 syntax (async/await)
      await this.sleep(2000)
      startFetch(rowData, pageLimit)
    } catch (err) {
      abortFetch() // manually stop the refresh or pagination if it encounters network error
    }
  }

  public renderItem = (data: State) => {
    let index = _.random(0, this.state.avatarLength)
    return (
      <List>
        <OfferItem
          onPress={() => this.props.navigation.navigate('招聘')}
          data={{
            job: '平面设计师',
            address: {
              value: '杭州',
              children: {
                value: '长河'
              }
            },
            experience: '1-3年',
            edu: this.state.avatar[index].education,
            salary: `${_.random(3, 5)}K - ${_.random(7, 10)}K`,
            thumb: this.state.avatar[index].avatar,
            HR: this.state.avatar[index].nickname,
            HRPosition: 'CEO'
          }}
        />
      </List>
    )
  }

  public componentWillMount() {
    api.home.getUsermetaList().then((res) => {
      this.setState({
        avatar: res.data.data.list,
        avatarLength: res.data.data.list.length - 1
      })
    })
  }

  public render() {
    return (
      <ListView
        onFetch={this.onFetch}
        keyExtractor={(item, index) => `${this.state.layout} - ${item} - ${index}`}
        renderItem={this.renderItem}
        numColumns={this.state.layout === 'list' ? 1 : 3}
      />
    )
  }
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 12,
    color: '#848484',
    lineHeight: 30,
    height: 30
  }
})

export default withNavigation(BottomtabOfferItem)
