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

import api from '@api/index'

import { ListItem } from 'native-base'

import { NavigationScreenProps, withNavigation } from 'react-navigation'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

export interface State {
  modalVisible: boolean
  images: { url: string }[]
  initIndex: number
}

interface Props extends NavigationScreenProps {
  postsItemData: any
}
class PostCard extends Component<Props> {
  public state = {
    images: [
      // {
      //   url: 'https://oss.miaoroom.com/weixiao/2019/3/29/4DBFCE27F33C44FA8B2F54A8535FE033.JPG?Expires=1869204625&OSSAccessKeyId=LTAICq734h6sfksn&Signature=WuudwCIJllIzstA8NWkLMFq5KFc%3D'
      // }
      // { url: 'https://ws2.sinaimg.cn/large/0069wGDkly1fypt7tqu36j30u0190u11.jpg' },
      // { url: 'https://ws4.sinaimg.cn/large/0069wGDkly1fypu1pvnxmj30qo0hswhv.jpg' }
    ],
    modalVisible: false,
    initIndex: 0
  }

  public constructor(props: Props) {
    super(props)
    // console.log(this.props.postsItemData)
    // api.usermeta.getUsermetaByUserId(this.props.postsItemData.postAuthor).then(
    //   res => console.log('用户信息：',res.data.data)
    // )
  }

  public componentWillMount() {
    // console.log(this.state.images)
    if (this.props.postsItemData.postImage !== null) {
      JSON.parse(this.props.postsItemData.postImage).map((item: string) => {
        this.state.images.push({ url: item })
        this.setState({
          images: this.state.images
        })
      })
    }

    /**
     * 文章数据通过react navigation传递
     */
    // this.props.navigation.setParams({ postsItemData: this.props.postsItemData })
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
          {
            <PostUserCard
              avatarUri={this.props.postsItemData.usermeta.avatar}
              nickname={this.props.postsItemData.usermeta.nickname}
              tag={this.props.postsItemData.usermeta.job}
              postTime={getTimeDiff(this.props.postsItemData.postDate)}
              deviceName={this.props.postsItemData.postAuthorDevice}
            />
          }
          <Text
            style={{ marginTop: 20, marginBottom: 20 }}
            onPress={() =>
              this.props.navigation.navigate('微校正文', {
                postsItemData: this.props.postsItemData
              })
            }
          >
            {this.props.postsItemData.postContent}
          </Text>
          <View style={{ width: wp('90%'), alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              {/* {this.props.postsItemData.postImage.map((item, index) => { */}
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
              <Text style={styles.actions}>
                {this.props.postsItemData.commentsUsermetaDTOList.length}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.actionButton}>
              <Icon name="dianzan" style={styles.actions} onPress={() => console.log('QQ')} />
              <Text style={styles.actions}>{this.props.postsItemData.upvoteList.length}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: wp('100%'),
            height: 15,
            backgroundColor: '#f4f4f4',
            borderTopWidth: 1,
            borderTopColor: '#e5e5e5'
          }}
        />
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
