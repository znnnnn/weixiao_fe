import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Root,
  Separator,
  Switch,
  Text,
  Thumbnail,
  Toast
} from 'native-base'
import React, { Component } from 'react'
import { AppRegistry, Image } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import actions from '@store/action/Index'
import { connect } from 'react-redux'

interface Props extends NavigationScreenProps {
  token: string
  myUsermeta: any
}

class MineIndex extends Component<Props> {
  public constructor(props: Props) {
    super(props)
  }

  public componentDidMount() {
    // console.log('props', this.props)
  }

  public render() {
    return (
      <Container>
        {/* <Separa
        +tor/> */}
        <Content>
          <ListItem thumbnail onPress={() => this.props.navigation.navigate('我的主页')}>
            <Left>
              <Thumbnail
                source={{
                  uri: this.props.myUsermeta.avatar
                }}
              />
            </Left>
            <Body>
              <Text style={{ lineHeight: 30, fontSize: 16 }}>{this.props.myUsermeta.nickname}</Text>
              <Text>
                {/* <Text style={{ lineHeight: 14, fontSize: 10 }}> </Text> */}
                <Text note style={{ lineHeight: 14, fontSize: 10 }}>
                  {this.props.myUsermeta.school === ''
                    ? '加利福尼亚大学'
                    : this.props.myUsermeta.school}
                </Text>
              </Text>
              <Text>
                {/* <Text style={{ lineHeight: 14, fontSize: 10 }}> </Text> */}
                <Text note style={{ lineHeight: 14, fontSize: 10 }}>
                  {this.props.myUsermeta.job === ''
                    ? '加利福尼亚大学'
                    : this.props.myUsermeta.job}
                </Text>
              </Text>
              {/* <Text note style={{ lineHeight: 14, fontSize: 10 }}>
                {this.props.myUsermeta.job === '' ? '在校学生' : this.props.myUsermeta.job}
              </Text> */}
            </Body>
            <Right style={{ justifyContent: 'center' }}>
              {/* <Text note>3:43 pm</Text> */}
              <Button
                hasText
                transparent
                onPress={() => this.props.navigation.navigate('我的主页')}
              >
                <Text style={{ color: '#333' }}>个人主页 ></Text>
              </Button>
            </Right>
          </ListItem>

          {/* <ListItem thumbnail>
              <Left>
              <Thumbnail
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                }}
              />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem> */}
          <ListItem itemDivider />
          <ListItem icon onPress={() => this.props.navigation.navigate('个人经历')}>
            <Left>
              <Button transparent>
                <Icon name="paper-plane" active style={{ color: '#707070' }} />
              </Button>
            </Left>
            <Body>
              <Text>个人经历</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={() => this.props.navigation.navigate('帮助与反馈')}>
            <Left>
              <Button transparent>
                <Icon name="heart" style={{ color: '#707070' }} />
              </Button>
            </Left>
            <Body>
              <Text>帮助与反馈</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            onPress={() =>
              Toast.show({
                text: '该功能暂未开放',
                type: 'warning',
                textStyle: { textAlign: 'center' },
                position:'top'
              })
            }
          >
            <Left>
              <Button transparent>
                <Icon active name="man" style={{ color: '#707070' }} />
              </Button>
            </Left>
            <Body>
              <Text>邀请好友</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={() => this.props.navigation.navigate('隐私')}>
            <Left>
              <Button transparent>
                <Icon active name="finger-print" style={{ color: '#707070' }} />
              </Button>
            </Left>
            <Body>
              <Text>隐私</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={() => this.props.navigation.navigate('设置')}>
            <Left>
              <Button transparent>
                <Icon active name="build" style={{ color: '#707070' }} />
              </Button>
            </Left>
            <Body>
              <Text>设置</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    )
  }
}

AppRegistry.registerComponent('MineIndex', () => MineIndex)

const mapStateToProps = (state: any): Object => {
  // console.log('store中', state)
  return {
    // 获取 state 变化
    token: state.handleLogin.token,
    myUsermeta: state.HandleMyUsermeta.myUsermeta
  }
}

// 发送行为
// let handleLogin = actions.login.handleLogin
// let handleUsermeta = actions.myUsermeta.handleUsermeta
// const mapDispatchToProps = {
//   handleLogin,
//   handleUsermeta
// }

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps
  // mapDispatchToProps
)(MineIndex)
