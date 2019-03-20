import { Button, InputItem, List, Provider, Toast } from '@ant-design/react-native'
import Icon from '@app/util/icon'
import Avatar from '@components/home/Avatar'
import PostUserCard from '@components/home/PostUserCard'
// import {AliyunOSS} from 'react-native-aliyun-oss'

import px2dp from '@util/px2dp'

import PostCard from '@app/components/home/PostCard'
import StyleSheet from '@util/stylesheet'
import { Container, Content } from 'native-base'
import React from 'react'
import {
  Alert,
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'

export interface State {
  phone: string
  password: string
  inputBorderColor: string
  passCanSee: boolean
}

export interface Props extends NavigationScreenProps {
  defalutProps: string
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

  public componentDidMount() {
    if (this.props.token === '') {
      // console.log('token:', this.props.token)
      // console.log()
      // axios.post('http://localhost:8080/user/login', {
      //   userLogin: '123',
      //   userPass: '123'
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });import AliyunOSS from 'react-native-aliyun-oss-cp'

      // AliyunOSS.enableOSSLog()
      // const config = {
      //   AccessKey: 'LTAICq734h6sfksn', // your accessKeyId
      //   SecretKey: 'U6zDeG1DcTb4I13JXbNOBGuA8ItUuv', // your accessKeySecret
      // }
      // const endPoint = 'oss-cn-shanghai.aliyuncs.com' // your endPoint
      // // 初始化阿里云组件
      // AliyunOSS.initWithKey(config, endPoint)
      // // upload config
      // const uploadConfig = {
      //   bucketName: 'oss-miaoroom', // your bucketName
      //   sourceFile: '../../image/404.png', // local file path
      //   ossFile: '/weixiao' // the file path uploaded to oss
      // }
      // // 上传进度
      // const uploadProgress = (p) => console.log(p.currentSize / p.totalSize)
      // // 增加上传事件监听
      // AliyunOSS.addEventListener('uploadProgress', uploadProgress)
      // // 执行上传
      // AliyunOSS.uploadObjectAsync(uploadConfig)
      //   .then((resp) => {
      //     // 去除事件监听
      //     AliyunOSS.removeEventListener('uploadProgress', uploadProgress)
      //     // 此处可以执行回调
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     // 执行失败回调
      //   })
      this.props.navigation.navigate('登录')
      // this.props.navigation.navigate('测试')
      // Toast.info('您还没有登录哦', 3, undefined, false)
    }
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
  return {
    // 获取 state 变化
    token: state.handleLogin.token
  }
}

// 发送行为
const mapDispatchToProps = (dispatch: any) => {
  return {
    // 发送行为
  }
}

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
