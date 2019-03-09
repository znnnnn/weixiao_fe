import CommentListItem from '@components/CommentListItem'
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail
} from 'native-base'
import React, { Component } from 'react'
import { Image } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

interface Props extends NavigationScreenProps {}

export default class DonateDetail extends Component<Props> {
  public constructor(props: Props) {
    super(props)
  }
  public render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: 'http://111.231.116.130/wp-content/uploads/2019/03/microsoft_office_2019.jpg'
            }}
            style={{ height: 150 }}
          />
          <Body style={{ padding: 15 }}>
            <Text style={{ fontSize: 20, color: '#3CB881', fontWeight: '300' }}>753，985.84</Text>
            <Text note>用户捐款（元）</Text>
          </Body>
          <ListItem itemDivider />
          <ListItem>
            <Body>
              <Text>校园安全饮水计划</Text>
              <Text note style={{ marginTop: 10 }}>
                修建校园安全饮水工程，改善农村在校中小学生的饮水及卫生状况
              </Text>
            </Body>
          </ListItem>
          <List>
            <CommentListItem
              avatarUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
              nickname="Alice"
              tag="工程师"
              postTime={getTimeDiff(1356470770)}
              deviceName={deviceName}
            />
            <CommentListItem
              avatarUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
              nickname="Alice"
              tag="工程师"
              postTime={getTimeDiff(1356470770)}
              deviceName={deviceName}
            />
            <CommentListItem
              avatarUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
              nickname="Alice"
              tag="工程师"
              postTime={getTimeDiff(1356470770)}
              deviceName={deviceName}
            />
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              style={{ backgroundColor: '#3CB881' }}
              onPress={() => this.props.navigation.navigate('个人经历')}
            >
              <Icon name="heart" style={{ color: '#fff' }} />
              <Text style={{ color: '#fff' }}>立即捐赠</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
