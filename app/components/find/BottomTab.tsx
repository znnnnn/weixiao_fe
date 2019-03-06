/* tslint:disable:no-console */
import { Tabs } from '@ant-design/react-native'
import { H2, List } from 'native-base'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()
import Icon from '@app/util/icon'

import BottomTabDonateItem from './BottomTabDonateItem'
import BottomtabOfferItem from './BottomTabOfferItem'
import BottomTabTopicItem from './BottomTabTopicItem'

const renderContent = (tab: any, index: any) => {
  // const content = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
  //   return (
  //     <View>
  //       <Icon
  //         name="meishi"
  //         style={styles.icon}
  //         onPress={() => console.log('weibo')}
  //       />
  //       <Text>美食</Text>
  //     </View>
  //   )
  // })
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View>
        <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
        <Text>美食</Text>
      </View>
    </View>
  )
}

export default class IconTab extends React.Component<any, any> {
  public render() {
    // const tabs = [{ title: 'First Tab' }, { title: 'Second Tab' }, { title: 'Third Tab' }]
    const iconTab = [{ title: '话题' }, { title: '应聘' }, { title: '捐赠' }, { title: '二手交易' }]
    // const style = {
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   height: 150,
    //   backgroundColor: '#fff'
    // } as any
    return (
      <View
        style={{
          flex: 1
          // borderWidth: 1,
          // borderColor: 'green'
        }}
      >
        <View style={{ flex: 1 }}>
          <Tabs tabs={iconTab} initialPage={0} tabBarPosition="top">
            <List>
              <BottomTabTopicItem />
            </List>
            <List>
              <BottomTabDonateItem />
            </List>
            <List>
              <BottomtabOfferItem />
            </List>

            <View>
              <H2 style={{ alignSelf: 'center', marginTop: 150 }}>更多精彩即将到来^_^</H2>
            </View>
          </Tabs>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconItem: {
    width: wp('90') / 5,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  icon: {
    fontSize: 24,
    color: '#D14747'
  }
})

export const title = 'Tabs'
export const description = 'Tabs example'
