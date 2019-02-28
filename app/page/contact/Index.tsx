import { Button, Container, Content, Header, Icon, List, Text } from 'native-base'
import React, { Component } from 'react'
import { ListView,ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho'
]

const data = [
  {
    name: 'Amy Farha',
    avatar_url: 'http://111.231.116.130/wp-content/uploads/2019/02/googlelogo_color_272x92dp.png',
    msg: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    msg: 'Vice Chairman'
  }
]
export default class SwipeableListExample extends Component {
  public constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      basic: true,
      listViewData: data
    }
  }
  public deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow()
    const newData = [...this.state.listViewData]
    newData.splice(rowId, 1)
    this.setState({ listViewData: newData })
  }
  public render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    return (
      <ScrollView>
        <ListItem
          title={'团学'}
          // subtitle={item.subtitle}
          leftAvatar={{ source: require('@image/contact/tuanxue.png') }}
          bottomDivider
        />
        <ListItem
          title={'社团'}
          // subtitle={item.subtitle}
          leftAvatar={{ source: require('@image/contact/shetuan.png') }}
        />
        <ListItem
          title={'工作室'}
          // subtitle={item.subtitle}
          leftAvatar={{ source: require('@image/contact/gongzuoshi.png') }}
          bottomDivider
        />
        <ListItem
          title={'校友圈'}
          // subtitle={item.subtitle}
          leftAvatar={{ source: require('@image/contact/xiaoyouquan.png') }}
          bottomDivider
        />
        <Content>
          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={(data) => (
              <ListItem
                title={data.name}
                subtitle={data.msg}
                subtitleStyle={{ color: '#848484' }}
                leftAvatar={{ source: { uri: data.avatar_url } }}
                badge={{ value: 3 }}
                rightTitle={new Date().getTime()}
                bottomDivider
              />
            )}
            renderLeftHiddenRow={(data) => (
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>
            )}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button full danger onPress={(_) => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>
            )}
          />
        </Content>
      </ScrollView>
    )
  }
}
