/* eslint-disable max-len */
import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Container } from 'native-base'
import { NavigationEvents } from 'react-navigation'

import { connect } from 'components/AppProvider'
import Chat from 'screens/Chat'

const MAX_PER_PAGE = 20

class Historico extends Component {
  static navigationOptions = {
    tabBarLabel: 'Historico',
  }

  state = {
    page: 1,
    messages: [],
  }

  onWillFocus = async () => {
    const data = this.props.navigation.getParam('data', {})

    try {
      this.props.dispatch({ type: 'APP_LOADING', payload: true })
      const res = await this.props.api.historicoList({
        idEmpresa: data.idEmpresa,
        Pagina: this.state.page,
        Cantidad: MAX_PER_PAGE,
      })

      if (res && res.data) {
        this.setState({ messages: res.data })
      }
    } catch (error) {
      Alert.alert('Error', 'Error al cargar historico')
    } finally {
      this.props.dispatch({ type: 'APP_LOADING', payload: false })
    }
  }

  onMessage = async ({ type, ...params }) => {
    const data = this.props.navigation.getParam('data', {})

    try {
      this.props.dispatch({ type: 'APP_LOADING', payload: true })
      await this.props.api.historicoCreate({
        ...params,
        idEmpresa: data.idEmpresa,
        idTipoContenido: type,
        idUsuario: this.props.user.idUsuario,
      })
    } catch (error) {
      console.info('xxxx', error)
    } finally {
      this.props.dispatch({ type: 'APP_LOADING', payload: false })
    }
  }

  render() {
    return (
      <Container>
        <NavigationEvents onWillFocus={this.onWillFocus} />
        <Chat conversation={this.state.messages} sendMessage={this.onMessage} />
      </Container>
    )
  }
}

export default connect(ctx => ({
  api: ctx.api,
  dispatch: ctx.dispatch,
  user: ctx.context.user,
}))(Historico)
