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

import CameraButton from '@app/components/CameraButton'

import api from '@api/index'
export interface State {
  inputContent: string | undefined
  photos: Array<string>
}

interface Props extends NavigationScreenProps {}
class Publish extends React.Component<Props, State> {
  public state: State = {
    inputContent: '',
    photos: []
  }

  public constructor(props: Props) {
    super(props)
  }
  public componentDidMount() {
    this.props.navigation.setParams({ publish: this.publish })
    console.log(this.state.inputContent)
  }
  public publish = () => {
    console.log(this.state.inputContent)
    // console.log(this.props.navigation)
    // console.log('publish内部')
  }

  public uploadAvtar(formData: any) {
    api.file.upload(formData).then((res) => {
      // console.log(res)
      this.setState(
        {
          photos: this.state.photos.concat(res.data.data)
        }
        // () => console.log(this.state.photos)
      )
    })
  }

  public removeAvtar(index: number) {
    this.state.photos.splice(index, 1)
    this.setState(
      {
        photos: this.state.photos
      },
      // () => console.log(this.state.photos)
    )
    // console.log(this.state.photos.splice(index, 1))
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
          <View
            style={{
              width: wp('83%'),
              /* borderWidth: 1, borderColor: 'red',*/ marginTop: 5,
              flexDirection: 'row'
            }}
          >
            <CameraButton
              style={{ width: 65, height: 65 }}
              photos={this.state.photos}
              maxPhotoLength={9}
              onFileUpload={this.uploadAvtar.bind(this)}
              removeFileUpload={this.removeAvtar.bind(this)}
            />
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
    // borderWidth: 1,
    // borderColor: 'red',
    height: hp('100%')
  }
})

export default Publish
