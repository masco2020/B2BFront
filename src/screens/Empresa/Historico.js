/* eslint-disable max-len */
import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Container } from 'native-base'
import { NavigationEvents } from 'react-navigation'

import { connect } from 'components/AppProvider'
import Chat from 'screens/Chat'
import produce from 'immer'

const MAX_PER_PAGE = 20

class Historico extends Component {
  static navigationOptions = {
    tabBarLabel: 'Historico',
  }

  state = {
    page: 1,
    messages: [],
  }

  loadMore = async () => {
    const data = this.props.navigation.getParam('data', {})

    try {
      this.props.dispatch({ type: 'APP_LOADING', payload: true })
      const res = await this.props.api.historicoList({
        idEmpresa: data.idEmpresa,
        Pagina: this.state.page,
        Cantidad: MAX_PER_PAGE,
      })

      if (res && res.data) {
        this.setState(
          produce(draft => {
            draft.messages = [].concat(draft.messages, res.data)
            draft.page = draft.page + 1
          })
        )
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
      const response = await this.props.api.historicoCreate({
        ...params,
        idEmpresa: data.idEmpresa,
        idTipoContenido: type,
        idUsuario: this.props.user.idUsuario,
      })

      if (response && response.success) {
        this.setState(
          produce(draft => {
            draft.messages = [].concat(response.data, draft.messages)
          })
        )
      }
    } catch (error) {
      console.info('xxxx', error)
    } finally {
      this.props.dispatch({ type: 'APP_LOADING', payload: false })
    }
  }

  render() {
    return (
      <Container>
        <NavigationEvents onWillFocus={this.loadMore} />
        <Chat
          conversation={this.state.messages}
          sendMessage={this.onMessage}
          onLoadMore={this.loadMore}
        />
      </Container>
    )
  }
}

export default connect(ctx => ({
  api: ctx.api,
  dispatch: ctx.dispatch,
  user: ctx.context.user,
}))(Historico)
