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

const DATA = require('./data.json')

interface Props extends NavigationScreenProps {
  defaultProps: string
}

export default class ListItemSelectedExample extends Component<Props> {
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
            <ListItem>
              <Left>
                <Text>通用</Text>
              </Left>
            </ListItem>
            <ListItem>
              <Left>
                <Text>清除缓存</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
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
