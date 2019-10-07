import React, { Component } from 'react'
import { TouchableHighlight, Image } from 'react-native'
import { Container, Text, Card, CardItem, Body } from 'native-base'
import styles from 'styles/perfil'
import Block from 'components/Block'

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
    return (
      <Container>
        <Block flex center style={[styles.perfilView]}>
          <Text style={[styles.text1Perfil]}>
            Elige el tipo de{'\n'}empresa de tu interés
          </Text>
        </Block>
        {perfiles.map((perfil, index) => (
          <Block key={index} flex={3} center style={[styles.perfilOptions]}>
            <TouchableHighlight
              onPress={this.navigate(perfil.route)}
              style={{ width: '100%' }}>
              <Card style={[styles.perfilCards]}>
                <CardItem
                  style={[styles.perfilCardsItems, styles.iconPerfilItem]}
                  header>
                  <Image source={perfil.image} style={[styles.perfilIcon]} />
                </CardItem>
                <CardItem
                  style={[styles.perfilCardsItems, styles.txtPerfilItem]}>
                  <Body style={[styles.perfilCardsItemsBody]}>
                    <Text
                      numberOfLines={1}
                      style={[styles.perfilCardsItemsText]}>
                      {perfil.label}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </TouchableHighlight>
          </Block>
        ))}
      </Container>
    )
  }
}

/* <Card key={index} style={[styles.perfilCards, { marginTop: 35 }]}>
  <TouchableHighlight onPress={this.navigate(perfil.route)}>
    <CardItem style={[styles.perfilCardsItems]}>
      <Body style={[styles.perfilCardsItemsBody]}>
        <Text style={[styles.perfilCardsItemsText]}>
          {perfil.label}
        </Text>
      </Body>
    </CardItem>
  </TouchableHighlight>
</Card> */
