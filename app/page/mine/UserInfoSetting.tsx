import { Checkbox, ImagePicker, Picker } from '@ant-design/react-native'
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
  List,
  ListItem,
  Right,
  Switch,
  Text,
  Textarea,
  View
} from 'native-base'
import React, { Component } from 'react'

const SCHOOL_DATA = require('./SetEducationSchool.json')

export default class UserInfoSetting extends Component {
  public state = {
    avatar: [
      // {
      //   url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
      //   id: '2121',
      // }
    ],
    avatarSelectable: true,
    sex: true,
    school: ''
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
          <ListItem icon>
            <Left>
              <Text>所在地区</Text>
            </Left>
            <Body />
            <Right>
              <Picker
                data={SCHOOL_DATA}
                cols={1}
                value={this.state.school}
                onChange={(value) => {
                  this.setState({
                    school: value
                  })
                }}
              />
            </Right>
          </ListItem>
          <Item style={{ paddingLeft: 15 }}>
            <Icon active name="home" />
            <Input placeholder="公司" />
          </Item>
          <Item style={{ paddingLeft: 15 }}>
            <Icon active name="school" />
            <Input placeholder="学校" />
          </Item>
          <Form>
            {/* 多行收入 */}
            {/* <Textarea rowSpan={5} bordered placeholder="Textarea" /> */}
          </Form>
        </Content>
      </Container>
    )
  }
}
