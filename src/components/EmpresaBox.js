import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import { Text, Card, CardItem } from 'native-base'
import { withNavigation } from 'react-navigation'

import Block from 'components/Block'
import { Badge } from 'components/styled'
import styles from 'styles/empresa'
import { fw, fz } from 'styles/styles'

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
      <TouchableNativeFeedback onPress={this.navigateEmpresa(item)}>
        <Card noShadow style={[styles.cardEmpresas]}>
          <CardItem bordered>
            <Text style={[fw.bold, fz.n16]}>{item.nombreEmpresa}</Text>
          </CardItem>
          <CardItem style={[{ justifyContent: 'space-between' }]}>
            <Text>RUC: {item.ruc}</Text>
            <Block row>
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

export default withNavigation(EmpresaBox)
