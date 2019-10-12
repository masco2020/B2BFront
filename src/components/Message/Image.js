import React from 'react'
import produce from 'immer'
import ImageView from 'react-native-image-view'

import { Image } from './utils'
import Touchable from 'components/Touchable'
import Block from 'components/Block'
import { connect } from 'components/AppProvider'

const broken = require('assets/broken.png')

class MessageImage extends React.Component {
  state = {
    visible: false,
    broken: false,
    uri: '',
  }

  // TODO: Revisar url de imagen
  componentDidMount() {
    this.props.api
      .historicoMedia({ NombreArchivo: this.props.nombreArchivo })
      .then(res => {
        this.setState({ uri: res })
      })
      .catch(() => {
        this.setState({ broken: true })
      })
  }

  toggleModal = () => {
    this.setState(
      produce(draft => {
        draft.visible = !draft.visible
      })
    )
  }

  render() {
    if (this.state.broken) {
      return (
        <Block center>
          <Image source={broken} style={{ height: 32, width: 32 }} />
        </Block>
      )
    }

    if (!this.state.uri) {
      return <Block style={{ height: 32 }} />
    }

    const images = [this.state.uri].map(i => ({
      source: { uri: i },
    }))

    return (
      <Block>
        <ImageView
          images={images}
          imageIndex={0}
          onClose={this.toggleModal}
          isVisible={this.state.visible}
        />
        <Touchable
          onPress={this.toggleModal}
          style={{ width: 200, height: 100 }}>
          <Image source={{ uri: this.state.uri, width: 200, height: 100 }} />
        </Touchable>
      </Block>
    )
  }
}

export default connect(ctx => ({ api: ctx.api }))(MessageImage)
