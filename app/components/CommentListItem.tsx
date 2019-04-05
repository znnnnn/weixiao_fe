// import StyleSheet from '@util/stylesheet'
import Icon from '@app/util/icon'
import { Toast } from 'native-base'
import { string } from 'prop-types'
import React, { Component } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { connect } from 'react-redux'

import api from '@app/api'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

// console.log(model)

export interface Props extends NavigationScreenProps {
  avatarUri: string
  nickname: string
  tag: string
  postTime: string
  deviceName?: string
  commentContent: string
  usermeta: any
  myUsermeta?: any
  commentId: number
  fresh: Function
}

class CommentList extends Component<Props> {
  public constructor(props: Props) {
    super(props)
    // console.log(this.props.myUsermeta)
  }

  public render() {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
          flex: 1,
          padding: 5,
          paddingLeft: wp('5%'),
          paddingRight: wp('5%'),
          borderBottomWidth: 1,
          borderBottomColor: '#EEEEEE'
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            this.props.navigation.navigate('用户中心', {
              usermeta: this.props.usermeta
            })
          }
        >
          <Image
            source={{
              uri: this.props.avatarUri
            }}
            style={{ width: 35, height: 35, borderRadius: 17.5, marginTop: 5 }}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 5, marginTop: 3, flex: 9 }}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                this.props.navigation.navigate('用户中心', {
                  usermeta: this.props.usermeta
                })
              }
            >
              <Text>{this.props.nickname}</Text>
            </TouchableOpacity>
            <Text style={styles.tag}>{this.props.tag}</Text>
          </View>
          <Text
            style={{
              lineHeight: 20,
              color: '#3E3E3E',
              fontSize: 16,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            {this.props.commentContent}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={[styles.postFrom, { marginRight: 5 }]}>{this.props.postTime}</Text>
              {/* <Text style={styles.postFrom}>来自 {this.props.deviceName}</Text> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                flex: 1
                // borderWidth: 1,
                // borderColor: 'red'
                // marginTop: 10
                // borderTopWidth: 1,
                // borderTopColor: '#f0f0f0'
              }}
            >
              {this.props.usermeta.userId === this.props.myUsermeta.userId && (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    Alert.alert('提示', '确认删除吗', [
                      { text: '取消' },
                      {
                        text: '确认',
                        onPress: () =>
                          api.comment
                            .delete(this.props.commentId)
                            .then((res) => {
                              console.log(res)
                              setTimeout(this.props.fresh(), 500)
                            })
                            .then(() =>
                              Toast.show({
                                text: '删除成功',
                                type: 'success'
                              })
                            )
                      }
                    ])
                  }
                >
                  <View style={styles.actionButton}>
                    <Text style={{ color: 'red', fontSize: 14 }}>删除</Text>
                  </View>
                </TouchableOpacity>
              )}
              {/* <TouchableOpacity>
                <View style={styles.actionButton}>
                  <Icon
                    name="fenxiang"
                    style={[styles.actions, { marginTop: 1 }]}
                    onPress={() => console.log('QQ')}
                  />
                  <Text style={styles.actions}>666</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.actionButton}>
                  <Icon
                    name="pinglun"
                    style={[styles.actions, { marginTop: 2 }]}
                    onPress={() => console.log('QQ')}
                  />
                  <Text style={styles.actions}>555</Text>
                </View>
              </TouchableOpacity> */}
              {/* <TouchableOpacity>
                <View style={styles.actionButton}>
                  <Icon
                    name="dianzan"
                    style={[styles.actions, { marginTop: 1 }]}
                    onPress={() => console.log('QQ')}
                  />
                  <Text style={styles.actions}>333</Text>
                </View>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tag: {
    borderWidth: 1,
    borderColor: '#707070',
    fontSize: 10,
    lineHeight: 14,
    borderRadius: 4,
    paddingLeft: 2,
    paddingRight: 2,
    color: '#9E9E9E',
    marginLeft: 4
  },
  postFrom: {
    fontSize: 10,
    color: '#9E9E9E'
  },
  actionButton: {
    flexDirection: 'row'
    // alignItems: 'center',
    // justifyContent: 'center'
    // width: wp(`${100 / 3}%`),
    // height: 35
    // borderWidth: 1,
    // borderColor: 'red'
  },
  actions: {
    fontSize: 12,
    color: '#9E9E9E',
    // marginRight: 4,
    // lineHeight: 14,
    // justifyContent: 'center'
    // alignItems: 'center'
    marginLeft: 5
  }
})

const mapStateToProps = (state: any): Object => {
  return {
    // 获取 state 变化
    myUsermeta: state.HandleMyUsermeta.myUsermeta
  }
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps
  // mapDispatchToProps
)(withNavigation(CommentList))
