import { Provider, Tabs } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import Avatar from '@components/home/Avatar'
import PostUserCard from '@components/home/PostUserCard'

// import Video from 'react-native-video'

import React from 'react'
import { Alert, Image, Linking, Platform, Text, TouchableOpacity, View } from 'react-native'
// import Video from 'react-native-af-video-player'
import Video, { Container, ScrollView } from 'react-native-af-video-player'
import Orientation from 'react-native-orientation'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
// import VideoPlayer from 'react-native-video-controls'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'

import PostCard from '@app/components/home/PostCard'
import Comment from '@components/Comment'
import px2dp from '@util/px2dp'
import StyleSheet from '@util/stylesheet'
import VideoPlayerScreen from './VideoPlayerScreen'

const deviceName = DeviceInfo.getDeviceName()

export interface State {
  videoWidth: number
  videoHeight: number
  isFullScreen: boolean
}

export interface Props extends NavigationScreenProps {
  defalutProps: string
  token: string
}

export default class SingPost extends React.Component<Props, State> {
  public static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    // Setup the header and tabBarVisible status
    const header = state.params && (state.params.fullscreen ? undefined : null)
    const tabBarVisible = state.params ? state.params.fullscreen : true
    return {
      // For stack navigators, you can hide the header bar like so
      header,
      // For the tab navigators, you can hide the tab bar like so
      tabBarVisible
    }
  }
  public state: State = {
    videoWidth: 40,
    videoHeight: 40,
    isFullScreen: false
  }

  public constructor(props: Props) {
    super(props)
    // console.log(this.props.token)
  }

  public onFullScreen(status) {
    // Set the params to pass in fullscreen status to navigationOptions
    this.props.navigation.setParams({
      fullscreen: !status
    })
  }

  public componentDidMount() {}

  public render() {
    return (
      <Provider>
        <ScrollView style={styles.root}>
          <View
            style={{
              flex: 1,
              width: wp('100%'),
              backgroundColor: '#fff',
              // borderColor: 'red',
              // borderWidth: 1,
              alignItems: 'center'
            }}
          >
            <View style={{ alignItems: 'flex-start', width: wp('90%'), marginTop: 15 }}>
              <PostUserCard
                avatarUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
                nickname="Alice"
                tag="工程师"
                postTime={getTimeDiff(1356470770)}
                deviceName={deviceName}
              />
            </View>
            <Text style={{ width: wp('90%'), marginTop: 15, lineHeight: 18 }}>
              我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程我爱编程。
            </Text>
          </View>
          <Container
            style={{
              flex: 1,
              width: wp('100%'),
              // borderWidth: 1,
              // borderColor: 'red',
              backgroundColor: '#fff',
              paddingLeft: wp('5%'),
              paddingTop: 15
            }}
          >
            <Video
              // autoPlay
              url={'http://111.231.116.130/wp-content/uploads/2019/02/1551058086154076.mp4'}
              // title={title}
              // logo={logo}
              // placeholder={placeholder}
              // onMorePress={() => this.onMorePress()}
              resizeMode="contain"
              rotateToFullScreen={true}
              onFullScreen={(status) => this.onFullScreen(status)}
              // fullScreenOnly
              style={{
                height: 150,
                borderRadius: 10,
                width: wp('90%'),
                overflow: 'hidden'
              }}
            />
          </Container>
          <View style={styles.shareText}>
            <Text style={{ color: '#CCCCCC', fontSize: 14, lineHeight: 24 }}>分享到</Text>
            <Icon
              name="weixin"
              style={[styles.shareIcon, { color: '#50B674' }]}
              onPress={() => console.log('weibo')}
            />
            <Icon
              name="pengyouquan"
              style={[styles.shareIcon, { color: '#50B674' }]}
              onPress={() => console.log('weibo')}
            />
            <Icon
              name="kongjian"
              style={[styles.shareIcon, { color: '#F7D11E' }]}
              onPress={() => console.log('weibo')}
            />
            <Icon
              name="qq"
              style={[styles.shareIcon, { color: '#5EAADE' }]}
              onPress={() => console.log('weibo')}
            />
          </View>
          <Comment />
        </ScrollView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    // alignItems: 'center',
    backgroundColor: '#EEEEEE',
    flex: 1,
    height: hp('100%')
    // width: wp('100%')
  },
  shareText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('100%'),
    backgroundColor: '#fff',
    lineHeight: 24,
    paddingLeft: wp('10%'),
    paddingRight: wp('10%'),
    paddingTop: 10,
    paddingBottom: 10
  },
  shareIcon: {
    fontSize: 24
  }
})