import { SearchBar } from '@ant-design/react-native'
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Thumbnail
} from 'native-base'
import React from 'react'
import { Alert, Image, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'

// import Icon from '@app/util/icon'
import BottomTab from '@components/find/BottomTab'
import IconTab from '@components/find/IconTab'
import PostUserCard from '@components/home/PostUserCard'
import StyleSheet from '@util/stylesheet'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

export interface Props extends NavigationScreenProps {
  // commentList: any
}

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
]
export default class SinglePostCardList extends React.Component<Props> /*<Props, State>*/ {
  public constructor(props: Props) {
    super(props)
  }

  public componentDidMount() {
    // console.log(this.props.navigation.getParam('headerTitle'))
    // this.props.navigation.setParams({
    //   findPublishTitle: this.props.navigation.getParam('headerTitle')
    // })
    // console.log(this.props.navigation)
  }

  // public getHeaderTitle = () => {
  //   console.log({
  //     headerTitle: this.props.navigation.getParam('headerTitle')
  //   })
  //   return {
  //     headerTitle: this.props.navigation.getParam('headerTitle')
  //   }
  // }

  public render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                  }}
                />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('微校正文')}>
              <CardItem cardBody>
                <Image
                  source={require('@image/find/Detail/food.png')}
                  style={{ height: 200, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Body>
                  <Text>//Your text here</Text>
                </Body>
              </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Left>
                <Button
                  transparent
                  // onPress={() => console.log(this.props.navigation.getParam('headerTitle'))}
                  // onPress={() => {
                  //   this.props.navigation.setParams({ findPublishTitle: this.props.navigation.getParam('headerTitle') })
                  //   console.log(this.props.navigation)
                  // }}
                >
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>

          {/* <Body style={{ paddingTop: (hp('100%')-300)/2}}>
            <Image source={require('@image/404.png')} style={{width:150, height:150}}></Image>
            <Text note style ={{ fontSize: 18, lineHeight: 30}}>暂无活动</Text>
          </Body> */}
        </Content>
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
