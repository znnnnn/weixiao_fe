// import StyleSheet from '@util/stylesheet'
import { string } from 'prop-types'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

// console.log(model)

export interface Props extends NavigationScreenProps {
  // avatarUri: string
  // nickname: string
  // tag: string
  postTime: string
  deviceName: string
  usermeta: any
}

class PostUserCard extends Component<Props> {
  public constructor(props: Props) {
    super(props)
    // console.log(11111)
    // console.log(this.props.uri)
  }

  public render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('用户中心', {
            usermeta: this.props.usermeta
          })
        }
        activeOpacity={0.7}
        style={{ alignItems: 'center', flexDirection: 'row' }}
      >
        <Image
          source={{
            uri: this.props.usermeta.avatar
          }}
          style={{ width: 35, height: 35, borderRadius: 17.5 }}
        />
        <View style={{ marginLeft: 5, marginTop: 3 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text>{this.props.usermeta.nickname}</Text>
            <Text style={styles.tag}>{this.props.usermeta.job}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 3 }}>
            <Text style={[styles.postFrom, { marginRight: 5 }]}>{this.props.postTime}</Text>
            <Text style={styles.postFrom}>来自 {this.props.deviceName}</Text>
          </View>
        </View>
      </TouchableOpacity>
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

export default withNavigation(PostUserCard)
