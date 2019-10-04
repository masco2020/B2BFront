import React, { Component } from 'react'
import { Footer, FooterTab, Button, Text, Badge } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import estilo from 'styles/styles'

export default class AppFooter extends Component {
  goHome = () => {
    // Actions.Home()
  }
  goNotificaciones = () => {
    // Actions.Notificaciones()
  }
  goPerfil = () => {
    // Actions.Perfil()
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active onPress={()=> this.goHome()} >
            <Icon active name="search" style={[estilo.iconFA]} />
          </Button>
          <Button badge vertical onPress={()=> this.goNotificaciones()} >
            <Icon name="laptop" style={[estilo.iconFA]} />
          </Button>
          <Button onPress={()=> this.goPerfil()} >
            <Icon name="user" style={[estilo.iconFA]} />
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
