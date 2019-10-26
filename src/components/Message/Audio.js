import React from 'react'
import Block from 'components/Block'
import { Text } from 'native-base'
import { Audio } from 'expo-av'
import styled from 'styled-components/native'
import Icon from 'components/Icon'

import { msToStr } from './utils'
import Theme from 'themes/default'
import Touchable from 'components/Touchable'
import { connect } from 'components/AppProvider'

const Button = styled(Touchable)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15,
  height: 30,
  width: 30,
})

function AudioButton(props) {
  return (
    <Button onPress={props.onPress}>
      <Icon name={props.icon} color={Theme.COLORS.PRIMARY} />
    </Button>
  )
}

class MessageAudio extends React.Component {
  state = {
    isPlaying: false,
    finished: false,
    currentPosition: 0,
    totalDuration: 0,
  }

  async componentDidMount() {
    this.soundObject = new Audio.Sound()
    const res = await this.props.api.historicoMedia({
      NombreArchivo: this.props.nombreArchivo,
    })

    // eslint-disable-next-line no-undef
    const fileReaderInstance = new FileReader()
    fileReaderInstance.readAsDataURL(res)
    fileReaderInstance.onload = () => {
      this.soundObject
        .loadAsync({ uri: fileReaderInstance.result })
        .then(() => {
          this.soundObject.setOnPlaybackStatusUpdate(
            this.onPlaybackStatusUpdate
          )
        })
    }
  }

  onPlaybackStatusUpdate = status => {
    const totalDuration = this.state.totalDuration
    let changes = {
      currentPosition: status.positionMillis,
    }

    if (!totalDuration) {
      this.setState({ totalDuration: status.durationMillis })
      // changes.totalDuration = status.durationMillis
    }

    if (status.didJustFinish) {
      changes.isPlaying = false
      changes.finished = true
    }
    if (!status.isPlaying && !status.didJustFinish) {
      return
    }

    this.setState(changes)
  }

  toggleAudio = async () => {
    const isPlaying = this.state.isPlaying
    const finished = this.state.finished
    let changes = { isPlaying: !isPlaying }

    if (isPlaying) {
      await this.soundObject.pauseAsync()
    } else {
      if (finished) {
        changes.finished = false
        await this.soundObject.playFromPositionAsync(0)
      } else {
        await this.soundObject.playAsync()
      }
    }

    this.setState(changes)
  }

  render() {
    const { isPlaying, currentPosition, totalDuration } = this.state
    return (
      <Block row>
        <AudioButton
          onPress={this.toggleAudio}
          icon={!isPlaying ? 'play' : 'pause'}
        />
        <Text style={{ lineHeight: 30 }}>
          {msToStr(currentPosition)} / {msToStr(totalDuration)}
        </Text>
      </Block>
    )
  }
}

export default connect(ctx => ({ api: ctx.api }))(MessageAudio)
