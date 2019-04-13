import { SearchBar } from '@ant-design/react-native'
import {
  ActionSheet,
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Thumbnail,
  Toast
} from 'native-base'
import React from 'react'
import { Alert, Image, RefreshControl, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

// import Icon from '@app/util/icon'
import BottomTab from '@components/find/BottomTab'
import IconTab from '@components/find/IconTab'
import PostUserCard from '@components/home/PostUserCard'
import StyleSheet from '@util/stylesheet'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

import actions from '@store/action/Index'
import { connect } from 'react-redux'

import api from '@api/index'

export interface Props extends NavigationScreenProps {
  myUsermeta?: any
  postsItemData: any
  fresh: Function
}

export interface State {
  avatarList: Array<any>
  postsList: Array<any>
  isRefreshing: boolean
  upvoteCount: number
  commentCount: number
  shareCount: number
  isUpvoted: number
  postsItemData: any
  IP: string
}

let BUTTONS = [
  { text: 'QQ', icon: 'american-football', iconColor: '#2c8ef4' },
  { text: 'QQ空间', icon: 'american-football', iconColor: '#2c8ef4' },
  { text: '微信', icon: 'analytics', iconColor: '#f42ced' },
  { text: '朋友圈', icon: 'aperture', iconColor: '#ea943b' },
  { text: '取消', icon: 'aperture', iconColor: '#ea943b' }
]
let DESTRUCTIVE_INDEX = 3
let CANCEL_INDEX = 4

class SinglePostCardItem extends React.Component<Props, State> /*<Props, State>*/ {
  public state: State = {
    avatarList: [],
    postsList: [],
    isRefreshing: true,
    upvoteCount: this.props.postsItemData.upvoteList.length,
    shareCount:
      this.props.postsItemData.commentsUsermetaDTOList.length > 0
        ? this.props.postsItemData.commentsUsermetaDTOList.filter(
            (res: any) => res.commentType === 'share'
          ).length
        : 0,
    commentCount:
      this.props.postsItemData.commentsUsermetaDTOList.length > 0
        ? this.props.postsItemData.commentsUsermetaDTOList.filter(
            (res: any) => res.commentType === 'comment'
          ).length
        : 0,
    postsItemData: this.props.postsItemData,
    isUpvoted:
      this.props.postsItemData.upvoteList.length > 0
        ? this.props.postsItemData.upvoteList.filter(
            (item: any) => item.upvoteUserId === this.props.myUsermeta.userId
          ).length
        : 0,
    IP: ''
  }

  public constructor(props: Props) {
    super(props)
  }

  public componentDidMount() {
    DeviceInfo.getIPAddress().then((IP) =>
      this.setState({
        IP
      })
    )
  }

  /**
   * 接收异步props
   * 下拉刷新数量
   */
  public componentWillReceiveProps() {
    setTimeout(() => {
      this.setState({
        isUpvoted:
          this.props.postsItemData.upvoteList.length > 0
            ? this.props.postsItemData.upvoteList.filter(
                (item: any) => item.upvoteUserId === this.props.myUsermeta.userId
              ).length
            : 0,
        shareCount:
          this.props.postsItemData.commentsUsermetaDTOList.length > 0
            ? this.props.postsItemData.commentsUsermetaDTOList.filter(
                (res: any) => res.commentType === 'share'
              ).length
            : 0,
        commentCount:
          this.props.postsItemData.commentsUsermetaDTOList.length > 0
            ? this.props.postsItemData.commentsUsermetaDTOList.filter(
                (res: any) => res.commentType === 'comment'
              ).length
            : 0,
        upvoteCount: this.props.postsItemData.upvoteList.length
      })
    }, 0)
  }

  /**
   * 根据用户ID点赞
   */
  public upvoteByUserId() {
    api.upvote
      .upvote({
        upvotePostId: this.state.postsItemData.postId,
        upvoteUserId: this.props.myUsermeta.userId
      })
      .then((res) => {
        // console.log('点赞', res)
        if (res.data.message === 'SUCCESS') {
          this.setState({
            upvoteCount: ++this.state.upvoteCount,
            isUpvoted: 1
            // is
          })
        }
      })
  }

  /**
   * 根据用户ID删除点赞
   */
  public deleteUpvoteByUserId() {
    api.upvote
      .deleteUpvoteByUserId(this.state.postsItemData.postId, this.props.myUsermeta.userId)
      .then((res) => {
        if (res.data.data > 0) {
          this.setState({
            upvoteCount: --this.state.upvoteCount,
            isUpvoted: 0
            // is
          })
        }
      })
  }

  /**
   * 点赞
   */
  public upvote() {
    return this.state.isUpvoted === 0 ? this.upvoteByUserId() : this.deleteUpvoteByUserId()
  }

  /**
   * 分享
   */
  public send() {
    api.commentSender
      .send({
        commentAuthor: this.props.myUsermeta.nickname,
        commentContent: `${this.props.myUsermeta.nickname}分享了该条内容一次`,
        commentDate: new Date(),
        commentIp: this.state.IP,
        commentParent: null,
        commentPostId: this.state.postsItemData.postId,
        commentType: 'share',
        commentUserId: this.props.myUsermeta.userId
      })
      .then((res) => {
        Toast.show({
          text: '成功',
          type: 'success',
          position: 'top'
        })
      })
      .then(() => setTimeout(() => this.fresh(), 500))
  }

  public fresh() {
    api.home.getPostByPostId(this.state.postsItemData.postId).then((res) => {
      this.setState({
        postsItemData: res.data.data,
        upvoteCount: res.data.data.upvoteList.length,
        shareCount:
          res.data.data.commentsUsermetaDTOList.length > 0
            ? res.data.data.commentsUsermetaDTOList.filter(
                (res: any) => res.commentType === 'share'
              ).length
            : 0,
        commentCount:
          res.data.data.commentsUsermetaDTOList.length > 0
            ? res.data.data.commentsUsermetaDTOList.filter(
                (res: any) => res.commentType === 'comment'
              ).length
            : 0,
        isUpvoted:
          res.data.data.upvoteList.length > 0
            ? res.data.data.upvoteList.filter(
                (item: any) => item.upvoteUserId === this.props.myUsermeta.userId
              ).length
            : 0
      })
    })
  }

  public render() {
    return (
      <Card>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('用户中心', {
              usermeta: this.state.postsItemData.usermeta
            })
          }
          activeOpacity={0.9}
        >
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri: this.state.postsItemData.usermeta.avatar
                }}
              />
              <Body>
                <Text>{this.state.postsItemData.usermeta.nickname}</Text>
                <Text>{this.state.postsItemData.usermeta.job}</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            this.props.navigation.navigate('微校正文', {
              postsItemData: this.state.postsItemData
            })
          }
        >
          <CardItem cardBody>
            {JSON.parse(this.state.postsItemData.postImage.length) > 0 &&
              JSON.parse(this.state.postsItemData.postImage).map((uri: string, index: number) => (
                <Image source={{ uri }} style={{ height: 200, flex: 1, margin: 2 }} key={index} />
              ))}
          </CardItem>
          <CardItem>
            <Body>
              <Text>{this.state.postsItemData.postContent}</Text>
            </Body>
          </CardItem>
        </TouchableOpacity>
        <CardItem>
          <Left>
            <Button transparent small onPress={() => this.upvote()}>
              <Icon
                name="thumbs-up"
                style={[
                  {
                    height: 16,
                    width: 16,
                    fontSize: 16,
                    color: this.state.isUpvoted > 0 ? '#29A1F7' : '#333'
                  }
                ]}
              />
              <Text
                style={[styles.action, { color: this.state.isUpvoted > 0 ? '#29A1F7' : '#333' }]}
              >{`${this.state.upvoteCount}个赞`}</Text>
            </Button>
            <Button
              transparent
              small
              onPress={() =>
                this.props.navigation.navigate('微校正文', {
                  postsItemData: this.state.postsItemData
                })
              }
            >
              <Icon
                name="chatbubbles"
                style={[{ height: 16, width: 16, fontSize: 16, color: '#333' }]}
              />
              <Text>{`${this.state.commentCount}评论`}</Text>
            </Button>
            <Button
              transparent
              small
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
                        type: 'success',
                        position:'top'
                      })
                      this.send()
                    }
                  }
                )
              }
            >
              <Icon
                name="share-alt"
                style={[{ height: 16, width: 16, fontSize: 16, color: '#333' }]}
              />
              <Text style={styles.action}>{`${this.state.shareCount}转发`}</Text>
            </Button>
          </Left>
          {/* <Body style={{flexDirection: 'row'}}>
                  </Body> */}
          {/* <Right>
                    <Text>{getTimeDiff(this.state.postsItemData.postDate)}</Text>
                  </Right> */}
        </CardItem>
        <CardItem>
          <Left>
            <Icon name="timer" style={[{ height: 16, width: 16, fontSize: 16 }]} />
            <Text style={styles.action}>{getTimeDiff(this.state.postsItemData.postDate)}</Text>
          </Left>
          <Right>
            <TouchableOpacity
              onPress={() =>
                Alert.alert('提示', '确认删除吗', [
                  { text: '取消' },
                  {
                    text: '确认',
                    onPress: () =>
                      api.home
                        .deletePostByPostId(this.props.postsItemData.postId)
                        .then(() => {
                          setTimeout(this.props.fresh(), 500)
                        })
                        .then(() =>
                          Toast.show({
                            text: '删除成功',
                            type: 'success',
                            position:'top'
                          })
                        )
                  }
                ])
              }
            >
              <Text style={{ color: 'red' }}>删除</Text>
            </TouchableOpacity>
          </Right>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  action: {
    color: '#333',
    fontSize: 14
  }
})

const mapStateToProps = (state: any) => {
  return {
    // 获取 state 变化
    myUsermeta: state.HandleMyUsermeta.myUsermeta
  }
}

// 发送行为
let handleUsermeta = actions.myUsermeta.handleUsermeta
const mapDispatchToProps = {
  handleUsermeta
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(SinglePostCardItem))
