import React from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import produce from 'immer'
import debounce from 'lodash/debounce'

import { connect } from 'components/AppProvider'
import EmpresaBox from 'components/EmpresaBox'
import Block from 'components/Block'
import get from 'lodash/get'

const MAX_PER_PAGE = 10

class EmpresaList extends React.Component {
  static defaultProps = {
    esExportador: false,
    filter: {},
  }

  state = {
    page: 1,
    empresas: [],
  }

  // TODO: No llamar en componentDidMount
  componentDidMount() {
    this.debouncedLoad()
  }

  onScroll = event => {
    const convoBoxHeight = event.nativeEvent.layoutMeasurement.height
    const convoTotalHeight = event.nativeEvent.contentSize.height

    if (
      event.nativeEvent.contentOffset.y >
      convoTotalHeight - convoBoxHeight - 100
    ) {
      this.loadEmpresas()
    }
  }

  loadEmpresas = async reset => {
    if (this.props.loading) {
      return
    }

    const { esExportador, dispatch, filter } = this.props

    dispatch({ type: 'APP_LOADING', payload: true })
    const Pagina = reset ? 1 : this.state.page

    try {
      const res = await this.props.api.empresasList({
        Pagina,
        Cantidad: MAX_PER_PAGE,
        EsExportador: esExportador,
        ...filter,
      })

      if (res && res.data && res.data.length) {
        this.setState(
          produce(draft => {
            draft.page = Pagina + 1
            draft.empresas = reset ? res.data : draft.empresas.concat(res.data)
          })
        )
      }
    } catch (error) {
      console.error('ERROR', error)
    } finally {
      dispatch({ type: 'APP_LOADING', payload: false })
    }
  }

  debouncedLoad = debounce(this.loadEmpresas, 1000)

  renderFooter = () => {
    if (!this.props.loading) return null
    return <ActivityIndicator style={{ color: '#000' }} />
  }

  renderEmpty = () => {
    return (
      <Block flex center middle>
        <Text>No se encontraron resultados</Text>
      </Block>
    )
  }

  renderHeader = () => {
    const empresas = this.state.empresas
    if (empresas.length) {
      const totalEmpresas = get(empresas, '[0].total')

      return <Text>Resultado: {totalEmpresas}</Text>
    }
    return null
  }

  render() {
    return (
      <FlatList
        style={{ paddingHorizontal: 16 }}
        data={this.state.empresas}
        extraData={this.state}
        renderItem={({ item }) => (
          <EmpresaBox item={item} esExportador={this.props.esExportador} />
        )}
        keyExtractor={(item, index) => `${item.idEmpresa}_${index}`}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        ListEmptyComponent={this.renderEmpty}
        onScroll={this.onScroll}
      />
    )
  }
}

export default connect(ctx => ({
  empresas: ctx.context.empresas,
  loading: ctx.context.app.loading,
  api: ctx.api,
  dispatch: ctx.dispatch,
}))(EmpresaList)
