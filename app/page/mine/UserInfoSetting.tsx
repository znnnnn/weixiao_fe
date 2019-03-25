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
  myUsermeta: any
}

class UserInfoSetting extends Component<Props> {
  public state = {
    avatar:
      this.props.myUsermeta.avatar === ''
        ? [
            // {
            //   url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
            //   id: '2121',
            // }
          ]
        : [{ url: this.props.myUsermeta.avatar }],
    avatarSelectable: true,
    sex: true,
    address: []
  }

  public constructor(props: Props) {
    super(props)
    console.log(111111111111111111)
  }

  public handleFileChange = (avatar: any) => {
    this.setState(
      {
        avatar
      },
      () => {
        // console.log(this.state.avatar.length === 0);
        this.state.avatar.length === 0
          ? (this.state.avatarSelectable = true)
          : (this.state.avatarSelectable = false)
        // 强制刷新组件
        this.forceUpdate()
      }
    )
    // console.log(avatar)
  }

  public onFileUpload(file, fileName) {
    // return this.props.uploadAvatar(
    //   {
    //     id: this.props.user.ID,
    //     type: 'logo',
    //     obj: 'user',
    //     corpId: this.props.cropId
    //   },
    //   file,
    //   fileName
    // )
    return ()=>console.log(file,fileName)
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
                  photos={[]}
                  onFileUpload={this.onFileUpload}
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
                  checked={this.state.sex === true}
                  onChange={(event) => {
                    if (event.target.checked) {
                      this.setState({ sex: true })
                    }
                  }}
                >
                  <Icon name="male" style={{ color: '#29A1F7', fontSize: 20, marginRight: 10 }} />
                </Checkbox>
                <Checkbox
                  checked={this.state.sex === false}
                  onChange={(event) => {
                    if (event.target.checked) {
                      this.setState({ sex: false })
                    }
                  }}
                >
                  <Icon name="female" style={{ color: '#FF4D94', fontSize: 20, marginRight: 10 }} />
                </Checkbox>
              </Right>
            </ListItem>
            <View>
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
            </View>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Icon active name="person" />
              <Input placeholder="姓名" value={this.props.myUsermeta.truename} />
            </Item>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Icon active name="home" />
              <Input placeholder="公司" />
            </Item>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Icon active name="school" />
              <Input placeholder="学校" />
            </Item>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Form>
                <Textarea rowSpan={5} placeholder="我的格言" />
              </Form>
            </Item>
            <Button block style={{ margin: 10 }} onPress={() => console.log(this.state)}>
              <Text>保存</Text>
            </Button>
          </Content>
        </Container>
      </Provider>
    )
  }
}

const mapStateToProps = (state: any): Object => {
  console.log('store中', state)
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
