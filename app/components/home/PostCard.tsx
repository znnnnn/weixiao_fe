import Icon from '@app/util/icon'
import PostUserCard from '@components/home/PostUserCard'
import ImageCard from '@components/ImageCard'
import React, { Component } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

import { NavigationScreenProps, withNavigation } from 'react-navigation'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

export interface Props extends NavigationScreenProps {
  token: string
}
export interface State {
  modalVisible: boolean
  images: { url: string }[]
  initIndex: number
}

class PostCard extends Component<Props> {
  public state = {
    images: [
      { url: 'https://avatars2.githubusercontent.com/u/7970947' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }
    ],
    modalVisible: false,
    initIndex: 0
  }

  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <View
        style={{
          width: wp('100%'),
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: 10
        }}
      >
        <View
          style={{
            alignItems: 'flex-start',
            /*borderWidth: 1, borderColor: 'red',*/
            width: wp('90%')
          }}
        >
          <PostUserCard
            avatarUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
            nickname="Alice"
            tag="工程师"
            postTime={getTimeDiff(1356470770)}
            deviceName={deviceName}
          />
          <Text
            style={{ marginTop: 20, marginBottom: 20 }}
            onPress={() => this.props.navigation.navigate('微校正文')}
          >
            我爱编程我爱编程我爱编程我爱编程我爱编程！
          </Text>
          <View style={{ width: wp('90%'), alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              {this.state.images.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log(index)
                      this.setState({
                        modalVisible: true,
                        initIndex: index
                      })
                    }}
                    key={index}
                  >
                    <Image
                      source={{ uri: item.url }}
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

          <ImageCard
            modalVisible={this.state.modalVisible}
            images={this.state.images}
            initIndex={this.state.initIndex}
            onClick={() =>
              this.setState({
                modalVisible: !this.state.modalVisible
              })
            }
            onSwipeDown={() =>
              this.setState({
                modalVisible: !this.state.modalVisible
              })
            }
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: wp('100%'),
            justifyContent: 'space-around',
            marginTop: 10,
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0'
          }}
        >
          <TouchableOpacity>
            <View style={styles.actionButton}>
              <Icon name="fenxiang" style={styles.actions} onPress={() => console.log('QQ')} />
              <Text style={styles.actions}>666</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.actionButton}>
              <Icon name="pinglun" style={styles.actions} onPress={() => console.log('QQ')} />
              <Text style={styles.actions}>555</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.actionButton}>
              <Icon name="dianzan" style={styles.actions} onPress={() => console.log('QQ')} />
              <Text style={styles.actions}>333</Text>
            </View>
          </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(`${100 / 3}%`),
    height: 35
    // borderWidth: 1,
    // borderColor: 'red'
  },
  actions: {
    fontSize: 14,
    color: '#9E9E9E',
    // marginRight: 4,
    lineHeight: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  }
})

export default withNavigation(PostCard)
