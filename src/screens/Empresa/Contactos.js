import React, { Component } from 'react'
import { Modal } from 'react-native'
import styles from 'styles/contactos'
import {
  Text,
  Form,
  Item,
  Input,
  Button,
  View,
  Icon,
  Left,
  Body,
  Title,
  Content,
  Header,
  Right,
  List,
  ListItem,
} from 'native-base'
import ModalC from 'react-native-modal'
import ContactoList from 'screens/Contacto/List'
import Block from 'components/Block'
import { Hbar } from 'components/styled'

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

  dniModal = () => {
    this.setState({
      dniIsModalVisible: !this.state.dniIsModalVisible,
    })
  }

  renderModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.editContactVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.')
        // }}
      >
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.setEditContactVisible(!this.state.editContactVisible)
              }}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Nuevo Contacto</Title>
          </Body>
          <Right />
        </Header>
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

            <Item>
              <Button
                transparent
                iconRight
                style={[styles.btnPickProductsFicha]}
                onPress={this.dniModal}>
                <Text
                  style={[
                    styles.dateFicha,
                    styles.btnListFicha,
                    styles.dateBtnListFichaProducts,
                  ]}>
                  Tipo de Documento
                </Text>
                <Icon type="FontAwesome" name="caret-down" />
              </Button>
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
          <ContactoList />
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

          {/* <ModalNuevoContacto
            newContactVisible={this.state.newContactVisible}
            setNewContactVisible={this.setNewContactVisible(this)}
            dniModal={this.dniModal.bind(this)}
            /> */}
          {this.renderModal()}
          <ModalC
            isVisible={this.state.dniIsModalVisible}
            onBackdropPress={() => this.setState({ dniIsModalVisible: false })}
            style={[styles.modalFicha]}>
            <View style={{ flex: 1 }}>
              <List style={[styles.listFicha, styles.listModal]}>
                <Text primary style={[styles.tittleFicha]} note>
                  Documento
                </Text>
                {data.listaSectores.map(function(sector, index) {
                  return (
                    <ListItem
                      key={index}
                      style={[styles.listItemFicha, styles.listItemModal]}>
                      <Body style={[styles.itemBodyFicha]}>
                        <Text style={[styles.dateFicha]}>{sector.nombre}</Text>
                      </Body>
                    </ListItem>
                  )
                })}
              </List>
            </View>
          </ModalC>
        </Content>
      </Block>
    )
  }
}
