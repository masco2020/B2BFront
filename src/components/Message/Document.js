import React from 'react'
import { Alert } from 'react-native'
import Block from 'components/Block'
import { connect } from 'components/AppProvider'
import { LinkText } from 'components/styled'

class MessageDocument extends React.Component {
  downloadDocument = async () => {
    try {
      this.props.dispatch({ type: 'APP_LOADING', payload: true })
      const uri = await this.props.api.downloadMedia({
        NombreArchivo: this.props.nombreArchivo,
      })
      console.info('documento path', uri)
      Alert.alert('', 'Se ha descargado el archivo')
    } catch (error) {
      console.info('documento error', error)
      Alert.alert('Error', 'Error al descargar archivo')
    } finally {
      this.props.dispatch({ type: 'APP_LOADING', payload: false })
    }
  }

  render() {
    return (
      <Block>
        <LinkText onPress={this.downloadDocument}>
          {this.props.mensaje}
        </LinkText>
      </Block>
    )
  }
}

export default connect(ctx => ({ api: ctx.api, dispatch: ctx.dispatch }))(
  MessageDocument
)
