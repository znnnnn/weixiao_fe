import { Button, Checkbox, ImagePicker, InputItem, Radio } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import px2dp from '@util/px2dp'
import StyleSheet from '@util/stylesheet'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

const RadioItem = Radio.RadioItem
export interface State {
  nickName: string
  trueName: string
  inputBorderColor: string
  sex: boolean // true代表男, false代表女
  avatar: [{ url: 'string' }]
  avatarSelectable: boolean
}

export interface Props {
  defalutProps: string
}

export default class SetPwd extends React.Component /*<Props, State>*/ {
  public state = {
    nickName: '',
    trueName: '',
    inputBorderColor: '#EEEEEE',
    sex: true,
    avatar: [
      {
        url: 'https://oss.miaoroom.com/wp-content/uploads/avatars/3.jpg'
        // url: ''
      }
    ],
    avatarSelectable: true
  }

  // private constructor(props: {}) {
  //   super(props);
  // }

  public render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={{ fontSize: 35, marginBottom: 25 }}>完善资料</Text>
          <View style={styles.inputContainer}>
            <InputItem
              value={this.state.nickName}
              onChange={(value) => {
                this.setState({
                  nickName: value
                })
              }}
              maxLength={16}
              placeholder="昵称"
              // onFocus={() => this.inputItemFocus()}
              // onBlur={() => this.inputItemBlur()}
              extra={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <ImagePicker
                    files={this.state.avatar}
                    selectable={this.state.avatarSelectable}
                    onChange={() => {}}
                    // onImageClick={() => {}}
                    // onAddImageClick={() => {}}
                    getPhotos={() => {}}
                    onImageClick={() => {
                      if (this.state.avatar[0].url !== '') this.state.avatarSelectable = false
                    }}
                  />
                </View>
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <InputItem placeholder="真实姓名" clear />
          </View>
          <View style={styles.inputContainer}>
            <InputItem
              placeholder="性别"
              disabled
              style={{ backgroundColor: '#fff' }}
              extra={
                <View style={{ flexDirection: 'row' }}>
                  <Checkbox
                    checked={this.state.sex === true}
                    onChange={(event) => {
                      if (event.target.checked) {
                        this.setState({ sex: true })
                      }
                    }}
                  >
                    <Icon name="nan" style={{ color: '#29A1F7', fontSize: 20, marginRight: 10 }} />
                  </Checkbox>
                  <Checkbox
                    checked={this.state.sex === false}
                    onChange={(event) => {
                      if (event.target.checked) {
                        this.setState({ sex: false })
                      }
                    }}
                  >
                    <Icon
                      name="nvxingbiaoqian"
                      style={{ color: '#FF4D94', fontSize: 20, marginRight: 10 }}
                    />
                  </Checkbox>
                </View>
              }
            />
          </View>
          <Button type="primary" style={styles.nextBtn}>
            下一步
          </Button>
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
    // height: 140,
    width: wp('90%'),
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'blue',
    marginTop: 10,
    marginBottom: 10
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
