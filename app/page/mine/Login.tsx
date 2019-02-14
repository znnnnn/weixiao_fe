import { Button, InputItem, List } from '@ant-design/react-native'
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

export interface State {
  phone: string
  password: string
  inputBorderColor: string
  passCanSee: boolean
}

export interface Props extends NavigationScreenProps {
  defalutProps: string
}

export default class Login extends React.Component<Props, State> {
  public state = {
    phone: '',
    password: '',
    inputBorderColor: '#EEEEEE',
    passCanSee: true
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
              maxLength={16}
              placeholder="密码"
              onFocus={() => this.inputItemFocus()}
              onBlur={() => this.inputItemBlur()}
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
                  <TouchableOpacity activeOpacity={0.5}>
                    <Text>忘记密码</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          </View>
          <Button type="primary" style={styles.loginBtn}>
            登录
          </Button>
          <View style={styles.actions}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => Linking.openURL('#')}>
              <Text>验证码快速登录</Text>
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate('首页')}>
            <Text style={styles.visitor}>我是游客</Text>
          </TouchableOpacity>
        </View>
      </View>
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
