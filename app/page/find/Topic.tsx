import {InputItem, List, Provider, Toast} from '@ant-design/react-native'
import Avatar from '@components/home/Avatar'
import PostUserCard from '@components/home/PostUserCard'
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail
} from 'native-base'

import px2dp from '@util/px2dp'

import PostCard from '@app/components/home/PostCard'
import StyleSheet from '@util/stylesheet'
import React from 'react'
import {Alert, Image, Linking, Platform, ScrollView, TouchableOpacity, View} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import {NavigationScreenProps} from 'react-navigation'
import {connect} from 'react-redux'

export interface State {
  thumb: string,
  title: string,
  pv: number,
  comment: number
}

interface Props extends NavigationScreenProps {
}

class Topic extends React.Component<Props, State> {
  public state: State = {
    thumb: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    title: '温州职业学院元旦晚会',
    pv: 6660000,
    comment: 20000
  }

  public constructor(props: Props) {
    super(props)
    // console.log(this.props.token)
  }

  // public componentDidMount() {
  //   if (this.props.token === '') {
  //     console.log('token:', this.props.token)
  //   }
  // }

  public render() {
    return (
      <Provider>
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search"/>
              <Input placeholder="Search"/>
              <Icon name="ios-people"/>
            </Item>
            <Button small style={{paddingLeft: 0, paddingRight: 0,marginLeft:5}}>
              <Text>搜索</Text>
            </Button>
            <Button transparent>
              <Icon
                active
                name="brush"
                style={{color: '#333', fontSize: 24, alignSelf: 'center', marginRight: 10}}
                onPress={() => {
                  // this.props.navigation.navigation.navigate('发布')
                  this.props.navigation.navigate('发现发布', {headerTruncatedBackTitle: '参与话题'})
                }}
              />
            </Button>

          </Header>
          <Content>
            <ListItem thumbnail>
              <Left style={{borderWidth: 1, borderColor: 'red'}}>
                <Thumbnail
                  source={{
                    uri: this.state.thumb
                  }}
                />
              </Left>
              <Body>
              <Text>#{this.state.title}#</Text>
              <Text note numberOfLines={1} style={{color: '#3E3E3E', fontSize: 10, marginTop: 5}}>
                阅读：{this.state.pv > 10000 ? `${this.state.pv / 10000}万` : this.state.pv} 讨论：{this.state.comment > 10000 ? `${this.state.comment / 10000}万` : this.state.comment}
              </Text>
              </Body>
              {/*<Right>*/}
              {/*<Button transparent>*/}
              {/*<Text>View</Text>*/}
              {/*</Button>*/}
              {/*</Right>*/}
            </ListItem>
            <ListItem itemDivider/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
          </Content>
        </Container>
      </Provider>
    )
  }

}

const styles = StyleSheet.create({})

export default Topic
