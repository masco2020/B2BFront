import React from 'react';
import { Block } from 'galio-framework';

import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView
} from 'react-native';
import produce from 'immer';

import MessageInput from '../components/Button/Text';
import AudioButton from '../components/Button/Audio';
import CameraButton from '../components/Button/Camera';
import GalleryButton from '../components/Button/Gallery';
import FileButton from '../components/Button/File';
import LocationButton from '../components/Button/Location';
import { connect } from '../components/AppProvider';
import Message from '../components/Message';
import moreData from '../mockup/moreData';

class Chat extends React.Component {
  state = {
    opacity: 1,
    showScrollBottom: false
  };

  scrollToEnd = tm => {
    setTimeout(() => {
      this.messagesBox.scrollToOffset({ offset: 0 });
    }, tm);
  };

  _sendMessage = message => {
    this.props.setContext(
      produce(draft => {
        draft.app.conversation = [].concat(
          {
            user: { name: 'cevs' },
            timestamp: new Date(),
            isUser: true,
            content: '',
            ...message
          },
          draft.app.conversation
        );
      }),
      () => this.scrollToEnd(100)
    );
  };

  onFocusChange = focused => {
    this.setState({ opacity: focused ? 0 : 1 });
  };

  fetchMore = () => {
    setTimeout(() => {
      this.props.setContext(
        produce(draft => {
          draft.app.conversation = [].concat(
            draft.app.conversation,
            moreData
          );
          draft.app.loading = false;
        })
      );
    }, 2000);
  };

  onScroll = event => {
    const convoBoxHeight =
      event.nativeEvent.layoutMeasurement.height;
    const convoTotalHeight =
      event.nativeEvent.contentSize.height;
    const {
      loading,
      totalMessages,
      conversation
    } = this.props;

    if (
      event.nativeEvent.contentOffset.y >
        convoTotalHeight - convoBoxHeight - 100 &&
      !loading &&
      conversation.length < totalMessages
    ) {
      this.props.setContext(
        produce(draft => {
          draft.app.loading = true;
        })
      );

      // Mockup
      this.fetchMore();
    }
  };

  render() {
    const appLoading = this.props.loading;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          backgroundColor: '#ebebeb',
          paddingTop: 40
        }}
      >
        {appLoading && (
          <ActivityIndicator size="large" color="#d90112" />
        )}
        <FlatList
          ref={list => (this.messagesBox = list)}
          style={{
            flex: 1,
            marginBottom: 10,
            marginTop: 10,
            paddingHorizontal: 10
          }}
          inverted={-1}
          keyExtractor={(o, i) => `message_${i}`}
          data={this.props.conversation}
          renderItem={Message}
          onScroll={this.onScroll}
        />
        <Block
          row
          style={{
            height: 40,
            padding: 10,
            paddingTop: 0,
            marginBottom: 40
          }}
          space="between"
        >
          <MessageInput
            onPress={this._sendMessage}
            onFocusChange={this.onFocusChange}
          />
          <Block
            row
            style={{ opacity: this.state.opacity }}
          >
            <AudioButton onPress={this._sendMessage} />
            <CameraButton onPress={this._sendMessage} />
            <GalleryButton onPress={this._sendMessage} />
            <LocationButton onPress={this._sendMessage} />
            <FileButton onPress={this._sendMessage} />
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(ctx => ({
  conversation: ctx.context.app.conversation,
  loading: ctx.context.app.loading,
  totalMessages: ctx.context.app.totalMessages,
  setContext: ctx.setContext
}))(Chat);
