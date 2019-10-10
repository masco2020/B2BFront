import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import EmpresaBox from 'components/EmpresaBox'
import { connect } from 'components/AppProvider'
import produce from 'immer'

const MAX_PER_PAGE = 10

class EmpresaList extends React.Component {
  static defaultProps = {
    esExportador: false,
  }

  state = {
    page: 1,
    empresas: [],
  }

  // TODO: No llamar en componentDidMount
  componentDidMount() {
    this.loadEmpresas()
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

  loadEmpresas = async () => {
    if (this.props.loading) {
      return
    }

    const { esExportador, dispatch } = this.props

    dispatch({ type: 'APP_LOADING', payload: true })
    const Pagina = this.state.page

    try {
      const res = await this.props.api.empresasList({
        Pagina,
        Cantidad: MAX_PER_PAGE,
        EsExportador: esExportador,
      })

      this.setState(
        produce(draft => {
          draft.page = Pagina + 1
          draft.empresas = draft.empresas.concat(res.data)
        })
      )
    } catch (error) {
      console.error('ERROR', error)
    } finally {
      dispatch({ type: 'APP_LOADING', payload: false })
    }
  }

  renderFooter = () => {
    if (!this.props.loading) return null
    return <ActivityIndicator style={{ color: '#000' }} />
  }

  render() {
    return (
      <FlatList
        style={{ paddingHorizontal: 16 }}
        data={this.state.empresas}
        extraData={this.state}
        renderItem={({ item }) => <EmpresaBox item={item} />}
        keyExtractor={(item, index) => `${item.idEmpresa}_${index}`}
        ListFooterComponent={this.renderFooter}
        onScroll={this.onScroll}
      />
    )
  }
}

export default connect(ctx => ({
  empresas: ctx.context.empresas,
  loading: ctx.loading,
  api: ctx.api,
  dispatch: ctx.dispatch,
  setContext: ctx.setContext,
}))(EmpresaList)
