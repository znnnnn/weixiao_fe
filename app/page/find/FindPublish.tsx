import {
  Button,
  ImagePicker,
  InputItem,
  List,
  Provider,
  TextareaItem,
  Toast
} from '@ant-design/react-native'
import Icon from '@app/util/icon'
import px2dp from '@util/px2dp'
import StyleSheet from '@util/stylesheet'
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
import { NavigationScreenProps, withNavigation } from 'react-navigation'

export interface State {
  inputContent: string | undefined
  images: { url: string; id: string }[]
}

interface Props extends NavigationScreenProps {
}
class FindPublish extends React.Component<Props, State> {
  
  public state: State = {
    inputContent: '',
    images: [
      {
        url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
        id: '2121'
      },
      {
        url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
        id: '2122'
      }
    ]
  }

  public constructor(props: Props) {
    super(props)
  }
  public componentDidMount() {
    // this.props.navigation.setParams({ publish: this.publish })
    // console.log(this.state.inputContent)
    // console.log(this.props.navigation.getParam('headerTitle'))
    console.log(this.props.navigation)
  }

  public publish = () => {
    console.log(this.state.inputContent)
    console.log('publish内部')
  }

  public handleFileChange = (images: any) => {
    if (this.state.images.length <= 8) {
      this.setState({
        images
      })
    } else {
      Toast.info('最多只能上传9张图片哦^_^')
    }
  }

  public render() {
    return (
      <Provider>
        <View style={styles.root}>
          <TextareaItem
            placeholder="这一刻你想说..."
            count={1000}
            onChange={(value) =>
              this.setState({
                inputContent: value
              })
            }
            clear={true}
            rows={4}
            style={{ height: 200, width: wp('100%') }}
          />
          <View style={{ width: wp('83%'), borderWidth: 1, borderColor: 'red', marginTop: 5 }}>
            <ImagePicker onChange={this.handleFileChange} files={this.state.images} />
          </View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'red',
    height: hp('100%')
  }
})

export default FindPublish
