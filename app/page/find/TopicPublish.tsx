import {
  Provider,
  TextareaItem
} from '@ant-design/react-native'
import Icon from '@app/util/icon'
import px2dp from '@util/px2dp'
import StyleSheet from '@util/stylesheet'
import { Container, Content, Input, Toast } from 'native-base'
import React from 'react'
import {
  View
} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import api from '@api/index'
import CameraButton from '@app/components/CameraButton'
import actions from '@store/action/Index'
import fontLength from '@util/fontLength'
import { connect } from 'react-redux'

export interface State {
  title: string
  inputContent: string
  photos: Array<string>
}

interface Props extends NavigationScreenProps {
  handleLogin: Function
  token: string
  handleUsermeta: Function
  myUsermeta: any
}
class TopicPublish extends React.Component<Props, State> {
  public state: State = {
    title: this.props.navigation.state.params.findPublishTitle,
    inputContent: '',
    photos: []
  }

  public constructor(props: Props) {
    super(props)
  }
  public componentDidMount() {
    this.props.navigation.setParams({ publish: this.publish })
  }

  public publish = (type: string) => {
    // console.log(this.state.inputContent)
    let posts = {
      postAuthor: this.props.myUsermeta.userId,
      postStatus: 1,
      postTitle: this.state.title,
      postContent: this.state.inputContent,
      postCat: type,
      postImage: this.state.photos,
      postAuthorDevice: DeviceInfo.getDeviceName(),
      postTopicCat: this.state.title
    }
    if (fontLength(this.state.inputContent) <= 20) {
      Toast.show({
        text: '内容字数至少大于20字',
        type: 'danger',
        position: 'top'
      })
    } else if (fontLength(this.state.title) <= 5) {
      Toast.show({
        text: '标题字数至少大于5字',
        type: 'danger',
        position: 'top'
      })
    } else {
      api.publish
        .post(posts)
        .then((res) => {
          Toast.show({
            text: '发布成功',
            type: 'success',
            position: 'top'
          })
        })
        .then(() =>
          this.setState({
            inputContent: '',
            title: '',
            photos: []
          })
        )
        .then(() => this.props.navigation.goBack())
        api.topic.addTopic(this.state.title,this.state.photos)
    }
    // console.log(this.props.navigation)
    // console.log('publish内部')
  }

  public uploadAvtar(formData: any) {
    api.file.upload(formData).then((res) => {
      // console.log(res)
      this.setState(
        {
          photos: this.state.photos.concat(res.data.data)
        }
        // () => console.log(this.state.photos)
      )
    })
  }

  public removeAvtar(index: number) {
    this.state.photos.splice(index, 1)
    this.setState(
      {
        photos: this.state.photos
      }
      // () => console.log(this.state.photos)
    )
    // console.log(this.state.photos.splice(index, 1))
  }

  public render() {
    return (
      <Provider>
        <Container>
          <Content padder>
            <Input
              placeholder="话题名称"
              value={this.state.title}
              onChangeText={(title) =>
                this.setState({
                  title
                })
              }
            />
            <TextareaItem
              placeholder="这一刻你想说..."
              count={1000}
              onChangeText={(inputContent: string) =>
                this.setState({
                  inputContent
                })
              }
              value={this.state.inputContent}
              clear={true}
              rows={4}
              style={{ height: 200, width: wp('100%') }}
            />
            <View
              style={{
                width: wp('83%'),
                /* borderWidth: 1, borderColor: 'red',*/ marginTop: 5,
                flexDirection: 'row'
              }}
            >
              <CameraButton
                style={{ width: 65, height: 65 }}
                photos={this.state.photos}
                maxPhotoLength={9}
                onFileUpload={this.uploadAvtar.bind(this)}
                removeFileUpload={this.removeAvtar.bind(this)}
              />
            </View>
          </Content>
        </Container>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: 'red',
    height: hp('100%')
  }
})

const mapStateToProps = (state: any) => {
  // console.log('state', state)
  return {
    // 获取 state 变化
    token: state.handleLogin.token,
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
)(TopicPublish)
