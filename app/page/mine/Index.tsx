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
  Separator,
  Switch,
  Text,
  Thumbnail
} from 'native-base'
import React, { Component } from 'react'
import { Image } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

interface Props extends NavigationScreenProps {
  defaultProps: string
}

export default class UserHome extends Component<Props> {
  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <Container>
        {/* <Separa
        +tor/> */}
        <Content>
          <ListItem thumbnail onPress={() => this.props.navigation.navigate('用户中心')}>
            <Left>
              <Thumbnail
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                }}
              />
            </Left>
            <Body>
              <Text style={{ lineHeight: 30, fontSize: 16 }}>Kumar Pratik</Text>
              <Text note style={{ lineHeight: 14, fontSize: 10 }}>
                温州职业技术学院
              </Text>
              <Text note style={{ lineHeight: 14, fontSize: 10 }}>
                在校学生
              </Text>
            </Body>
            <Right style={{ justifyContent: 'center' }}>
              {/* <Text note>3:43 pm</Text> */}
              <Button
                hasText
                transparent
                onPress={() => this.props.navigation.navigate('用户中心')}
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
          <ListItem icon onPress={()=>this.props.navigation.navigate('个人经历')}>
            <Left>
              <Button transparent>
                <Icon name="paper-plane" active style={{ color: '#707070' }} />
              </Button>
            </Left>
            <Body>
              <Text>个人经历</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={()=>this.props.navigation.navigate('帮助与反馈')}>
            <Left>
              <Button transparent>
                <Icon name="heart" style={{ color: '#707070' }} />
              </Button>
            </Left>
            <Body>
              <Text>帮助与反馈</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button transparent>
                <Icon active name="man" style={{ color: '#707070' }} />
              </Button>
            </Left>
            <Body>
              <Text>邀请好友</Text>
            </Body>
          </ListItem>
          <ListItem icon>
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
