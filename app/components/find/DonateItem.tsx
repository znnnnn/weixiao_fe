import { ListView } from '@ant-design/react-native'
import {
  H3,
  Left,
  List,
  ListItem,
  Right,
  Subtitle,
  Text,
  Thumbnail,
  Title,
  View
} from 'native-base'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import { ItemProps } from './BottomTabDonateItem'

interface Props extends NavigationScreenProps {
  data: ItemProps
}

const tagColor = ['#ff5e5c', '#ffbb50', '#1ac756', '#19B5FE', '#fb7da9', '#666', '#a26ff9']

export default withNavigation(
  class DonateItem extends React.Component<Props> {
    public constructor(props: Props) {
      super(props)
    }

    public render() {
      return (
        <ListItem
          style={{ flexDirection: 'row', flexWrap: 'wrap' }}
          onPress={() => this.props.navigation.navigate('捐赠')}
        >
          <Left style={{ flexDirection: 'column', width: wp('70%') }}>
            <Title style={{ fontSize: 18, color: '#3E3E3E', fontWeight: '400' }}>
              {this.props.data.title}
            </Title>
            <Text numberOfLines={2} style={styles.subTitle}>
              {this.props.data.subTitle}
            </Text>
            <Subtitle style={{ fontSize: 10, color: '#848484', lineHeight: 10, height: 10 }}>
              已有..
              <Text style={{ fontSize: 10, lineHeight: 10, height: 10, color: '#29A1F7' }}>
                {this.props.data.count}
              </Text>
              份爱心
            </Subtitle>
            {/* <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#29A1F7', fontSize: 10, alignSelf: 'flex-start' }}>
                已有{this.props.data.count}份爱心
              </Text>
            </View> */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 }}>
              {this.props.data.tag.map((item, index) => (
                <View
                  style={{ backgroundColor: tagColor[index % tagColor.length], padding: 4, margin: 4 }}
                  key={index}
                >
                  <Text style={{ color: '#fff', fontSize: 10 }}>{item}</Text>
                </View>
              ))}
            </View>
          </Left>
          <Right>
            <Thumbnail square large source={{ uri: this.props.data.thumb }} style={{}} />
          </Right>
        </ListItem>
      )
    }
  }
)

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 12,
    color: '#848484',
    lineHeight: 30,
    height: 30,
    flexWrap: 'wrap'
  }
})
