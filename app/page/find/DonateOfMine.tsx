import {
  Body,
  Button,
  Container,
  Content,
  H2,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  View
} from 'native-base'
import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

interface Props extends NavigationScreenProps {}
export default class DonateOfMine extends Component<Props> {
  public constructor(props: Props) {
    super(props)
  }
  public helpItem() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('捐赠详情', {
            headerTitle: '校园安全饮水计划'
          })
        }
        activeOpacity={0.7}
      >
        <View style={{ width: 150, marginRight: 10, shadowColor: '#333' }}>
          <Image
            style={{ height: 80, width: 150 }}
            source={{
              uri: 'http://111.231.116.130/wp-content/uploads/2019/03/microsoft_office_2019.jpg'
            }}
          />
          <Text
            numberOfLines={1}
            style={{ fontSize: 14, marginTop: 10, marginBottom: 5, color: '#3E3E3E' }}
          >
            校园安全饮水计划
          </Text>
          <Text note style={{ fontSize: 12 }}>
            已有<Text style={{ color: '#3CB881' }}>6575</Text>人帮助
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  public myLove() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            source={{
              uri: 'http://111.231.116.130/wp-content/uploads/2019/03/3.jpg'
            }}
          />
        </Left>
        <Body>
          <Text style={{ paddingBottom: 5 }}>校园安全饮水计划</Text>
          <Text numberOfLines={1}>
            <Text style={styles.itemText}>
              献爱心<Text style={styles.itemCount}>1次</Text>
            </Text>
            <Text style={styles.itemText}>
              献爱心<Text style={styles.itemCount}>1次</Text>
            </Text>
          </Text>
        </Body>
        <Right>
        <Button transparent onPress={()=>this.props.navigation.navigate('爱心留言')}>
          <Text>留言</Text>
        </Button>
      </Right>
      </ListItem>
    )
  }

  public render() {
    return (
      <Container>
        <Content>
          <Body
            style={{ height: 260, backgroundColor: '#01A15A', width: widthPercentageToDP('100%') }}
          >
            <View style={{ margin: 20, marginTop: 45 }}>
              <Thumbnail
                source={{ uri: 'http://111.231.116.130/wp-content/uploads/2019/03/3.jpg' }}
              />
              <Text style={{ color: '#fff', marginTop: 5 }}>znnnnn</Text>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
              <View style={styles.box}>
                <Text style={styles.text}>捐款总额（元）</Text>
                <Text style={styles.num}>10.00</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.text}>爱心次数（笔）</Text>
                <Text style={styles.num}>5</Text>
              </View>
            </View>
          </Body>
          <View style={{ padding: 20 }}>
            <H2 style={{ marginBottom: 15 }}>帮一帮</H2>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {this.helpItem()}
              {this.helpItem()}
              {this.helpItem()}
            </ScrollView>
          </View>
          <ListItem itemDivider />

          <View style={{ padding: 20 }}>
            <H2 style={{ marginBottom: 15 }}>我的爱心</H2>
            <List>
              {this.myLove()}
              {this.myLove()}
              {this.myLove()}
              {this.myLove()}
              {this.myLove()}
            </List>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#848484'
  },
  num: {
    color: '#E65555',
    marginTop: 10
  },
  box: {
    padding: 15,
    alignItems: 'center'
  },
  itemText: {
    color: '#848484',
    fontWeight: '300',
    fontSize: 12
  },
  itemCount: {
    fontSize: 12,
    color: '#3CB881'
  }
})
