import React, { Component } from 'react'
import { Text, Button, Icon, Content, ActionSheet } from 'native-base'
import { Alert, Linking, ToastAndroid } from 'react-native'

import styles, { FichaDesc, FichaTitle } from 'styles/ficha'
import { fz } from 'styles/styles'
import Block from 'components/Block'
import Actions from 'components/Button/Actions'
import { connect } from 'components/AppProvider'

class Ficha extends Component {
  static navigationOptions = {
    tabBarLabel: 'Ficha',
  }

  state = {
    sector: null,
  }

  openSelectSector = () => {
    const data = this.props.empresa

    ActionSheet.show(
      {
        options: data.listaSectores.map(sector => sector.nombre),
        title: 'Sectores',
      },
      selectedIndex => {
        this.setState({ sector: data.listaSectores[selectedIndex] })
      }
    )
  }

  openSelectProductos = () => {
    const productos = this.state.sector.listaProductos

    ActionSheet.show(
      {
        options: productos.map(prod => prod.nombre),
        title: 'Productos',
      },
      function() {}
    )
  }

  confirmSaveLocation = () => {
    Alert.alert(
      'Actualizar ubicación',
      'Al registrar una nueva ubicación la anterior será eliminada.',
      [
        { text: 'Guardar', onPress: () => this.saveLocation() },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    )
  }

  saveLocation = async () => {
    try {
      this.props.dispatch({ type: 'APP_LOADING', payload: true })
      await Actions.getLocation(info => {
        const data = this.props.empresa
        this.props.dispatch({
          type: 'UPDATE_EMPRESA',
          payload: {
            latitud: info.latitud,
            longitud: info.longitud,
          },
        })
        this.props.api.empresasGeoUpdate({
          idEmpresa: data.idEmpresa,
          Latitud: info.latitud,
          Longitud: info.longitud,
        })
      })
    } catch (error) {
      console.info(error)
    } finally {
      this.props.dispatch({ type: 'APP_LOADING', payload: false })
      ToastAndroid.show(
        'Ubicación registrada correctamente.',
        ToastAndroid.SHORT
      )
    }
  }

  showMap = () => {
    const { latitud, longitud } = this.props.empresa
    if (latitud && longitud) {
      Linking.openURL(
        `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`
      )
    } else {
      Alert.alert('Error', 'Esta empresa no tiene una ubicación registrada.')
    }
  }

  renderProductos() {
    const productos = this.state.sector.listaProductos

    return (
      <Block style={[styles.listFicha]}>
        <Block style={[styles.itemBodyFicha]}>
          <FichaTitle>Productos</FichaTitle>
          {(productos && productos.length && (
            <Button
              bordered
              iconRight
              style={[styles.btnPicker, styles.borderBtn]}
              onPress={this.openSelectProductos}>
              <Text
                style={[
                  styles.dateFicha,
                  styles.btnListFicha,
                  styles.dateBtnListFichaProducts,
                ]}>
                Ver Productos
              </Text>
              <Icon type="FontAwesome" name="search" style={fz.n18} />
            </Button>
          )) || <Text>No tiene productos</Text>}
        </Block>
      </Block>
    )
  }

  render() {
    const esExportador = this.props.navigation.getParam('esExportador', false)
    const tipoCliente = esExportador ? 'Exportador' : 'Comprador'
    const data = this.props.empresa
    const sector = this.state.sector

    return (
      <Block flex>
        <Content style={[styles.contentFicha]}>
          <Block style={[styles.listFicha]}>
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Tipo de Cliente</FichaTitle>
              <FichaDesc>{tipoCliente}</FichaDesc>
            </Block>
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Nombre Comercial</FichaTitle>
              <FichaDesc>{data.nombreComercial}</FichaDesc>
            </Block>
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Razón Social</FichaTitle>
              <FichaDesc>{data.razonSocial}</FichaDesc>
            </Block>
            {esExportador && (
              <Block style={[styles.itemBodyFicha]}>
                <FichaTitle>RUC</FichaTitle>
                <FichaDesc>{data.ruc}</FichaDesc>
              </Block>
            )}
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Sectores</FichaTitle>
              <Button
                bordered
                iconRight
                style={[styles.btnPicker, styles.borderBtn]}
                onPress={this.openSelectSector}>
                <Text
                  style={[
                    styles.dateFicha,
                    styles.btnListFicha,
                    styles.dateBtnListFichaSectores,
                  ]}>
                  {(sector && sector.nombre) || 'Ver Sectores'}
                </Text>
                <Icon type="FontAwesome" name="caret-down" />
              </Button>
            </Block>
          </Block>
          {this.state.sector && this.renderProductos()}
          {!esExportador && (
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>País</FichaTitle>
              <FichaDesc>{data.pais}</FichaDesc>
            </Block>
          )}
          <Block style={[styles.listFicha]}>
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Dirección</FichaTitle>
              <FichaDesc>{data.direccion}</FichaDesc>
            </Block>
            <Block row space="around" style={[styles.itemBodyFicha]}>
              <Button
                bordered
                style={styles.fichaButton}
                onPress={this.confirmSaveLocation}>
                <Text style={[{ textTransform: 'uppercase' }, fz.n16]}>
                  Guardar Ubicación
                </Text>
              </Button>
              <Button style={styles.fichaButton} onPress={this.showMap}>
                <Text style={[{ textTransform: 'uppercase' }, fz.n16]}>
                  Ver Mapa
                </Text>
              </Button>
            </Block>
          </Block>
          <Block style={[styles.listFicha]}>
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Nº Telefonico Empresarial</FichaTitle>
              <FichaDesc>{data.telefono}</FichaDesc>
            </Block>
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Correo Empresarial</FichaTitle>
              <FichaDesc>{data.email}</FichaDesc>
            </Block>
          </Block>
        </Content>
      </Block>
    )
  }
}

export default connect(ctx => ({
  api: ctx.api,
  dispatch: ctx.dispatch,
  empresa: ctx.context.empresa,
}))(Ficha)
