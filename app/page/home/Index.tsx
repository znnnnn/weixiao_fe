import { Button, InputItem, List, Provider } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import Avatar from '@components/home/Avatar'
import PostUserCard from '@components/home/PostUserCard'
// import {AliyunOSS} from 'react-native-aliyun-oss'

import px2dp from '@util/px2dp'

import PostCard from '@app/components/home/PostCard'
import StyleSheet from '@util/stylesheet'
import { Container, Content, Toast } from 'native-base'
import React from 'react'
import { AsyncStorage, RefreshControl, ScrollView, Text, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'

import actions from '@store/action/Index'
import { connect } from 'react-redux'

import api from '@api/index'

export interface State {
  avatarNofilter: Array<any>
  avatarList: Array<any>
  postsList: Array<any>
  isRefreshing: boolean
}

export interface Props extends NavigationScreenProps {
  handleLogin: Function
  token: string
  handleUsermeta: Function
  myUsermeta: any
}

class Home extends React.Component<Props, State> {
  public state: State = {
    avatarNofilter: [],
    avatarList: [],
    postsList: [],
    isRefreshing: true
  }

  public constructor(props: Props) {
    super(props)
  }

  public _getAsynToken = async () => {
    try {
      const asyncToken = await AsyncStorage.getItem('token')
      if (asyncToken !== null && this.props.token === '') {
        // 获取登录的用户信息
        api.userHome
          .myhome(asyncToken)
          .then((res) => {
            // console.log(asyncToken,'第一次请求用户信息!!',res.data.data)
            this.props.handleUsermeta(res.data.data)
          })
          .then(() => this.props.handleLogin(asyncToken))
        // .then(() => this.props.navigation.navigate('发现'))
      } else {
        this.props.navigation.navigate('登录')
        setTimeout(
          () =>
            Toast.show({
              text: '您还没有登录哦',
              type: 'danger',
              position:'top'
            }),
          700
        )
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  /**
   * 下拉刷新获取数据
   * 获取动态数据
   */
  public getPostsList() {
    this.setState({
      isRefreshing: true
    })
    api.home.getPostsOfType('dynamic').then((res) => {
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

  public componentWillMount() {
    api.home
      .getUsermetaList()
      .then((res) => {
        this.setState({
          avatarNofilter: res.data.data.list
        })
      })
      .then(() =>
        // 获取本地存储的登录状态
        this._getAsynToken()
      )
      .then(() =>
        // 初始化获取数据
        api.home.getPostsOfType('dynamic').then((res) => {
          // console.log(res.data.data)
          this.setState({
            postsList: res.data.data.list,
            isRefreshing: false
          })
        })
      )
    // this._getAsynToken()
  }

  public componentWillReceiveProps() {
    setTimeout(() => {
      this.setState({
        avatarList: this.state.avatarNofilter.filter(
          (item: any) => item.userId !== this.props.myUsermeta.userId
        )
      })
    }, 0)
  }

  public componentDidMount() {
    // this.getPostsList()
    // 初始化获取数据
    // api.home.getPostsOfType('dynamic').then((res) => {
    //   // console.log(res.data.data)
    //   this.setState({
    //     postsList: res.data.data.list,
    //     isRefreshing: false
    //   })
    // })
    // this.props.navigation.setParams({ getPostsList: this.getPostsList })
  }

  public noData() {
    return (
      <View
        style={{ justifyContent: 'center', alignItems: 'center', width: wp('100%'), padding: 30 }}
      >
        <Icon name="cube" style={{ fontSize: 40 }} />
        <Text style={{ fontSize: 24 }}>无数据</Text>
      </View>
    )
  }

  public render() {
    return (
      <Provider>
        <Container style={styles.root}>
          <View
            style={{
              paddingTop: 10,
              backgroundColor: '#fff',
              height: 90,
              borderBottomWidth: 1,
              borderBottomColor: '#f0f0f0'
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                // width: wp('100%')
              }}
              // style={{ borderColor: 'green', borderWidth: 1 }}
            >
              {this.state.avatarList.map((item, index) => {
                return <Avatar usermeta={item} key={index} />
              })}
            </ScrollView>
          </View>
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
            {this.state.postsList.length > 0
              ? this.state.postsList.map((item, index) => (
                  <PostCard
                    fresh={() => this.getPostsList.bind(this)}
                    postsItemData={item}
                    key={index}
                    isLast={index===this.state.postsList.length-1}
                  />
                ))
              : null}
          </Content>
        </Container>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    height: hp('100%')
  },
  container: {
    marginTop: hp('10%'),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red'
  },
  inputContainer: {
    height: 140,
    width: wp('90%'),
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'blue',
    marginTop: 10
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

const mapStateToProps = (state: any) => {
  // console.log('state', state)
  return {
    // 获取 state 变化
    token: state.handleLogin.token,
    myUsermeta: state.HandleMyUsermeta.myUsermeta
  }
}

// 发送行为
let handleLogin = actions.login.handleLogin
let handleUsermeta = actions.myUsermeta.handleUsermeta
const mapDispatchToProps = {
  handleLogin,
  handleUsermeta
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
