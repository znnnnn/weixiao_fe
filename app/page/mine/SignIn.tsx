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
import { Button, InputItem } from '@ant-design/react-native';
import px2dp from '@util/px2dp'


export interface State {
  name: string,
  password: string
}

interface Props {
}


export default class SignIn extends React.Component<Props, State> {

  public readonly state: Readonly<State> = {
    name: '',
    password: ''
  }

  constructor(props: {}) {
    super(props);
  }

  // inputItemFocus():void{
  // }

  render() {
    return (
      <View style={styles.root}>
        <Text style={{ fontSize: 40 }}>微校</Text>
        <View style={styles.inputContainer}>
          <InputItem
            clear
            type="phone"
            value={this.state.name}
            onChange={value => {
              this.setState({
                name: value,
              });
            }}
            editable={true}
            disabled={false}
            placeholder="手机号"
            // onFocus={this.styles}
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
        <View style={styles.socialContainer}>
          <View style={styles.social}>
            <Text>QQ</Text>
            <Text>微信</Text>
            <Text>微博</Text>
          </View>
        </View>
        <Text style={{ justifyContent: 'center', fontSize: 16, color: '#333' }}>我是游客</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    marginTop: hp('10%'),
    alignItems: 'center',
    width: wp('90%')
  },
  inputContainer: {
    height: 140,
    width: wp('90%'),
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'blue',
    marginTop: 20
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
  socialContainer: {
    paddingTop: 200,
    backgroundColor: '#eee'
  },
  social: {
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})