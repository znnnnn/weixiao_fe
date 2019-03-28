import { Checkbox, ImagePicker, List, Picker, Provider } from '@ant-design/react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Right,
  Switch,
  Text,
  Textarea,
  Toast,
  View
} from 'native-base'
import { string } from 'prop-types'
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'

import CameraButton from '@app/components/CameraButton'
import actions from '@store/action/Index'
import { connect } from 'react-redux'

import api from '@api/index'

const DATA = require('./data.json')

interface Props extends NavigationScreenProps {
  myUsermeta: any,
  handleUsermeta: Function
}

class UserInfoSetting extends Component<Props> {
  public state = {
    avatar: this.props.myUsermeta.avatar === '' ? [''] : [this.props.myUsermeta.avatar],
    nickname: this.props.myUsermeta.nickname,
    truename: this.props.myUsermeta.truename,
    job : this.props.myUsermeta.job,
    school: this.props.myUsermeta.school,
    sex: this.props.myUsermeta.sex,
    education: this.props.myUsermeta.education,
    userIntroduce: this.props.myUsermeta.userIntroduce
  }

  public constructor(props: Props) {
    super(props)
  }

  public uploadAvtar(formData: any) {
    api.file.upload(formData).then((res) => {
      // console.log(res)
      this.setState(
        {
          avatar: this.state.avatar.concat(res.data.data)
        },
        // () => console.log(this.state.avatar)
      )
    })
  }

  public removeAvtar(index: number) {
    this.setState({
      avatar: this.state.avatar.splice(index + 1, 1)
    })
    // console.log(this.state.sex)
  }

  public render() {
    return (
      <Provider>
        <Container>
          <Content>
            <ListItem style={{ height: 100 }}>
              <Left>
                <Text>头像</Text>
              </Left>
              <Body />
              <Right style={{ marginLeft: -300 }}>
                <CameraButton
                  // style={styles.cameraBtn}
                  photos={this.state.avatar}
                  maxPhotoLength={1}
                  onFileUpload={this.uploadAvtar.bind(this)}
                  removeFileUpload={this.removeAvtar.bind(this)}
                />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Text>性别</Text>
              </Left>
              <Body />
              <Right>
                <Checkbox
                  checked={this.state.sex === '1'}
                  onChange={(event) => {
                    if (event.target.checked) {
                      this.setState({ sex: '1' })
                    }
                  }}
                >
                  <Icon name="male" style={{ color: '#29A1F7', fontSize: 20, marginRight: 10 }} />
                </Checkbox>
                <Checkbox
                  checked={this.state.sex === '0'}
                  onChange={(event) => {
                    if (event.target.checked) {
                      this.setState({ sex: '0' })
                    }
                  }}
                >
                  <Icon name="female" style={{ color: '#FF4D94', fontSize: 20, marginRight: 10 }} />
                </Checkbox>
              </Right>
            </ListItem>
            {/* <View>
              <Picker
                data={DATA}
                cols={2}
                value={this.state.address}
                onChange={(value) =>
                  this.setState({
                    address: value
                  })
                }
              >
                <List.Item arrow="horizontal">所在地区</List.Item>
              </Picker>
            </View> */}
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Icon active name="leaf" />
              <Input
                placeholder="昵称"
                value={this.state.nickname}
                onChangeText={(nickname) => this.setState({ nickname })}
              />
            </Item>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Icon active name="contact" />
              <Input
                placeholder="真名"
                value={this.state.truename}
                onChangeText={(truename) => this.setState({ truename })}
              />
            </Item>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Icon active name="apps" />
              <Input placeholder="工作" value={this.state.job}
                onChangeText={(job) => this.setState({ job })}/>
            </Item>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Icon active name="school" />
              <Input
                placeholder="学校"
                value={this.state.school}
                onChangeText={(school) => this.setState({ school })}
              />
            </Item>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Icon active name="paper-plane" />
              <Input
                placeholder="学历"
                value={this.state.education}
                onChangeText={(education) => this.setState({ education })}
              />
            </Item>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Form>
                <Textarea
                  rowSpan={5}
                  placeholder="我的介绍"
                  value={this.state.userIntroduce}
                  onChangeText={(userIntroduce) => this.setState({ userIntroduce })}
                />
              </Form>
            </Item>
            {/* <Button block style={{ margin: 10 }} onPress={() => console.log(this.props.myUsermeta)}>
              <Text>保存</Text>
            </Button> */}
            <Button
              block
              style={{ margin: 10 }}
              onPress={() =>
                {
                  const myUsermeta = {
                    umetaId: this.props.myUsermeta.umetaId,
                    // ...this.state,
                    avatar: this.state.avatar[0],
                    sex: this.state.sex ? 1 : 0,
                    nickname: this.state.nickname,
                    truename: this.state.truename,
                    job: this.state.job,
                    school: this.state.school,
                    education: this.state.education,
                    userIntroduce: this.state.userIntroduce
                  }
                  api.userHome.updateUserInfo({
                    ...myUsermeta
                  }).then(res=> {
                    this.props.handleUsermeta(myUsermeta)
                    Toast.show({
                      text: '保存成功',
                      type: 'success'
                    })
                    this.props.navigation.goBack()
                  })
                }
              }
            >
              <Text>保存</Text>
            </Button>
          </Content>
        </Container>
      </Provider>
    )
  }
}

const mapStateToProps = (state: any): Object => {
  // console.log('store中', state)
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
)(UserInfoSetting)
