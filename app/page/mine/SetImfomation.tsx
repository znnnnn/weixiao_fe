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
import CameraButton from '@app/components/CameraButton'
import actions from '@store/action/Index'
import dataURLtoFile from '@util/base642Image'
import { connect, DispatchProp } from 'react-redux'

export interface State {
  nickName: string
  trueName: string
  inputBorderColor: string
  sex: boolean // true代表男, false代表女
  avatar: Array<string>
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
    avatar: []
  }

  public constructor(props: Props) {
    super(props)
  }

  public uploadAvtar(formData: any) {
    api.file.upload(formData).then((res) => {
      // console.log(res)
      this.setState(
        {
          avatar: this.state.avatar.concat(res.data.data)
        }
        // () => console.log(this.state.avatar)
      )
    })
  }

  public removeAvtar(index: number) {
    this.setState({
      avatar: this.state.avatar.splice(index + 1, 1)
    })
    // console.log(this.state.sex)
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
                <CameraButton
                  // style={styles.cameraBtn}
                  photos={this.state.avatar}
                  maxPhotoLength={1}
                  onFileUpload={this.uploadAvtar.bind(this)}
                  removeFileUpload={this.removeAvtar.bind(this)}
                />
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
                this.state.avatar.length !== 0 &&
                this.state.nickName !== '' &&
                this.state.trueName !== ''
              ) {
                this.props.handleSetInformation({
                  avatar: this.state.avatar[0],
                  nickName: this.state.nickName,
                  trueName: this.state.trueName,
                  sex: this.state.sex ? '1' : '0'
                })
                this.props.navigation.navigate('完善学历信息')
              } else {
                // console.log(this.props)
                Toast.show({
                  text: '信息未填写完整哦^_^',
                  type: 'danger',
                  position: 'top'
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
const mapStateToProps = (state: any) => {
  // console.log(state)
  return {
    ...state.HandleInformation
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
