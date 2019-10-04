import React, { Component } from 'react'
import { TouchableHighlight, Modal, Keyboard } from 'react-native'
import styles from 'styles/login'
import estilo from 'styles/styles'
import { Text, Item, Label, Input, Button, Icon, Header, Left, Body, Title, Right, View, List, ListItem, } from 'native-base'
import Block from 'components/Block'
import { Hbar, Container, LinkText } from 'components/styled'

export default class Login extends Component {
  state = {
    modalVisible: false,
  }

  onLogin = () => {
    this.props.navigation.navigate('Perfil')
  }

  setModalVisibility = visible => () => {
    this.setState({
      modalVisible: visible,
    })
  }

  /* keyboard */
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    )
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  /* keyboard */

  renderModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={this.setModalVisibility(false)}>
        <Header>
          <Left>
            <Button transparent onPress={this.setModalVisibility(false)}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Gestiona accesos</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
          <List>
            <ListItem style={[estilo.msgGestionLogin]} icon >
              <Left style={[estilo.msgGestionL]}>
                <Icon type="FontAwesome" name="envelope" style={{ color: '#D80212' }} />
              </Left>
              <Right style={[estilo.msgGestionR]}>
                <Text style={[estilo.gestionTxtMsg]} >
                  Enviar correo a
                </Text>
              </Right>
            </ListItem>
            <ListItem style={[estilo.mailGestion]} >
              <Body>
                <Button bordered style={[estilo.gestionEmailBtn, estilo.borderBtn]} >
                  <Text style={[ estilo.gestionEmailTxt ]} >
                    Hola@b2b.com
                  </Text>
                </Button>
              </Body>
            </ListItem>
          </List>
        </View>
      </Modal>
    )
  }

  render() {
    return (
      <Container style={{backgroundColor: '#EFEFEF'}}>
        <Block flex={4} middle style={{backgroundColor: '#EFEFEF'}}>
          <Item floatingLabel last style={[estilo.itemLogin]} >
            <Icon active name="person"  style={{ color: '#D80212' }}/>
            <Label>Usuario</Label>
            <Input textContentType="username" />
          </Item>
          <Item floatingLabel last style={[estilo.itemLogin]} >
            <Icon name="lock"  style={{ color: '#D80212' }}/>
            <Label>Contraseña</Label>
            <Input textContentType="password" secureTextEntry />
          </Item>
          <Button small style={[styles.iniciarSesionBtn, estilo.iniciarSesionBtn, estilo.borderBtn]} onPress={this.onLogin}>
            <Text style={styles.iniciarSesionBtnText}>Iniciar</Text>
          </Button>
        </Block>
        <Block flex />
        <Block flex onSubmitEditing={Keyboard.dismiss}>
          <Hbar />
          <TouchableHighlight
            style={[styles.gestionLogin, estilo.gestionLogin]}
            onPress={this.setModalVisibility(true)}>
            <Text style={[styles.gestionTextLogin, estilo.gestionTextLogin]}>
              Gestiona tu acceso <LinkText>aquí.</LinkText>
            </Text>
          </TouchableHighlight>
        </Block>
        {this.renderModal()}
      </Container>
    )
  }
}
