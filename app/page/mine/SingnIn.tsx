import { Component } from 'react'
import { StyleSheet } from 'app/util/stylesheet'

import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Button, InputItem } from '@ant-design/react-native';
import { string } from 'prop-types';


interface State {
  name: string,
  password: string
}

interface Props {
}

export default class BasicInputItemExample extends React.Component<Props, State> {

  public readonly state: Readonly<State> = {
    name: '',
    password: ''
  }

  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <InputItem
          clear
          type="phone"
          value={this.state.name}
          onChange={value => {
            this.setState({
              name: value,
            });
          }}
          editable={true}
          disabled={false}
          placeholder="手机号"
        >
        </InputItem>

        <InputItem
          clear
          type="password"
          value={this.state.password}
          onChange={value => {
            this.setState({
              password: value,
            });
          }}
          placeholder="密码"
        >
          密码
          </InputItem>
        <Button type="primary" style={{ margin: 5 }}>登录</Button>
      </ScrollView>
    );
  }
}

// styles

const styles = StyleSheet.create({
  loginBtn:{
    width: 400,
    borderRadius: 10
  }
});