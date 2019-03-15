import { Button } from 'native-base'
import React, { Component } from 'react'
import {Text} from 'react-native'

export default class SendSMS extends Component<any> {
  public state = {
    waitingTime: 60,
    codeCanClick: false
  }

  public render() {
    return (
      <Button
        transparent
        dark
        small
        onPress={() => {
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
                }
              }
            )
          }, 1000)
        }}
        disabled={this.state.codeCanClick}
      >
        <Text>
          {this.state.waitingTime === 60 ? '获取验证码' : `${this.state.waitingTime}秒重新发送`}
        </Text>
      </Button>
    )
  }
}
