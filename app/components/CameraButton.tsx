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
  onFileUpload: Function
  type?: any
  photos: Array<string>
  style?: any
  maxPhotoLength: number
}

interface State {
  photos: Array<string>
  loading: boolean
}

class CameraButton extends React.Component<Props, State> {
  public state: State = {
    photos: this.props.photos.concat(),
    loading: false
  }

  public constructor(props: Props) {
    super(props)
  }

  public render() {
    const { photos, type } = this.props
    if (photos.length > 0) {
      let conText = (
        <View style={styles.countBox}>
          {/* <Text style={styles.count}>{photos.length}</Text> */}
          <Text style={styles.count}>×</Text>
        </View>
      )
    }
    return (
      <TouchableOpacity
        onPress={
          this.state.photos.length < this.props.maxPhotoLength
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
    let photos = this.state.photos
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
              console.log('state', this.state.photos)
              console.log(photos)
              // console.log(photos.pop())
              this.setState(
                {
                  photos: this.state.photos.splice(index + 1, 1)
                },
                () => console.log('this.state.photos', this.state.photos)
              )
            }}
          >
            {/* <Text style={styles.count}>{photos.length}</Text> */}
            {/* <Text style={styles.count}>×</Text> */}
            <Icon name="ios-close" style={{color:"#FFF",fontSize:24}} />
          </TouchableOpacity>
        </View>
      ))
    ) : (
      <Icon name="md-camera" color="#aaa" size={34} />
    )
  }

  public showImagePicker() {
    ImagePicker.showImagePicker(options, (response) => {
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
        // this.props.onFileUpload(file, response.fileName || '未命名文件.jpg').then((result) => {
        //   this.setState({
        //     loading: false
        //   })
        // })
        let fileObject = { uri: file, type: 'application/octet-stream', name: response.fileName }
        let formData = new FormData()

        formData.append('file', fileObject) // you can append anyone.
        // console.log('formData',formData)
        // console.log(formData.getHeaders)
        api.file.upload(formData).then((res) => {
          console.log(res.data.data)
          this.setState({
            photos: this.state.photos.concat(res.data.data)
          })
        })
        // console.log('avatar', url, data);
        // const result = fetch('http://localhost:8080/upload', {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        //   method: 'post',
        //   body: formData,
        // });
        console.log(file, response.fileName)
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
