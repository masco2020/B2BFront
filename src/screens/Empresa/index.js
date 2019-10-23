import React from 'react'
import {
  Body,
  Button,
  Content,
  Icon,
  Input,
  Item,
  ListItem,
  Segment,
  Picker,
  Right,
  Text,
  View,
} from 'native-base'
import ModalC from 'react-native-modal'
import get from 'lodash/get'
import set from 'lodash/set'
import produce from 'immer'

import { Hbar } from 'components/styled'
import { connect } from 'components/AppProvider'
import Block from 'components/Block'
import Modal from 'components/Modal'
import Touchable from 'components/Touchable'
import EmpresaList from 'screens/Empresa/List'
import Theme from 'themes/default'
import styles from 'styles/exportador'
import { tt } from 'styles/styles'

const options = [
  {
    value: 'empresa',
    param: 'Empresa',
    label: 'Empresa',
    types: ['comprador', 'exportador'],
  },
  {
    value: 'producto',
    param: 'producto',
    label: 'Producto',
    types: ['comprador', 'exportador'],
  },
  { value: 'ciudad', param: 'ciudad', label: 'Ciudad', types: ['exportador'] },
  { value: 'pais', param: 'pais', label: 'Pais', types: ['comprador'] },
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

class Empresa extends React.Component {
  state = {
    quickFilter: false,
    advancedFilter: false,
    textFilter: options[0],
    form: {},
  }

  toggleAdvanced = visible => () => {
    this.setState({ advancedFilter: visible })
  }

  toggleQuick = visible => () => {
    this.setState({ quickFilter: visible })
  }

  onSegmentButton = value => () => {
    this.setState(
      produce(draft => {
        draft.textFilter = value
        options.forEach(o => {
          set(draft, `form[${o.param}]`, null)
        })
      })
    )
  }

  onTextFilterSearch = () => {
    this.list.debouncedLoad(true)
  }

  addToForm = (key, value) => () => {
    this.setState(
      produce(draft => {
        updateStateOnCheckbox(draft, key, value)
      })
    )
  }

  addToFormQuick = (key, value) => () => {
    this.setState(
      produce(draft => {
        updateStateOnCheckbox(draft, key, value)
      }),
      this.list.debouncedLoad
    )
  }

  isValueChecked = (key, value) => {
    const prop = get(this.state, `form[${key}]`, [])
    return !!prop.find(o => o.id === value)
  }

  setForm = key => value => {
    this.setState(
      produce(draft => {
        draft.form[key] = value
      })
    )
  }

  doAdvancedFilter = () => {
    this.setState(
      {
        quickFilter: false,
        advancedFilter: false,
      },
      () => {
        this.list.debouncedLoad(true)
      }
    )
  }

  renderQuickFilter() {
    const { listaSectores = [] } = this.props.data

    return (
      <ModalC
        isVisible={this.state.quickFilter}
        onBackdropPress={this.toggleQuick(false)}
        style={{
          margin: 0,
          backgroundColor: 'white',
          height: 'auto',
          flex: 0,
          bottom: 0,
          position: 'absolute',
          width: '100%',
        }}>
        <Block flex>
          <Text style={[styles.itemTitle, { padding: Theme.SIZES.BASE }]}>
            Sectores
          </Text>
          {listaSectores.map(sector => {
            const isSelected = this.isValueChecked('listaSectores', sector.id)

            return (
              <ListItem
                key={sector.id}
                noBorder
                selected={isSelected}
                onPress={this.addToFormQuick('listaSectores', sector.id)}>
                <Body style={{ margin: 0, padding: 0 }}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    {sector.nombre}
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
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Theme.COLORS.PRIMARY,
              margin: 15,
              marginBottom: 0,
            }}
          />
          <Button
            transparent
            style={[styles.masFiltrosBtn]}
            onPress={this.toggleAdvanced(true)}>
            <Text style={[styles.masFiltrosBtnText]}>Ver más filtros</Text>
          </Button>
        </Block>
      </ModalC>
    )
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
              <Picker.Item label="Selecciona una opción" value={null} />
              {listaArray.map(doc => (
                <Picker.Item key={doc.id} label={doc.nombre} value={doc.id} />
              ))}
            </Picker>
          </Item>
        </Block>
      </React.Fragment>
    )
  }

  renderAdvancedFilter() {
    const {
      listaSectores = [],
      listaTipoNegocio = [],
      listaTamanio = [],
      listaUbigeoExportador = [],
      listaMediosContacto = [],
      listaPaisComprador = [],
    } = this.props.data
    const esExportador = this.props.navigation.getParam('esExportador')

    return (
      <Modal
        header="Filtros"
        visible={this.state.advancedFilter}
        onRequestClose={this.toggleAdvanced(false)}>
        <Content>
          {this.renderCheckboxesItem(
            'Sectores',
            'listaSectores',
            listaSectores
          )}
          {this.renderCheckboxesItem(
            'Tipo de Negocio',
            'listaTipoNegocio',
            listaTipoNegocio
          )}
          {this.renderCheckboxesItem(
            'Tipo de Negocio',
            'listaTipoNegocio',
            listaTipoNegocio
          )}
          {this.renderCheckboxesItem('Tamaño', 'listaTamanio', listaTamanio)}
          {esExportador &&
            this.renderPicker(
              'Ciudad',
              'listaUbigeoExportador',
              listaUbigeoExportador
            )}
          {!esExportador &&
            this.renderPicker(
              'Medios de contacto',
              'listaMediosContacto',
              listaMediosContacto
            )}
          {!esExportador &&
            this.renderPicker('País', 'listaPaisComprador', listaPaisComprador)}

          <Block style={{ padding: Theme.SIZES.BASE }}>
            <Button block rounded onPress={this.doAdvancedFilter}>
              <Text style={[tt.cap]}>Filtrar</Text>
            </Button>
          </Block>
        </Content>
      </Modal>
    )
  }

  renderSegment() {
    const type = this.props.navigation.getParam('esExportador')
      ? 'exportador'
      : 'comprador'
    const optionsByType = options.filter(o => o.types.includes(type))
    return (
      <Segment>
        {optionsByType.map((option, index) => (
          <Button
            key={option.value}
            first={index === 0}
            last={index === optionsByType.length - 1}
            active={option.value === this.state.textFilter.value}
            onPress={this.onSegmentButton(option)}>
            <Text>{option.label}</Text>
          </Button>
        ))}
      </Segment>
    )
  }

  renderSearch() {
    const textFilter = this.state.textFilter

    return (
      <Block row style={{ padding: Theme.SIZES.BASE }}>
        <Content style={[styles.searchBarH]}>
          <Item style={{ borderBottomWidth: 0 }}>
            <Input
              style={{ height: 40, paddingTop: 0, paddingBottom: 0 }}
              placeholder={`Busca por ${textFilter.value}`}
              value={this.state.form[textFilter.param]}
              onChangeText={this.setForm(textFilter.param)}
            />
            <Touchable onPress={this.onTextFilterSearch}>
              <Icon
                style={[styles.searchBarHIcon]}
                color={Theme.COLORS.BLACK}
                type="FontAwesome"
                name="search"
              />
            </Touchable>
          </Item>
        </Content>
        <Button
          style={{
            backgroundColor: Theme.COLORS.PRIMARY,
            borderRadius: 9,
            marginLeft: 16,
          }}
          onPress={this.toggleQuick(true)}>
          <Icon
            style={[styles.iconFilterH]}
            type="FontAwesome"
            name="sliders"
          />
        </Button>
      </Block>
    )
  }

  render() {
    const esExportador = this.props.navigation.getParam('esExportador')

    return (
      <Block flex>
        {this.renderSegment()}
        {this.renderSearch()}
        <Hbar />
        <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
          <EmpresaList
            ref={e => (this.list = e)}
            filter={this.state.form}
            esExportador={esExportador}
          />
        </Content>
        {this.renderQuickFilter()}
        {this.renderAdvancedFilter()}
      </Block>
    )
  }
}

export default connect(ctx => ({
  data: ctx.context.data,
}))(Empresa)
