import { Button, Container, Content, Header, Icon, List, Text } from 'native-base'
import React, { Component } from 'react'
import { ListView, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationScreenProps, withNavigation } from 'react-navigation'
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
    name: '张三',
    avatar_url: 'https://uploadbeta.com/api/pictures/random/',
    subtitle: '中国移动 浙江代理负责人'
  },
  {
    name: '李四',
    avatar_url: 'https://uploadbeta.com/api/pictures/random/',
    subtitle: '中石油 CEO'
  }
]

interface Props extends NavigationScreenProps {}
export default class ContactIndex extends Component<Props> {
  public constructor(props: Props) {
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
          onPress={() => this.props.navigation.navigate('通讯录', { part: '团学' })}
          bottomDivider
        />
        <ListItem
          title={'社团'}
          // subtitle={item.subtitle}
          leftAvatar={{ source: require('@image/contact/shetuan.png') }}
          onPress={() => this.props.navigation.navigate('通讯录', { part: '社团' })}
          bottomDivider
        />
        <ListItem
          title={'工作室'}
          // subtitle={item.subtitle}
          leftAvatar={{ source: require('@image/contact/gongzuoshi.png') }}
          onPress={() => this.props.navigation.navigate('通讯录', { part: '工作室' })}
          bottomDivider
        />
        <ListItem
          title={'校友圈'}
          // subtitle={item.subtitle}
          leftAvatar={{ source: require('@image/contact/xiaoyouquan.png') }}
          onPress={() => this.props.navigation.navigate('通讯录', { part: '校友圈' })}
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
                rightTitle={new Date().toLocaleDateString()}
                bottomDivider
                onPress={() =>
                  this.props.navigation.navigate('聊天', {
                    headerTitle: data.name
                  })
                }
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
