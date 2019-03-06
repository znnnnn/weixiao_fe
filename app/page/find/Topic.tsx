import { InputItem, List, Provider, Toast } from '@ant-design/react-native'
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
import { Alert, Image, Linking, Platform, ScrollView, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'

export interface State {
  phone: string
  password: string
  inputBorderColor: string
  passCanSee: boolean
}

export interface Props extends NavigationScreenProps {
  defalutProps: string
  token: string
}

class Topic extends React.Component<Props, State> {
  public state: State = {
    phone: '',
    password: '',
    inputBorderColor: '#EEEEEE',
    passCanSee: true
  }

  public constructor(props: Props) {
    super(props)
    // console.log(this.props.token)
  }

  public componentDidMount() {
    if (this.props.token === '') {
      console.log('token:', this.props.token)
    }
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
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
          <Content>
            <ListItem thumbnail>
              <Left style={{ borderWidth: 1, borderColor: 'red' }}>
                <Thumbnail
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                  }}
                />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right style={{ borderWidth: 0 }}>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <PostCard />
            <PostCard />
            <PostCard />
          </Content>
        </Container>
      </Provider>
    )
  }

  private inputItemFocus(): void {
    this.setState({
      inputBorderColor: '#29A1F7'
    })
  }

  private inputItemBlur(): void {
    this.setState({
      inputBorderColor: '#EEEEEE'
    })
  }
}

const styles = StyleSheet.create({})

export default Topic
