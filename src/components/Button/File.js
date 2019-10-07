import React from 'react'
import { Alert } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import RoundedButton from '../RoundedButton'

export default class FileButton extends React.Component {
  _pickDoc = async () => {
    let result
    try {
      result = await DocumentPicker.getDocumentAsync({
        // type: 'application/pdf',
        type: '*/*',
        copyToCacheDirectory: false,
      })
    } catch (error) {
      console.error(error)
      Alert.alert(error.message)
    }

    if (result.type === 'success') {
      this.props.onPress({
        file: result.uri,
        content: result.name,
        type: 'file',
      })
    }
  }
  render() {
    return <RoundedButton onPress={this._pickDoc} icon="file" />
  }
}
