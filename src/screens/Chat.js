import React from 'react'
import { FlatList, Text } from 'react-native'
import { ActionSheet } from 'native-base'

import Actions from 'components/Button/Actions'
import MessageInput from 'components/Button/Text'
import Block from 'components/Block'
import Message from 'components/Message'
import KeyboardSpacer from 'components/KeyboardSpacer'

const actionButtons = [
  { name: 'Cámara', action: Actions.takePhoto, icon: 'camera' },
  { name: 'Galería', action: Actions.getPhoto, icon: 'image' },
  { name: 'Documento', action: Actions.getFile, icon: 'file' },
  { name: 'Ubicación', action: Actions.getLocation, icon: 'map-marker-alt' },
]

class Chat extends React.Component {
  static defaultProps = {
    sendMessage() {},
    onLoadMore() {},
    onFilter() {},
    conversation: [],
  }

  onMoreActions = () => {
    ActionSheet.show(
      {
        options: actionButtons.map(button => button.name),
        title: 'Opciones',
      },
      buttonIndex => {
        if (actionButtons[buttonIndex]) {
          actionButtons[buttonIndex].action(this.props.sendMessage)
        }
      }
    )
  }

  scrollToEnd = tm => {
    setTimeout(() => {
      this.messagesBox.scrollToOffset({ offset: 0 })
    }, tm)
  }

  onScroll = event => {
    const convoBoxHeight = event.nativeEvent.layoutMeasurement.height
    const convoTotalHeight = event.nativeEvent.contentSize.height

    if (
      event.nativeEvent.contentOffset.y >
      convoTotalHeight - convoBoxHeight - 100
    ) {
      this.props.onLoadMore()
    }
  }

  renderEmpty = () => {
    return (
      <Block flex center middle>
        <Text>No hay mensajes</Text>
      </Block>
    )
  }

  render() {
    const hasMessages =
      this.props.conversation && this.props.conversation.length

    return (
      <Block flex style={{ backgroundColor: '#EBEBEB' }}>
        {(hasMessages && (
          <FlatList
            ref={list => (this.messagesBox = list)}
            style={{
              flex: 1,
              marginBottom: 10,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
            inverted={-1}
            keyExtractor={(o, i) => `message_${i}`}
            data={this.props.conversation}
            renderItem={Message}
            onScroll={this.onScroll}
          />
        )) ||
          this.renderEmpty()}
        <MessageInput
          onPress={this.props.sendMessage}
          onMoreActions={this.onMoreActions}
          onFilter={this.props.onFilter}
        />
        <KeyboardSpacer />
      </Block>
    )
  }
}

export default Chat
