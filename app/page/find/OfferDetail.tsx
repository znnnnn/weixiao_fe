import { InputItem, List } from '@ant-design/react-native'
import StyleSheet from '@util/stylesheet'
import {Button,Container, Content,Form, H1, Header, Icon, Input, Item, Text, View } from 'native-base'
import { number } from 'prop-types'
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

export interface State {
  name: string
  IDnumber: string
  phone: string
  code: string
}

export interface Props extends NavigationScreenProps {}

export default class OfferDetail extends React.Component<Props, State> {
  public state = {
    name: '',
    IDnumber: '',
    phone: '',
    code: ''
  }

  // private constructor(props: {}) {
  //   super(props);
  // }

  public render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <View>
              <H1>平面设计师</H1>

            </View>
          </Form>
        </Content>
      </Container>
    )
  }

  // private inputItemFocus(): void {
  //   this.setState({
  //     inputBorderColor: '#29A1F7'
  //   })
  // }

  // private inputItemBlur(): void {
  //   this.setState({
  //     inputBorderColor: '#EEEEEE'
  //   })
  // }
}

const styles = StyleSheet.create({})
