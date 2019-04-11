import { Carousel, Provider } from '@ant-design/react-native'
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

import StyleSheet from '@util/stylesheet'
import React from 'react'
import { View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'

import { ItemProps } from '@components/find/BottomTabDonateItem'
import DonateItem from '@components/find/DonateItem'

interface State {
  data: ItemProps[]
  layout: string
}

interface Props extends NavigationScreenProps {}

class Donate extends React.Component<Props, State> {
  public state = {
    data: [
      {
        title: '校园安全饮水计划',
        subTitle: '修建校园安全饮水工程，改善农村在校中小学生的饮水...',
        count: 542324,
        tag: [
          '山区儿童',
          '安全饮水',
          '留守建设',
          '山区儿童',
          '安全饮水',
          '留守建设',
          '山区儿童',
          '安全饮水',
          '留守建设'
        ],
        thumb: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      }
    ],
    layout: 'list'
  }

  public constructor(props: Props) {
    super(props)
  }

  public onHorizontalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    // console.log('horizontal change to', index)
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
                name="people"
                style={{ color: '#333', fontSize: 24, alignSelf: 'center', marginRight: 10 }}
                onPress={() => {
                  // this.props.navigation.navigation.navigate('发布')
                  this.props.navigation.navigate('我的捐赠', {
                    headerTruncatedBackTitle: '参与话题'
                  })
                }}
              />
            </Button>
          </Header>
          <Content>
            <Carousel
              style={styles.wrapper}
              selectedIndex={2}
              autoplay
              infinite
              afterChange={this.onHorizontalSelectedIndexChange}
            >
              <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
                <Text>Carousel 1</Text>
              </View>
              <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
                <Text>Carousel 2</Text>
              </View>
              <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
                <Text>Carousel 3</Text>
              </View>
              <View style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}>
                <Text>Carousel 4</Text>
              </View>
              <View style={[styles.containerHorizontal, { backgroundColor: 'fuchsia' }]}>
                <Text>Carousel 5</Text>
              </View>
            </Carousel>
            <DonateItem data={this.state.data[0]} />
            <DonateItem data={this.state.data[0]} />
            <DonateItem data={this.state.data[0]} />
            <DonateItem data={this.state.data[0]} />
          </Content>
          {/* <Footer>
            <FooterTab>
              <Button style={{backgroundColor: '#3CB881'}} onPress={() => this.props.navigation.navigate('个人经历')}>
                <Icon name="heart" style={{ color: '#fff' }} />
                <Text style={{ color: '#fff' }}>我要捐赠</Text>
              </Button>
            </FooterTab>
          </Footer> */}
        </Container>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff'
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  text: {
    color: '#fff',
    fontSize: 36
  }
})

export default Donate
