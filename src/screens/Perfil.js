import React, { Component } from 'react'
import { Container, Text, Button } from 'native-base'
import styles from 'styles/perfil'
import Block from 'components/Block'

const perfiles = [
  { route: 'Comprador', label: 'Compradores' },
  { route: 'EmpresaList', label: 'Exportadores' },
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
            ¿Que perfil quieres asesorar?
          </Text>
        </Block>
        {perfiles.map((perfil, index) => (
          <Block key={index} flex={3} center style={[styles.perfilOptions]}>
            <Button full onPress={this.navigate(perfil.route)}>
              <Text>{perfil.label}</Text>
            </Button>
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
