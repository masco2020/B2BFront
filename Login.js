import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Keyboard
} from 'react-native';
import styles from './Style.js';
import {
  Container,
  Drawer,
  StyleProvider,
  Root,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
  View,
  Icon,
  Picker,
  Header,
  Left,
  Body,
  Title,
  Right,
  List,
  ListItem
} from 'native-base';
// import IconF from 'react-native-vector-icons/dist/FontAwesome';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { Actions } from 'react-native-router-flux';
import SideBar from './SideBar';
import AppHeader from './AppHeader';

export default class Login extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  goPerfil = () => {
    Actions.Perfil();
  };

  state = {
    modalVisible: false,
    quitarPieState: this.props.quitarPieK
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
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
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
    const Titulo = 'B2B';
    const noLeftView = true;
    const quitarPie = this.state.quitarPieState;
    if (quitarPie != false) {
      deletedPie = styleLogin.deletedPie;
    } else {
      deletedPie = null;
    }
    return (
      <StyleProvider style={getTheme(material)}>
        <Drawer
          side="right"
          ref={ref => {
            this.drawer = ref;
          }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Root>
            <Container>
              <AppHeader
                openDrawer={this.openDrawer.bind(this)}
                Titulo={Titulo}
                noLeftView={noLeftView}
                styleLogin={styleLogin}
              />
              <View style={[styles.screenLogin]}>
                <View style={[styles.espaceLogin]} />
                <Form style={[styles.formIniciar]}>
                  <Item
                    floatingLabel
                    last
                    style={[styles.itemLogin]}
                  >
                    <Icon active name="person" />
                    <Label>Usuario</Label>
                    <Input />
                  </Item>
                  <Item
                    floatingLabel
                    last
                    style={[styles.itemLogin]}
                  >
                    <Icon active name="lock" />
                    <Label>Contraseña</Label>
                    <Input />
                  </Item>
                  <Button
                    small
                    style={[styles.iniciarSesionBtn]}
                    onPress={() => this.goPerfil()}
                  >
                    <Text
                      style={[styles.iniciarSesionBtnText]}
                    >
                      Iniciar
                    </Text>
                  </Button>
                </Form>
                <View style={[styles.espaceLogin]} />
                <View
                  style={[styles.pieLoginGestionUser]}
                  onSubmitEditing={Keyboard.dismiss}
                >
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#ddd',
                      margin: 15,
                      marginTop: 30
                    }}
                  />
                  <TouchableHighlight
                    style={[styles.gestionLogin]}
                    onPress={() => {
                      this.setModalVisible(true);
                    }}
                  >
                    <Text style={[styles.gestionTextLogin]}>
                      Gestiona tu acceso{' '}
                      <Text
                        style={{
                          color: '#D80212',
                          fontSize: 18
                        }}
                      >
                        aquí.
                      </Text>
                    </Text>
                  </TouchableHighlight>
                </View>

                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}
                >
                  <Header>
                    <Left>
                      <Button
                        transparent
                        onPress={() => {
                          this.setModalVisible(
                            !this.state.modalVisible
                          );
                        }}
                      >
                        <Icon name="arrow-back" />
                      </Button>
                    </Left>
                    <Body>
                      <Title>Gestiona accesos</Title>
                    </Body>
                    <Right />
                  </Header>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <List>
                      <ListItem
                        style={[styles.msgGestionLogin]}
                        icon
                      >
                        <Left style={[styles.msgGestionL]}>
                          <Icon
                            type="FontAwesome"
                            name="envelope"
                            style={{ color: '#D80212' }}
                          />
                        </Left>
                        <Right style={[styles.msgGestionR]}>
                          <Text
                            style={[styles.gestionTxtMsg]}
                          >
                            Enviar correo a
                          </Text>
                        </Right>
                      </ListItem>
                      <ListItem
                        style={[styles.mailGestion]}
                      >
                        <Body>
                          <Button
                            bordered
                            style={[styles.gestionEmailBtn]}
                          >
                            <Text
                              style={[
                                styles.gestionEmailTxt
                              ]}
                            >
                              Hola@b2b.com
                            </Text>
                          </Button>
                        </Body>
                      </ListItem>
                    </List>
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
    display: 'none'
  },
  bodyH: {
    flex: 4,
    alignItems: 'center'
  },
  deletedPie: {
    display: 'none'
  }
});

module.exports = Login;
