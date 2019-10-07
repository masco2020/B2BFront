import React from 'react'
import { TouchableHighlight } from 'react-native'
import { Image } from './utils'
import Block from 'components/Block'

import produce from 'immer'
import ImageView from 'react-native-image-view'

export default class MessageImage extends React.Component {
  state = {
    visible: false,
  }

  toggleModal = () => {
    this.setState(
      produce(draft => {
        draft.visible = !draft.visible
      })
    )
  }

  render() {
    const images = [this.props.image].map(i => ({
      ...i,
      source: { uri: i.source },
    }))

    return (
      <Block>
        <ImageView
          images={images}
          imageIndex={0}
          onClose={this.toggleModal}
          isVisible={this.state.visible}
        />
        <TouchableHighlight
          onPress={this.toggleModal}
          style={{ width: 200, height: 100 }}>
          <Image
            source={{ uri: this.props.image.source, width: 200, height: 100 }}
          />
        </TouchableHighlight>
      </Block>
    )
  }
}
