import React from 'react'
import { Button, Item, Input, Icon } from 'native-base'
import { Dimensions } from 'react-native'
import Block from 'components/Block'

const { width } = Dimensions.get('screen')

export default class MessageInput extends React.Component {
  state = {
    text: null,
  }

  changeMessage = async text => {
    this.setState({ text })
  }

  sendText = async () => {
    const text = this.state.text

    if (text) {
      this.props.onPress({
        content: this.state.text,
        type: 'text',
      })
      this.setState({ text: null })
    }
  }

  render() {
    return (
      <Block style={{ height: 40, padding: 10, paddingTop: 0 }}>
        <Item regular>
          <Input
            placeholder="Escribe el mensaje"
            style={{
              width: width - 25 - 30,
              backgroundColor: '#fff',
              fontSize: 14,
            }}
            underlineColorAndroid="transparent"
          />
        </Item>
        {/* <TextInput
          value={this.state.text}
          underlineColorAndroid="transparent"
          multiline
          // onFocus={this.onFocus(true)}
          // onBlur={this.onFocus(false)}
          onChangeText={this.changeMessage}
          // onContentSizeChange={event => {
            //   this.setState({ height: event.nativeEvent.contentSize.height })
            // }}
            style={{
              width: width - 25 - 30,
              // height: Math.max(35, this.state.height),
              padding: 5,
              marginRight: 5,
              borderRadius: 5,
              backgroundColor: '#fff',
              fontSize: 14,
            }}
          /> */}

        <Button onPress={this.sendText}>
          <Icon name="paper-plane" type="FontAwesome5" />
        </Button>
      </Block>
    )
  }
}
