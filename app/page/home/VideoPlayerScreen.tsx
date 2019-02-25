import React, { Component } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Video, { Container, ScrollView } from 'react-native-af-video-player'

import { NavigationScreenProps, withNavigation } from 'react-navigation'

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoContainer: {
    margin: 10
  }
})

export interface Props extends NavigationScreenProps {
  defalutProps: string
  token: string
}

class VideoPlayerScreen extends Component<Props> {
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

  public constructor(props: Props) {
    super(props)
  }

  public onFullScreen(status) {
    // Set the params to pass in fullscreen status to navigationOptions
    this.props.navigation.setParams({
      fullscreen: !status
    })
  }

  // public onMorePress() {
  //   Alert.alert('Boom', 'This is an action call!', [{ text: 'Aw yeah!' }])
  // }

  public render() {
    const url = 'http://111.231.116.130/wp-content/uploads/2019/02/1551058086154076.mp4'
    const logo = 'http://111.231.116.130/wp-content/uploads/2019/02/bd_logo1.png'
    const placeholder =
      'http://111.231.116.130/wp-content/uploads/2019/02/googlelogo_color_272x92dp.png'
    const title = 'My video title'
    return (
      <ScrollView style={styles.container}>
        <Text>Some content above</Text>

        <Container style={styles.videoContainer}>
          <Video
            autoPlay
            url={url}
            title={title}
            logo={logo}
            placeholder={logo}
            rotateToFullScreen
          />
        </Container>

        {/* Or use without the Container */}
        <Video autoPlay url={url} title={title} logo={logo} placeholder={logo} rotateToFullScreen />

        <Text>Some content below</Text>
      </ScrollView>
    )
  }
}

export default withNavigation(VideoPlayerScreen)
