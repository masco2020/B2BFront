import React from 'react'
// import { Alert } from 'react-native'
import RoundedButton from '../RoundedButton'

export default class ButtonCamera extends React.Component {
  openCamera = () => {
    this.props.onPress({})
  }

  render() {
    return <RoundedButton onPress={this.openCamera} icon="camera" />
  }
}
