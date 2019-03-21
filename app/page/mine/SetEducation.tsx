import { DatePicker, InputItem, List, Picker, Provider } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import { Button, Toast } from 'native-base'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'

import api from '@api/index'
import actions from '@store/action/Index'
import { Education } from '@store/action/mine/setEducation'
import { connect, DispatchProp } from 'react-redux'

const MAJOR_DATA = require('./SetEducationMajor.json')
const SCHOOL_DATA = require('./SetEducationSchool.json')
const EDU_DATA = require('./SetEducationEdu.json')

const data = require('./data.json')
// const data = [{
//   label: "温州职业技术学院",
//   value: "1"
// }, {
//   label: "温州大学",
//   value: "2"
// }
// ]

export interface Props extends NavigationScreenProps {
  handleSetEducation: Function
  setUsermeta: any
}

// const CustomChildren = (props: any) => (
//   <TouchableOpacity onPress={props.onPress}>
//     <View
//       style={{
//         backgroundColor: 'green',
//         height: 36,
//         width: 500,
//         paddingLeft: 15,
//         flexDirection: 'row',
//         alignItems: 'center'
//       }}
//     >
//       <Text style={{flex: 1}}>{props.children}</Text>
//       <Text style={{textAlign: 'right', color: '#888', marginRight: 15}}>{props.extra}</Text>
//     </View>
//   </TouchableOpacity>
// );

class SetEducation extends React.Component<Props> /*State*/ {
  public state = {
    // value: ["温州职业技术学院", "温州大学"]
    data: [],
    school: [],
    major: [],
    edu: [],
    value: [],
    // pickerValue: [],
    work: '',
    admission: undefined
  }

  // private constructor(props: {}) {
  //   super(props);
  // }

  public onPress = () => {
    setTimeout(() => {
      this.setState({
        data
      })
    }, 500)
  }

  public getText(data: any, state: any) {
    return `${data[Math.floor(Number(state[1]) / 10) - 1].label},${
      data[Math.floor(Number(state[1]) / 10) - 1].children[(Number(state[1]) % 10) - 1].label
    }`
  }

  public render() {
    return (
      <Provider>
        <View style={styles.root}>
          <View style={styles.container}>
            <Text style={{ fontSize: 35, marginBottom: 25 }}>完善学历信息</Text>
            <List style={{ height: hp('35%'), width: wp('90%') }}>
              <Picker
                data={SCHOOL_DATA}
                cols={1}
                value={this.state.school}
                onChange={(value) => {
                  this.setState({
                    school: value
                  })
                }}
              >
                <List.Item arrow="horizontal" onPress={this.onPress}>
                  学校
                </List.Item>
              </Picker>
              <Picker
                data={MAJOR_DATA}
                cols={2}
                value={this.state.major}
                onChange={(value) => {
                  this.setState({
                    major: value
                  })
                }}
              >
                <List.Item arrow="horizontal" /*onPress={this.onPress}*/>专业</List.Item>
              </Picker>
              <Picker
                data={EDU_DATA}
                cols={1}
                value={this.state.edu}
                onChange={(value) => {
                  this.setState({
                    edu: value
                  })
                }}
              >
                <List.Item arrow="horizontal" /*onPress={this.onPress}*/>学历</List.Item>
              </Picker>
              <DatePicker
                value={this.state.admission}
                mode="date"
                minDate={new Date(1960, 1, 1)}
                maxDate={new Date()}
                onChange={(value) => {
                  this.setState({
                    admission: value
                  })
                }}
                format="YYYY-MM-DD"
              >
                <List.Item arrow="horizontal">入学时间</List.Item>
              </DatePicker>
              <InputItem
                value={this.state.work}
                onChange={(value) => {
                  this.setState({
                    work: value
                  })
                }}
                clear
                // maxLength={16}
                style={{ paddingLeft: 30 }}
                // placeholder="昵称"
              >
                就业岗位
              </InputItem>
              {/*<Picker*/}
              {/*title="选择地区"*/}
              {/*data={district}*/}
              {/*cols={2}*/}
              {/*value={this.state.pickerValue}*/}
              {/*onChange={(v: any) => this.setState({pickerValue: v})}*/}
              {/*onOk={(v: any) => this.setState({pickerValue: v})}*/}
              {/*>*/}
              {/*<CustomChildren>Customized children</CustomChildren>*/}
              {/*</Picker>*/}
            </List>
            <Button
              block
              onPress={() => {
                // console.log('props', this.props)
                // console.log(
                //   Math.floor(Number(this.state.major[1]) / 10),
                //   Number(this.state.major[1]) % 10
                // )
                if (
                  this.state.school !== [] &&
                  this.state.major !== [] &&
                  this.state.edu !== [] &&
                  this.state.admission !== undefined &&
                  this.state.work !== ''
                ) {
                  let schoolText = SCHOOL_DATA[Number(this.state.school[0]) - 1].label
                  let majorText = this.getText(MAJOR_DATA, this.state.major)
                  let eduText = EDU_DATA[Number(this.state.edu[0]) - 1].label
                  let admissionText = this.state.admission
                  this.props.handleSetEducation({
                    admission: admissionText,
                    education: eduText,
                    major: majorText,
                    school: schoolText,
                    job: this.state.work
                  })

                  setTimeout(() => {
                    console.log('props', this.props)
                    api.setUsermeta.setUsermeta(this.props.setUsermeta)
                  }, 1000)
                  this.props.navigation.navigate('登录')
                } else {
                  Toast.show({
                    text: '信息未填写完整哦^_^',
                    type: 'danger'
                  })
                }
              }}
            >
              <Text style={{ color: '#fff' }}>完成</Text>
            </Button>
          </View>
        </View>
      </Provider>
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
    // backgroundColor: 'red'
  },
  nextBtn: {
    borderRadius: 20,
    width: wp('80'),
    marginTop: 20
  }
})

// 获取store中的state，并传入容器组件的Props中
const mapStateToProps = (state: any) => {
  console.log(state)
  console.log(state.HandleSetEducation)
  return {
    setUsermeta: {...state.HandleSetEducation.education, ...state.handleRegister, ...state.handleSetInformation.information, ...state.handleSetPwd}
    // ...state.HandleSetEducation,
    // setUsermeta:{...state.}
  }
}

// 将本发送action的函数绑定到容器组件的Props中
// 发送行为
let handleSetEducation = actions.setEducation.handleSetEducation
const mapDispatchToProps = {
  handleSetEducation
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetEducation)
