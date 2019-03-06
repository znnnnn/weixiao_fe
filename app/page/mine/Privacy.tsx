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
import { Alert } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import React, { Component } from 'react'


export default class Privacy extends Component<any> {
  public constructor(props: NavigationScreenProps) {
    super(props)
  }

  public render() {
    return (
        <Container>
          <Content>
            <List>
              <ListItem onPress={() => this.props.navigation.navigate('权限设置')}>
                <Left>
                  <Text>谁可以看我的资料</Text>
                </Left>
                {/* <Text style={{ color: '#333' }}>{'所有人'} ></Text> */}
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('权限设置')}>
                <Left>
                  <Text>谁可以给我发消息</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem itemDivider />
              <ListItem onPress={() => this.props.navigation.navigate('权限设置')}>
                <Left>
                  <Text>不看他的动态</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('权限设置')}>
                <Left>
                  <Text>不让他看我的动态</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>
    )
  }
}
