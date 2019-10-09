import React, { Component } from 'react'
import { TouchableHighlight, Image } from 'react-native'
import { Container, Text } from 'native-base'
import styles from 'styles/perfil'
import Block from 'components/Block'
import { fc, fw, fz, ta } from 'styles/styles'

const perfiles = [
  {
    route: 'Comprador',
    label: 'Compradores',
    image: require('../assets/compradores.png'),
  },
  {
    route: 'Exportador',
    label: 'Exportadores',
    image: require('../assets/exportadores.png'),
  },
]

export default class Perfil extends Component {
  navigate = routename => () => {
    this.props.navigation.navigate(routename)
  }

  render() {
    const textStyle = [fc.muted, fz.n24]

    return (
      <Container>
        <Block flex={2} center middle>
          <Text style={[...textStyle, ta.center]}>
            <Text style={[...textStyle, fw.bold]}>Elige</Text> el tipo de{'\n'}
            empresa de tu interés
          </Text>
        </Block>
        {perfiles.map((perfil, index) => (
          <Block key={index} flex={3} center>
            <TouchableHighlight
              onPress={this.navigate(perfil.route)}
              style={styles.perfilButton}>
              <Block style={[styles.perfilCard, styles.perfilButton]}>
                <Image source={perfil.image} style={[styles.perfilIcon]} />
                <Text style={[ta.center, fz.n20, fw.bold, fc.white]}>
                  {perfil.label}
                </Text>
              </Block>
            </TouchableHighlight>
          </Block>
        ))}
      </Container>
    )
  }
}
