import { Checkbox, ImagePicker, List, Picker, Provider } from '@ant-design/react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Right,
  Text,
  View
} from 'native-base'
import { string } from 'prop-types'
import React, { Component } from 'react'

const DATA = require('../mine/data.json')
const JOB = require('./job.json')

export default class UserInfoSetting extends Component {
  public state = {
    address: [],
    job: []
  }


  public render() {
    return (
      <Provider>
        <Container>
          <Content>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Icon active name="home" />
              <Input placeholder="公司" />
            </Item>
            <Item style={{ marginLeft: 15, paddingRight: 15 }}>
              <Icon active name="school" />
              <Input placeholder="学校" />
            </Item>
            <ListItem itemDivider></ListItem>
            <View>
              <Picker
                data={JOB}
                cols={2}
                value={this.state.address}
                onChange={(value) =>
                  this.setState({
                    address: value
                  })
                }
              >
                <List.Item arrow="horizontal">方向</List.Item>
              </Picker>
            </View>
            <View>
              <Picker
                data={DATA}
                cols={2}
                value={this.state.job}
                onChange={(value) =>
                  this.setState({
                    job: value
                  })
                }
              >
                <List.Item arrow="horizontal">地区</List.Item>
              </Picker>
            </View>
          </Content>
        </Container>
      </Provider>
    )
  }
}
