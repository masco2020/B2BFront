import React from 'react'
import { Image } from 'react-native'
import { Container, Text } from 'native-base'
import styles from 'styles/perfil'
import Block from 'components/Block'
import Touchable from 'components/Touchable'
import { fc, fw, fz, ta } from 'styles/styles'
import { connect } from 'components/AppProvider'

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

class Perfil extends React.Component {
  componentDidMount() {
    this.loadConfiguracionData()
  }

  loadConfiguracionData = async () => {
    try {
      const res = await this.props.api.listarConfiguracionInicial()
      if (res && res.data) {
        this.props.dispatch({ type: 'UPDATE_DATA', payload: res.data })
      }
    } catch (error) {
      console.info('ERROR listarConfiguracionInicial', error)
    }
  }

  navigate = routename => () => {
    this.props.navigation.navigate(routename)
  }

  render() {
    const textStyle = [fc.black, fz.n24]

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
            <Touchable
              onPress={this.navigate(perfil.route)}
              style={styles.perfilButton}>
              <Block style={[styles.perfilCard, styles.perfilButton]}>
                <Image source={perfil.image} style={[styles.perfilIcon]} />
                <Text style={[ta.center, fz.n20, fw.bold, fc.white]}>
                  {perfil.label}
                </Text>
              </Block>
            </Touchable>
          </Block>
        ))}
      </Container>
    )
  }
}

export default connect(ctx => ({ api: ctx.api, dispatch: ctx.dispatch }))(
  Perfil
)
