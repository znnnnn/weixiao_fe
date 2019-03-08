import {InputItem, List, Provider, Toast} from '@ant-design/react-native'
import Avatar from '@components/home/Avatar'
import PostUserCard from '@components/home/PostUserCard'
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
import {Alert, Image, Linking, Platform, ScrollView, TouchableOpacity, View} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import {NavigationScreenProps} from 'react-navigation'
import {connect} from 'react-redux'

import {ItemProps} from '@components/find/BottomTabOfferItem'
import OfferItem from '@components/find/OfferItem'

export interface State {
  data: ItemProps[]
  selected: string
}

interface Props extends NavigationScreenProps {
}

class Offer extends React.Component<Props, State> {
  public state: State = {
    data: [
      {
        job: '平面设计师',
        address: {
          value: '杭州',
          children: {
            value: '长河'
          }
        },
        experience: '1-3年',
        edu: '大专',
        salary: '5K - 8K',
        thumb: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        HR: 'alice',
        HRPosition: 'CEO'
      }
    ],
    selected: 'key1'
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
            {/* <Button small style={{paddingLeft: 0, paddingRight: 0,marginLeft:5}}>
              <Text>搜索</Text>
            </Button> */}
            <Button transparent>
              <Icon
                active
                name="add-circle"
                style={{color: '#333', fontSize: 24, alignSelf: 'center', marginRight: 10}}
                onPress={() => {
                  // this.props.navigation.navigation.navigate('发布')
                  this.props.navigation.navigate('发现发布', {
                    headerTruncatedBackTitle: '参与话题'
                  })
                }}
              />
            </Button>
          </Header>
          <Content>
            {/* <Form> */}
            {/* <Picker
                note
                mode="dropdown"
                style={{ width: 120 }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
                iosHeader="Select your SIM"
                iosIcon={<Icon name="arrow-down" />}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Form> */}
            <OfferItem data={this.state.data[0]}/>
            <OfferItem data={this.state.data[0]}/>
            <OfferItem data={this.state.data[0]}/>
            <OfferItem data={this.state.data[0]}/>
          </Content>
          <Footer>
            <FooterTab>
              <Button onPress={() => this.props.navigation.navigate('身份认证')}>
                <Icon name="people"/>
                <Text>我要招人</Text>
              </Button>
              <Button active>
                <Icon name="brush"/>
                <Text>我要求职</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({})

export default Offer
