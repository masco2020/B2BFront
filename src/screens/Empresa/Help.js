import React from 'react'
import { Text } from 'native-base'
// import ModalC from 'react-native-modal'
// import Modal from 'components/Modal'
import Block from 'components/Block'
// import EmpresaList from 'screens/Empresa/List'
// import { Hbar } from 'components/styled'
import Theme from 'themes/default'

import styles from 'styles/exportador'
import { Badge, Hbar } from 'components/styled'
import { fc, fw, fz } from 'styles/styles'

const sectores = [
  { initial: 'A', color: '#86B920', name: 'Agronegocios' },
  { initial: 'E', color: '#DA0213', name: 'Exportación de Servicios' },
  {
    initial: 'I',
    color: '#A0137C',
    name: 'Industria de la vestimenta y decoración',
  },
  { initial: 'M', color: '#FACE1E', name: 'Manufacturas Diversas' },
  { initial: 'P', color: '#0071B8', name: 'Productos Pesqueros' },
]

class Help extends React.PureComponent {
  render() {
    return (
      <Block flex style={[styles.modalLeyendaBox]}>
        <Text style={[fc.black, fw.bold, fz.n24]}>Reconócelos</Text>
        <Hbar color={Theme.COLORS.BLACK} />
        <Text style={[fc.black, fz.n16]}>
          Aprende como reconocer los sectores facilmente con nuestros iconos de
          colores:
        </Text>
        <Block flex style={{ paddingVertical: Theme.SIZES.BASE }}>
          {sectores.map(sector => (
            <Block
              row
              middle
              key={sector.initial}
              style={{ marginBottom: Theme.SIZES.BASE }}>
              <Badge
                color={sector.color}
                size={40}
                style={{ marginRight: Theme.SIZES.BASE / 2 }}>
                <Text style={[fz.n24, fc.white]}>{sector.initial}</Text>
              </Badge>
              <Block>
                <Text style={[fz.n16, { color: sector.color }]}>
                  {sector.name}
                </Text>
              </Block>
            </Block>
          ))}
        </Block>
      </Block>
    )
  }
}

export default Help
