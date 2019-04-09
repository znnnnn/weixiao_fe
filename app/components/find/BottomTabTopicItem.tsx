import { ListView } from '@ant-design/react-native'
import api from '@app/api'
import { Container, Content } from 'native-base'
import React from 'react'
import { FlatList, Image, RefreshControl, Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'
interface Item {
  thumb: string
  title: string
  hot: number
}

interface Props extends NavigationScreenProps {
  // color: string
}

export default withNavigation(
  class BottomTabTopicItem extends React.Component<Props> {
    public state = {
      layout: 'list',
      topicList: [],
      isRefreshing: false
    }

    public constructor(props: Props) {
      super(props)
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
            thumb:
              'http://111.231.116.130/wp-content/uploads/2019/02/googlelogo_color_272x92dp.png',
            title: '浙江大学元旦晚会',
            hot: 4430000
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
        <TouchableOpacity
          style={{
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          onPress={() => this.props.navigation.navigate('话题')}
        >
          <View style={{ justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 16, color: '#3E3E3E' }}>{item.title}</Text>
            <Text style={{ fontSize: 10, color: '#C7C7C7' }}>
              {item.hot > 10000 ? `${item.hot / 10000}万` : item.hot}热度
            </Text>
          </View>
          {/* <Text>https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg</Text> */}
          <Image source={{ uri: item.thumb }} style={{ height: 50, width: 70 }} />
        </TouchableOpacity>
      )
    }

    public componentDidMount() {
      this.refresh()
    }
    public refresh() {
      // console.log('刷新')
      this.setState({
        isRefreshing: true
      })
      api.topic
        .getTopicNameList()
        .then((res) => {
          this.setState({
            topicList: res.data.data.list
          })
        })
        .then(() =>
          setTimeout(() => {
            // 至少加载500ms
            this.setState({
              isRefreshing: false
            })
          }, 500)
        )
    }

    public render() {
      return (
        <Content
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              // 是否刷新
              refreshing={this.state.isRefreshing}
              onRefresh={this.refresh.bind(this)}
              tintColor={'#29A1F7'}
              title={'拼命加载中...'}
            />
          }
        >
          {this.state.topicList.map((item: any, index: number) => {
            // console.log(JSON.parse(item.topicThumb))
            return (
              <TouchableOpacity
                key={index}
                style={{
                  padding: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
                onPress={() =>
                  this.props.navigation.navigate('话题', {
                    topicName: item.topicName,
                    topicThumb: item.topicThumb !== '[]'
                    ? JSON.parse(item.topicThumb)[0]
                    : 'https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture',
                    topicHot: item.topicHot
                  })
                }
              >
                <View style={{ justifyContent: 'space-around' }}>
                  <Text style={{ fontSize: 16, color: '#3E3E3E' }}>{item.topicName}</Text>
                  <Text style={{ fontSize: 10, color: '#C7C7C7' }}>
                    {item.hot > 10000 ? `${item.hot / 10000}万` : item.topicHot}热度
                  </Text>
                </View>
                {/* <Text>https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg</Text> */}
                <Image
                  source={{
                    uri:
                      // item.topicThumb !== null ||item.topicThumb !== '[]'
                      item.topicThumb !== '[]'
                        ? JSON.parse(item.topicThumb)[0]
                        : 'https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture'
                  }}
                  style={{ height: 50, width: 70 }}
                />
              </TouchableOpacity>
            )
          })}
        </Content>
        // <ListView
        //   onFetch={this.onFetch}
        //   keyExtractor={(item, index) => `${this.state.layout} - ${item} - ${index}`}
        //   renderItem={this.renderItem}
        //   numColumns={this.state.layout === 'list' ? 1 : 3}
        // />
      )
    }
  }
)
