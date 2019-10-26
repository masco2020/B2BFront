import React from 'react'
import { Item, Picker, Icon, Input } from 'native-base'

export class CustomPicker extends React.Component {
  onValueChange = value => {
    this.props.updateValue(this.props.attributes.name, value)
  }

  render() {
    const attributes = this.props.attributes

    return (
      <Item picker>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          iosHeader={attributes.label}
          placeholder={attributes.label}
          placeholderStyle={{ color: '#BFC6EA', width: '100%' }}
          selectedValue={attributes.value}
          onValueChange={this.onValueChange}>
          <Picker.Item label={attributes.label} value={null} />
          {attributes.options.map(doc => (
            <Picker.Item key={doc.id} label={doc.nombre} value={doc.id} />
          ))}
        </Picker>
      </Item>
    )
  }
}

export class CustomInput extends React.Component {
  onValueChange = value => {
    this.props.updateValue(this.props.attributes.name, value)
  }

  render() {
    const attributes = this.props.attributes

    return (
      <Item>
        <Input
          value={attributes.value}
          placeholder={attributes.label}
          onChangeText={this.onValueChange}
          keyboardType={attributes.textType}
        />
      </Item>
    )
  }
}

export const getFields = data => {
  return [
    { type: 'customInput', required: true, name: 'nombres', label: 'Nombre' },
    {
      type: 'customInput',
      required: true,
      name: 'apellidoPaterno',
      label: 'Apellido Paterno',
    },
    {
      type: 'customInput',
      required: true,
      name: 'apellidoMaterno',
      label: 'Apellido Materno',
    },
    {
      type: 'customPicker',
      required: true,
      name: 'idTipoDocumento',
      defaultValue: 502,
      label: 'Seleccionar Tipo de Documento',
      options: data.listaTipoDocumento,
    },
    {
      type: 'customInput',
      required: true,
      name: 'nroDocumento',
      textType: 'phone-pad',
      label: 'Nº de Documento',
    },
    {
      type: 'customInput',
      required: true,
      name: 'email',
      label: 'Correo Electrónico',
    },
    {
      type: 'customPicker',
      required: true,
      name: 'idTipoCargo',
      label: 'Seleccionar Cargo',
      options: data.listaTipoCargo,
    },
    {
      type: 'customInput',
      required: false,
      name: 'celular',
      textType: 'phone-pad',
      label: 'Nº de Celular',
    },
    {
      type: 'customInput',
      required: false,
      textType: 'phone-pad',
      name: 'telefono',
      label: 'Nº de Telefono',
    },
    {
      type: 'customInput',
      required: false,
      name: 'skype',
      label: 'Cuenta Skype',
    },
  ]
}
