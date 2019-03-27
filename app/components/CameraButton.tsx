import React from 'react'
import {
  ActivityIndicator,
  Image,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native'

let ImagePicker = require('react-native-image-picker')
import Icon from 'react-native-vector-icons/Ionicons'

import { Toast } from 'native-base'

import FormData from 'form-data'

import api from '@api/index'

const options = {
  title: '选择图片',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '图片库',
  cameraType: 'back',
  mediaType: 'photo',
  videoQuality: 'high',
  durationLimit: 10,
  maxWidth: 600,
  maxHeight: 600,
  aspectX: 2,
  aspectY: 1,
  quality: 0.8,
  angle: 0,
  allowsEditing: false,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

interface Props {
  onFileUpload: (formData: any) => void
  removeFileUpload: (index: number) => void
  type?: any
  photos: Array<string>
  style?: any
  maxPhotoLength: number
}

interface State {
  loading: boolean
}

class CameraButton extends React.Component<Props, State> {
  public state: State = {
    loading: false
  }

  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <TouchableOpacity
        onPress={
          this.props.photos.length < this.props.maxPhotoLength
            ? this.showImagePicker.bind(this)
            : () =>
                Toast.show({
                  text: '不能再上传更多了哦',
                  type: 'danger'
                })
        }
        style={[this.props.style, styles.cameraBtn]}
      >
        <View>
          {this.renderItem()}
          {/* {conText} */}
        </View>
      </TouchableOpacity>
    )
  }

  public renderItem() {
    let photos = this.props.photos
    // console.log('photos', photos)
    return photos.length >= 1 ? (
      photos.slice(0, this.props.maxPhotoLength).map((item, index) => (
        <View key={index}>
          <Image
            source={{
              uri: item
            }}
            key={index}
            style={{ width: 65, height: 65 }}
          />
          <TouchableOpacity
            style={styles.countBox}
            onPress={() => {
              this.props.removeFileUpload(index)
            }}
          >
            {/* <Text style={styles.count}>{photos.length}</Text> */}
            {/* <Text style={styles.count}>×</Text> */}
            <Icon name="ios-close" style={{ color: '#FFF', fontSize: 24 }} />
          </TouchableOpacity>
        </View>
      ))
    ) : (
      <Icon name="md-camera" color="#aaa" size={34} />
    )
  }

  public showImagePicker() {
    ImagePicker.showImagePicker(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        let source

        if (Platform.OS === 'android') {
          source = { uri: response.uri, isStatic: true }
        } else {
          source = { uri: response.uri.replace('file://', ''), isStatic: true }
        }

        let file
        if (Platform.OS === 'android') {
          file = response.uri
        } else {
          file = response.uri.replace('file://', '')
        }

        this.setState({
          loading: true
        })
        let fileObject = { uri: file, type: 'application/octet-stream', name: response.fileName }
        let formData = new FormData()

        formData.append('file', fileObject) // you can append anyone.
        this.props.onFileUpload(formData)

        // const result = fetch('http://localhost:8080/upload', {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        //   method: 'post',
        //   body: formData,
        // });
        // console.log(file, response.fileName)
      }
    })
  }
}
const styles = StyleSheet.create({
  cameraBtn: {
    padding: 5
  },
  count: {
    color: '#fff',
    fontSize: 12
  },
  fullBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  countBox: {
    position: 'absolute',
    right: -5,
    top: -5,
    alignItems: 'center',
    backgroundColor: 'red',
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    zIndex: 99
  }
})

export default CameraButton
