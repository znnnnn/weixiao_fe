import PostUserCard from '@components/home/PostUserCard'
import getTimeDiff from '@util/time'
import React, { Component } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import ImageViewer from 'react-native-image-zoom-viewer'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

export interface Props {
  modalVisible: boolean
  images: { url: string }[]
  initIndex: number
  onClick?: () => void
  onSwipeDown?: () => void
}

export default class ImageCard extends Component<Props> {
  private constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <Modal visible={this.props.modalVisible} transparent={true}>
        <ImageViewer
          imageUrls={this.props.images}
          // renderImage={}
          // renderHeader={() => (<Text style={{fontSize: 10, color: '#fff'}}>返回</Text>)}
          enableSwipeDown={true}
          onClick={this.props.onClick}
          onSwipeDown={this.props.onSwipeDown}
          index={this.props.initIndex}
        />
      </Modal>
    )
  }
}
