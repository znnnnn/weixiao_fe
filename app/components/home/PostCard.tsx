import PostUserCard from '@components/home/PostUserCard'
import getTimeDiff from '@util/time'
import React, {Component} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Modal} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import ImageViewer from 'react-native-image-zoom-viewer'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
// console.log(model)

const deviceName = DeviceInfo.getDeviceName()

export interface Props {
}

const images = [
  {
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
      // headers: ...
      headers: 1111111111111111111
    }
  },
  {
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
      // headers: ...
      headers: 1111111111111111111
    }
  }
]

class PostCard extends Component<Props> {
  public state = {
    modalVisible: false,
    thumbUrl: [
      'https://avatars2.githubusercontent.com/u/7970947',
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    ],
    initIndex: 0
  }

  private constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <View
        style={{alignItems: 'flex-start', borderWidth: 1, borderColor: 'red', width: wp('90%')}}
      >
        <PostUserCard
          avatarUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
          nickname="Alice"
          tag="工程师"
          postTime={getTimeDiff(1356470770)}
          deviceName={deviceName}
        />
        <Text style={{marginTop: 20, marginBottom: 20}}>我爱编程我爱编程我爱编程我爱编程我爱编程！</Text>
        <View style={{width: wp('90%'), alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            {this.state.thumbUrl.map((item, index) => {
              // console.log(item)
              return (
                <TouchableOpacity onPress={(index) => {
                  this.setState({
                    modalVisible: true,
                    index: index
                  })
                }}>
                  <Image
                    source={{uri: item}}
                    key={index}
                    style={{
                      width: 110,
                      height: 110,
                      marginRight: (wp('90%') - 330) / 12,
                      marginLeft: (wp('90%') - 330) / 12
                    }}
                  />
                </TouchableOpacity>
              )
            })}
          </View>
        </View>

        <Modal visible={this.state.modalVisible} transparent={true}>
          <ImageViewer
            imageUrls={images}
            // renderImage={}
            // renderHeader={() => (<Text style={{fontSize: 10, color: '#fff'}}>返回</Text>)}
            onClick={() =>
              this.setState({
                modalVisible: false
              })
            }
            enableSwipeDown={true}
            onSwipeDown={() =>
              this.setState({
                modalVisible: false
              })
            }
            index={this.state.initIndex}
          />
        </Modal>
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

export default PostCard
