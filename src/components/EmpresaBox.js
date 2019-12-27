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
    // =======
    (async () => {
      this.props.dispatch({
        type: 'SET_EMPRESA',
        payload: await this.loadDetalleEmpresa(item.idEmpresa)
      })
      this.props.navigation.navigate('EmpresaDetalle', {
        data: item,
        detalleEmpresa: true,
        esExportador: this.props.esExportador,
      })
    })()
    // =======
  }

  loadDetalleEmpresa = async idEmpresa => {
    let res = {}

    if (this.props.loading) {
      return
    }
    this.props.dispatch({ type: 'APP_LOADING', payload: true })

    try {
      res = await this.props.api.detalleEmpresa({
        idEmpresa,
      })

    } catch (error) {
      console.error('ERROR', error)
    } finally {
      this.props.dispatch({ type: 'APP_LOADING', payload: false })
    }

    return res.data
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
  api: ctx.api,
  dispatch: ctx.dispatch,
}))(withNavigation(EmpresaBox))
