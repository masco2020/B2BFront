import React, { Component } from 'react'
import { TouchableNativeFeedback } from 'react-native'
import { Text, Card, CardItem } from 'native-base'
import { withNavigation } from 'react-navigation'

import Block from 'components/Block'
import { Badge } from 'components/styled'
import styles from 'styles/empresa'

class EmpresaHBox extends Component {
  navigateEmpresa = item => () => {
    this.props.navigation.navigate('EmpresaDetalle', { data: item })
  }

  render() {
    const item = this.props.item

    return (
      <TouchableNativeFeedback onPress={this.navigateEmpresa(item)}>
        <Card style={[styles.cartEmpresas]}>
          <CardItem bordered style={[styles.cartItemNamesEmpresas]}>
            <Text style={[styles.textNamesEmpresas]}>{item.nombre}</Text>
          </CardItem>
          <CardItem bordered style={[styles.cartItemDatesEmpresas]}>
            <Text style={[styles.textDatesEmpresas]}>RUC: {item.ruc}</Text>
            <Block flex row>
              {item.listaSectores.map(function(sector, index) {
                return (
                  <Badge key={index} color={sector.color} size={24}>
                    <Text style={[styles.badgeText]}>{sector.letra}</Text>
                  </Badge>
                )
              })}
            </Block>
          </CardItem>
        </Card>
      </TouchableNativeFeedback>
    )
  }
}

export default withNavigation(EmpresaHBox)
