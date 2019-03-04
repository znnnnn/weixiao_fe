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

const EDU_DATA = require('./SetEducationEdu.json')
const MAJOR_DATA = require('./SetEducationMajor.json')
const SCHOOL_DATA = require('./SetEducationSchool.json')

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
          <Content>
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
              <DatePicker
                value={this.state.admission}
                mode="date"
                minDate={new Date(1960, 1, 1)}
                maxDate={new Date()}
                onChange={(value) => {
                  this.setState({
                    admission: value
                  })
                }}
                format="YYYY-MM-DD"
              >
                <List.Item arrow="horizontal">入学时间</List.Item>
              </DatePicker>
              <Picker
                data={SCHOOL_DATA}
                cols={1}
                value={this.state.school}
                onChange={(value) => {
                  this.setState({
                    school: value
                  })
                }}
              >
                <List.Item arrow="horizontal">学校</List.Item>
              </Picker>
              <Picker
                data={MAJOR_DATA}
                cols={2}
                value={this.state.major}
                onChange={(value) => {
                  this.setState({
                    major: value
                  })
                }}
              >
                <List.Item arrow="horizontal" /*onPress={this.onPress}*/>专业</List.Item>
              </Picker>
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
                就业岗位
              </InputItem>
            </Form>
          </Content>
        </Container>
      </Provider>
    )
  }
}
