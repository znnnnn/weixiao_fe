import { Tabs } from '@ant-design/react-native'
import { Body, Button, Container, Content, Footer, FooterTab, Text, Thumbnail } from 'native-base'
import React, { Component } from 'react'
import { Image, RefreshControl, StyleSheet, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import PostCard from '@components/home/PostCard'
import SinglePostCardItem from '@components/SinglePostCardItem'

import api from '@api/index'
import { connect } from 'react-redux'

const iconTab = [{ title: '主页' }, { title: '动态' }, { title: '发现' }]

interface Props extends NavigationScreenProps {
  usermeta: any
  myUsermeta: any
}

/**
 * 本页面的所有数据通过react navigation进行传递
 */
class UserHome extends Component<Props> {
  public state = {
    followCount: 0,
    mineFollowCount: 0,
    isFollowed: 0,
    isRefreshing: true,
    dynamicList: [],
    dynamicCount: 0,
    postsList: [],
    findList: []
  }
  public constructor(props: Props) {
    super(props)
  }

  public componentDidMount() {
    this.getFollowInfo()
    this.getPostsInfo()
  }

  public getFollowInfo() {
    this.setState({
      isRefreshing: true
    })
    api.userHome.findFollowByUserId(this.props.navigation.getParam('usermeta').userId).then((res) =>
      this.setState({
        followCount: res.data.data.list.length,
        isFollowed:
          res.data.data.list.length > 0
            ? res.data.data.list.filter(
                (item: any) => item.followUserId === this.props.myUsermeta.userId
              ).length
            : 0
      })
    )

    api.userHome
      .findMineFollowByUserId(this.props.navigation.getParam('usermeta').userId)
      .then((res) =>
        this.setState({
          mineFollowCount: res.data.data.list.length
        })
      )
      .then(() =>
        setTimeout(
          () =>
            this.setState({
              isRefreshing: false
            }),
          800
        )
      )
  }

  public FollowAction() {
    this.state.isFollowed === 0
      ? api.userHome
          .addFollow({
            followStatus: 1,
            followUserId: this.props.myUsermeta.userId,
            userId: this.props.navigation.getParam('usermeta').userId
          })
          .then((res) => {
            if (res.data.message === 'SUCCESS') {
              this.setState({
                followCount: ++this.state.followCount,
                isFollowed: 1
              })
            }
          })
      : api.userHome
          .deleteFollowByUserId(
            this.props.navigation.getParam('usermeta').userId,
            this.props.myUsermeta.userId
          )
          .then((res) => {
            if (res.data.message === 'SUCCESS') {
              this.setState({
                followCount: --this.state.followCount,
                isFollowed: 0
              })
            }
          })
  }

  public getPostsInfo() {
    /**
     * 获取动态信息
     */
    // api.home.getPostsOfTypeAndPostAuthor(null,this.props.myUsermeta.userId).then(res => {
    //   console.log(res.data.data.list)
    //   this.setState({
    //     // dynamic: res.data.data.list,
    //     dynamicCount: res.data.data.list.length
    //   })
    // })

    api.home.getPostsByPostAuthor(this.props.navigation.getParam('usermeta').userId).then((res) => {
      // console.log(res)
      let dynamic = res.data.data.filter((item: any) => item.postCat === 'dynamic')
      let find = res.data.data.filter((item: any) => item.postCat !== 'dynamic')
      // console.log(find)
      // console.log(dynamic)
      this.setState({
        dynamicList: dynamic,
        postsList: res.data.data,
        dynamicCount: dynamic.length,
        findList: find
      })
    })
  }

  public refresh() {
    this.getFollowInfo()
    this.getPostsInfo()
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
      <Container>
        {/* <Separa
        +tor/> */}
        <Content
          refreshControl={
            <RefreshControl
              // 是否刷新
              refreshing={this.state.isRefreshing}
              onRefresh={this.refresh.bind(this)}
              tintColor={'#29A1F7'}
              title={'拼命加载中...'}
            />
          }
        >
          <View style={{ height: 165 }}>
            <Image
              source={{
                uri: 'https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture'
              }}
              style={styles.backImage}
            />
          </View>
          <Body>
            <Thumbnail
              large
              source={{
                uri: this.props.navigation.getParam('usermeta').avatar
              }}
            />
            <Text style={{ lineHeight: 24 }}>
              {this.props.navigation.getParam('usermeta').nickname}
            </Text>
            <Text note style={{ fontSize: 12 }}>
              {`${
                this.props.navigation.getParam('usermeta').school === ''
                  ? '加利福尼亚大学'
                  : this.props.navigation.getParam('usermeta').school
              } · ${
                this.props.navigation.getParam('usermeta').job === ''
                  ? '在校学生'
                  : this.props.navigation.getParam('usermeta').job
              }`}
            </Text>
            {/* <Button
              style={{ margin: 5, alignSelf: 'center' }}
              small
              primary
              onPress={() => this.props.navigation.navigate('编辑个人资料')}
            >
              <Text>编辑个人资料</Text>
            </Button> */}
            <View style={styles.underLine}>
              <Text style={{ fontSize: 12, color: '#3E3E3E' }}>
                {this.state.mineFollowCount}关注 {this.state.followCount}粉丝 {2}动态{/*{0}收藏*/}
              </Text>
            </View>
          </Body>
          <Tabs tabs={iconTab} initialPage={0} tabBarPosition="top">
            {/* {renderContent} */}
            <View
              style={{
                flexDirection: 'row',
                // width: wp('90%'),
                // paddingLeft: wp('5%'),
                flexWrap: 'wrap'
              }}
            >
              {/* 主页 */}
              {this.state.postsList.length > 0
                ? this.state.postsList.map((item, index) => (
                    <PostCard
                      fresh={() => this.getPostsInfo.bind(this)}
                      postsItemData={item}
                      key={index}
                      isLast={index===this.state.postsList.length-1}
                    />
                  ))
                : this.noData()}
            </View>
            {/* 动态 */}
            <View>
              {this.state.dynamicList.length > 0
                ? this.state.dynamicList.map((item, index) => (
                    <PostCard
                      fresh={() => this.getPostsInfo.bind(this)}
                      postsItemData={item}
                      key={index}
                      isLast={index===this.state.postsList.length-1}
                    />
                  ))
                : this.noData()}
            </View>
            {/* 发现 */}
            {this.state.findList.length > 0
              ? this.state.findList.map((item: any, index: number) => {
                  return (
                    <SinglePostCardItem
                      fresh={() => this.getPostsInfo.bind(this)}
                      postsItemData={item}
                      key={index}
                    />
                  )
                })
              : this.noData()}
          </Tabs>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('聊天')}>
              <Icon name="message" style={{ fontSize: 20 }} />
              <Text>和他聊天</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button vertical onPress={() => this.FollowAction()}>
              <Icon name="star" style={{ fontSize: 20 }} />
              <Text>{this.state.isFollowed > 0 ? '取消关注' : '关注'}</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    width: wp('100%'),
    height: 200,
    position: 'absolute'
  },
  underLine: {
    width: wp('90%'),
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5
  }
})

const mapStateToProps = (state: any): Object => {
  // console.log('用户中心', state)
  return {
    // 获取 state 变化
    myUsermeta: state.HandleMyUsermeta.myUsermeta
  }
}

// 发送行为

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps
  // mapDispatchToProps
)(UserHome)
