import { ListView } from '@ant-design/react-native'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import DonateItem from './DonateItem'

export interface ItemProps {
  title: string
  subTitle: string
  count: number
  tag: string[]
  thumb: string
}

interface State {
  data: ItemProps[]
  layout: string
}

export default withNavigation(
  class BottomTabDonateItem extends React.Component<any, State> {
    public state = {
      data: [
        {
          title: '校园安全饮水计划',
          subTitle: '修建校园安全饮水工程，改善农村在校中小学生的饮水...',
          count: 542324,
          tag: [
            '山区儿童',
            '安全饮水',
            '留守建设',
            '山区儿童',
            '安全饮水',
            '留守建设',
            '山区儿童',
            '安全饮水',
            '留守建设'
          ],
          thumb: 'https://uploadbeta.com/api/pictures/random/'
        }
      ],
      layout: 'list'
    }
    public sleep = (time: any) => new Promise((resolve) => setTimeout(() => resolve(), time))
    public onFetch = async (page = 1, startFetch: any, abortFetch: any) => {
      try {
        let pageLimit = 6
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
        <DonateItem
          onPress={() => this.props.navigation.navigate('捐赠')}
          data={{
            title: '校园安全饮水计划',
            subTitle: '修建校园安全饮水工程，改善农村在校中小学生的饮水...',
            count: 542324,
            tag: [
              '山区儿童',
              '安全饮水',
              '留守建设',
              '山区儿童',
              '安全饮水',
              '留守建设',
              '山区儿童',
              '安全饮水',
              '留守建设'
            ],
            thumb: 'https://uploadbeta.com/api/pictures/random/'
          }}
        />
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
)
