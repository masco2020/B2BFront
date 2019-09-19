import React from 'react'
import { Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import RoundedButton from '../RoundedButton'

export default class GalleryButton extends React.Component {
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status !== 'granted') {
        Alert.alert('Se necesita este permiso para acceder a tus imagenes')
      }
    }
  }

  _pickImage = async () => {
    await this.getPermissionAsync()
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      // aspect: [4, 3],
    })

    if (!result.cancelled) {
      const { uri, width, height } = result

      this.props.onPress({
        image: { source: uri, width, height },
        type: 'image',
      })
    }
  }

  render() {
    return <RoundedButton onPress={this._pickImage} icon="image" />
  }
}
