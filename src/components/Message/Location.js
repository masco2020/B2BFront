import React from 'react'
import { Linking } from 'react-native'
import { Image } from './utils'
import Touchable from 'components/Touchable'

export default class MessageLocation extends React.Component {
  showMap = () => {
    const { latitud, longitud } = this.props
    Linking.openURL(`https://www.google.com/maps/@${latitud},${longitud},16z`)
  }

  render() {
    const MAP_BASE = 'https://static-maps.yandex.ru/1.x/'
    const { latitud, longitud } = this.props
    const ll = `${longitud},${latitud}`
    const source =
      MAP_BASE + `?lang=en-US&ll=${ll}&z=16&l=map&size=300,150&pt=${ll},pmwts`

    return (
      <Touchable onPress={this.showMap}>
        <Image source={{ uri: source, width: '100%', height: 120 }} />
      </Touchable>
    )
  }
}
