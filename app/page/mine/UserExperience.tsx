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
  Left,
  ListItem,
  Right,
  Switch,
  Text,
  Textarea,
  Toast,
  View
} from 'native-base'
import { string } from 'prop-types'
import React, { Component } from 'react'

import actions from '@store/action/Index'
import { connect } from 'react-redux'

import { NavigationScreenProps } from 'react-navigation'

import api from '@api/index'

const EDU_DATA = require('./SetEducationEdu.json')
const MAJOR_DATA = require('./SetEducationMajor.json')
const SCHOOL_DATA = require('./SetEducationSchool.json')

interface Props extends NavigationScreenProps {
  myUsermeta: any
  handleUsermeta: Function
}

class UserExperience extends Component<Props> {
  public state = {
    truename: this.props.myUsermeta.truename,
    education: this.props.myUsermeta.education,
    admission: new Date(this.props.myUsermeta.admission),
    school: this.props.myUsermeta.school,
    major: this.props.myUsermeta.major,
    job: this.props.myUsermeta.job
  }

  public constructor(props: Props) {
    super(props)
    // console.log(this.props.myUsermeta.admission)
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
                value={this.state.truename}
                onChange={(truename) => {
                  this.setState({
                    truename
                  })
                }}
                // extra={this.state.truename}
                // placeholder="有标签"
              >
                真名
              </InputItem>
              <InputItem
                clear
                // error
                value={this.state.education}
                onChange={(education) => {
                  this.setState({
                    education
                  })
                }}
                // extra="元"
                // placeholder="有标签"
              >
                学历
              </InputItem>
              <DatePicker
                value={this.state.admission}
                mode="date"
                minDate={new Date(1960, 1, 1)}
                maxDate={new Date()}
                onChange={(admission) => {
                  this.setState({
                    admission
                  })
                  // console.log(admission)
                }}
                format="YYYY-MM-DD"
              >
                <List.Item arrow="horizontal">入学时间</List.Item>
              </DatePicker>
              <InputItem
                clear
                // error
                value={this.state.school}
                onChange={(school) => {
                  this.setState({
                    school
                  })
                }}
                // extra="元"
                // placeholder="有标签"
              >
                学校
              </InputItem>
              <InputItem
                clear
                // error
                value={this.state.major}
                onChange={(major) => {
                  this.setState({
                    major
                  })
                }}
                // extra="元"
                // placeholder="有标签"
              >
                专业
              </InputItem>
              <InputItem
                clear
                // error
                value={this.state.job}
                onChange={(job) => {
                  this.setState({
                    job
                  })
                }}
                // extra="元"
                // placeholder="有标签"
              >
                就业岗位
              </InputItem>
            </Form>
            <Button
              block
              style={{ margin: 10 }}
              onPress={() =>
                api.userHome
                  .updateUserInfo({
                    umetaId: this.props.myUsermeta.umetaId,
                    ...this.state
                    // avatar: this.state.avatar[0],
                    // sex: this.state.sex ? 1 : 0,
                    // nickname: this.state.nickname,
                    // truename: this.state.truename,
                    // job: this.state.job,
                    // school: this.state.school,
                    // education: this.state.education,
                    // userIntroduce: this.state.userIntroduce
                  })
                  .then((res) => {
                    api.usermeta.getUsermeta(this.props.myUsermeta.umetaId).then((res) => {
                      // console.log(asyncToken,'第一次请求用户信息!!',res.data.data)
                      // console.log(res.data.data)
                      this.props.handleUsermeta(res.data.data)
                    }).then(() => {
                      Toast.show({
                        text: '保存成功',
                        type: 'success',
                        position:'top'
                      })
                      this.props.navigation.goBack()
                    })
                  })
              }
            >
              <Text>保存</Text>
            </Button>
          </Content>
        </Container>
      </Provider>
    )
  }
}

const mapStateToProps = (state: any): Object => {
  console.log('store中', state)
  return {
    // 获取 state 变化
    token: state.handleLogin.token,
    myUsermeta: state.HandleMyUsermeta.myUsermeta
  }
}

// 发送行为
let handleUsermeta = actions.myUsermeta.handleUsermeta
const mapDispatchToProps = {
  handleUsermeta
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserExperience)
