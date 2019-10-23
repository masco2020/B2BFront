/* eslint-disable max-len */
import React, { Component } from 'react'
import { Alert } from 'react-native'
import {
  Body,
  Button,
  Content,
  DatePicker,
  Icon,
  ListItem,
  Right,
  Container,
  Text,
  Item,
  Picker,
} from 'native-base'
import { NavigationEvents } from 'react-navigation'
import get from 'lodash/get'
// import set from 'lodash/set'

import { connect } from 'components/AppProvider'
import Block from 'components/Block'
import Modal from 'components/Modal'
import Chat from 'screens/Chat'
import produce from 'immer'
import styles from 'styles/exportador'
import Theme from 'themes/default'
import { tt } from 'styles/styles'
import moment from 'moment'

const TIPO_CONTENIDO = [
  // { id: 1, nombre: 'Mensaje' },
  { id: 2, nombre: 'Imagen' },
  { id: 3, nombre: 'Audio' },
  { id: 4, nombre: 'Documento' },
  { id: 5, nombre: 'Ubicación' },
]

function updateStateOnCheckbox(draft, key, value) {
  const array = draft.form[key] || []
  const selected = array.find(o => o.id === value)
  const filtered = array.filter(o => o.id !== value)

  if (selected) {
    draft.form[key] = filtered
  } else {
    draft.form[key] = [].concat(filtered, { id: value })
  }
}

const MAX_PER_PAGE = 20

class Historico extends Component {
  static navigationOptions = {
    tabBarLabel: 'Historico',
  }

  state = {
    page: 1,
    messages: [],
    form: {},
    showFilter: false,
  }

  doFilter = () => {
    this.setState(
      {
        showFilter: false,
      },
      () => {
        this.loadMessages(true)
      }
    )
  }

  cleanFilter = () => {
    this.setState(
      {
        showFilter: false,
        form: {},
      },
      () => {
        this.loadMessages(true)
      }
    )
  }

  loadMessages = async reset => {
    const data = this.props.navigation.getParam('data', {})
    const Pagina = reset ? 1 : this.state.page

    try {
      this.props.dispatch({ type: 'APP_LOADING', payload: true })
      const res = await this.props.api.historicoList({
        idEmpresa: data.idEmpresa,
        Pagina,
        Cantidad: MAX_PER_PAGE,
        ...this.state.form,
      })

      if (res && res.data) {
        this.setState(
          produce(draft => {
            draft.messages = reset
              ? res.data
              : [].concat(draft.messages, res.data)
            draft.page = Pagina + 1
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

  toggleFilter = visible => () => {
    this.setState({ showFilter: visible })
  }

  isValueChecked = (key, value) => {
    const prop = get(this.state, `form[${key}]`, [])
    return !!prop.find(o => o.id === value)
  }

  addToForm = (key, value) => () => {
    this.setState(
      produce(draft => {
        updateStateOnCheckbox(draft, key, value)
      })
    )
  }

  setForm = key => value => {
    this.setState(
      produce(draft => {
        draft.form[key] = value
      })
    )
  }

  setFecha = value => {
    const formattedDate = moment(value).format('YYYY-MM-DD')
    this.setForm('Fecha')(formattedDate)
  }

  renderCheckboxesItem(groupName, listaName, listaArray) {
    return (
      <React.Fragment>
        <Text style={[styles.itemTitle, { padding: Theme.SIZES.BASE }]}>
          {groupName}
        </Text>
        {listaArray.map(lista => {
          const isSelected = this.isValueChecked(listaName, lista.id)

          return (
            <ListItem
              key={lista.id}
              noBorder
              selected={isSelected}
              onPress={this.addToForm(listaName, lista.id)}>
              <Body style={{ margin: 0, padding: 0 }}>
                <Text style={[styles.dateFicha, styles.textItem]}>
                  {lista.nombre}
                </Text>
              </Body>
              <Right>
                <Icon
                  type="FontAwesome5"
                  color={Theme.COLORS.PRIMARY}
                  name={isSelected ? 'check-square' : 'square'}
                />
              </Right>
            </ListItem>
          )
        })}
      </React.Fragment>
    )
  }

  renderPicker(groupName, listaName, listaArray) {
    return (
      <React.Fragment>
        <Text style={[styles.itemTitle, { padding: Theme.SIZES.BASE }]}>
          {groupName}
        </Text>
        <Block style={{ paddingHorizontal: Theme.SIZES.BASE }}>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              iosHeader={groupName}
              placeholder={groupName}
              placeholderStyle={{ color: '#BFC6EA', width: '100%' }}
              selectedValue={this.state.form[listaName]}
              onValueChange={this.setForm(listaName)}>
              <Picker.Item label="Buscar usuario" value={null} />
              {listaArray.map(doc => (
                <Picker.Item
                  key={doc.id}
                  label={doc.nombre}
                  value={doc.nombre}
                />
              ))}
            </Picker>
          </Item>
        </Block>
      </React.Fragment>
    )
  }

  renderFiltro() {
    const data = this.props.navigation.getParam('data', {})
    const listUsuarios = data.listaUsuariosHistorico || []

    return (
      <Modal
        header="Filtros"
        visible={this.state.showFilter}
        onRequestClose={this.toggleFilter(false)}>
        <Content>
          {this.renderCheckboxesItem(
            'Tipo de archivo',
            'tipoContenidos',
            TIPO_CONTENIDO
          )}
          <Text style={[styles.itemTitle, { padding: Theme.SIZES.BASE }]}>
            Fecha
          </Text>
          <Block style={{ padding: Theme.SIZES.BASE }}>
            <Item>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date()}
                locale={'es'}
                // timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'default'}
                placeHolderText="Fecha"
                onDateChange={this.setFecha}
                // disabled={false}
              />
            </Item>
          </Block>
          {this.renderPicker('Usuario', 'Usuario', listUsuarios)}

          <Block style={{ padding: Theme.SIZES.BASE }}>
            <Button block rounded onPress={this.doFilter}>
              <Text style={[tt.cap]}>Filtrar</Text>
            </Button>
            <Button block transparent onPress={this.cleanFilter}>
              <Text style={[tt.cap]}>Limpiar filtros</Text>
            </Button>
          </Block>
        </Content>
      </Modal>
    )
  }

  render() {
    return (
      <Container>
        <NavigationEvents onWillFocus={this.loadMessages} />
        <Chat
          conversation={this.state.messages}
          sendMessage={this.onMessage}
          onLoadMore={this.loadMessages}
          onFilter={this.toggleFilter(true)}
        />
        {this.renderFiltro()}
      </Container>
    )
  }
}

export default connect(ctx => ({
  api: ctx.api,
  dispatch: ctx.dispatch,
  user: ctx.context.user,
}))(Historico)
