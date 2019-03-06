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
  Root,
  Switch,
  Text,
  Thumbnail,
  Toast
} from 'native-base'
import { Alert, AppRegistry } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import React, { Component } from 'react'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

interface Props extends NavigationScreenProps {
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

            <ListItem onPress={() => this.props.navigation.navigate('欢迎页')}>
              <Left>
                <Text>欢迎页</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => Toast.show({
                text: '更多精彩即将到来'
              })}
            >
              <Left>
                <Text>常见问题和帮助</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </Content>
        </Container>
    )
  }
}

AppRegistry.registerComponent('About', () => About);