import React from 'react'
import { TextInput, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

import RoundedButton from '../RoundedButton'

export default class MessageInput extends React.Component {
  state = {
    text: null,
    height: 0,
    textFocused: false
  }

  changeMessage = async text => {
    this.setState({ text })
  }

  sendText = async () => {
    const text = this.state.text

    if (text) {
      this.props.onPress({
        content: this.state.text,
        type: 'text'
      })
      this.setState({ text: null })
    }
  }

  onFocus = focused => () => {
    this.setState({
      textFocused: focused
    })
    this.props.onFocusChange(focused)
  }

  render() {
    const textFocused = this.state.textFocused ? 1 : 5

    return (
      <React.Fragment>
        <TextInput
          value={this.state.text}
          underlineColorAndroid="transparent"
          multiline
          placeholder="Escribir un mensaje"
          onFocus={this.onFocus(true)}
          onBlur={this.onFocus(false)}
          onChangeText={this.changeMessage}
          // onContentSizeChange={event => {
          //   this.setState({ height: event.nativeEvent.contentSize.height })
          // }}
          style={{
            width: width - 25 - 30 * textFocused,
            // height: Math.max(35, this.state.height),
            padding: 5,
            marginRight: 5,
            borderRadius: 8,
            backgroundColor: '#fff',
            borderColor: '#d90112',
            borderWidth: 1,
            fontSize: 14
          }}
        />
        {this.state.textFocused && (
          <RoundedButton onPress={this.sendText} icon="paper-plane" />
        )}
      </React.Fragment>
    )
  }
}
