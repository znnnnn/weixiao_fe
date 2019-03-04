import { Checkbox, ImagePicker, List, Picker, Provider } from '@ant-design/react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Icon,
  Left,
  ListItem,
  Radio,
  Right,
  Root,
  Switch,
  Text
} from 'native-base'
import { Alert } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import React, { Component } from 'react'

interface Props extends NavigationScreenProps {
  defaultProps: string
}

export default class Privacy extends Component<Props> {
  public state = {
    radio: ''
  }
  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <Root>
        <Container>
          <Content>
            <List>
              <ListItem
                onPress={() =>
                  this.setState({
                    radio: 'all'
                  })
                }
              >
                <Left>
                  <Text>所有人</Text>
                </Left>
                <Right>
                  <Radio selected={this.state.radio === 'all'} />
                </Right>
              </ListItem>
              <ListItem
                onPress={() =>
                  this.setState({
                    radio: 'friend'
                  })
                }
              >
                <Left>
                  <Text>列表好友</Text>
                </Left>
                <Right>
                  <Radio selected={this.state.radio === 'friend'} />
                </Right>
              </ListItem>
              <ListItem
                onPress={() =>
                  this.setState({
                    radio: 'someFriend'
                  }, ()=> this.props.navigation.navigate('通讯录'))
                }
              >
                <Left>
                  <Text>部分好友</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>
      </Root>
    )
  }
}
