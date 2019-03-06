import { InputItem, List, Provider, Toast } from '@ant-design/react-native'
import Avatar from '@components/home/Avatar'
import PostUserCard from '@components/home/PostUserCard'
import { Button,Container, Content, Header, Icon, Input, Item, Text } from 'native-base'

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

const styles = StyleSheet.create({
})

export default Topic