import { Checkbox, ImagePicker, List, Picker, Provider } from '@ant-design/react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  ListItem,
  Right,
  Switch,
  Text,
  Thumbnail
} from 'native-base'
import { Alert } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import React, { Component } from 'react'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

interface Props extends NavigationScreenProps {
  defaultProps: string
}

export default class About extends Component<Props> {
  public state = {
    newMsg: true,
    unReadMsg: true
  }

  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <Container>
        <Content>
          <Thumbnail
            square
            large
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
            }}
            style={{ alignSelf: 'center', marginTop: 30 }}
          />

          <Text note style={{ alignSelf: 'center', margin: 15 }}>
            V 0.0.1
          </Text>

          <ListItem icon style={{ backgroundColor: '#fff' }}>
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
                  this.setState({
                    newMsg: !this.state.newMsg
                  })
                }}
              />
            </Right>
          </ListItem>
          <ListItem icon style={{ backgroundColor: '#fff' }}>
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
