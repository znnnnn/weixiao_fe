import {InputItem, List, Provider, Toast} from '@ant-design/react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Picker,
  Right,
  Text,
  Thumbnail,
} from 'native-base'

import React from 'react'
import {StyleSheet, Alert, Image, Linking, Platform, ScrollView, TouchableOpacity, View} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import {NavigationScreenProps} from 'react-navigation'

import {ItemProps} from '@components/find/BottomTabOfferItem'

export interface State {
  data: ItemProps[]
  selected: string
}

interface Props extends NavigationScreenProps {
}

class Offer extends React.Component<Props, State> {
  // public state: State = {}
  public constructor(props: Props) {
    super(props)
  }


  public render() {
    return (
      <Provider>
        <Container>
          <Header searchBar rounded>
            <Text note style={{textAlign: 'center'}}>为了营造一个可靠的求职环境，{'\n'}请招聘者先进行身份认证</Text>
          </Header>
          <Content>
            <View style={styles.stepContainer}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.step}>1</Text>
                <Text style={{margin: 10, color: '#29A1F7'}}>创建名片</Text>
              </View>
              <View style={styles.hr}/>
              <View style={{alignItems: 'center'}}>
                <Text style={[styles.step, {backgroundColor: '#5A83A2'}]}>2</Text>
                <Text style={{margin: 10, color: '#5A83A2'}}>实名认证</Text>
              </View>
            </View>
            <Button block style={{marginLeft: 15, marginRight: 15}}><Text>去认证</Text></Button>
          </Content>
        </Container>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  stepContainer: {flexDirection: 'row', margin: 50, alignSelf: 'center'},
  step: {
    color: '#fff',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#29A1F7',
    textAlign: 'center',
    lineHeight: 30,
    overflow: 'hidden',
    margin: 5
  },
  hr: {
    borderWidth: 1,
    borderColor: '#5A83A2',
    flexDirection: 'row',
    height: 0,
    width: 150,
    alignSelf: 'center',
    margin: 10,
  }

})

export default Offer
