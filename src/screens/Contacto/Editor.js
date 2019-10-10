import React from 'react'
import { Content, Button, Text } from 'native-base'
import GenerateForm from 'react-native-form-builder'
import { Alert } from 'react-native'

import { getFields, CustomInput, CustomPicker } from 'components/ContactoEditor'
import { connect } from 'components/AppProvider'
import Block from 'components/Block'
import Theme from 'themes/default'

class ContactoEditor extends React.PureComponent {
  onSubmit = async () => {
    const data = this.props.navigation.getParam('data', {})
    const type = this.props.navigation.getParam('type')
    const idEmpresa = this.props.navigation.getParam('idEmpresa')

    if (!idEmpresa || !type) {
      return Alert.alert('Error', 'Faltan datos')
    }

    const formData = this.formGenerator.getValues()
    const method = type === 'create' ? 'contactoCreate' : 'contactoUpdate'

    try {
      this.props.dispatch({ type: 'APP_LOADING', payload: true })
      await this.props.api[method]({
        ...formData,
        idEmpresa,
        idUsuario: this.props.user.idUsuario,
        idContacto: data.idContacto,
      })

      this.props.navigation.goBack()
    } catch (error) {
      Alert.alert('Error', 'Error al guardar datos')
    } finally {
      this.props.dispatch({ type: 'APP_LOADING', payload: false })
    }
  }

  formatData(data) {
    const { tipoCargo = {}, tipoDocumento = {}, ...fields } = data
    return {
      ...fields,
      idTipoDocumento: tipoDocumento.id,
      idTipoCargo: tipoCargo.id,
    }
  }

  render() {
    const data = this.props.navigation.getParam('data', {})

    return (
      <Content>
        <Block style={{ padding: Theme.SIZES.BASE }}>
          <GenerateForm
            ref={c => (this.formGenerator = c)}
            fields={getFields(this.props.data)}
            formData={this.formatData(data)}
            customComponents={{
              customPicker: { component: CustomPicker },
              customInput: { component: CustomInput },
            }}
          />
        </Block>
        <Block style={{ padding: Theme.SIZES.BASE * 2 }}>
          <Button block onPress={this.onSubmit}>
            <Text>Guardar</Text>
          </Button>
        </Block>
      </Content>
    )
  }
}

export default connect(ctx => ({
  api: ctx.api,
  dispatch: ctx.dispatch,
  data: ctx.context.data,
  user: ctx.context.user,
}))(ContactoEditor)
