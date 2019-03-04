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

export default class Welcome extends Component<Props> {
  public render() {
    return (
      <Container>
        <Content>
          <TouchableOpacity activeOpacity={0.9} onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('@image/mine/welcome.jpg')}
              style={{ width: wp('100%'), height: hp('100%') }}
            />
          </TouchableOpacity>
        </Content>
      </Container>
    )
  }
}
