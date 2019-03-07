import { ListView } from '@ant-design/react-native'
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
import { StyleSheet } from 'react-native'

import OfferItem from './OfferItem'

export interface ItemProps {
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
}

export default class BottomtabOfferItem extends React.Component<any, State> {
  public state: State = {
    data: [
      {
        job: '平面设计师',
        address: {
          value: '杭州',
          children: {
            value: '长河'
          }
        },
        experience: '1-3年',
        edu: '大专',
        salary: '5K - 8K',
        thumb: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        HR: 'alice',
        HRPosition: 'CEO'
      }
    ],
    layout: 'list'
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
    return (
      <List>
        <OfferItem data={this.state.data[0]} />
      </List>
    )
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
