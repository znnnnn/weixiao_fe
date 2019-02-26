/* tslint:disable:no-console */
import { Carousel, Tabs } from '@ant-design/react-native'
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

export default class IconTab extends React.Component<any, any> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Carousel
            style={{ borderWidth: 1, borderColor: '#fff' }}
            dotActiveStyle={{ backgroundColor: '#1B82D2' }}
          >
            <View style={styles.tabs}>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="wanju"
                    style={[styles.icon, { color: '#F7BE15' }]}
                    onPress={() => console.log('weibo')}
                  />
                  <Text>玩乐</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="dianying"
                    style={[styles.icon, { color: '#4ABC96' }]}
                    onPress={() => console.log('weibo')}
                  />
                  <Text>约电影</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="tubiaozhizuomoban_"
                    style={[styles.icon, { color: '#EC6646' }]}
                    onPress={() => console.log('weibo')}
                  />
                  <Text>约吃饭</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="xiaoyuanyanchu"
                    style={[styles.icon, { color: '#0072FF' }]}
                    onPress={() => console.log('weibo')}
                  />
                  <Text>演出</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="shetuanhuodong"
                    style={[styles.icon, { color: '#5BC1ED' }]}
                    onPress={() => console.log('weibo')}
                  />
                  <Text>社团活动</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="zhuanjiajiangzuo"
                    style={[styles.icon, { color: '#337180' }]}
                    onPress={() => console.log('weibo')}
                  />
                  <Text>讲座培训</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="lvyou"
                    style={[styles.icon, { color: '#0072FF' }]}
                    onPress={() => console.log('weibo')}
                  />
                  <Text>约出游</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="yundongfu"
                    style={[styles.icon, { color: '#A2D4DE' }]}
                    onPress={() => console.log('weibo')}
                  />
                  <Text>约运动</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="jiuba_iconguoyin__"
                    style={[styles.icon, { color: '#FFAA00' }]}
                    onPress={() => console.log('weibo')}
                  />
                  <Text>约泡吧</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.tabs}>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="gongzuojingyan"
                    style={[styles.icon, { color: '#FFAA00' }]}
                    onPress={() => console.log('weibo')}
                  />
                  <Text>约购物</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon
                    name="xingqiu"
                    style={[styles.icon, { color: '#3CB881' }]}
                    onPress={() => console.log('weibo')}
                  />
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
    marginTop: 20,
    marginBottom: 40
  },
  icon: {
    fontSize: 24,
    color: '#D14747'
  },
  tabs: {
    flexDirection: 'row',
    // width: wp('90%'),
    paddingLeft: wp('5%'),
    flexWrap: 'wrap'
  }
})

export const title = 'Tabs'
export const description = 'Tabs example'
