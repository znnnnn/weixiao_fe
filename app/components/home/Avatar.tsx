import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export interface Props {
  uri: string
}

class Avatar extends Component<Props> {
  private constructor(props: Props) {
    super(props)
    // console.log(11111)
    // console.log(this.props.uri)
  }

  public render() {
    return (
      <View
        style={{ alignItems: 'center', backgroundColor: '#fff', marginLeft: 5, marginRight: 5 }}
      >
        {/* <Image source={require(this.props.uri)} /> */}
        <Image
          source={{ uri: this.props.uri }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <Text style={{ color: '#636060', fontSize: 12, margin: 5 }}>11111</Text>
      </View>
    )
  }
}

export default Avatar
