import React, { Component } from 'react'
import { TouchableHighlight, Keyboard, AsyncStorage } from 'react-native'
import { Text, Item, Label, Input, Button, Icon, List, ListItem, Left, Body, Right } from 'native-base'

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
        header="Contactanos"
        visible={this.state.modalVisible}
        onRequestClose={this.setModalVisibility(false)}>
        <Container padding={30} style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <List>
            <ListItem style={[styles.msgGestionLogin]} icon >
              <Left style={[styles.msgGestionL]}>
                <Icon type="FontAwesome" name="envelope" style={{ color: '#D80212' }} />
              </Left>
              <Right style={[styles.msgGestionR]}>
                <Text style={[styles.gestionTxtMsg]} >Enviar correo a</Text>
              </Right>
            </ListItem>
            <ListItem style={[styles.mailGestion]} >
              <Body>
                <Button bordered style={[styles.gestionEmailBtn, styles.borderBtn]} >
                  <Text style={[ styles.gestionEmailTxt ]} >Hola@b2b.com</Text>
                </Button>
              </Body>
            </ListItem>
          </List>
        </Container>
      </Modal>
    )
  }

  render() {
    const { user, pass } = this.state

    return (
      <Container style={{ backgroundColor: '#EFEFEF' }}>
        <Block flex={4} middle style={{backgroundColor: '#EFEFEF', paddingLeft: 24, paddingRight: 24,}}>
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
          <Button small style={[styles.iniciarSesionBtn, styles.borderBtn]} onPress={this.onLogin}>
            <Text style={styles.iniciarSesionBtnText}>Iniciar</Text>
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
