import { Tabs } from '@ant-design/react-native'
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
import { Image, StyleSheet, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

interface Props extends NavigationScreenProps {
  defaultProps: string
}

const iconTab = [{ title: '主页' }, { title: '动态' }, { title: '视频图片' }]

export default class UserHome extends Component<Props> {
  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <Root>
        <Container>
          {/* <Separa
        +tor/> */}
          <Content>
            <View style={{ height: 165 }}>
              <Image source={require('@image/find/Detail/food.png')} style={styles.backImage} />
            </View>
            <Body>
              <Thumbnail
                large
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                }}
              />
              <Text>ZNNNNNNN</Text>
              <Text note style={{ fontSize: 12 }}>
                16级温州职业技术学院
              </Text>
              <Button
                style={{ margin: 5, alignSelf: 'center' }}
                small
                primary
                onPress={()=>this.props.navigation.navigate('编辑个人资料')}
              >
                <Text>编辑个人资料</Text>
              </Button>
              <View style={styles.underLine}>
                <Text style={{ fontSize: 12, color: '#3E3E3E' }}>
                  {1}关注 {12}粉丝 {2}动态 {0}收藏
                </Text>
              </View>
            </Body>
          <Tabs tabs={iconTab} initialPage={0} tabBarPosition="top">
            {/* {renderContent} */}
            <View
              style={{
                flexDirection: 'row',
                // width: wp('90%'),
                // paddingLeft: wp('5%'),
                flexWrap: 'wrap'
              }}
            >
             
            </View>
            <View>
              <Text>Content of Second Tab</Text>
            </View>
          </Tabs>
          </Content>
        </Container>
      </Root>
    )
  }
}

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    width: wp('100%'),
    height: 200,
    position: 'absolute'
  },
  underLine: {
    width: wp('90%'),
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5
  }
})
