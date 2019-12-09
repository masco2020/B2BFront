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
      return Alert.alert('Advertencia', 'Datos incompletos.')
    }

    const formData = this.formGenerator.getValues()
    const method = type === 'create' ? 'contactoCreate' : 'contactoUpdate'

    if (!this.validateEmail(formData.email)) {
      return Alert.alert('Advertencia', 'Correo electrónico incorrecto.')
    }

    try {
      this.props.dispatch({ type: 'APP_LOADING', payload: true })

      const response = await this.props.api[method]({
        ...formData,
        idEmpresa,
        idUsuario: this.props.user.idUsuario,
        idContacto: data.idContacto,
      })

      if (!response || !response.success) {
        Alert.alert('Error', 'No se pudo hacer el registro, revisar campos.')
      } else {
        // Update en local
        const empresa = this.props.empresa
        let contactos = this.props.empresa.listaContactos

        if (type === 'create') {
          contactos.push(response.data)
        } else {
          contactos = contactos.map(c => {
            return c.idContacto === data.idContacto ? response.data : c
          })
        }

        this.props.dispatch({
          type: 'UPDATE_EMPRESA',
          payload: { ...empresa, listaContactos: contactos },
        })

        // Fin update local
        this.props.navigation.goBack()
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo hacer el registro, revisar campos.')
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

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
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
            <Text style={{ fontSize: 20 }}>Guardar</Text>
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
  empresa: ctx.context.empresa,
}))(ContactoEditor)
