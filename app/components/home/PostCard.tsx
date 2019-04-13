import Icon from '@app/util/icon'
import PostUserCard from '@components/home/PostUserCard'
import ImageCard from '@components/ImageCard'
import React, { Component } from 'react'
import { Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

import api from '@api/index'
import actions from '@store/action/Index'
import { connect } from 'react-redux'

import { ActionSheet, ListItem, Toast } from 'native-base'

import { NavigationScreenProps, withNavigation } from 'react-navigation'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

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
  modalVisible: boolean
  images: { url: string }[]
  initIndex: number
  isUpvoted: number
  IP: string
}

interface Props extends NavigationScreenProps {
  postsItemData: any
  myUsermeta: any
  fresh: Function
  isLast: boolean
}
class PostCard extends Component<Props> {
  public state = {
    images:
      this.props.postsItemData.postImage === null ||
      this.props.postsItemData.postImage === undefined
        ? []
        : JSON.parse(this.props.postsItemData.postImage),
    modalVisible: false,
    initIndex: 0,
    postsItemData: this.props.postsItemData,
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
    UpvoteCount: this.props.postsItemData.upvoteList.length,
    isUpvoted: 0,
    IP: ''
  }

  public constructor(props: Props) {
    super(props)
  }

  public componentWillMount() {
    // console.log('islast', this.props.isLast)
    /**
     * 文章数据通过react navigation传递
     */
  }

  public componentDidMount() {
    DeviceInfo.getIPAddress().then((IP) =>
      this.setState({
        IP
      })
    )

    // if (this.state.postsItemData.postImage !== null) {
    //   JSON.parse(this.state.postsItemData.postImage).map((item: string) => {
    //     this.state.images.push({ url: item })
    //     this.setState({
    //       images: this.state.images
    //     })
    //   })
    // }
    // console.log(this.state.images)
  }

