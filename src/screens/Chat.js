import React from 'react'
import { ActivityIndicator, FlatList, KeyboardAvoidingView } from 'react-native'
import { Fab, Icon, Button } from 'native-base'

import Block from 'components/Block'
import MessageInput from 'components/Button/Text'
import AudioButton from 'components/Button/Audio'
import CameraButton from 'components/Button/Camera'
import GalleryButton from 'components/Button/Gallery'
import FileButton from 'components/Button/File'
import LocationButton from 'components/Button/Location'
import Message from 'components/Message'
import Theme from 'themes/default'
import produce from 'immer'

class Chat extends React.Component {
  static defaultProps = {
    sendMessage() {},
    onLoadMore() {},
  }

  state = {
    opacity: 1,
    fabOpen: false,
    showScrollBottom: false,
  }

  onToggleFAB = () => {
    this.setState(
      produce(draft => {
        draft.fabOpen = !draft.fabOpen
      })
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
    const appLoading = this.props.loading

    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, backgroundColor: '#eee4dc' }}>
        {appLoading && <ActivityIndicator size="large" color="#0000ff" />}
        <Fab
          active={this.state.fabOpen}
          // direction="up" position="bottomRight"
          direction="down"
          position="topRight"
          style={{ backgroundColor: Theme.COLORS.PRIMARY }}
          onPress={this.onToggleFAB}>
          <Icon type="FontAwesome5" name="plus" />
          <Button>
            <Icon type="FontAwesome5" name="plus" />
            <Icon type="FontAwesome5" name="plus" />
            <Icon type="FontAwesome5" name="plus" />
          </Button>
          {/* <AudioButton onPress={this.props.sendMessage} />
          <CameraButton onPress={this.props.sendMessage} />
          <GalleryButton onPress={this.props.sendMessage} />
          <LocationButton onPress={this.props.sendMessage} />
          <FileButton onPress={this.props.sendMessage} /> */}
        </Fab>
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

        <MessageInput onPress={this.props.sendMessage} />
      </KeyboardAvoidingView>
    )
  }
}

export default Chat
