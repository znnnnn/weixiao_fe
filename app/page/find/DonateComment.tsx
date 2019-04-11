import { Button, Container, Content, Text, Textarea, Toast } from 'native-base'
import React, { Component } from 'react'

import { NavigationScreenProps, withNavigation } from 'react-navigation'
interface Props extends NavigationScreenProps {}
export default class DonateComment extends Component<Props> {
  public constructor(props: Props) {
    super(props)
  }
  public render() {
    return (
      <Container>
        <Content padder>
          <Textarea bordered rowSpan={5} placeholder="写下你的爱心留言，把爱带给大家~" />
          <Button
            success
            block
            style={{ marginTop: 15 }}
            onPress={() => {
              Toast.show({ text: '留言成功！', type: 'success' })
              this.props.navigation.navigate('捐赠')
            }}
          >
            <Text>提交留言</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
