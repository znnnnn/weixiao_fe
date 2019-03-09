import CommentListItem from '@components/CommentListItem'
import {
  Body,
  Button,
  CheckBox,
  Container,
  Content,
  Footer,
  FooterTab,
  H2,
  Header,
  Icon,
  Input,
  Item,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  View
} from 'native-base'
import React, { Component } from 'react'
import { Image } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()

interface Props extends NavigationScreenProps {}

export default class DonateDetail extends Component<Props> {
  public state = {
    money: 0
  }
  public constructor(props: Props) {
    super(props)
  }
  public render() {
    return (
      <Container>
        <Content style={{ padding: 30 }}>
          <H2 style={{ marginBottom: 15 }}>爱心捐赠</H2>
          <Text note>一份爱心，一份温暖</Text>
          <View style={{ flexDirection: 'row' }}>
            <Button
              // active={this.state.money === 10}
              small
              bordered
              success
              style={{ margin: 15, marginLeft: 0 }}
              onPress={() =>
                this.setState({
                  money: 10
                })
              }
            >
              <Text>10元</Text>
            </Button>
            <Button
              small
              bordered
              success
              style={{ margin: 15, marginLeft: 0 }}
              onPress={() =>
                this.setState({
                  money: 20
                })
              }
            >
              <Text>20元</Text>
            </Button>
            <Button
              small
              bordered
              success
              style={{ margin: 15, marginLeft: 0 }}
              onPress={() =>
                this.setState({
                  money: 50
                })
              }
            >
              <Text>50元</Text>
            </Button>
            <Button
              small
              bordered
              success
              style={{ margin: 15, marginLeft: 0 }}
              onPress={() =>
                this.setState({
                  money: 100
                })
              }
            >
              <Text>100元</Text>
            </Button>
          </View>
          <Item regular>
            <Input
              placeholder="自定义金额"
              onChangeText={(value) =>
                this.setState({
                  money: value
                })
              }
            />
          </Item>
          <ListItem>
            <CheckBox
              checked={false}
              color="green"
              style={{ flexDirection: 'row', marginLeft: -20 }}
            />
            <Body>
              <Text note>匿名捐赠</Text>
            </Body>
          </ListItem>

          <H2 style={{ marginBottom: 15, marginTop: 15 }}>爱心捐赠</H2>

          <ListItem>
            <CheckBox
              checked={false}
              color="green"
              style={{ flexDirection: 'row', marginLeft: -20 }}
            />
            <Body>
              <Text note>支付宝</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={false}
              color="green"
              style={{ flexDirection: 'row', marginLeft: -20 }}
            />
            <Body style={{ flexDirection: 'row' }}>
              <Text note>
                同意<Text style={{ color: '#29A1F7', fontSize: 14 }}>《微校捐赠协议》</Text>
              </Text>
            </Body>
          </ListItem>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              style={{ backgroundColor: '#3CB881' }}
              onPress={() => this.props.navigation.navigate('个人经历')}
            >
              {/* <Icon name="heart" style={{ color: '#fff' }} /> */}
              <Text style={{ color: '#fff', fontSize: 16 }}>立即捐赠 {this.state.money} 元</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
