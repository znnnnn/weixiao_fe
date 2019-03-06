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
  Root,
  Switch,
  Text,
  Textarea,
  Toast,
  View
} from 'native-base'
import { Alert, AppRegistry } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import React, { Component } from 'react'

interface Props extends NavigationScreenProps {
}
export default class Setting extends Component<Props> {
  public constructor(props: Props) {
    super(props)
  }


  public render() {
    return (
        <Container>
          <Content>
            <List>
              <ListItem onPress={() => this.props.navigation.navigate('账号安全')}>
                <Left>
                  <Text>账号安全</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem itemDivider />
              <ListItem onPress={() => this.props.navigation.navigate('通用')}>
                <Left>
                  <Text>通用</Text>
                </Left>
              </ListItem>
              <ListItem
                onPress={() =>
                  Toast.show({
                    text: '清除缓存成功！',
                    type: 'success',
                    // textStyle: {
                    //   textAlign: 'center'
                    // },
                    position: 'bottom'
                  })
                }
              >
                <Left>
                  <Text>清除缓存</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('关于微校')}>
                <Left>
                  <Text>关于微校</Text>
                </Left>
              </ListItem>
              <ListItem itemDivider />
              <ListItem onPress={() => this.props.navigation.navigate('登录')}>
                <Left>
                  <Text>退出</Text>
                </Left>
              </ListItem>
            </List>
          </Content>
        </Container>
    )
  }
}

AppRegistry.registerComponent('Setting', () => Setting);