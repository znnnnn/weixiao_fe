import {Button, InputItem, List} from '@ant-design/react-native'
import Icon from '@app/util/icon'
import px2dp from '@util/px2dp'
import StyleSheet from '@util/stylesheet'
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import {NavigationScreenProps} from 'react-navigation'

export interface State {
  password: string
  phone: string
  code: string
  inputBorderColor: string
  passCanSee: boolean
}

export interface Props extends NavigationScreenProps {
  defalutProps: string
}

export default class SetPwd extends React.Component <Props, State> {
  public state = {
    password: '',
    phone: '',
    code: '',
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
          <Text style={{fontSize: 35}}>设置登录密码</Text>
          <View style={styles.inputContainer}>
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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="faxian_"
                    style={{fontSize: 24, marginRight: 10}}
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
          <Button type="primary" style={styles.nextBtn}
                  onPress={() => this.props.navigation.navigate('完善资料')}>
            下一步
          </Button>
          <View style={styles.actions}>
            <Text style={{lineHeight: 20}}>
              密码由6-16位字母，数字，下划线组成，不包含空格，不能是9 位以下的纯数字
            </Text>
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
  nextBtn: {
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
