import React, { Component } from 'react'
import { TouchableHighlight, Modal, Keyboard } from 'react-native'
import styles from 'styles/login'
import {
  Text,
  Item,
  Label,
  Input,
  Button,
  Icon,
  Header,
  Left,
  Body,
  Title,
  Right,
  // Container,
} from 'native-base'
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
        <Container padding={30}>
          <Text>
            A través de estos canales, solicita tu usuario y contraseña aquí.
          </Text>
          <Text />
          <Text />
          <Text>+51 555 555</Text>
          <Text>promperu@promperu.pe</Text>
        </Container>
      </Modal>
    )
  }

  render() {
    return (
      <Container>
        <Block flex={4} middle>
          <Item floatingLabel>
            <Icon name="person" />
            <Label>Usuario</Label>
            <Input textContentType="username" />
          </Item>
          <Item floatingLabel>
            <Icon name="lock" />
            <Label>Contraseña</Label>
            <Input textContentType="password" secureTextEntry />
          </Item>
          <Button style={styles.iniciarSesionBtn} onPress={this.onLogin}>
            <Text style={styles.iniciarSesionBtnText}>Iniciar</Text>
          </Button>
        </Block>
        <Block flex />
        <Block flex onSubmitEditing={Keyboard.dismiss}>
          <Hbar />
          <TouchableHighlight
            style={[styles.gestionLogin]}
            onPress={this.setModalVisibility(true)}>
            <Text style={[styles.gestionTextLogin]}>
              Gestiona tu acceso <LinkText>aquí.</LinkText>
            </Text>
          </TouchableHighlight>
        </Block>
        {this.renderModal()}
      </Container>
    )
  }
}
