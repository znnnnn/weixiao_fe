import { ActionSheet, Button, Footer, FooterTab, Icon as IconBase, Input, Toast } from 'native-base'
import React from 'react'
import { Text } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import DeviceInfo from 'react-native-device-info'

import api from '@api/index'

const deviceName = DeviceInfo.getDeviceName()

export interface State {
  comment: string
  IP: string
  isUpvoted: number
  UpvoteCount: number
}

export interface Props {
  commentAuthor: string
  commentParent: number | null
  commentPostId: number
  commentUserId: number
  fresh: Function
  postsItemData: any
  myUsermeta?: any
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

class CommentSender extends React.Component<Props, State> {
  public state: State = {
    comment: '',
    IP: 'string',
    isUpvoted: 0,
    UpvoteCount: this.props.postsItemData.upvoteList.length
  }

  public constructor(props: Props) {
    super(props)
  }

  public componentDidMount() {
    // console.log(this.props)
    DeviceInfo.getIPAddress().then((IP) =>
      this.setState({
        IP
      })
    )
  }

  public upvoteByUserId() {
    api.upvote
      .upvote({
        upvotePostId: this.props.postsItemData.postId,
        upvoteUserId: this.props.myUsermeta.userId
      })
      .then((res) => {
        console.log('点赞', res)
        if (res.data.message === 'SUCCESS') {
          this.setState({
            UpvoteCount: ++this.state.UpvoteCount,
            isUpvoted: 1
            // is
          })
        }
      })
  }

  public deleteUpvoteByUserId() {
    api.upvote
      .deleteUpvoteByUserId(this.props.postsItemData.postId, this.props.myUsermeta.userId)
      .then((res) => {
        console.log('取消点赞', res)
        if (res.data.data > 0) {
          this.setState({
            UpvoteCount: --this.state.UpvoteCount,
            isUpvoted: 0
            // is
          })
        }
      })
  }

  public upvote() {
    return this.state.isUpvoted === 0 ? this.upvoteByUserId() : this.deleteUpvoteByUserId()
  }

  public componentWillMount() {
    setTimeout(() => {
      // console.log(this.props.postsItemData)
      this.setState(
        {
          isUpvoted:
            this.props.postsItemData.upvoteList.length > 0
              ? this.props.postsItemData.upvoteList.filter(
                  (item: any) => item.upvoteUserId === this.props.myUsermeta.userId
                ).length
              : 0,
          UpvoteCount: this.props.postsItemData.upvoteList.length
        },
        () => console.log(this.state.isUpvoted)
      )
      // console.log(this.state.isUpvoted)
    }, 0)
  }

  public send(type = 'comment') {
    if (this.state.comment !== '') {
      api.commentSender
        .send({
          commentAuthor: this.props.commentAuthor,
          commentContent: this.state.comment,
          commentDate: new Date(),
          commentIp: this.state.IP,
          commentParent: this.props.commentParent,
          commentPostId: this.props.commentPostId,
          commentType: type,
          commentUserId: this.props.commentUserId
        })
        .then((res) => {
          this.setState({
            comment: ''
          })
          Toast.show({
            text: '成功',
            type: 'success'
          })
        })
        .then(() => setTimeout(this.props.fresh(), 500))
    } else {
      Toast.show({
        text: '输入内容不能为空',
        type: 'danger'
      })
    }
  }

  public render() {
    return (
      <Footer>
        <FooterTab>
          <Input
            placeholder="写下你的评论"
            onChangeText={(comment) =>
              this.setState({
                comment
              })
            }
            value={this.state.comment}
            style={{ flex: 4, backgroundColor: '#fff' }}
          />
          <Button
            vertical
            style={{ flex: 1, backgroundColor: '#fff' }}
            onPress={() => this.send('comment')}
          >
            <IconBase name="chatboxes" style={{ color: '#333' }} />
            <Text style={{ color: '#333' }}>发送</Text>
          </Button>
          <Button
            vertical
            style={{ flex: 1, backgroundColor: '#fff' }}
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
                    this.send('share')
                  }
                }
              )
            }
          >
            <IconBase name="share-alt" style={{ color: '#333' }} />
            <Text style={{ color: '#333' }}>转发</Text>
          </Button>

          <Button
            vertical
            style={{ flex: 1, backgroundColor: '#fff' }}
            onPress={() => this.upvote()}
          >
            <IconBase
              name="thumbs-up"
              style={{ color: this.state.isUpvoted > 0 ? '#29A1F7' : '#333' }}
            />
            <Text style={{ color: this.state.isUpvoted > 0 ? '#29A1F7' : '#333' }}>
              {this.state.UpvoteCount}
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

const mapStateToProps = (state: any): Object => {
  return {
    // 获取 state 变化
    myUsermeta: state.HandleMyUsermeta.myUsermeta
  }
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps
  // mapDispatchToProps
)(CommentSender)
