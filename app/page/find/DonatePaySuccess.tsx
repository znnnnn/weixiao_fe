import { Body, Button, Container, Content,Text,View } from 'native-base'
import React, { Component } from 'react'
import {Image, ViewPropTypes} from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

interface Props extends NavigationScreenProps {}

export default class DonatePaySuccess extends Component<Props> {
  public constructor(props:Props){
    super(props)
  }
  public render() {
    return (
      <Container>
        <Content>
          <Body>
            <Image source={require('@image/find/DonatePaySuccess.jpg')} style={{marginTop: 30}}></Image>
            <Text style={{fontSize: 20,margin:15}}>感谢捐赠</Text>
            <Text note>校园安全饮水计划</Text>

          </Body>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Button transparent success onPress={()=>this.props.navigation.navigate('爱心留言')}>
              <Text>爱心留言</Text>
            </Button>

            <Button transparent success onPress={()=>this.props.navigation.navigate('我的捐赠')}>
              <Text>捐赠记录</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}
