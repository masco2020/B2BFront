import React, { Component } from 'react'
import { Text, Button, Icon, Content, ActionSheet } from 'native-base'
import { Alert, Linking } from 'react-native'

import styles, { FichaDesc, FichaTitle } from 'styles/ficha'
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

  saveLocation = () => {
    try {
      this.props.dispatch({ type: 'APP_LOADING', payload: true })
      Actions.getLocation(info => {
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
    }
  }

  showMap = () => {
    const { latitud, longitud } = this.props.empresa
    if (latitud && longitud) {
      Linking.openURL(`https://www.google.com/maps/@${latitud},${longitud},16z`)
    } else {
      Alert.alert('Error', 'Ingresa la ubicación')
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
              <Icon type="FontAwesome" name="caret-down" />
            </Button>
          )) || <Text>No tiene productos</Text>}
        </Block>
      </Block>
    )
  }

  render() {
    const tipoCliente = this.props.navigation.getParam('esExportador', false)
      ? 'Exportador'
      : 'Comprador'
    const data = this.props.empresa

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
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>RUC</FichaTitle>
              <FichaDesc>{data.ruc}</FichaDesc>
            </Block>
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
                  Ver Sectores
                </Text>
                <Icon type="FontAwesome" name="caret-down" />
              </Button>
            </Block>
          </Block>
          {this.state.sector && this.renderProductos()}
          <Block style={[styles.listFicha]}>
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Dirección</FichaTitle>
              <FichaDesc>{data.direccion}</FichaDesc>
            </Block>
            <Block row space="around" style={[styles.itemBodyFicha]}>
              <Button
                bordered
                style={styles.fichaButton}
                onPress={this.saveLocation}>
                <Text>Ingresar Ubicación</Text>
              </Button>
              <Button style={styles.fichaButton} onPress={this.showMap}>
                <Text>Ver Mapa</Text>
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
