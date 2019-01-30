import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View ,Text} from 'react-native';
import Button from '@ant-design/react-native/lib/button';

export default class Test extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Button>Start</Button>
    )
  }
}
