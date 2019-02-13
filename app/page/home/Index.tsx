import { Button, InputItem, List, Provider, Toast } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import px2dp from '@util/px2dp'
import StyleSheet from '@util/stylesheet'
import React from 'react'
import {
  Alert,
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { connect } from 'react-redux'

import { NavigationScreenProps } from 'react-navigation'

export interface State {
  phone: string
  password: string
  inputBorderColor: string
  passCanSee: boolean
}

export interface Props extends NavigationScreenProps {
  defalutProps: string
  token: string
}

class SignIn extends React.Component<Props, State> {
  public state: State = {
    phone: '',
    password: '',
    inputBorderColor: '#EEEEEE',
    passCanSee: true
  }

  public constructor(props: Props) {
    super(props)
    // console.log(this.props.token)
  }

  public componentDidMount() {
    if (this.props.token === '') {
      console.log(this.props.token)
      this.props.navigation.navigate('Login')
      // Toast.info('您还没有登录哦', 3, undefined, false)
    }
  }

  public render() {
    return (
      <Provider>
        <View style={styles.root}>
          <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>首页</Text>
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
                onFocus={() => this.inputItemFocus()}
                onBlur={() => this.inputItemBlur()}
                style={{ borderWidth: 0 }}
              />
              <InputItem
                type={this.state.passCanSee ? 'password' : 'digit'}
                value={this.state.password}
                onChange={(value) => {
                  this.setState({
                    password: value
                  })
                }}
                placeholder="密码"
                onFocus={() => this.inputItemFocus()}
                onBlur={() => this.inputItemBlur()}
                extra={
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                      name="faxian_"
                      style={{ fontSize: 24 }}
                      onPress={() =>
                        this.setState({
                          passCanSee: !this.state.passCanSee
                        })
                      }
                    />
                    <Text>忘记密码</Text>
                  </View>
                }
              />
            </View>
            <Button type="primary" style={styles.loginBtn}>
              登录
            </Button>
            <View style={styles.actions}>
              <TouchableOpacity>
                <Text onPress={() => Linking.openURL('#')}>验证码快速登录</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text>注册</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.socialLogin}>
            <View style={styles.social}>
              <Text>QQ</Text>
              <Text>微信</Text>
              <Text>微博</Text>
            </View>
            <Text style={styles.visitor}>我是游客</Text>
          </View>
        </View>
      </Provider>
    )
  }

  private inputItemFocus(): void {
    this.setState({
      inputBorderColor: '#29A1F7'
    })
  }

  private inputItemBlur(): void {
    this.setState({
      inputBorderColor: '#EEEEEE'
    })
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'red',
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
    borderBottomColor: 'red'
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
    borderWidth: 1,
    borderColor: 'red',
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
  visitor: {
    marginTop: 20,
    justifyContent: 'center',
    fontSize: 16,
    color: '#333',
    marginBottom: 20
  }
})

const mapStateToProps = (state: any): Object => {
  return {
    // 获取 state 变化
    token: state.handleLogin.token
  }
}

// 发送行为
const mapDispatchToProps = (dispatch: any) => {
  return {
    // 发送行为
  }
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
