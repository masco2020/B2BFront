import React, { Component } from "react";
import { Platform, StyleSheet, TouchableNativeFeedback, Modal, Keyboard } from 'react-native';
import styles from './Style.js';
import { Container, Drawer, StyleProvider, Root, Text, Form, Item, Label, Input, Button, View, Icon, Picker, Header, Left, Body, Title, Right } from 'native-base';
import IconF from 'react-native-vector-icons/dist/FontAwesome';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Actions } from 'react-native-router-flux';
import SideBar from './SideBar';
import AppHeader from './AppHeader';

export default class Login extends Component {
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  goPerfil = () => {
    Actions.Perfil()
  }; 
  
  state = {
    modalVisible: false,
    quitarPieState: this.props.quitarPieK,
  };
  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }


  /* keyboard */
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  
/*   _keyboardDidShow() {
    this.quitarPieK = true;
  }

  _keyboardDidHide() {
    this.quitarPieK = false;
  } */

  /* keyboard */


  render() {
    const Titulo = 'B2B'
    const noLeftView = true
    const quitarPie = this.state.quitarPieState
    if (quitarPie != false){
      deletedPie = styleLogin.deletedPie
    }else{
      deletedPie = null
    }
    return (
      <StyleProvider style={getTheme(material)}>
        <Drawer
          side = "right"
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Root>
            <Container>
              <AppHeader openDrawer={this.openDrawer.bind(this)} Titulo={Titulo} noLeftView={noLeftView} styleLogin={styleLogin} />
              <View style={[styles.screenLogin]}>
              <View style={[styles.espaceLogin]} />
              <Form style={[styles.formIniciar]} >
                <Item floatingLabel last style={[styles.itemLogin]} >
                    <Icon active name='person' />
                    <Label>Usuario</Label>
                    <Input />
                </Item>
                <Item floatingLabel last style={[styles.itemLogin]} >
                    <Icon active name='lock' />
                    <Label>Contraseña</Label>
                    <Input />
                </Item>
                <Button small style={[styles.iniciarSesionBtn]} onPress={()=> this.goPerfil()} >
                  <Text style={[styles.iniciarSesionBtnText]}>Iniciar</Text>
                </Button>
              </Form>
              <View style={[styles.espaceLogin]} />
              <View style={[styles.pieLoginGestionUser]}  onSubmitEditing={Keyboard.dismiss} >
                <View style={{borderBottomWidth: 1,borderBottomColor: '#ddd',margin:15, marginTop: 30,}} />
                <TouchableNativeFeedback style={[styles.gestionLogin]} onPress={() => {this.setModalVisible(true);}}>
                  <Text style={[styles.gestionTextLogin]}>
                      Gestiona tu acceso <Text style={{color: '#D80212'}}>aquí.</Text>
                  </Text>
                </TouchableNativeFeedback>
              </View>


              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
              }}>
                <Header>
                  <Left>
                    <Button transparent onPress={() => {this.setModalVisible(!this.state.modalVisible);}} >
                        <Icon name='arrow-back' />
                    </Button>
                  </Left>
                  <Body>
                    <Title>Gestiona accesos</Title>
                  </Body>
                  <Right />
                </Header>
                <View style={{padding: 30}}>
                    <Text>A trave de estos canales, solicita tú usuario y contraseña aquí.</Text>
                    <Text></Text>
                    <Text></Text>
                    <Text>+51 555 555</Text>
                    <Text>promperu@promperu.pe</Text>
                </View>
              </Modal>

              
              </View>
            </Container>
          </Root>
        </Drawer>
      </StyleProvider>
    );
  }
}

const styleLogin = StyleSheet.create({
  rightBtn: {
    display: 'none',
  },
  bodyH:{
    flex: 4,
    alignItems: 'center',
  },
  deletedPie:{
    display: 'none',
  },
});

module.exports = Login;