import React from 'react'
import { FlatList, KeyboardAvoidingView } from 'react-native'
import { ActionSheet } from 'native-base'

import Actions from 'components/Button/Actions'
import MessageInput from 'components/Button/Text'
import Message from 'components/Message'

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

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, backgroundColor: '#EBEBEB' }}>
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
        <MessageInput
          onPress={this.props.sendMessage}
          onMoreActions={this.onMoreActions}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default Chat
