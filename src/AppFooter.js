import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Text, Badge,  } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style.js';
import { Actions } from 'react-native-router-flux';

export default class AppHeader extends Component {
  goHome = () => {
      Actions.Home()
  };
  goNotificaciones = () => {
      Actions.Notificaciones()
  };
  goPerfil = () => {
      Actions.Perfil()
  };

  render() {
    return (
        <Footer>
            <FooterTab>
                <Button active onPress={()=> this.goHome()} >
                    <Icon active name="search" style={[styles.iconFA]} />
                    {/* <Text>Buscar</Text> */}
                </Button>
                <Button badge vertical onPress={()=> this.goNotificaciones()} >
                    <Badge><Text>2</Text></Badge>
                    <Icon name="laptop" style={[styles.iconFA]} />
                    {/* <Text>Menciones</Text> */}
                </Button>
                <Button onPress={()=> this.goPerfil()} >
                    <Icon name="user" style={[styles.iconFA]} />
                    {/* <Text>Perfil</Text> */}
                </Button>
            </FooterTab>
        </Footer>
    );
  }
}
module.exports = AppHeader;