import React from 'react'
import Block from 'components/Block'
import { Text } from 'native-base'
import { Audio } from 'expo-av'
import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/FontAwesome5'

import { msToStr } from './utils'
import Theme from 'themes/default'
import Touchable from 'components/Touchable'

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

export default class MessageAudio extends React.Component {
  state = {
    isPlaying: false,
    finished: false,
    currentPosition: 0,
    totalDuration: 0,
  }

  async componentDidMount() {
    this.soundObject = new Audio.Sound()
    await this.soundObject.loadAsync({ uri: this.props.audio })

    this.soundObject.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
  }

  onPlaybackStatusUpdate = status => {
    const totalDuration = this.state.totalDuration
    let changes = {
      currentPosition: status.positionMillis,
    }

    if (!totalDuration) {
      changes.totalDuration = status.durationMillis
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
