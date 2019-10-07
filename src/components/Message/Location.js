import React from 'react'
import { Image } from './utils'

export default class MessageLocation extends React.Component {
  render() {
    const MAP_BASE = 'https://static-maps.yandex.ru/1.x/'
    const { latitude, longitude } = this.props.location
    const ll = `${longitude},${latitude}`
    const source =
      MAP_BASE + `?lang=en-US&ll=${ll}&z=16&l=map&size=300,150&pt=${ll},pmwts`

    return <Image source={{ uri: source, width: 200, height: 100 }} />
  }
}
