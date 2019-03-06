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
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

interface Item {
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

export default class BottomtabOfferItem extends React.Component {
  public state = {
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
        rowData.push({
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
        })
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

  public renderItem = (item: Item) => {
    return (
      <List>
        <ListItem>
          <Left style={{ flexDirection: 'column' }}>
            <Title style={{fontSize: 20 ,color: '#3E3E3E', fontWeight: '400'}}>{item.job}</Title>
            <Subtitle>
              <Text note style={styles.subTitle}>
                {item.address.value}
                {item.address.children.value ? ` · ${item.address.children.value}` : ``}
              </Text>
              <Text style={styles.subTitle}> | </Text>
              <Text note style={styles.subTitle}>
                {item.experience}
              </Text>
              <Text style={styles.subTitle}> | </Text>
              <Text note style={styles.subTitle}>
                {item.edu}
              </Text>
            </Subtitle>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Thumbnail small source={{ uri: item.thumb }} />
              <Text style={{ marginLeft: 10, color: '#3E3E3E' }}>
                {item.HR} {item.HRPosition ? ` · ${item.HRPosition}` : ``}
              </Text>
            </View>
          </Left>
          <Right>
            <H3 style={{ color: '#1B82D2' }}>{item.salary}</H3>
          </Right>
        </ListItem>
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
    height:30
  }
})
