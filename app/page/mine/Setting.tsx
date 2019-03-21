import { Checkbox, ImagePicker, List, Picker, Provider } from '@ant-design/react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Right,
  Root,
  Switch,
  Text,
  Textarea,
  Toast,
  View
} from 'native-base'
import { Alert, AppRegistry,AsyncStorage } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import React, { Component } from 'react'

import actions from '@store/action/Index'
import { connect } from 'react-redux'
interface Props extends NavigationScreenProps {
  handleLogout: Function
}
class Setting extends Component<Props> {
  public constructor(props: Props) {
    super(props)
  }

  public _removeAsynToken = async () => {
    try {
      const value = await AsyncStorage.removeItem('token');
    } catch (error) {
      // Error retrieving data
    }
  };

  public render() {
    return (
        <Container>
          <Content>
            <List>
              <ListItem onPress={() => this.props.navigation.navigate('账号安全')}>
                <Left>
                  <Text>账号安全</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem itemDivider />
              <ListItem onPress={() => this.props.navigation.navigate('通用')}>
                <Left>
                  <Text>通用</Text>
                </Left>
              </ListItem>
              <ListItem
                onPress={() =>
                  Toast.show({
                    text: '清除缓存成功！',
                    type: 'success',
                    // textStyle: {
                    //   textAlign: 'center'
                    // },
                    position: 'bottom'
                  })
                }
              >
                <Left>
                  <Text>清除缓存</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('关于微校')}>
                <Left>
                  <Text>关于微校</Text>
                </Left>
              </ListItem>
              <ListItem itemDivider />
              <ListItem onPress={() => {
                this._removeAsynToken()
                this.props.handleLogout()
                this.props.navigation.navigate('登录')
              }}>
                <Left>
                  <Text>退出</Text>
                </Left>
              </ListItem>
            </List>
          </Content>
        </Container>
    )
  }
}


const mapStateToProps = (state: any): Object => {
  console.log(state)
  return {
    // 获取 state 变化
    token: state.handleLogin.token
  }
}

// 发送行为
let handleLogout = actions.login.handleLogout
const mapDispatchToProps = {
  handleLogout
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)


AppRegistry.registerComponent('Setting', () => Setting);