import { SearchBar } from '@ant-design/react-native'
import { Body, CardItem, Container, Content, Left } from 'native-base'
import React from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { Button, Card, Icon, ListItem } from 'react-native-elements'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

// import Icon from '@app/util/icon'
import BottomTab from '@components/find/BottomTab'
import IconTab from '@components/find/IconTab'
import PostUserCard from '@components/home/PostUserCard'
import StyleSheet from '@util/stylesheet'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

export interface State {
  // phone: string
  // password: string
  // inputBorderColor: string
  // passCanSee: boolean
  searchValue: string
}



export interface Props {
  defalutProps: string
}

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
]
export default class Find extends React.Component<State> /*<Props, State>*/ {
  public state: State = {
    searchValue: ''
  }

  // private constructor(props: {}) {
  //   super(props);
  // }

  public render() {
    return (
      <Container style={styles.root}>
          <View>
            <View style={{width:wp('100%'), padding:wp('2%'),marginTop: 10}}>
              <PostUserCard
                avatarUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
                nickname="Alice"
                tag="工程师"
                postTime={getTimeDiff(1356470770)}
                deviceName={deviceName}
              />
            </View>
          <Card
            // title='HELLO WORLD'
            image={require('@image/find/Detail/food.png')}
          >
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component structure than actual
              design.
            </Text>
          </Card>
          </View>
          <View>
            <View style={{width:wp('100%'), padding:wp('2%')}}>
              <PostUserCard
                avatarUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
                nickname="Alice"
                tag="工程师"
                postTime={getTimeDiff(1356470770)}
                deviceName={deviceName}
              />
            </View>
          <Card
            // title='HELLO WORLD'
            image={require('@image/find/Detail/food.png')}
          >
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component structure than actual
              design.
            </Text>
          </Card>
          </View>
      </Container>
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
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: 'red',
    height: hp('100%'),
    flex: 1,
    paddingTop: 20
  },
  container: {
    marginTop: hp('10%'),
    alignItems: 'center'
  },
  inputContainer: {
    height: 140,
    width: wp('90%'),
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'blue',
    marginTop: 10
  },
  passwd: {
    borderBottomColor: 'red'
  },
  loginBtn: {
    borderRadius: 20,
    width: wp('80'),
    marginTop: 20
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 20,
    fontSize: 10
  },
  socialLogin: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  social: {
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  visitor: {
    marginTop: 20,
    justifyContent: 'center',
    fontSize: 16,
    color: '#333',
    marginBottom: 20
  }
})
