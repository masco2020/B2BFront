import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { ListItem, Content, Button, Left, Body, Icon, Text, List, View } from 'native-base';
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
  goIntroApp = (closed) =>{
    Actions.IntroApp(closed)
  };
  goLogin = () =>{
    Actions.Login()
  };
    render() {
        
      return (
        <Content style={{ backgroundColor: '#fff' }}>
          <ImageBackground source={{ uri: '#' }} style={[styles.imgSideBar]} >
            <View style={[styles.userBox]}>
              <View style={[styles.inicialUserBox]}>
                <Text style={[styles.inicialUserTxt]}>G</Text>
              </View>
              <View style={[styles.userNameBox]}>
                <Text style={[styles.userName]}>Gerardo Pérez</Text>
                <Text style={[styles.userCargo]}>Asesor</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={{flex: 2, flexDirection: 'column',}}>
            <List style={[styles.sideListPerfil]}>
              <ListItem icon>
                <Left>
                  <TouchableOpacity onPress={()=> this.goCuenta()} >
                    <Icon style={[styles.colorRojo, {fontSize: 23,}]} active type="FontAwesome5" name="globe-americas" />
                  </TouchableOpacity>
                </Left>
                <Body style={[styles.itemBodyNoBorde]}>
                  <TouchableOpacity onPress={()=> this.goCuenta()} >
                    <Text style={[styles.sidebarTxtItem]} >Compradores</Text>
                  </TouchableOpacity>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <TouchableOpacity onPress={()=> this.goHistorial()} >
                    <ImageBackground source={require('./assets/icon-expo-sb.png')} style={{height: 28, width: 28,}}>
                      <Text style={{fontSize: 23, color: 'transparent',}} ></Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </Left>
                <Body style={[styles.itemBodyNoBorde]}>
                  <TouchableOpacity onPress={()=> this.goHistorial()} >
                    <Text style={[styles.sidebarTxtItem]} >Exportadores</Text>
                  </TouchableOpacity>
                </Body>
              </ListItem>
            </List>
            <View style={{borderBottomWidth: 1,borderBottomColor: '#D80212',margin:15, marginTop: 30,}} />
            <List style={[styles.sideListSoport]}>
              <ListItem icon>
                <Left>
                  <TouchableOpacity onPress={()=> this.goIntroApp(closed)} >
                    <Icon style={[styles.colorRojo]} active name="help" />
                  </TouchableOpacity>
                </Left>
                <Body style={[styles.itemBodyNoBorde]}>
                  <TouchableOpacity onPress={()=> this.goIntroApp(closed)} >
                    <Text style={[styles.sidebarTxtItem]} >Ayuda</Text>
                  </TouchableOpacity>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <TouchableOpacity onPress={()=> this.goAyuda()} >
                    <Icon style={[styles.colorRojo]} active name="laptop" />
                  </TouchableOpacity>
                </Left>
                <Body style={[styles.itemBodyNoBorde]}>
                  <TouchableOpacity onPress={()=> this.goAyuda()} >
                    <Text style={[styles.sidebarTxtItem]} >Visita la web</Text>
                  </TouchableOpacity>
                </Body>
              </ListItem>
            </List>
            <View style={{borderBottomWidth: 1,borderBottomColor: '#D80212',margin:15, marginTop: 30,}} />
            <List style={{flex: 2}}>
              <ListItem style={[styles.itemNoBorde]}>
                <Body>
                  <TouchableOpacity onPress={()=> this.goLogin()} >
                  <Text style={[styles.sidebarTxtItem, styles.txtSideBCerrarS]} >Cerrar Sesión</Text>
                  </TouchableOpacity>
                </Body>
              </ListItem>
            </List>
          </View>
          
          
        </Content>
      ); 
    }
}

module.exports = SideBar;