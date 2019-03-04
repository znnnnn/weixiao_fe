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

interface Props extends NavigationScreenProps {
  defaultProps: string
}

export default class ChangePassword extends Component<Props> {
  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="手机号" />
              <Button small style={{ alignSelf: 'center', marginRight: 15 }}>
                <Text>发送验证码</Text>
              </Button>
            </Item>
            <Item>
              <Input placeholder="验证码" />
            </Item>
            <Item>
              <Input placeholder="新密码" />
            </Item>
            <Button block style={{ margin: 15 }}>
              <Text>提交</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
