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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

interface Item {
  title: string
  subTitle: string
  count: number
  tag: []
  thumb: string
}

const tagColor = ['#ff5e5c', '#ffbb50', '#1ac756', '#19B5FE', '#fb7da9', '#666', '#a26ff9']

export default class BottomTabDonateItem extends React.Component {
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
          title: '校园安全饮水计划',
          subTitle: '修建校园安全饮水工程，改善农村在校中小学生的饮水...',
          count: 542324,
          tag: ['山区儿童', '安全饮水', '留守建设','山区儿童', '安全饮水', '留守建设','山区儿童', '安全饮水', '留守建设'],
          thumb: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
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
      <ListItem style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Left style={{ flexDirection: 'column', backgroundColor: '#eee', width: wp('70%') }}>
          <Title style={{ fontSize: 18, color: '#3E3E3E', fontWeight: '400' }}>{item.title}</Title>
          <Subtitle style={styles.subTitle}>{item.subTitle}</Subtitle>
          <Subtitle style={{ fontSize: 10, color: '#848484', lineHeight: 10, height: 10 }}>
            已有..
            <Text style={{ fontSize: 10, lineHeight: 10, height: 10, color: '#29A1F7' }}>
              {item.count}
            </Text>
            份爱心
          </Subtitle>
          {/* <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#29A1F7', fontSize: 10, alignSelf: 'flex-start' }}>
                已有{item.count}份爱心
              </Text>
            </View> */}
          <View style={{ flexDirection: 'row', flexWrap:'wrap',marginTop: 4 }}>
            {item.tag.map((item, index) => (
              <View style={{ backgroundColor: tagColor[index], padding: 4, margin: 4 }} key={index}>
                <Text style={{ color: '#fff', fontSize: 10 }}>{item}</Text>
              </View>
            ))}
          </View>
        </Left>
        <Right>
          <Thumbnail square large source={{ uri: item.thumb }} style={{}} />
        </Right>
      </ListItem>
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
    height: 30,
    flexWrap: 'wrap'
  }
})
