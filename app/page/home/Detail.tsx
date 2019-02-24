import { Button, InputItem, List, Provider, Toast } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import Avatar from '@components/home/Avatar'
import PostUserCard from '@components/home/PostUserCard'

import px2dp from '@util/px2dp'

import PostCard from '@app/components/home/PostCard'
import StyleSheet from '@util/stylesheet'
import React from 'react'
import {
  Alert,
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'

import getTimeDiff from '@util/time'

import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

export interface State {
  phone: string
  password: string
  inputBorderColor: string
  passCanSee: boolean
}

export interface Props extends NavigationScreenProps {
  defalutProps: string
  token: string
}

export default class PostCardDetail extends React.Component<Props, State> {
  public state: State = {
    phone: '',
    password: '',
    inputBorderColor: '#EEEEEE',
    passCanSee: true
  }

  public constructor(props: Props) {
    super(props)
    // console.log(this.props.token)
  }

  public componentDidMount() {}

  public render() {
    return (
      <Provider>
        <View style={styles.root}>
          <View style={{ flex: 1, background: '#fff' }}>
            <View style={{ alignItems: 'flex-start', width: wp('90%'), background: '#fff' }}>
              <PostUserCard
                avatarUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
                nickname="Alice"
                tag="工程师"
                postTime={getTimeDiff(1356470770)}
                deviceName={deviceName}
              />
            </View>
          </View>
        </View>
      </Provider>
    )
  }

  private inputItemFocus(): void {
    this.setState({
      inputBorderColor: '#29A1F7'
    })
  }

  private inputItemBlur(): void {
    this.setState({
      inputBorderColor: '#EEEEEE'
    })
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    height: hp('100%')
  }
})
