import { InputItem, List } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import px2dp from '@util/px2dp'
import StyleSheet from '@util/stylesheet'
import React from 'react'
import { Image, Linking, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'

import { handleLogin } from '@store/action/Index'
import { Button, Toast } from 'native-base'
import { connect, DispatchProp } from 'react-redux'

import api from '@api/index'
import axios from 'axios'

import { phoneValidate, showError } from '@app/util/formValidate'
import SendSMS from '@components/SendSMS'
import reg from '@util/reg'
export interface State {
  phone: string
  password: string
  inputBorderColor: string
  passCanSee: boolean
  loginByCode: boolean
  code: string
  waitingTime: number
  codeCanClick: boolean
}

export interface Props extends NavigationScreenProps {
  defalutProps: string
  handleLogin: Function
}

class Login extends React.Component<Props, State> {
  public state = {
    phone: '',
    password: '',
    inputBorderColor: '#EEEEEE',
    passCanSee: true,
    loginByCode: true,
    code: '',
    waitingTime: 60,
    codeCanClick: false
  }

  public validateLogin(data: string): void {
    switch (data) {
      case '用户名未注册':
        showError('用户名未注册')
        break
      case '用户名密码错误':
        showError('用户名密码错误')
        break
      case '验证码错误':
        showError('验证码错误')
        break
      case '验证码过期':
        showError('验证码过期')
        break
      default:
        this.props.handleLogin(data)
        console.log(this.props.handleLogin(data))
        this.props.navigation.navigate('首页')
        Toast.show({
          text: '登录成功',
          type: 'success'
        })
        break
    }
  }

  public loginRequest() {
    let purePhoneNumber = this.state.phone.replace(/\s*/g, '')
    if (this.state.phone === '') {
      showError('手机号不能为空')
    } else if (!reg.checkPhone(purePhoneNumber)) {
      // InputItem的phone类型，value中会自带空格，判断时需要去除，否则会一直错误！
      showError('手机号格式错误')
    } else if (!this.state.loginByCode && this.state.password === '') {
      showError('密码不能为空')
    } else if (this.state.loginByCode && this.state.code === '') {
      showError('验证码不能为空')
    } else {
      if (this.state.loginByCode) {
        api.login.loginByCode(purePhoneNumber, this.state.code).then((res) => {
          let data = res.data.data
          // console.log(data)
          this.validateLogin(data)
        })
      } else {
        // console.log(2222)
        api.login.login(purePhoneNumber, this.state.password).then((res) => {
          let data = res.data.data
          this.validateLogin(data)
        })
      }
    }
  }
  // private constructor(props: {}) {
  //   super(props);
  // }

  public render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          {/* <Text style={{ fontSize: 40 }}>微校</Text> */}
          <Image source={require('../../image/logo.png')} />
          <View style={styles.inputContainer}>
            <InputItem
              clear
              type="phone"
              value={this.state.phone}
              onChange={(value) => {
                this.setState({
                  phone: value
                })
              }}
              editable={true}
              disabled={false}
              // autoFocus={true}
              placeholder="手机号"
              // onFocus={() => this.inputItemFocus()}
              // onBlur={() => this.inputItemBlur()}
              style={{ borderWidth: 0 }}
            />
            {this.state.loginByCode ? (
              <InputItem
                value={this.state.code}
                onChange={(value) => {
                  this.setState({
                    code: value
                  })
                }}
                maxLength={4}
                type="number"
                placeholder="验证码"
                // onFocus={() => this.inputItemFocus()}
                // onBlur={() => this.inputItemBlur()}
                extra={
                  <SendSMS
                    phone={this.state.phone.replace(/\s*/g, '')}
                    api={() =>
                      api.login.sendLoginCode(this.state.phone.replace(/\s*/g, '')).then((res) => console.log(res))
                    }
                  />
                }
              />
            ) : (
              <InputItem
                type={this.state.passCanSee ? 'password' : 'digit'}
                value={this.state.password}
                onChange={(value) => {
                  this.setState({
                    password: value
                  })
                }}
                maxLength={16}
                placeholder="密码"
                // onFocus={() => this.inputItemFocus()}
                // onBlur={() => this.inputItemBlur()}
                extra={
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                      name="faxian_"
                      style={{ fontSize: 24, marginRight: 10 }}
                      onPress={() =>
                        this.setState({
                          passCanSee: !this.state.passCanSee
                        })
                      }
                    />
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => this.props.navigation.navigate('忘记密码')}
                    >
                      <Text>忘记密码</Text>
                    </TouchableOpacity>
                  </View>
                }
              />
            )}
          </View>
          <Button
            // type="primary"
            block
            // style={styles.loginBtn}
            onPress={() => this.loginRequest()}
          >
            <Text style={{ color: '#fff' }}>登录</Text>
          </Button>
          <View style={styles.actions}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                this.setState({
                  loginByCode: !this.state.loginByCode
                })
              }
            >
              <Text>{!this.state.loginByCode ? '验证码快速登录' : '密码登录'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('注册')}
            >
              <Text>注册</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.socialLogin}>
          <View style={styles.social}>
            <Icon
              name="qq"
              style={[styles.socialIcon, { color: '#5EAADE' }]}
              onPress={() => console.log('QQ')}
            />
            <Icon
              name="weixin"
              style={[styles.socialIcon, { color: '#50B674' }]}
              onPress={() => console.log('weixin')}
            />
            <Icon
              name="weibo"
              style={[styles.socialIcon, { color: '#EA5D5C' }]}
              onPress={() => console.log('weibo')}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.handleLogin('')
              this.props.navigation.navigate('首页')
            }}
          >
            <Text style={styles.visitor}>我是游客</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: hp('100%') - 50
  },
  container: {
    marginTop: hp('10%'),
    alignItems: 'center'
  },
  inputContainer: {
    height: 140,
    width: wp('90%'),
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'blue',
    marginTop: 10
  },
  passwd: {
    // borderBottomColor: 'red'
  },
  loginBtn: {
    borderRadius: 20,
    width: wp('80'),
    marginTop: 20
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    marginTop: 20,
    fontSize: 10
  },
  socialLogin: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  social: {
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  socialIcon: {
    borderRadius: 35,
    fontSize: 35
  },
  visitor: {
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    fontSize: 16,
    color: '#333'
  }
})

// 获取store中的state，并传入容器组件的Props中
const mapStateToProps = (state: any): Object => {
  return {
    // 获取 state 变化
    token: state.handleLogin.token
  }
}

// 将本发送action的函数绑定到容器组件的Props中
// 发送行为
function mapDispatchToProps(dispatch: DispatchProp['dispatch']) {
  return {
    handleLogin
  }
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
