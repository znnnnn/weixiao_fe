import { InputItem, List } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import StyleSheet from '@util/stylesheet'
import { Button, Container, Content, Form, Header, Input, Item, Text } from 'native-base'
import { number } from 'prop-types'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'

export interface State {
  name: string
  IDnumber: string
  phone: string
  code: string
}

export interface Props extends NavigationScreenProps {}

export default class Login extends React.Component<Props, State> {
  public state = {
    name: '',
    IDnumber: '',
    phone: '',
    code: ''
  }

  // private constructor(props: {}) {
  //   super(props);
  // }

  public render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <InputItem
              clear
              // error
              value={this.state.name}
              placeholder="请输入"
              onChange={(value) => {
                this.setState({
                  name: value
                })
              }}
            >
              真实姓名
            </InputItem>
            <InputItem
              clear
              type="number"
              value={this.state.IDnumber}
              placeholder="请输入"
              onChange={(value) => {
                this.setState({
                  IDnumber: value
                })
              }}
              // placeholder="number"
            >
              数字
            </InputItem>
            <InputItem
              clear
              type="phone"
              value={this.state.phone}
              placeholder="请输入"
              onChange={(value) => {
                this.setState({
                  phone: value
                })
              }}
              // placeholder="phone"
            >
              手机号
            </InputItem>
            <InputItem
              value={this.state.code}
              onChange={(value) => {
                this.setState({
                  code: value
                })
              }}
              placeholder="请输入"
              maxLength={16}
              extra={
                <Button small>
                  <Text>获取验证码</Text>
                </Button>
              }
            >
              验证码
            </InputItem>
            <Button
              block
              style={{ marginTop: 30 }}
              onPress={() => this.props.navigation.navigate('招聘要求')}
            >
              <Text>完成</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }

  // private inputItemFocus(): void {
  //   this.setState({
  //     inputBorderColor: '#29A1F7'
  //   })
  // }

  // private inputItemBlur(): void {
  //   this.setState({
  //     inputBorderColor: '#EEEEEE'
  //   })
  // }
}

const styles = StyleSheet.create({})
