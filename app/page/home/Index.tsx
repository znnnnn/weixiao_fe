import { Button, InputItem, List, Provider } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import Avatar from '@components/home/Avatar'
import PostUserCard from '@components/home/PostUserCard'
// import {AliyunOSS} from 'react-native-aliyun-oss'

import px2dp from '@util/px2dp'

import PostCard from '@app/components/home/PostCard'
import StyleSheet from '@util/stylesheet'
import { Container, Content, Toast } from 'native-base'
import React from 'react'
import { AsyncStorage, ScrollView, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'

import actions from '@store/action/Index'
import { connect } from 'react-redux'

export interface State {
  phone: string
  password: string
  inputBorderColor: string
  passCanSee: boolean
}

export interface Props extends NavigationScreenProps {
  handleLogin: Function
  token: string
}

class Home extends React.Component<Props, State> {
  public state: State = {
    phone: '',
    password: '',
    inputBorderColor: '#EEEEEE',
    passCanSee: true
  }

  public constructor(props: Props) {
    super(props)
    // console.log(this.props.token)
  }

  public _getAsynToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      console.log('token AsyncStorage', value)
      if (value !== null) {
        // We have data!!
        this.props.handleLogin(value)
        // return value
        this.props.navigation.navigate('用户中心')
      } else {
        this.props.navigation.navigate('登录')
        setTimeout(() => Toast.show({
          text: '您还没有登录哦',
          type: 'danger'
        }), 700)
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  public componentWillMount(){
    this._getAsynToken()
  }

  public render() {
    return (
      <Provider>
        <Container style={styles.root}>
          <View
            style={{
              paddingTop: 10,
              backgroundColor: '#fff',
              height: 90,
              borderBottomWidth: 1,
              borderBottomColor: '#f0f0f0'
            }}
          >
            {/* <Button onPress={() => console.log(this.props.token)}>
              <Text>111111111</Text>
            </Button> */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              // style={{ borderColor: 'green', borderWidth: 1 }}
            >
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
              <Avatar uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
            </ScrollView>
          </View>
          <Content>
            <PostCard />
            <PostCard />
            <PostCard />
          </Content>
        </Container>
      </Provider>
    )
  }

  private inputItemFocus(): void {
    this.setState({
      inputBorderColor: '#29A1F7'
    })
  }

  private inputItemBlur(): void {
    this.setState({
      inputBorderColor: '#EEEEEE'
    })
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    height: hp('100%')
  },
  container: {
    marginTop: hp('10%'),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red'
  },
  inputContainer: {
    height: 140,
    width: wp('90%'),
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'blue',
    marginTop: 10
  },
  loginBtn: {
    borderRadius: 20,
    width: wp('80'),
    marginTop: 20
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 20,
    fontSize: 10
  },
  socialLogin: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  social: {
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  visitor: {
    marginTop: 20,
    justifyContent: 'center',
    fontSize: 16,
    color: '#333',
    marginBottom: 20
  }
})

const mapStateToProps = (state: any): Object => {
  console.log(state)
  return {
    // 获取 state 变化
    token: state.handleLogin.token
  }
}

// 发送行为
let handleLogin = actions.login.handleLogin
const mapDispatchToProps = {
  handleLogin
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
