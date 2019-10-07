import React, { Component } from 'react'
import { TouchableHighlight, Keyboard, AsyncStorage } from 'react-native'
import { Text, Item, Label, Input, Button, Icon } from 'native-base'

import styles from 'styles/login'
import Block from 'components/Block'
import { Hbar, Container, LinkText } from 'components/styled'
import Modal from 'components/Modal'
import Theme from 'themes/default'
import { connect } from 'components/AppProvider'

class Login extends Component {
  state = {
    modalVisible: false,
    user: '',
    pass: '',
  }

  updateField = field => text => {
    this.setState({ [field]: text })
  }

  onLogin = async () => {
    const { user, pass } = this.state
    this.props.dispatch({ type: 'APP_LOADING', payload: true })

    const { data, success } = await this.props.api.login({
      usuario: user,
      clave: pass,
    })
    if (success) {
      this.props.dispatch({ type: 'LOGIN', payload: data })
      await AsyncStorage.setItem('user', JSON.stringify(data))
      this.props.dispatch({ type: 'APP_LOADING', payload: false })
      this.props.navigation.navigate('Perfil')
    }
  }

  setModalVisibility = visible => () => {
    this.setState({
      modalVisible: visible,
    })
  }

  renderModal() {
    return (
      <Modal
        header="Gestiona accesos"
        visible={this.state.modalVisible}
        onRequestClose={this.setModalVisibility(false)}>
        <Container padding={30}>
          <Text>Enviar correo a Hola@b2b.com</Text>
        </Container>
      </Modal>
    )
  }

  render() {
    const { user, pass } = this.state

    return (
      <Container style={{ backgroundColor: '#EFEFEF' }}>
        <Block flex={4} middle>
          <Item floatingLabel last style={[styles.itemLogin]}>
            <Icon name="person" style={{ color: Theme.COLORS.PRIMARY }} />
            <Label>Usuario</Label>
            <Input
              autoCapitalize="none"
              textContentType="username"
              value={user}
              onChangeText={this.updateField('user')}
            />
          </Item>
          <Item floatingLabel last style={[styles.itemLogin]}>
            <Icon name="lock" style={{ color: Theme.COLORS.PRIMARY }} />
            <Label>Contraseña</Label>
            <Input
              textContentType="password"
              secureTextEntry
              onChangeText={this.updateField('pass')}
              value={pass}
            />
          </Item>
          <Button style={styles.iniciarSesionBtn} onPress={this.onLogin}>
            <Text>Iniciar</Text>
          </Button>
        </Block>
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

export default connect(ctx => ({
  dispatch: ctx.dispatch,
  api: ctx.api,
}))(Login)
