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
  Thumbnail
} from 'native-base'
import React from 'react'
import { Alert, Image, RefreshControl, Text, TouchableOpacity, View } from 'react-native'
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

import actions from '@store/action/Index'
import { connect } from 'react-redux'
import SinglePostCardItem from './SinglePostCardItem'

import api from '@api/index'

export interface Props extends NavigationScreenProps {
  myUsermeta?: any
}

export interface State {
  avatarList: Array<any>
  postsList: Array<any>
  isRefreshing: boolean
}

class SinglePostCardList extends React.Component<Props, State> /*<Props, State>*/ {
  public state: State = {
    avatarList: [],
    postsList: [],
    isRefreshing: true
  }

  public constructor(props: Props) {
    super(props)
  }

  // public fresh() {
  //   api.home.getPostsOfType(this.props.navigation.getParam('headerTitle')).then((res) => {
  //     this.setState(
  //       {
  //         postsList: res.data.data
  //       },
  //       () => this.forceUpdate()
  //     )
  //   })
  // }

  /**
   * 下拉刷新获取数据
   * 获取动态数据
   */
  public getPostsList() {
    this.setState({
      isRefreshing: true
    })
    api.home.getPostsOfType(this.props.navigation.getParam('headerTitle')).then((res) => {
      setTimeout(
        () =>
          this.setState(
            {
              postsList: res.data.data.list,
              isRefreshing: false
            }
            // () => console.log(this.state.postsList)
          ),
        800
      )
    })
  }

  public componentDidMount() {
    // this.getPostsList()
    // 初始化获取数据
    api.home.getPostsOfType(this.props.navigation.getParam('headerTitle')).then((res) => {
      // console.log(res.data.data)
      this.setState(
        {
          postsList: res.data.data.list,
          isRefreshing: false
        },
        () => console.log(this.state.postsList)
      )
    })
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
        <Content
          refreshControl={
            <RefreshControl
              // 是否刷新
              refreshing={this.state.isRefreshing}
              onRefresh={this.getPostsList.bind(this)}
              tintColor={'#29A1F7'}
              title={'拼命加载中...'}
            />
          }
        >
          {this.state.postsList.length>0 ? this.state.postsList.map((item: any, index: number) => {
            return <SinglePostCardItem fresh={() => this.getPostsList.bind(this)} postsItemData={item} key={index} />
          }): <View style={{justifyContent:'center', alignItems: 'center',height:hp('80%')}}><Icon name="cube" style={{fontSize:40}}></Icon><Text style={{fontSize: 24}}>无数据</Text></View>}

          {/* <Body style={{ paddingTop: (hp('100%')-300)/2}}>
            <Image source={require('@image/404.png')} style={{width:150, height:150}}></Image>
            <Text note style ={{ fontSize: 18, lineHeight: 30}}>暂无活动</Text>
          </Body> */}
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  action: {
    color: '#333',
    fontSize: 14
  }
})

const mapStateToProps = (state: any) => {
  // console.log('state', state)
  return {
    // 获取 state 变化
    myUsermeta: state.HandleMyUsermeta.myUsermeta
  }
}

// 发送行为
let handleUsermeta = actions.myUsermeta.handleUsermeta
const mapDispatchToProps = {
  handleUsermeta
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePostCardList)
