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
import debounce from 'lodash/debounce'

const Button = styled(Touchable)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15,
  height: 30,
  width: 30,
})

function FileReaderPromise(file) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    var fr = new FileReader()
    fr.onload = () => resolve(fr.result)
    fr.onerror = reject
    fr.readAsDataURL(file)
  })
}

function AudioButton(props) {
  return (
    <Button onPress={props.onPress}>
      <Icon name={props.icon} color={Theme.COLORS.PRIMARY} />
    </Button>
  )
}

class MessageAudio extends React.Component {
  sound = null

  state = {
    isLoaded: false,
    isLoading: false,
    isPlaying: false,
    finished: false,
    currentPosition: null,
    totalDuration: null,
    isPlaybackAllowed: false,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState
  }

  loadSound = debounce(async () => {
    if (!this.state.isLoaded) {
      const res = await this.props.api
        .historicoMedia({
          NombreArchivo: this.props.nombreArchivo,
        })
        .catch(err => console.info('historicoMedia', err))

      const result = await FileReaderPromise(res)
      const { sound /* , status */ } = await Audio.Sound.createAsync(
        { uri: result, overrideFileExtensionAndroid: 'mp3' },
        {
          isLooping: true,
        },
        this.onPlaybackStatusUpdate
      ).catch(err => {
        console.info('Error al crear sonido', this.props.nombreArchivo)
        console.info(result)
        console.info(err)
      })
      // console.info('onload', status)
      this.soundObject = sound
    }
  }, 1000)

  onPlaybackStatusUpdate = status => {
    // console.info('pbs', status)
    let changes = {}

    if (status.isLoaded) {
      changes.isPlaybackAllowed = true
      changes.totalDuration = status.durationMillis
      changes.isPlaying = status.isPlaying
      changes.isLoaded = status.isLoaded

      if (status.isPlaying) {
        changes.currentPosition = status.positionMillis
      }
      // if (status.didJustFinish) {
      //   changes.finished = true
      //   changes.currentPosition = status.positionMillis
      // }
    } else {
      changes.totalDuration = 0
      changes.currentPosition = 0
      if (status.error) {
        console.info(`FATAL PLAYER ERROR: ${status.error}`)
      }
    }
    // console.info('status pbs', changes)

    this.setState(changes)
  }

  toggleAudio = async () => {
    const { isPlaying } = this.state

    let changes = { isPlaying: !isPlaying }

    if (!isPlaying) {
      // if (!isLoaded) {
      //   await this.loadSound()
      // }

      // if (finished) {
      //   await this.soundObject.stopAsync()
      //   changes.finished = false
      // } else {
      //if (isPlaybackAllowed) {
      await this.soundObject.playAsync()
      // }
    } else {
      await this.soundObject.pauseAsync()
    }

    this.setState(changes)
  }

  render() {
    const { isPlaying, isLoaded, currentPosition, totalDuration } = this.state
    const text = isLoaded
      ? `${msToStr(currentPosition)} / ${msToStr(totalDuration)}`
      : 'Descargar'
    const icon = isLoaded
      ? !isPlaying
        ? 'play'
        : 'pause'
      : 'cloud-download-alt'
    const fn = isLoaded ? this.toggleAudio : this.loadSound

    return (
      <Block row>
        <AudioButton onPress={fn} icon={icon} />
        <Text style={{ lineHeight: 30 }}>{text}</Text>
      </Block>
    )
  }
}

export default connect(ctx => ({ api: ctx.api }))(MessageAudio)
