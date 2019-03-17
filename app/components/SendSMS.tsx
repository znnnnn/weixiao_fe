import login from '@api/account/login'
import reg from '@util/reg'
import { Button, Toast } from 'native-base'
import React, { Component } from 'react'
import { Text } from 'react-native'

interface Props {
  phone: string
}
export default class SendSMS extends Component<Props> {
  public state = {
    waitingTime: 60,
    codeCantClick: false
  }

  public constructor(props: Props) {
    super(props)
  }

  public showError(msg: string) {
    Toast.show({
      text: msg,
      type: 'danger'
    })
  }

  public sendSMS(phone:string) {
    if (this.props.phone === '') {
      Toast.show({ text: '手机号不能为空', type: 'danger' })
    } else if (!reg.checkPhone(phone)) {
      // InputItem的phone类型，value中会自带空格，判断时需要去除，否则会一直错误！
      this.showError('手机号格式错误')
    } else {
      // console.log(this.props.phone)
      login.sendLoginCode(this.props.phone).then((res) => console.log(res))
      this.setState({
        codeCanClick: true
      })
      let time = setInterval(() => {
        this.setState(
          {
            waitingTime: this.state.waitingTime - 1
          },
          () => {
            if (this.state.waitingTime === 0) {
              clearInterval(time)
              this.setState({
                waitingTime: 60,
                codeCantClick: false
              })
            }
          }
        )
      }, 1000)
    }
  }

  public render() {
    return (
      <Button
        transparent
        dark
        small
        onPress={() => {
          this.sendSMS(this.props.phone)
        }}
        disabled={this.state.codeCantClick}
      >
        <Text>
          {this.state.waitingTime === 60 ? '获取验证码' : `${this.state.waitingTime}秒重新发送`}
        </Text>
      </Button>
    )
  }
}
