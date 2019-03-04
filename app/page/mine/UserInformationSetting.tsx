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

const DATA = require('./data.json')

export default class UserInformationSetting extends Component {
  public state = {
    avatar: [
      // {
      //   url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
      //   id: '2121',
      // }
    ],
    avatarSelectable: true,
    sex: true,
    address: []
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
                <ImagePicker
                  files={this.state.avatar}
                  selectable={this.state.avatarSelectable}
                  onChange={this.handleFileChange}
                />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Text>姓名</Text>
              </Left>
              <Body />
              <Right>
                <Text>znnnnn</Text>
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
          </Content>
        </Container>
      </Provider>
    )
  }
}
