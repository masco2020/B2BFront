import React from 'react'
import { Item, Input } from 'native-base'
import Block from 'components/Block'
import Icon from 'components/Icon'
import Touchable from 'components/Touchable'
import RoundedButton from 'components/RoundedButton'
import { CONTENIDO } from './Actions'
import ButtonAudio from './Audio'

export default class MessageInput extends React.Component {
  state = {
    text: null,
  }

  changeMessage = text => {
    this.setState({ text })
  }

  sendText = async () => {
    const text = this.state.text

    if (text) {
      this.props.onPress({
        mensaje: this.state.text,
        type: CONTENIDO.mensaje,
      })
      this.setState({ text: null })
    }
  }

  render() {
    return (
      <Block row middle style={{ height: 40, padding: 10, paddingTop: 0 }}>
        <Block flex>
          <Item regular style={{ backgroundColor: '#fff', marginRight: 8, borderColor: 'red', borderRadius: 8}}>
            <Input
              style={{ fontSize: 14, paddingVertical: 0 }}
              onChangeText={this.changeMessage}
              value={this.state.text}
              placeholder="Escribe un mensaje"
              underlineColorAndroid="transparent"
            />
            <ButtonAudio onPress={this.props.onPress} />
            <Touchable onPress={this.props.onMoreActions}>
              <Icon name="paperclip" primary />
            </Touchable>
            <Touchable onPress={this.props.onFilter}>
              <Icon name="search" primary />
            </Touchable>
          </Item>
        </Block>
        <RoundedButton onPress={this.sendText} icon="paper-plane" />
      </Block>
    )
  }
}
