import React from 'react';
import {
  Platform,
  Text,
  View,
  ScrollView,
  Linking,
  Image,
  TouchableOpacity
} from 'react-native'
import StyleSheet from '@util/stylesheet'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, InputItem, List } from '@ant-design/react-native';
import px2dp from '@util/px2dp'


export interface State {
  phone: string,
  password: string
  inputBorderColor: string
}

interface Props {
}


export default class SignIn extends React.Component<Props, State> {

  public readonly state: Readonly<State> = {
    phone: '',
    password: '',
    inputBorderColor: '#EEEEEE'
  }

  constructor(props: {}) {
    super(props);
  }

  inputItemFocus(): void {
    this.setState({
      inputBorderColor: '#29A1F7'
    })
  }

  inputItemBlur(): void {
    this.setState({
      inputBorderColor: '#EEEEEE'
    })
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={{ fontSize: 40 }}>微校</Text>
          <View style={styles.inputContainer}>
            <InputItem
              clear
              type="phone"
              value={this.state.phone}
              onChange={value => {
                this.setState({
                  phone: value,
                });
              }}
              editable={true}
              disabled={false}
              // autoFocus={true}
              placeholder="手机号"
              onFocus={() => this.inputItemFocus()}
              onBlur={() => this.inputItemBlur()}
              style={{ borderWidth: 0 }}
            >
            </InputItem>
            <InputItem
              clear
              type="password"
              value={this.state.password}
              onChange={value => {
                this.setState({
                  password: value,
                });
              }}
              placeholder="密码"
              onFocus={() => this.inputItemFocus()}
              onBlur={() => this.inputItemBlur()}
              style={{ borderBottomColor: this.state.inputBorderColor }}
            >
            </InputItem>
          </View>
          <Button type="primary" style={styles.loginBtn}>登录</Button>
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
    );
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: hp('100%'),
    position: 'relative'
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
    justifyContent: 'space-between',
  },
  visitor: {
    marginTop: 20,
    justifyContent: 'center',
    fontSize: 16,
    color: '#333',
    marginBottom: 20
  }
})