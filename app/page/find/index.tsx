import { SearchBar } from '@ant-design/react-native'
import React from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

import Icon from '@app/util/icon'
import BottomTab from '@components/find/BottomTab'
import IconTab from '@components/find/IconTab'
import StyleSheet from '@util/stylesheet'

export interface State {
  // phone: string
  // password: string
  // inputBorderColor: string
  // passCanSee: boolean
  searchValue: string
}

export interface Props {
  defalutProps: string
}

export default class SignIn extends React.Component<State> /*<Props, State>*/ {
  public state: State = {
    searchValue: ''
  }

  // private constructor(props: {}) {
  //   super(props);
  // }

  public render() {
    return (
      <View style={styles.root}>
        <SearchBar
          placeholder="输入你感兴趣的事"
          onSubmit={(value) => Alert.alert(value)}
          onCancel={() => this.setState({ searchValue: '' })}
          onChange={(value) => {
            this.setState({ value })
          }}
        />
        <View style={{ flex: 1 }}>
          <IconTab />
        </View>
        <View style={{ flex: 2 }}>
          <BottomTab />
        </View>
      </View>
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
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: 'red',
    height: hp('100%'),
    flex: 1,
    paddingTop: 20
  },
  container: {
    marginTop: hp('10%'),
    alignItems: 'center'
  },
  inputContainer: {
    height: 140,
    width: wp('90%'),
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'blue',
    marginTop: 10
  },
  passwd: {
    borderBottomColor: 'red'
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
