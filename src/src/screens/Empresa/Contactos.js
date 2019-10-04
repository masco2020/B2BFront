import React, { Component } from 'react'
import { Modal } from 'react-native'
import styles from 'styles/contactos'
import estilo from 'styles/styles'
import { Text, Form, Item, Input, Button, View, Icon, Left, Body, Title, Content, Header, Right, List, ListItem, } from 'native-base'
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
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.setEditContactVisible(
                  !this.state.editContactVisible
                );
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Editar Contacto</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{ padding: 30 }}>
          <Form style={[estilo.formFicha]}>
                <Item style={[estilo.itemNewContact]} >
                  <Input placeholder="Nombre" />
                </Item>
                <Item  style={[estilo.itemNewContact]} >
                  <Input placeholder="Apellido Paterno" />
                </Item>
                <Item style={[estilo.itemNewContact]} >
                  <Input placeholder="Apellido Materno" />
                </Item>
                
                <Item style={[estilo.itemNewContact]} >
                  <Button transparent iconRight style={[estilo.btnPickProductsFicha]} onPress={this.dniModal} >
                    <Text style={[estilo.tipoDocumentBtnText]} >Tipo de Documento</Text>
                    <Icon type="FontAwesome" name='caret-down' />
                  </Button>
                </Item>
                <Item style={[estilo.itemNewContact]} >
                  <Input placeholder="Nº de Documento" />
                </Item>
                <Item style={[estilo.itemNewContact]} >
                  <Input placeholder="Correo Electrónico" />
                </Item>
                <Item style={[estilo.itemNewContact]} >
                  <Input placeholder="Cargo" />
                </Item>
                <Item style={[estilo.itemNewContact]} >
                  <Input placeholder="Nº de Celular" />
                </Item>
                <Item style={[estilo.itemNewContact]} >
                  <Input placeholder="Nº de Telefono" />
                </Item>
                <Item style={[estilo.itemNewContact]} last>
                  <Input placeholder="Cuenta Skype" />
                </Item>
              </Form>
          </View>
        </Content>
      </Modal>
    )
  }

  renderModalDni() {
    return(
      <ModalC
        isVisible={this.state.dniIsModalVisible}
        onBackdropPress={() => this.setState({ dniIsModalVisible: false })}
        style={[estilo.modalFicha]}
      >
        <View style={{ flex: 1 }}>
          <List
            style={[estilo.listFicha, estilo.listModal]}
          >
            <Text
              primary
              style={[estilo.tittleFicha]}
              note
            >
              Tipo de Documento
            </Text>
            <ListItem
              style={[
                estilo.listItemFicha,
                estilo.listItemModal
              ]}
            >
              <Body style={[estilo.itemBodyFicha]}>
                <Text style={[estilo.dateFicha]}>
                  DNI
                </Text>
              </Body>
            </ListItem>
            <ListItem
              style={[
                estilo.listItemFicha,
                estilo.listItemModal
              ]}
            >
              <Body style={[estilo.itemBodyFicha]}>
                <Text style={[estilo.dateFicha]}>
                  Pasaporte
                </Text>
              </Body>
            </ListItem>
            <ListItem
              style={[
                estilo.listItemFicha,
                estilo.listItemModal
              ]}
            >
              <Body style={[estilo.itemBodyFicha]}>
                <Text style={[estilo.dateFicha]}>
                  Carnet de Extranjería
                </Text>
              </Body>
            </ListItem>
            <ListItem
              style={[
                estilo.listItemFicha,
                estilo.listItemModal
              ]}
            >
              <Body style={[estilo.itemBodyFicha]}>
                <Text style={[estilo.dateFicha]}>
                  RUC
                </Text>
              </Body>
            </ListItem>
          </List>
        </View>
      </ModalC>
    )
  }

  render() {
    const data = this.props.navigation.getParam('data') || {}

    return (
      <Block flex>
        <Content style={[styles.content, styles.contentContactos]}>
        <View>
          <Button iconLeft style={[estilo.empresarialContacto]} >
            <Icon type="FontAwesome" name="phone" style={[estilo.iconEmpresarialContacto]} />
            <Text style={[estilo.textEmpresarialContacto]} >
              {data.telefonoEmpresarial}
            </Text>
          </Button>
          <Button iconLeft style={[estilo.empresarialContacto]} >
            <Icon type="FontAwesome" name="envelope" style={[estilo.iconEmpresarialContacto]} />
            <Text style={[estilo.textEmpresarialContacto]} >
              {data.correoEmpresarial}
            </Text>
          </Button>
        </View>
        <View style={{ borderBottomWidth: 1,borderBottomColor: '#7e7e7d',marginTop: 15,marginBottom: 15 }} />
        <ContactoList />
        <View style={[estilo.boxBtnNewContact]}>
          <Button style={[estilo.iniciarSesionBtn, estilo.borderBtn]} onPress={() => { this.setEditContactVisible(true); }} >
            <Text style={[ estilo.iniciarSesionBtnText, estilo.textBtnNewContact ]} >
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
          {this.renderModalDni()}
          
        </Content>
      </Block>
    )
  }
}
