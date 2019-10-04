import React, { Component } from 'react'
import { FlatList } from 'react-native'
import EmpresaBox from 'components/EmpresaBox'
import empresas from 'mockup/empresas'
import { Container } from 'components/styled'

export default class EmpresaHList extends Component {
  render() {
    return (
      <Container>
        <FlatList
          data={empresas}
          renderItem={({ item }) => <EmpresaBox item={item} />}
          keyExtractor={(item, index) => item.ruc + index}
        />
      </Container>
    )
  }
}
