import React, { Component } from 'react'
import { Alert, AsyncStorage, Linking, TouchableOpacity } from 'react-native'
import {
  Button,
  Header,
  Icon,
  Input,
  Item,
  Label,
  Root,
  Text,
  Title,
} from 'native-base'

import styles from 'styles/login'
import { bg, fc, fz } from 'styles/styles'
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
    if (!user || !pass) {
      return Alert.alert('Error', 'Completa usuario y contraseña')
    }

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

  openUrl = url => () => {
    Linking.openURL(url)
  }

  renderContacto({ text, icon, info, url }) {
    const textStyle = [fc.primary, fz.n20]
    return (
      <Block flex center middle>
        <Block row middle style={{ marginBottom: Theme.SIZES.BASE / 2 }}>
          <Icon type="FontAwesome5" name={icon} style={textStyle} />
          <Text style={textStyle}>&nbsp;&nbsp;{text}</Text>
        </Block>
        <Button
          bordered
          style={styles.gestionButton}
          onPress={this.openUrl(url)}>
          <Text style={styles.gestionButtonText}>{info}</Text>
        </Button>
      </Block>
    )
  }

  renderModal() {
    return (
      <Modal
        header="Contáctanos"
        visible={this.state.modalVisible}
        onRequestClose={this.setModalVisibility(false)}>
        <Container padding={30}>
          {/* {this.renderContacto({
            text: 'Llamar a',
            icon: 'phone',
            info: '01 555 5555',
          })}
          <Hbar /> */}
          {this.renderContacto({
            text: 'Enviar correo a',
            icon: 'envelope',
            info: 'hola@b2b.com',
            url: 'mailto:hola@b2b.com',
          })}
        </Container>
      </Modal>
    )
  }

  render() {
    const { user, pass } = this.state

    return (
      <Root>
        <Header style={[bg.primary]}>
          <Block center>
            <Title>B2B</Title>
          </Block>
        </Header>
        <Container style={{ backgroundColor: '#EBEBEB'}}>
          <Block flex={5} middle style={styles.block}>
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
            <Button
              small
              style={styles.iniciarSesionBtn}
              onPress={this.onLogin}>
              <Text style={styles.iniciarSesionBtnText}>Iniciar</Text>
            </Button>
          </Block>
          <Block flex>
            <Hbar color={Theme.COLORS.BLACK} />
            <Block flex center middle>
              <TouchableOpacity onPress={this.setModalVisibility(true)}>
                <Text style={[styles.gestionTextLogin]}>
                  Gestiona tu acceso <LinkText>aquí.</LinkText>
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>
          {this.renderModal()}
        </Container>
      </Root>
    )
  }
}

export default connect(ctx => ({
  api: ctx.api,
  dispatch: ctx.dispatch,
}))(Login)
