import React from 'react'
import { Alert } from 'react-native'
import { Audio } from 'expo-av'
import * as Permissions from 'expo-permissions'
import Icon from 'components/Icon'
import Touchable from 'components/Touchable'
import { CONTENIDO } from './Actions'

export default class ButtonAudio extends React.Component {
  recording = new Audio.Recording()

  state = {
    recording: false,
    icon: 'microphone',
    fileUrl: null,
  }

  startRecording = async () => {
    let { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
    if (status !== 'granted') {
      return
    }

    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false,
        staysActiveInBackground: true,
      })

      await this.recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY
      )
      await this.recording.startAsync()
      this.setState({ icon: 'stop', recording: true })
    } catch (error) {
      Alert.alert('Error', error.message)
      console.info('Error Start', error.message)
    }
  }

  stopRecording = async () => {
    try {
      await this.recording.stopAndUnloadAsync()
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        playsInSilentLockedModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false,
        staysActiveInBackground: true,
      })
    } catch (error) {
      Alert.alert('Error', error.message)
      console.info('Error Stop', error.message)
    }

    const fileUrl = this.recording.getURI()

    this.setState({ recording: false, fileUrl, icon: 'microphone' })
    this.recording = new Audio.Recording()

    this.props.onPress({
      file: fileUrl,
      type: CONTENIDO.audio,
    })
  }

  getAudio = async () => {
    const recording = this.state.recording
    if (!recording) {
      await this.startRecording()
    } else {
      await this.stopRecording()
    }
  }

  render() {
    return (
      <Touchable onPress={this.getAudio}>
        <Icon name={this.state.icon} primary />
      </Touchable>
    )
  }
}
