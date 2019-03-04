import { Button, DatePicker, InputItem, List, Picker, Provider } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'

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
  defalutProps: string
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

export default class SetEducation extends React.Component<Props> /*State*/ {
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
              type="primary"
              style={styles.nextBtn}
              onPress={() => this.props.navigation.navigate('登录')}
            >
              下一步
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
