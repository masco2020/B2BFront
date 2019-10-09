import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Text, Item, Input, Button, View, Content, Picker } from 'native-base'

import ContactoBox from 'components/ContactoBox'
import Block from 'components/Block'
import Icon from 'components/Icon'
import Modal from 'components/Modal'
import { Hbar } from 'components/styled'
import styles from 'styles/contactos'

const tipoDocumentos = [
  { value: 'dni', label: 'DNI' },
  { value: 'pasaporte', label: 'Pasaporte' },
  { value: 'carnet', label: 'Carnet de Extranjería' },
  { value: 'ruc', label: 'RUC' },
]

export default class Contactos extends Component {
  static navigationOptions = {
    tabBarLabel: 'Contactos',
  }

  state = {
    editorVisible: false,
  }

  toggleEditor = () => {
    this.setState({
      editorVisible: !this.state.editorVisible,
    })
  }

  renderModal() {
    return (
      <Modal
        header="Editar Contacto"
        visible={this.state.editorVisible}
        onRequestClose={this.toggleEditor}>
        <Content>
          <Item>
            <Input placeholder="Nombre" />
          </Item>
          <Item>
            <Input placeholder="Apellido Paterno" />
          </Item>
          <Item>
            <Input placeholder="Apellido Materno" />
          </Item>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              // style={{ width: undefined }}
              placeholder="Tipo de Documento"
              placeholderStyle={{ color: '#bfc6ea', width: '100%' }}
              placeholderIconColor="#007aff"
              // selectedValue={this.state.selected2}
              // onValueChange={this.onValueChange2.bind(this)}
            >
              {tipoDocumentos.map((doc, index) => (
                <Picker.Item key={index} label={doc.label} value={doc.value} />
              ))}
            </Picker>
          </Item>
          <Item>
            <Input placeholder="Nº de Documento" />
          </Item>
          <Item>
            <Input placeholder="Correo Electrónico" />
          </Item>
          <Item>
            <Input placeholder="Cargo" />
          </Item>
          <Item>
            <Input placeholder="Nº de Celular" />
          </Item>
          <Item>
            <Input placeholder="Nº de Telefono" />
          </Item>
          <Item>
            <Input placeholder="Cuenta Skype" />
          </Item>
        </Content>
      </Modal>
    )
  }

  render() {
    const data = this.props.navigation.getParam('data') || {}
    const info = [
      { icon: 'phone', prop: 'telefono' },
      { icon: 'envelope', prop: 'email' },
    ]

    return (
      <Block flex>
        <Content style={[styles.contentContactos]}>
          <View>
            {info.map(contact => (
              <Block key={contact.icon} flex row style={[styles.infoContacto]}>
                <Block middle>
                  <Icon name={contact.icon} primary />
                </Block>
                <Text selectable style={[styles.infoText]}>
                  {data[contact.prop]}
                </Text>
              </Block>
            ))}
          </View>
          <Hbar />
          <FlatList
            data={data.listaContactos}
            renderItem={({ item }) => <ContactoBox item={item} />}
            keyExtractor={item => item.idContacto.toString()}
          />
          <Block center style={{ marginVertical: 32 }}>
            <Button onPress={this.toggleEditor}>
              <Text>Nuevo Contacto</Text>
            </Button>
          </Block>
          {this.renderModal()}
        </Content>
      </Block>
    )
  }
}
