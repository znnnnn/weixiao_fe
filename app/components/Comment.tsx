/* tslint:disable:no-console */
import { Tabs } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()
import CommentListItem from '@components/CommentListItem'

const renderContent = (tab: any, index: any) => {
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map((i,index) => {
    return (
      <CommentListItem
        avatarUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
        nickname="Alice"
        tag="工程师"
        postTime={getTimeDiff(1356470770)}
        deviceName={deviceName}
        key={index}
      />
    )
  })
  return <View style={{ backgroundColor: '#fff' }}>{content}</View>
}

export default class Comment extends React.Component<any, any> {
  public render() {
    // const tabs = [{ title: 'First Tab' }, { title: 'Second Tab' }, { title: 'Third Tab' }]
    const tabs2 = [{ title: '评论' }, { title: '转发' }]
    // const style = {
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   height: 150,
    //   backgroundColor: '#fff'
    // } as any
    return (
      <View style={{ flex: 1 }}>
        {/* <Tabs tabs={tabs}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs> */}
        <View style={{ flex: 2 }}>
          <Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">
            {renderContent}
          </Tabs>
        </View>
      </View>
    )
  }
}

export const title = 'Tabs'
export const description = 'Tabs example'
