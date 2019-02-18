// import StyleSheet from '@util/stylesheet'
import {string} from 'prop-types'
import React, {Component} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import DeviceInfo from 'react-native-device-info'

const device = {
  DeviceID: string
}

console.log(DeviceInfo.getDeviceId())

export interface Props {
  uri: string
  nickname: string
  time: undefined
}

class PostUserCard extends Component<Props> {
  private constructor(props: Props) {
    super(props)
    // console.log(11111)
    // console.log(this.props.uri)
  }

  public render() {
    return (
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          }}
          style={{width: 35, height: 35, borderRadius: 17.5}}
        />
        <View style={{marginLeft: 5, marginTop: 3}}>
          <View style={{flexDirection: 'row'}}>
            <Text>Alice</Text>
            <Text style={styles.tag}>工程师</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 3}}>
            <Text style={styles.postFrom}>昨天 12：32</Text>
            <Text style={styles.postFrom}>来自 iPhone7</Text>
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
  }
})

export default PostUserCard
