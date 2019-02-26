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
            style={{ borderWidth: 1, borderColor: 'red' }}
            dotActiveStyle={{ backgroundColor: '#1B82D2' }}
          >
            <View
              style={{
                flexDirection: 'row',
                // width: wp('90%'),
                paddingLeft: wp('5%'),
                flexWrap: 'wrap'
              }}
            >
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.iconItem}>
                  <Icon name="meishi" style={styles.icon} onPress={() => console.log('weibo')} />
                  <Text>美食</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text>Content of Second Tab</Text>
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
  }
})

export const title = 'Tabs'
export const description = 'Tabs example'
