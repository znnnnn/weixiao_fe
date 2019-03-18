import { InputItem, List } from '@ant-design/react-native'
import api from '@api/index'
import { phoneValidate, showError } from '@app/util/formValidate'
import Icon from '@app/util/icon'
import SendSMS from '@components/SendSMS'
import px2dp from '@util/px2dp'
import reg from '@util/reg'
import StyleSheet from '@util/stylesheet'
import { Button, Toast } from 'native-base'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'

import actions from '@store/action/Index'
import { connect, DispatchProp } from 'react-redux'

export interface State {
  phone: string
  code: string
  inputBorderColor: string
}

export interface Props {
  validateCode:Function
}

export interface Props extends NavigationScreenProps {
  defalutProps: string
}

 class Register extends React.Component<Props, State> {
  public state = {
    phone: '',
    code: '',
    inputBorderColor: '#EEEEEE'
  }

 public constructor(props: Props) {
    super(props);
  }

  public validateRegister(data: string): void {
    switch (data) {
      case '验证码错误':
        showError('验证码错误')
        break
      case '验证码过期':
        showError('验证码过期')
        break
      default:
        this.props.validateCode(this.state.phone.replace(/\s*/g, ''))
        console.log(this.props.validateCode(this.state.phone.replace(/\s*/g, '')))
        this.props.navigation.navigate('设置密码')
        // Toast.show({
        //   text: '登录成功',
        //   type: 'success'
        // })
        break
    }
  }

  public register() {
    let purePhoneNumber = this.state.phone.replace(/\s*/g, '')
    if (this.state.phone === '') {
      showError('手机号不能为空')
    } else if (!reg.checkPhone(purePhoneNumber)) {
      // InputItem的phone类型，value中会自带空格，判断时需要去除，否则会一直错误！
      showError('手机号格式错误')
    } else if (this.state.code === '') {
      showError('验证码不能为空')
    } else {
      api.register.registerByCode(purePhoneNumber, this.state.code).then((res) => {
        let data = res.data.data
        // console.log(data)
        this.validateRegister(data)
      })
    }
  }

  public render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={{ fontSize: 35 }}>注册</Text>
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
            <InputItem
              value={this.state.code}
              onChange={(value) => {
                this.setState({
                  code: value
                })
              }}
              type="number"
              maxLength={4}
              placeholder="验证码"
              // onFocus={() => this.inputItemFocus()}
              // onBlur={() => this.inputItemBlur()}
              extra={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <SendSMS
                    phone={this.state.phone.replace(/\s*/g, '')}
                    api={() =>
                      api.register
                        .sendRegisterCode(this.state.phone.replace(/\s*/g, ''))
                        .then((res) => console.log(res))
                    }
                  />
                </View>
              }
            />
          </View>
          <Button block onPress={() => this.register()}>
            <Text style={{ color: '#fff' }}>下一步</Text>
          </Button>
          <View style={styles.actions}>
            <Text style={{ lineHeight: 20 }}>注册登录即表明你同意</Text>
            <TouchableOpacity>
              <Text style={{ color: '#1B82D2', lineHeight: 20 }}>《微校服务使用协议》</Text>
            </TouchableOpacity>
            <Text style={{ lineHeight: 20 }}>及</Text>
            <TouchableOpacity>
              <Text style={{ color: '#1B82D2', lineHeight: 20 }}>《微校隐私政策》</Text>
            </TouchableOpacity>
            <Text style={{ lineHeight: 20 }}>中的全部内容</Text>
          </View>
        </View>
      </View>
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

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: hp('100%')
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
  RegisterBtn: {
    borderRadius: 20,
    width: wp('80'),
    marginTop: 20
  },
  actions: {
    flexDirection: 'row',
    width: wp('80%'),
    // borderColor: 'red',
    marginTop: 20,
    fontSize: 10,
    flexWrap: 'wrap'
  }
})


// 获取store中的state，并传入容器组件的Props中
const mapStateToProps = (state: any): Object => {
  // console.log(state)
  return {
    // 获取 state 变化
    phone: state.handleRegister.phone
  }
}

// 将本发送action的函数绑定到容器组件的Props中
// 发送行为
function mapDispatchToProps(dispatch: DispatchProp['dispatch']) {
  let validateCode = actions.register.validateCode
  return {
    validateCode
  }
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)