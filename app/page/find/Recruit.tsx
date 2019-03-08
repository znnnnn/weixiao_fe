import {
  Checkbox,
  DatePicker,
  ImagePicker,
  InputItem,
  List,
  Picker,
  Provider
} from '@ant-design/react-native'
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
import { string } from 'prop-types'
import React, { Component } from 'react'

const EDU_DATA = require('../mine/SetEducationEdu.json')
const MAJOR_DATA = require('../mine/SetEducationMajor.json')
const SCHOOL_DATA = require('../mine/SetEducationSchool.json')

export default class UserExperience extends Component {
  public state = {
    edu: [],
    admission: undefined,
    school: [],
    major: [],
    value: ''
  }

  public render() {
    return (
      <Provider>
        <Container>
          <Content padder>
            <Form>
              <InputItem
                clear
                // error
                value={this.state.value}
                onChange={(value) => {
                  this.setState({
                    value
                  })
                }}
                // extra="元"
                // placeholder="有标签"
              >
                工作经验
              </InputItem>
              <Picker
                data={EDU_DATA}
                cols={1}
                value={this.state.edu}
                onChange={(value) => {
                  this.setState({
                    edu: value
                  })
                }}
              >
                <List.Item arrow="horizontal" /*onPress={this.onPress}*/>学历</List.Item>
              </Picker>
              <Form>
                <Textarea rowSpan={5} bordered placeholder="职位详情" />
              </Form>
              <Form>
                <Textarea rowSpan={5} bordered placeholder="技能要求" />
              </Form>
            </Form>
          </Content>
        </Container>
      </Provider>
    )
  }
}
