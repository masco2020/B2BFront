import React, { Component } from 'react'
import { Footer, FooterTab, Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from 'styles/login'

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
          <Button active onPress={this.goHome}>
            <Icon active name="search" style={[styles.iconFA]} />
          </Button>
          <Button badge vertical onPress={this.goNotificaciones}>
            <Icon name="laptop" style={[styles.iconFA]} />
          </Button>
          <Button onPress={this.goPerfil}>
            <Icon name="user" style={[styles.iconFA]} />
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
