import React from 'react'
import { Text, Card, CardItem } from 'native-base'
import { withNavigation } from 'react-navigation'

import Touchable from 'components/Touchable'
import Block from 'components/Block'
import { Badge } from 'components/styled'
import styles from 'styles/empresa'
import { fw, fz } from 'styles/styles'
import { connect } from './AppProvider'

const sectorColors = {
  A: '#86B920',
  E: '#DA0213',
  I: '#A0137C',
  M: '#FACE1E',
  P: '#0071B8',
}

class EmpresaBox extends React.PureComponent {
  static defaultProps = {
    item: {},
  }

  navigateEmpresa = item => () => {
    this.props.dispatch({ type: 'SET_EMPRESA', payload: item })
    this.props.navigation.navigate('EmpresaDetalle', {
      data: item,
      esExportador: this.props.esExportador,
    })
  }

  render() {
    const item = this.props.item
    const esExportador = this.props.esExportador

    return (
      <Touchable onPress={this.navigateEmpresa(item)}>
        <Card noShadow style={[styles.cardEmpresas]}>
          <CardItem bordered>
            <Text style={[fw.bold, fz.n16]}>{item.nombreEmpresa}</Text>
          </CardItem>
          <CardItem style={[{ justifyContent: 'space-between' }]}>
            {(esExportador && <Text>RUC: {item.ruc}</Text>) || (
              <Text>País: {item.pais}</Text>
            )}
            <Block row>
              {item.listaSectores.map(function(sector, index) {
                return (
                  <Badge
                    key={index}
                    color={sectorColors[sector.letra]}
                    size={24}>
                    <Text style={[styles.badgeText]}>{sector.letra}</Text>
                  </Badge>
                )
              })}
            </Block>
          </CardItem>
        </Card>
      </Touchable>
    )
  }
}

export default connect(ctx => ({
  dispatch: ctx.dispatch,
}))(withNavigation(EmpresaBox))
