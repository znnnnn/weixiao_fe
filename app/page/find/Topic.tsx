import { InputItem, List, Provider } from '@ant-design/react-native'
import Avatar from '@components/home/Avatar'
import PostUserCard from '@components/home/PostUserCard'
import {
  ActionSheet,
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Toast
} from 'native-base'

import px2dp from '@util/px2dp'

import api from '@app/api'
import PostCard from '@app/components/home/PostCard'
import StyleSheet from '@util/stylesheet'
import React from 'react'
import {
  Alert,
  Image,
  Linking,
  Platform,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'

let BUTTONS = [
  { text: 'QQ', icon: 'american-football', iconColor: '#2c8ef4' },
  { text: 'QQ空间', icon: 'american-football', iconColor: '#2c8ef4' },
  { text: '微信', icon: 'analytics', iconColor: '#f42ced' },
  { text: '朋友圈', icon: 'aperture', iconColor: '#ea943b' },
  { text: '取消', icon: 'aperture', iconColor: '#ea943b' }
]
let DESTRUCTIVE_INDEX = 3
let CANCEL_INDEX = 4

export interface State {
  thumb: string
  title: string
  pv: number
  comment: number
  isRefreshing: boolean
  postsList: Array<any>
}

interface Props extends NavigationScreenProps {}

class OfferTopic extends React.Component<Props, State> {
  public state: State = {
    thumb: this.props.navigation.state.params.topicThumb,
    title: '',
    pv: 0,
    comment: 0,
    isRefreshing: true,
    postsList: []
  }

  public constructor(props: Props) {
    super(props)
    // console.log(this.props.navigation)
  }

  public componentDidMount() {
    // this.getTopicByTopicName(topicName)
    this.fresh()
  }

  public getTopicByTopicName(topicName: string) {
    const { topicThumb }: any = this.props.navigation.state.params
    api.topic.getTopicByTopicName(topicName).then((res: any) => {
      this.setState({
        title: res.data.data.topicName,
        pv: res.data.data.topicHot
        // thumb: topicThumb
      })
    })
  }

  public getPostsInfo(topicName: string) {
    this.setState({
      isRefreshing: true
    })
    api.topic
      .getTopicList(topicName)
      .then((res) => {
        console.log(res)
        this.setState({
          postsList: res.data.data.list,
          comment: res.data.data.list.length
        })
      })
      .then(() =>
        setTimeout(
          () =>
            this.setState({
              isRefreshing: false
            }),
          300
        )
      )
  }

  public noData() {
    return (
      <View
        style={{ justifyContent: 'center', alignItems: 'center', width: wp('100%'), padding: 30 }}
      >
        <Icon name="cube" style={{ fontSize: 40 }} />
        <Text style={{ fontSize: 24 }}>无数据</Text>
      </View>
    )
  }

  public fresh() {
    const { topicName }: any = this.props.navigation.state.params
    this.getPostsInfo(topicName)
    this.getTopicByTopicName(topicName)
  }

  public render() {
    return (
      <Provider>
        <Container>
          {/* <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" value={this.state.title} />
              <Icon name="ios-people" />
            </Item>
          </Header> */}
          <Content
            refreshControl={
              <RefreshControl
                // 是否刷新
                refreshing={this.state.isRefreshing}
                onRefresh={this.fresh.bind(this)}
                tintColor={'#29A1F7'}
                title={'拼命加载中...'}
              />
            }
          >
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  source={{
                    uri: this.state.thumb
                  }}
                />
              </Left>
              <Body>
                <Text>#{this.state.title}#</Text>
                <Text
                  note
                  numberOfLines={1}
                  style={{ color: '#3E3E3E', fontSize: 10, marginTop: 5 }}
                >
                  阅读：{this.state.pv > 10000 ? `${this.state.pv / 10000}万` : this.state.pv}{' '}
                  讨论：
                  {this.state.comment > 10000
                    ? `${this.state.comment / 10000}万`
                    : this.state.comment}
                </Text>
              </Body>
              {/*<Right>*/}
              {/*<Button transparent>*/}
              {/*<Text>View</Text>*/}
              {/*</Button>*/}
              {/*</Right>*/}
            </ListItem>
            <ListItem itemDivider />
            {this.state.postsList.length > 0
              ? this.state.postsList.map((item, index) => (
                  <PostCard
                    fresh={() => this.getPostsInfo.bind(this)}
                    postsItemData={item}
                    key={index}
                    isLast={index === this.state.postsList.length - 1}
                  />
                ))
              : this.noData()}
          </Content>
          <Footer>
            <FooterTab>
              <Button
                onPress={() =>
                  ActionSheet.show(
                    {
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      // destructiveButtonIndex: DESTRUCTIVE_INDEX,
                      title: '分享'
                    },
                    (buttonIndex) => {
                      // this.setState({ clicked: BUTTONS[buttonIndex] })
                      if (BUTTONS[buttonIndex].text !== '取消') {
                        Toast.show({
                          text: '分享成功',
                          type: 'success'
                        })
                      }
                    }
                  )
                }
              >
                <Icon name="share-alt" />
                <Text>分享</Text>
              </Button>
              <Button
                active
                onPress={() => {
                  this.props.navigation.navigate('话题发布', {
                    findPublishTitle: this.state.title,
                    publishType: this.state.title
                  })
                }}
              >
                <Icon name="brush" />
                <Text>参与讨论</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({})

export default OfferTopic

// TODO 阅读数