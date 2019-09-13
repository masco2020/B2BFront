import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { ListItem, Content, Button, Left, Body, Icon, Text } from 'native-base';
import styles from './Style.js';
import { Actions } from 'react-native-router-flux';

export default class SideBar extends Component {
  goCuenta = () =>{
    Actions.Cuenta()
  };
  goHistorial = () =>{
    Actions.Historial()
  };
  goSoporte = () =>{
    Actions.Soporte()
  };
  goAyuda = () =>{
    Actions.Ayuda()
  };
  goTerminos = () =>{
    Actions.Terminos()
  };
    render() {
        
      return (
        <Content style={{ backgroundColor: '#fff' }}>
          <ImageBackground source={{ uri: '#' }} style={[styles.imgSideBar]} >
            <Text>Holas!</Text>
          </ImageBackground>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#800" }} onPress={()=> this.goCuenta()} >
                <Icon active name="person" />
              </Button>
            </Left>
            <Body>
              <TouchableOpacity onPress={()=> this.goCuenta()} >
                <Text>Cuenta</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <TouchableOpacity onPress={()=> this.goHistorial()} >
                <Icon active name="timer" />
              </TouchableOpacity>
            </Left>
            <Body>
              <TouchableOpacity onPress={()=> this.goHistorial()} >
                <Text>Canjes anteriores</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <TouchableOpacity onPress={()=> this.goSoporte()} >
                <Icon active name="chatbubbles" />
              </TouchableOpacity>
            </Left>
            <Body>
              <TouchableOpacity onPress={()=> this.goSoporte()} >
                <Text>Soporte</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <TouchableOpacity onPress={()=> this.goAyuda()} >
                <Icon active name="help" />
              </TouchableOpacity>
            </Left>
            <Body>
              <TouchableOpacity onPress={()=> this.goAyuda()} >
                <Text>Ayuda</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <TouchableOpacity onPress={()=> this.goTerminos()} >
              <Icon active name="alert" />
              </TouchableOpacity>
            </Left>
            <Body>
              <TouchableOpacity onPress={()=> this.goTerminos()} >
              <Text>Terminos legales</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
        </Content>
      ); 
    }
}

module.exports = SideBar;