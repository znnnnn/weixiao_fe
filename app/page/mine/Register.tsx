import { Button, InputItem, List } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import px2dp from '@util/px2dp'
import StyleSheet from '@util/stylesheet'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'

export interface State {
  phone: string
  code: string
  inputBorderColor: string
}

export interface Props extends NavigationScreenProps {
  defalutProps: string
}

export default class Register extends React.Component<Props, State> {
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
              maxLength={6}
              placeholder="验证码"
              // onFocus={() => this.inputItemFocus()}
              // onBlur={() => this.inputItemBlur()}
              extra={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Text>获取验证码</Text>
                  </TouchableOpacity>
                </View>
              }
            />
          </View>
          <Button
            type="primary"
            style={styles.RegisterBtn}
            onPress={() => this.props.navigation.navigate('设置密码')}
          >
            下一步
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
