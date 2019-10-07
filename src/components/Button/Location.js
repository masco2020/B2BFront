import React from 'react'
import { Alert } from 'react-native'

import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import RoundedButton from '../RoundedButton'

export default class ButtonLocation extends React.Component {
  state = {
    location: null,
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({}).catch(error =>
        Alert.alert('Error', error.message)
      )

      if (location && location.coords) {
        this.props.onPress({
          location: location.coords,
          type: 'location',
        })
      }
    }
  }

  render() {
    return (
      <RoundedButton onPress={this.getLocationAsync} icon="map-marker-alt" />
    )
  }
}
