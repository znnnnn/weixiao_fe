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

export interface State {
  phone: string
  code: string
  inputBorderColor: string
  passCanSee: boolean
}

export interface Props {
  defalutProps: string
}

export default class Register extends React.Component /*<Props, State>*/ {
  public state = {
    phone: '',
    code: '',
    inputBorderColor: '#EEEEEE'
  }

  // private constructor(props: {}) {
  //   super(props);
  // }

  public render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={{ fontSize: 40 }}>注册</Text>
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
              value={this.state.code}
              onChange={(value) => {
                this.setState({
                  code: value
                })
              }}
              maxLength={6}
              placeholder="验证码"
              onFocus={() => this.inputItemFocus()}
              onBlur={() => this.inputItemBlur()}
              extra={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity activeOpacity={1 / 2}>
                    <Text>获取验证码</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          </View>
          <Button type="primary" style={styles.RegisterBtn}>
            下一步
          </Button>
          <View style={styles.actions}>
            <Text>
              注册登录即表明你同意<TouchableOpacity>《微校服务使用协议》</TouchableOpacity>及
              <TouchableOpacity>《微校隐私政策》</TouchableOpacity>中的全部内容
            </Text>
          </View>
        </View>
        <View style={styles.socialRegister}>
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
          <Text style={styles.visitor}>我是游客</Text>
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
  RegisterBtn: {
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
  socialRegister: {
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
