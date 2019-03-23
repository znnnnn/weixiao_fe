import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

export interface Props extends NavigationScreenProps {
  usermeta: any
}

class Avatar extends Component<Props> {
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
      >
        <View
          style={{ alignItems: 'center', backgroundColor: '#fff', marginLeft: 5, marginRight: 5 }}
        >
          {/* <Image source={require(this.props.uri)} /> */}
          <Image
            source={{ uri: this.props.usermeta.avatar }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={{ color: '#636060', fontSize: 12, margin: 5 }}>
            {this.props.usermeta.nickname}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(Avatar)
