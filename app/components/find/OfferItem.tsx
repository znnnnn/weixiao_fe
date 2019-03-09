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
import { NavigationScreenProps, withNavigation } from 'react-navigation'
import { ItemProps } from './BottomTabOfferItem'

interface Props extends NavigationScreenProps {
data: ItemProps
}

export default withNavigation(class OfferItem extends React.Component<Props> {
  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <ListItem onPress={()=>this.props.navigation.navigate('招聘')}>
        <Left style={{ flexDirection: 'column' }}>
          <Title style={{ fontSize: 20, color: '#3E3E3E', fontWeight: '400' }}>
            {this.props.data.job}
          </Title>
          <Subtitle>
            <Text note style={styles.subTitle}>
              {this.props.data.address.value}
              {this.props.data.address.children.value ? ` · ${this.props.data.address.children.value}` : ``}
            </Text>
            <Text style={styles.subTitle}> | </Text>
            <Text note style={styles.subTitle}>
              {this.props.data.experience}
            </Text>
            <Text style={styles.subTitle}> | </Text>
            <Text note style={styles.subTitle}>
              {this.props.data.edu}
            </Text>
          </Subtitle>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Thumbnail small source={{ uri: this.props.data.thumb }} />
            <Text style={{ marginLeft: 10, color: '#3E3E3E' }}>
              {this.props.data.HR} {this.props.data.HRPosition ? ` · ${this.props.data.HRPosition}` : ``}
            </Text>
          </View>
        </Left>
        <Right>
          <H3 style={{ color: '#1B82D2' }}>{this.props.data.salary}</H3>
        </Right>
      </ListItem>
    )
  }
})

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 12,
    color: '#848484',
    lineHeight: 30,
    height: 30
  }
})
