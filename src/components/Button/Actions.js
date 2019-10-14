import { Alert } from 'react-native'
import Constants from 'expo-constants'
import * as DocumentPicker from 'expo-document-picker'
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

export const CONTENIDO = {
  mensaje: 1,
  imagen: 2,
  audio: 3,
  documento: 4,
  ubicacion: 5,
}

export default class Actions {
  /**
   * @private
   */
  static _getCameraPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA)
      if (status !== 'granted') {
        Alert.alert('Se necesita este permiso para acceder a la cámara')
      }
    }
  }

  /**
   * @private
   */
  static _getGalleryPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status !== 'granted') {
        Alert.alert('Se necesita este permiso para acceder a tus imagenes')
      }
    }
  }

  static takePhoto = async onPress => {
    await this._getCameraPermission()

    let result = await ImagePicker.launchCameraAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: false,
      // aspect: [4, 3],
    })

    if (!result.cancelled) {
      // const { uri, height, width } = result
      onPress({ type: CONTENIDO.imagen, file: result.uri })
    }
  }

  static getFile = async onPress => {
    let result
    try {
      result = await DocumentPicker.getDocumentAsync({
        // type: 'application/pdf',
        type: '*/*',
        copyToCacheDirectory: true,
      })
    } catch (error) {
      console.error(error)
      Alert.alert(error.message)
    }

    if (result.type === 'success') {
      onPress({
        type: CONTENIDO.documento,
        file: result.uri,
        mensaje: result.name,
      })
    }
  }

  static getPhoto = async onPress => {
    await this._getGalleryPermission()
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      // aspect: [4, 3],
    })

    if (!result.cancelled) {
      // const { uri, width, height } = result
      onPress({
        file: result.uri,
        type: CONTENIDO.imagen,
      })
    }
  }

  static getLocation = async onPress => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({}).catch(error =>
        Alert.alert('Error', error.message)
      )

      if (location && location.coords) {
        onPress({
          type: CONTENIDO.ubicacion,
          latitud: location.coords.latitude,
          longitud: location.coords.longitude,
        })
      }
    }
  }
}
