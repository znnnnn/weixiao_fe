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
  Label,
  Left,
  ListItem,
  Right,
  Switch,
  Text,
  Textarea,
  View
} from 'native-base'
import { Alert } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import React, { Component } from 'react'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()


export default class Gerneral extends Component<any> {
  public state = {
    newMsg: true,
    unReadMsg: true
  }

  public constructor(props: NavigationScreenProps) {
    super(props)
  }

  public render() {
    return (
      <Container>
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#FF9501' }}>
                <Icon active name="chatbubbles" />
              </Button>
            </Left>
            <Body>
              <Text>新消息通知</Text>
            </Body>
            <Right>
              <Switch
                value={this.state.newMsg}
                onValueChange={() => {
                  console.log(1111)
                  this.setState(
                    {
                      newMsg: !this.state.newMsg
                    }
                  )
                }}
              />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
                <Icon active name="paper-plane" />
              </Button>
            </Left>
            <Body>
              <Text>未读消息短信提醒</Text>
            </Body>
            <Right>
              <Switch
                onValueChange={() => {
                  this.setState({
                    unReadMsg: !this.state.unReadMsg
                  })
                }}
                value={this.state.unReadMsg}
              />
            </Right>
          </ListItem>
        </Content>
      </Container>
    )
  }
}
