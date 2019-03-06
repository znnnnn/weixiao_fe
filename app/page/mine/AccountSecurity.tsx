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
import { Alert } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import React, { Component } from 'react'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

interface Props extends NavigationScreenProps {
}
export default class AccountSecurity extends Component<Props> {
  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={() => this.props.navigation.navigate('修改密码')}>
              <Left>
                <Text>修改密码</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('修改手机号')}>
              <Left>
                <Text>修改手机号</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemDivider >
            <Left>
                <Text note>已登录设备</Text>
              </Left>
            </ListItem>
            <ListItem>
              <Left>
                <Text>{deviceName}</Text>
              </Left>
              <Right>
                <Text note>本机</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
