import React, { Component } from 'react'
import { Text, Button, Icon, Content, ActionSheet } from 'native-base'

import styles, { FichaDesc, FichaTitle } from 'styles/ficha'
import Block from 'components/Block'

export default class Ficha extends Component {
  static navigationOptions = {
    tabBarLabel: 'Ficha',
  }

  openSelectSector = () => {
    const data = this.props.navigation.getParam('data', {})

    ActionSheet.show(
      {
        options: data.listaSectores.map(sector => sector.nombre),
        title: 'Sectores',
      },
      function() {}
    )
  }

  render() {
    const data = this.props.navigation.getParam('data', {})
    return (
      <Block flex>
        <Content style={[styles.contentFicha]}>
          <Block style={[styles.listFicha]}>
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Tipo de Cliente</FichaTitle>
              <FichaDesc>{data.tipoCliente}</FichaDesc>
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
          <Block style={[styles.listFicha]}>
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Productos</FichaTitle>
              <Button
                bordered
                iconRight
                style={[styles.btnPicker, styles.borderBtn]}
                onPress={this.openSelectSector}>
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
            </Block>
          </Block>
          <Block style={[styles.listFicha]}>
            <Block style={[styles.itemBodyFicha]}>
              <FichaTitle>Dirección</FichaTitle>
              <FichaDesc>{data.direccion}</FichaDesc>
            </Block>
            <Block row space="around" style={[styles.itemBodyFicha]}>
              <Button bordered style={styles.fichaButton}>
                <Text>Ingresar Ubicación</Text>
              </Button>
              <Button style={styles.fichaButton}>
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
