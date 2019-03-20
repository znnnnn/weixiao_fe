import { Checkbox, ImagePicker, InputItem, Radio } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import px2dp from '@util/px2dp'
import _ from 'lodash'
import { Button, Toast } from 'native-base'
// import StyleSheet from '@util/stylesheet'
import React from 'react'
import { Image, NativeModules, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'

import api from '@api/index'
import actions from '@store/action/Index'
import dataURLtoFile from '@util/base642Image'
import { connect, DispatchProp } from 'react-redux'

export interface State {
  nickName: string
  trueName: string
  inputBorderColor: string
  sex: boolean // true代表男, false代表女
  avatar: { url: string; id: string }[]
  avatarSelectable: boolean
  avatarbase64: string
}

export interface Props extends NavigationScreenProps {
  handleSetInformation: Function
}

class SetInformation extends React.Component<Props, State> {
  public state = {
    nickName: '',
    trueName: '',
    inputBorderColor: '#EEEEEE',
    sex: true,
    avatar: [
      // {
      //   url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
      //   id: '2121',
      // }
    ],
    avatarSelectable: true,
    avatarbase64: ''
  }

  public constructor(props: Props) {
    super(props)
  }

  public handleFileChange = (avatar: any) => {
    console.log(avatar)
    this.setState(
      {
        avatar
      },
      () => {
        // console.log(this.state.avatar.length === 0);
        this.state.avatar.length === 0
          ? (this.state.avatarSelectable = true)
          : (this.state.avatarSelectable = false)
        // 强制刷新组件
        this.forceUpdate()
      }
    )
    NativeModules.ReadImageData.readImage(avatar[0].url, (image: any) => {
      // console.log(`data:image/png;base64,${image}`)
      this.setState({
        avatarbase64: `data:image/png;base64,${image}`
      })
      // console.log(JSON.stringify({ file: image }))
      api.file.upload(JSON.stringify({ file: image }))
    })
    // let formdata = new FormData()
    // let uri = avatar[0].url
    // formdata.append('file', { type: 'multipart/form-data', name: 'a.jpg', uri, })
    // // console.log(avatar[0].url)
    // // console.log(data)
    // api.file.upload(formdata)
    // console.log(avatar)
  }

  public render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={{ fontSize: 35, marginBottom: 80 }}>完善资料</Text>
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
                  {/* <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={{width: 125, height: 125}} /> */}
                  <ImagePicker
                    files={this.state.avatar}
                    selectable={this.state.avatarSelectable}
                    onChange={this.handleFileChange}
                  />
                </View>
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <InputItem
              placeholder="真实姓名"
              clear
              onChange={(value) => {
                this.setState({
                  trueName: value
                })
              }}
            />
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
          <Button
            block
            onPress={() => {
              if (
                this.state.avatarbase64 !== '' &&
                this.state.nickName !== '' &&
                this.state.trueName !== ''
              ) {
                this.props.handleSetInformation({
                  information: {
                    avatarbase64: this.state.avatarbase64,
                    nickName: this.state.nickName,
                    trueName: this.state.trueName,
                    sex: this.state.sex
                  }
                })
                this.props.navigation.navigate('完善学历信息')
              } else {
                Toast.show({
                  text: '信息未填写完整哦^_^',
                  type: 'danger'
                })
              }
            }}
          >
            <Text style={{ color: '#fff' }}>下一步</Text>
          </Button>
        </View>
      </View>
    )
  }
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

// 获取store中的state，并传入容器组件的Props中
const mapStateToProps = (state: any): Object => {
  // console.log(state)
  console.log(state)
  return {
    // 获取 state 变化
    information: {
      avatarbase64: state.handleSetInformation.avatarbase64,
      nickName: state.handleSetInformation.nickName,
      trueName: state.handleSetInformation.trueName,
      sex: state.handleSetInformation.sex
    }
  }
}

// 将本发送action的函数绑定到容器组件的Props中
// 发送行为
let handleSetInformation = actions.setInformation.handleSetInformation
const mapDispatchToProps = {
  handleSetInformation
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetInformation)
