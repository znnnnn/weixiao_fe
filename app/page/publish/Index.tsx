import { Button, InputItem, List, TextareaItem } from '@ant-design/react-native'
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
}

export interface Props extends NavigationScreenProps {
  defaultProps: ''
}

class Publish extends React.Component<Props, State> {
  public state: State = {
    inputContent: ''
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
    console.log('publish内部')
  }

  public render() {
    return (
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
      </View>
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

export default Publish
