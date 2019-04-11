import { InputItem, List, Provider, Toast } from '@ant-design/react-native'
import Avatar from '@components/home/Avatar'
import PostUserCard from '@components/home/PostUserCard'
import _ from 'lodash'
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Picker,
  Right,
  Text,
  Thumbnail
} from 'native-base'

import px2dp from '@util/px2dp'

import PostCard from '@app/components/home/PostCard'
import StyleSheet from '@util/stylesheet'
import React from 'react'
import { Alert, Image, Linking, Platform, ScrollView, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps, withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import api from '@app/api'
import { ItemProps } from '@components/find/BottomTabOfferItem'
import OfferItem from '@components/find/OfferItem'

export interface State {
  data: ItemProps[]
  selected: string
  avatar: any
  avatarLength: number
}

interface Props extends NavigationScreenProps {}

export default withNavigation(
  class Offer extends React.Component<Props, State> {
    public state: State = {
      data: [
        {
          job: '平面设计师',
          address: {
            value: '四川',
            children: {
              value: '重庆'
            }
          },
          experience: '1-3年',
          edu: '大专',
          salary: '5K - 8K',
          thumb: 'http://111.231.116.130/wp-content/uploads/2019/03/3.jpg',
          HR: '王女士',
          HRPosition: 'CEO'
        }
      ],
      selected: 'key1',
      avatar: [],
      avatarLength: 0
    }

    public constructor(props: Props) {
      super(props)
      // console.log(this.props.token)
    }

    public onValueChange(value: string) {
      this.setState({
        selected: value
      })
    }

    // public componentDidMount() {
    //   if (this.props.token === '') {
    //     console.log('token:', this.props.token)
    //   }
    // }
    public componentWillMount() {
      api.home.getUsermetaList().then((res) => {
        this.setState({
          avatar: res.data.data.list,
          avatarLength: res.data.data.list.length - 1
        })
        console.log(res.data.data.list)
      })
    }

    public render() {
      return (
        <Provider>
          <Container>
            <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
              </Item>
              {/* <Button small style={{paddingLeft: 0, paddingRight: 0,marginLeft:5}}>
              <Text>搜索</Text>
            </Button> */}
              <Button transparent>
                <Icon
                  active
                  name="add-circle"
                  style={{ color: '#333', fontSize: 24, alignSelf: 'center', marginRight: 10 }}
                  onPress={() => {
                    // this.props.navigation.navigation.navigate('发布')
                    this.props.navigation.navigate('发现发布', {
                      headerTruncatedBackTitle: '参与话题',
                      findPublishTitle: '招聘',
                      publishType: '招聘'
                    })
                  }}
                />
              </Button>
            </Header>
            <Content>
              <OfferItem
                onPress={() => this.props.navigation.navigate('招聘详情')}
                data={this.state.data[0]}
              />
            </Content>
            <Footer>
              <FooterTab>
                <Button onPress={() => this.props.navigation.navigate('身份认证')}>
                  <Icon name="people" />
                  <Text>我要招人</Text>
                </Button>
                <Button active onPress={() => this.props.navigation.navigate('个人经历')}>
                  <Icon name="brush" />
                  <Text>我要求职</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        </Provider>
      )
    }
  }
)

const styles = StyleSheet.create({})
