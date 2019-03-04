import { Checkbox, ImagePicker, List, Picker, Provider } from '@ant-design/react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Header,
  Icon,
  Left,
  ListItem,
  Right,
  Switch,
  Text,
  Textarea,
  Thumbnail
} from 'native-base'
import { Alert, Image, TouchableOpacity } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import React, { Component } from 'react'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

interface Props extends NavigationScreenProps {
  defaultProps: string
}

export default class FeedBack extends Component<Props> {
  public render() {
    return (
      <Container>
        <Content>
          <Form>
            <Textarea
              style={{ margin: 15, marginTop: 30,padding:10, backgroundColor: '#F3F5F9' }}
              rowSpan={8}
              placeholder="请输入描述文字（必填）"
            />
            <Button block style={{ margin: 15 }}>
              <Text>提交</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
