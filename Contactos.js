import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  Modal
} from 'react-native';
import styles from './Style.js';
import {
  Container,
  Root,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
  View,
  Icon,
  Picker,
  Left,
  Card,
  CardItem,
  Body,
  Title,
  Content,
  Grid,
  Header,
  Right,
  List,
  ListItem
} from 'native-base';
// import IconF from 'react-native-vector-icons/dist/FontAwesome';
import ModalC from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import ModalNuevoContacto from './NuevoContacto';
import ContactoList from './ContactoList';

export default class Contactos extends Component {
  state = {
    editContactVisible: false,
    newContactVisible: false,
    quitarPieState: this.props.quitarPieK,
    dniIsModalVisible: false
  };

  setNewContactVisible(visible) {
    this.setState({
      newContactVisible: visible
    });
  }

  setEditContactVisible(visible) {
    this.setState({
      editContactVisible: visible
    });
  }

  dniModal = () => {
    this.setState({
      dniIsModalVisible: !this.state.dniIsModalVisible
    });
  };

  render() {
    const empresasHData = this.props.empresasHData;
    const contact = this.props.contact;
    return (
      <View style={[styles.containerFicha]}>
        <Content
          style={[styles.content, styles.contentContactos]}
        >
          <View>
            <Button
              iconLeft
              style={[styles.empresarialContacto]}
            >
              <Icon
                type="FontAwesome"
                name="phone"
                style={[styles.iconEmpresarialContacto]}
              />
              <Text
                style={[styles.textEmpresarialContacto]}
              >
                {empresasHData.telefonoEmpresarial}
              </Text>
            </Button>
            <Button
              iconLeft
              style={[styles.empresarialContacto]}
            >
              <Icon
                type="FontAwesome"
                name="envelope"
                style={[styles.iconEmpresarialContacto]}
              />
              <Text
                style={[styles.textEmpresarialContacto]}
              >
                {empresasHData.telefonoEmpresarial}
              </Text>
            </Button>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#7e7e7d',
              marginTop: 15,
              marginBottom: 15
            }}
          />
          <ContactoList />
          <View style={[styles.boxBtnNewContact]}>
            <Button
              style={[styles.iniciarSesionBtn]}
              onPress={() => {
                this.setEditContactVisible(true);
              }}
            >
              <Text
                style={[
                  styles.iniciarSesionBtnText,
                  styles.textBtnNewContact
                ]}
              >
                Nuevo Contacto
              </Text>
            </Button>
          </View>

          {/* <ModalNuevoContacto
            newContactVisible={this.state.newContactVisible}
            setNewContactVisible={this.setNewContactVisible(this)}
            dniModal={this.dniModal.bind(this)}
            /> */}

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
                <Form style={[styles.formFicha]}>
                  <Item>
                    <Input
                      placeholder="Nombre"
                      value="Alonso"
                    />
                  </Item>
                  <Item last>
                    <Input
                      placeholder="Apellido Paterno"
                      value="Alonso"
                    />
                  </Item>
                  <Item>
                    <Input
                      placeholder="Apellido Materno"
                      value="Alonso"
                    />
                  </Item>

                  <Item>
                    <Button
                      transparent
                      iconRight
                      style={[styles.btnPickProductsFicha]}
                      onPress={this.dniModal}
                    >
                      <Text
                        style={[
                          styles.dateFicha,
                          styles.btnListFicha,
                          styles.dateBtnListFichaProducts
                        ]}
                      >
                        Tipo de Documento
                      </Text>
                      <Icon
                        type="FontAwesome"
                        name="caret-down"
                      />
                    </Button>
                  </Item>
                  <Item last>
                    <Input
                      placeholder="Nº de Documento"
                      value="Alonso"
                    />
                  </Item>
                  <Item>
                    <Input
                      placeholder="Correo Electrónico"
                      value="Alonso"
                    />
                  </Item>
                  <Item last>
                    <Input
                      placeholder="Cargo"
                      value="Alonso"
                    />
                  </Item>
                  <Item>
                    <Input
                      placeholder="Nº de Celular"
                      value="Alonso"
                    />
                  </Item>
                  <Item last>
                    <Input
                      placeholder="Nº de Telefono"
                      value="Alonso"
                    />
                  </Item>
                  <Item last>
                    <Input
                      placeholder="Cuenta Skype"
                      value="Alonso"
                    />
                  </Item>
                </Form>
              </View>
            </Content>
          </Modal>

          <ModalC
            isVisible={this.state.dniIsModalVisible}
            onBackdropPress={() =>
              this.setState({ dniIsModalVisible: false })
            }
            style={[styles.modalFicha]}
          >
            <View style={{ flex: 1 }}>
              <List
                style={[styles.listFicha, styles.listModal]}
              >
                <Text
                  primary
                  style={[styles.tittleFicha]}
                  note
                >
                  Sectores
                </Text>
                {empresasHData.listaSectores.map(function(
                  sector,
                  index
                ) {
                  return (
                    <ListItem
                      style={[
                        styles.listItemFicha,
                        styles.listItemModal
                      ]}
                    >
                      <Body style={[styles.itemBodyFicha]}>
                        <Text style={[styles.dateFicha]}>
                          {sector.nombre}
                        </Text>
                      </Body>
                    </ListItem>
                  );
                })}
              </List>
            </View>
          </ModalC>
        </Content>
      </View>
    );
  }
}

module.exports = Contactos;
