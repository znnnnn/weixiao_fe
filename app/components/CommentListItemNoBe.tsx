// import StyleSheet from '@util/stylesheet'
import Icon from '@app/util/icon'
import { string } from 'prop-types'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

// console.log(model)

export interface Props {
  avatarUri: string
  nickname: string
  tag: string
  postTime: string
  deviceName: string
}

class CommentListNoBe extends Component<Props> {
  private constructor(props: Props) {
    super(props)
    // console.log(11111)
    // console.log(this.props.uri)
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
        <Image
          source={{
            uri: this.props.avatarUri
          }}
          style={{ width: 35, height: 35, borderRadius: 17.5, marginTop: 5 }}
        />
        <View style={{ marginLeft: 5, marginTop: 3, flex: 9 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text>{this.props.nickname}</Text>
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
            希望能为自己的母校公益尽一份自己的绵薄之力。
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={[styles.postFrom, { marginRight: 5 }]}>{this.props.postTime}</Text>
              {/* <Text style={styles.postFrom}>来自 {this.props.deviceName}</Text> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flex: 1
                // borderWidth: 1,
                // borderColor: 'red'
                // marginTop: 10
                // borderTopWidth: 1,
                // borderTopColor: '#f0f0f0'
              }}
            >
              <TouchableOpacity>
                <View style={styles.actionButton}>
                  <Icon
                    name="fenxiang"
                    style={[styles.actions, { marginTop: 1 }]}
                  />
                  <Text style={styles.actions}>0</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.actionButton}>
                  <Icon
                    name="pinglun"
                    style={[styles.actions, { marginTop: 2 }]}
                  />
                  <Text style={styles.actions}>0</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.actionButton}>
                  <Icon
                    name="dianzan"
                    style={[styles.actions, { marginTop: 1 }]}
                  />
                  <Text style={styles.actions}>0</Text>
                </View>
              </TouchableOpacity>
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

export default CommentListNoBe