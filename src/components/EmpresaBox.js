import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import { Text, Card, CardItem } from 'native-base'
import { withNavigation } from 'react-navigation'

import Block from 'components/Block'
import { Badge } from 'components/styled'
import styles from 'styles/empresa'

class EmpresaBox extends React.PureComponent {
  static defaultProps = {
    item: {},
  }

  navigateEmpresa = item => () => {
    this.props.navigation.navigate('EmpresaDetalle', { data: item })
  }

  render() {
    const item = this.props.item

    return (
      <TouchableNativeFeedback style={[styles.empresaTouch]} onPress={this.navigateEmpresa(item)}>
        <Card noShadow style={[styles.cardEmpresas]}>
          <CardItem bordered style={[styles.cardItemNamesEmpresas]}>
            <Text style={[styles.textNamesEmpresas]}>{item.nombreEmpresa}</Text>
          </CardItem>
          <CardItem bordered style={[styles.cardItemDatesEmpresas]}>
            <Text style={[styles.textDatesEmpresas]}>RUC: {item.ruc}</Text>
            <Block flex row>
              {item.listaSectores.map(function(sector, index) {
                return (
                  <Badge key={index} style={[styles.circulSector]} color={sector.color} size={27}>
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

export default withNavigation(EmpresaBox)