  /**
   * 接收异步props
   * 下拉刷新数量
   */
  public componentWillReceiveProps() {
    setTimeout(() => {
      // console.log(this.state.postsItemData)
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
        UpvoteCount: this.props.postsItemData.upvoteList.length,
        postsItemData: this.props.postsItemData,
        images:
          this.props.postsItemData.postImage === null ||
          this.props.postsItemData.postImage === undefined
            ? []
            : JSON.parse(this.props.postsItemData.postImage)
      })
      // console.log(this.state.images)
      // console.log(Array.isArray(JSON.parse(this.props.postsItemData.postImage)))
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
            UpvoteCount: ++this.state.UpvoteCount,
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
        // console.log('取消点赞', res)
        if (res.data.data > 0) {
          this.setState({
            UpvoteCount: --this.state.UpvoteCount,
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
        this.setState({
          comment: ''
        })
        Toast.show({
          text: '成功',
          type: 'success',
          position:'top'
        })
      })
      .then(() => setTimeout(() => this.fresh(), 200))
    // .then(()=> console.log(this.state))
  }

  public fresh() {
    api.home.getPostByPostId(this.state.postsItemData.postId).then((res) => {
      this.setState({
        postsItemData: res.data.data,
        shareCount:
          res.data.data.commentsUsermetaDTOList.length > 0
            ? res.data.data.commentsUsermetaDTOList.filter(
                (res: any) => res.commentType === 'share'
              ).length
            : 0
      })
    })
  }

  public render() {
    // console.log(this.state.postsItemData)
    return (
      <View
        style={{
          width: wp('100%'),
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: 10
        }}
      >
        <View
          style={{
            alignItems: 'flex-start',
            /*borderWidth: 1, borderColor: 'red',*/
            width: wp('95%')
          }}
        >
          {
            <PostUserCard
              // avatarUri={this.state.postsItemData.usermeta.avatar}
              // nickname={this.state.postsItemData.usermeta.nickname}
              // tag={this.state.postsItemData.usermeta.job}
              usermeta={this.state.postsItemData.usermeta}
              postTime={getTimeDiff(this.state.postsItemData.postDate)}
              deviceName={this.state.postsItemData.postAuthorDevice}
            />
          }
          {/* {(()=> {
            console.log(this.props)
            return <Text>1</Text>
          })()} */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              this.props.navigation.navigate('微校正文', {
                postsItemData: this.state.postsItemData
              })
            }
          >
            <View style={{ width: wp('90%') }}>
              <Text
                style={{ marginTop: 20, marginBottom: 20 }}
                onPress={() =>
                  this.props.navigation.navigate('微校正文', {
                    postsItemData: this.state.postsItemData
                  })
                }
              >
                {this.state.postsItemData.postContent}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  // borderWidth: 1,
                  width: wp('90%')
                }}
              >
                {this.state.images.map((item: any, index: number) => {
                  // console.log(item)
                  return index <= 8 ? (
                    <TouchableOpacity
                      // onPress={() => {
                      //   // console.log(index)
                      //   this.setState({
                      //     modalVisible: true,
                      //     initIndex: index
                      //   })
                      // }}
                      onPress={() =>
                        this.props.navigation.navigate('微校正文', {
                          postsItemData: this.state.postsItemData
                        })
                      }
                      activeOpacity={0.7}
                      key={index}
                    >
                      <Image
                        source={{ uri: item }}
                        key={index}
                        style={{
                          width: 110,
                          height: 110,
                          marginRight: (wp('90%') - 330) / 12,
                          marginLeft: (wp('90%') - 330) / 12
                        }}
                      />
                    </TouchableOpacity>
                  ) : null
                })}
              </View>
              {/* {this.state.images.map((item: string, index: number) => {
              return <Image source={{ uri: 'https://uploadbeta.com/api/pictures/random/' }} key={index} style={{width: 100,height:100}} />
            })} */}
            </View>
          </TouchableOpacity>
          {this.state.postsItemData.usermeta.userId === this.props.myUsermeta.userId && (
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
              <Text style={{ color: 'red', lineHeight: 30, margin: 4 }}>删除</Text>
            </TouchableOpacity>
          )}
          {/* <ImageCard
            modalVisible={this.state.modalVisible}
            images={this.state.images}
            initIndex={this.state.initIndex}
            onClick={() =>
              this.setState({
                modalVisible: !this.state.modalVisible
              })
            }
            onSwipeDown={() =>
              this.setState({
                modalVisible: !this.state.modalVisible
              })
            }
          /> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: wp('100%'),
            justifyContent: 'space-around',
            marginTop: 10,
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0'
          }}
        >
          <TouchableOpacity
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
            <View style={styles.actionButton}>
              <Icon name="fenxiang" style={[styles.actions]} />
              <Text style={[styles.actions]}>{this.state.shareCount}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('微校正文', {
                postsItemData: this.state.postsItemData
              })
            }
          >
            <View style={styles.actionButton}>
              <Icon name="pinglun" style={[styles.actions]} />
              <Text style={[styles.actions]}>{this.state.commentCount}</Text>
            </View>
          </TouchableOpacity>

          {/* 点赞 */}

          <TouchableOpacity onPress={() => this.upvote()}>
            <View style={styles.actionButton}>
              <Icon
                name="dianzan"
                style={[
                  styles.actions,
                  { color: this.state.isUpvoted > 0 ? '#29A1F7' : '#000000' }
                ]}
                // onPress={() => console.log('upvote')}
              />
              <Text
                style={[
                  styles.actions,
                  { color: this.state.isUpvoted > 0 ? '#29A1F7' : '#000000' }
                ]}
              >
                {this.state.UpvoteCount}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {!this.props.isLast && (
          <View
            style={{
              width: wp('100%'),
              height: 15,
              backgroundColor: '#EEEEEE',
              borderTopWidth: 1,
              borderTopColor: '#e5e5e5'
            }}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tag: {
    borderWidth: 1,
    borderColor: '#707070',
    fontSize: 10,
    lineHeight: 14,
    borderRadius: 4,
    paddingLeft: 2,
    paddingRight: 2,
    color: '#9E9E9E',
    marginLeft: 4
  },
  postFrom: {
    fontSize: 10,
    color: '#9E9E9E'
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(`${100 / 3}%`),
    height: 35
    // borderWidth: 1,
    // borderColor: 'red'
  },
  actions: {
    fontSize: 14,
    // color: '#9E9E9E',
    // marginRight: 4,
    lineHeight: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  }
})

// export default
const mapStateToProps = (state: any) => {
  // console.log('state', state)
  return {
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
)(withNavigation(PostCard))
