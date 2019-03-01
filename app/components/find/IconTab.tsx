/* tslint:disable:no-console */
import { Carousel, Tabs } from '@ant-design/react-native'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()
import Icon from '@app/util/icon'

export default class IconTab extends React.Component<any, any> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 ,borderBottomWidth:1,borderBottomColor:'green'}}>
          <Carousel
            style={{ borderWidth: 1, borderColor: '#fff',borderBottomWidth:1,borderBottomColor:'red' }}
            dotActiveStyle={{ backgroundColor: '#1B82D2' }}
          >
            <View style={styles.tabs}>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Image style={styles.icon} source={require('@image/find/meishi.png')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Image style={styles.icon} source={require('@image/find/wanle.png')} />
                  <Text>玩乐</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                <Image style={styles.icon} source={require('@image/find/dianying.png')}></Image>
                  <Text>约电影</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                <Image style={styles.icon} source={require('@image/find/chifan.png')}></Image>
                  <Text>约吃饭</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                <Image style={styles.icon} source={require('@image/find/yanchu.png')}></Image>
                  <Text>演出</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                <Image style={styles.icon} source={require('@image/find/shetuan.png')}></Image>
                  <Text>社团活动</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                <Image style={styles.icon} source={require('@image/find/jiangzuo.png')}></Image>
                  <Text>讲座培训</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                <Image style={styles.icon} source={require('@image/find/chuyou.png')}></Image>
                  <Text>约出游</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                <Image style={styles.icon} source={require('@image/find/yundong.png')}></Image>
                  <Text>约运动</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                <Image style={styles.icon} source={require('@image/find/paoba.png')}></Image>
                  <Text>约泡吧</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.tabs}>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                <Image style={styles.icon} source={require('@image/find/gouwu.png')}></Image>
                  <Text>约购物</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                <Image style={styles.icon} source={require('@image/find/kaihei.png')}></Image>
                  <Text>约开黑</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Carousel>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconItem: {
    width: wp('90') / 5,
    alignItems: 'center',
    marginTop: 25,
    // marginBottom: 30
    borderWidth:1,
    borderColor: 'red'
  },
  icon: {
    fontSize: 24,
    color: '#D14747',
    width: 30,
    height: 30,
    margin: 4
  },
  tabs: {
    flexDirection: 'row',
    // width: wp('90%'),
    paddingLeft: wp('5%'),
    flexWrap: 'wrap',
    height:(hp('100%')-65)/3,
    // alignItems: '',
  }
})

export const title = 'Tabs'
export const description = 'Tabs example'
