import { Body, Container, Content, Text, Thumbnail } from 'native-base'
import React, { Component } from 'react'

export default class DonateOfMine extends Component {
  public render() {
    return (
      <Container>
        <Content>
          <Body>
            <Thumbnail
              source={{ uri: 'http://111.231.116.130/wp-content/uploads/2019/03/3.jpg' }}
            />
            <Text>znnnnn</Text>
          </Body>
        </Content>
      </Container>
    )
  }
}
