/* tslint:disable:no-console */
import { Tabs } from '@ant-design/react-native'
import { Icon } from 'native-base'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

import getTimeDiff from '@util/time'
import DeviceInfo from 'react-native-device-info'
const deviceName = DeviceInfo.getDeviceName()
import Item from '@ant-design/react-native/lib/list/ListItem'
import CommentListItem from '@components/CommentListItem'

interface Props {
  commentList: any
  fresh: Function
}

export default class Comment extends React.Component<Props, any> {
  public constructor(props: Props) {
    super(props)
    // console.log(this.props.commentList)
  }

  public renderContent = (type: string) => {
    const content = this.props.commentList.map((item: any, index: number) => {
      if (item.commentType === type && item !== undefined) {
        // console.log('内部',item)
        return (
          <CommentListItem
            avatarUri={item.usermeta.avatar}
            nickname={item.usermeta.nickname}
            tag={item.usermeta.job}
            postTime={getTimeDiff(item.commentDate)}
            commentContent={item.commentContent}
            usermeta={item.usermeta}
            commentId={item.commentId}
            // deviceName={item.}
            key={index}
            fresh={() => this.props.fresh()}
          />
        )
      } else {
        return null
      }
    })
    // console.log(type,content)
    // console.log(type,content.every((item:any) => item=== null))
    return content
    // return <View style={{ backgroundColor: '#fff' }}></View>
  }

  public noData() {
    return (
      <View
        style={{ justifyContent: 'center', alignItems: 'center', width: wp('100%'), padding: 30 }}
      >
        <Icon name="cube" style={{ fontSize: 40 }} />
        <Text style={{ fontSize: 24 }}>无数据</Text>
      </View>
    )
  }

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
          <Tabs tabs={tabs2} initialPage={0} tabBarPosition="top">
            <View style={{ backgroundColor: '#fff' }}>
              {this.renderContent('comment').every((item: any) => item === null)
                ? this.noData()
                : this.renderContent('comment').filter((item: any) => item !== null)}
            </View>
            <View style={{ backgroundColor: '#fff' }}>
              {this.renderContent('share').every((item: any) => item === null)
                ? this.noData()
                : this.renderContent('share').filter((item: any) => item !== null)}
            </View>
            {/* {this.renderContent('comment')}
            {this.renderContent('share')} */}
          </Tabs>
        </View>
      </View>
    )
  }
}

export const title = 'Tabs'
export const description = 'Tabs example'
