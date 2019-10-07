import React, { Component } from 'react'
import styles from 'styles/contactos'
import {
  Text,
  Form,
  Item,
  Input,
  Button,
  View,
  Icon,
  Content,
  Picker,
} from 'native-base'
import ContactoList from 'screens/Contacto/List'
import Block from 'components/Block'
import Modal from 'components/Modal'
import { Hbar } from 'components/styled'

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
    editContactVisible: false,
    newContactVisible: false,
    quitarPieState: this.props.quitarPieK,
    dniIsModalVisible: false,
  }

  setNewContactVisible(visible) {
    this.setState({
      newContactVisible: visible,
    })
  }

  setEditContactVisible(visible) {
    this.setState({
      editContactVisible: visible,
    })
  }

  renderModal() {
    return (
      <Modal
        animationType="slide"
        header="Editar Contacto"
        transparent={false}
        visible={this.state.editContactVisible}>
        <Content>
          <Form style={[styles.formFicha]}>
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
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                // selectedValue={this.state.selected2}
                // onValueChange={this.onValueChange2.bind(this)}
              >
                {tipoDocumentos.map((doc, index) => (
                  <Picker.Item
                    key={index}
                    label={doc.label}
                    value={doc.value}
                  />
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
          </Form>
        </Content>
      </Modal>
    )
  }

  render() {
    const data = this.props.navigation.getParam('data') || {}

    return (
      <Block flex>
        <Content style={[styles.content, styles.contentContactos]}>
          <View>
            <Button iconLeft style={[styles.empresarialContacto]}>
              <Icon
                type="FontAwesome"
                name="phone"
                style={[styles.iconEmpresarialContacto]}
              />
              <Text style={[styles.textEmpresarialContacto]}>
                {data.telefonoEmpresarial}
              </Text>
            </Button>
            <Button iconLeft style={[styles.empresarialContacto]}>
              <Icon
                type="FontAwesome"
                name="envelope"
                style={[styles.iconEmpresarialContacto]}
              />
              <Text style={[styles.textEmpresarialContacto]}>
                {data.correoEmpresarial}
              </Text>
            </Button>
          </View>
          <Hbar />
          <ContactoList data={data.listaContactos} />
          <View style={[styles.boxBtnNewContact]}>
            <Button
              style={[styles.iniciarSesionBtn]}
              onPress={() => {
                this.setEditContactVisible(true)
              }}>
              <Text
                style={[styles.iniciarSesionBtnText, styles.textBtnNewContact]}>
                Nuevo Contacto
              </Text>
            </Button>
          </View>
          {this.renderModal()}
        </Content>
      </Block>
    )
  }
}
