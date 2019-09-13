import React, { Component } from "react";
import { Platform, StyleSheet, TouchableNativeFeedback, Modal } from 'react-native';
import styles from './Style.js';
import { Container, Root, Text, Form, Item, Label, Input, Button, View, Icon, Picker, Left, Card, CardItem, Body, Title, Content, Grid, Header, Right, List, ListItem } from 'native-base';
import IconF from 'react-native-vector-icons/dist/FontAwesome';
import ModalC from "react-native-modal";
import { Actions } from 'react-native-router-flux';
import ModalNuevoContacto from './NuevoContacto'

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
      const empresasHData = this.props.empresasHData
      const contactoInfo = this.props.contacts
    return (
        <View style={[styles.containerFicha]} >
          <Content style={[styles.content, styles.contentContactos]} >
            <View>
              <Button iconLeft style={[styles.empresarialContacto]} >
                <Icon type="FontAwesome" name='phone' style={[styles.iconEmpresarialContacto]} />
                <Text style={[styles.textEmpresarialContacto]} >{empresasHData.telefonoEmpresarial}</Text>
              </Button>
              <Button iconLeft style={[styles.empresarialContacto]} >
                <Icon type="FontAwesome" name='envelope' style={[styles.iconEmpresarialContacto]} />
                <Text style={[styles.textEmpresarialContacto]} >{empresasHData.telefonoEmpresarial}</Text>
              </Button>
            </View>
            <View style={{borderBottomWidth: 1,borderBottomColor: '#7e7e7d',margin:15,}} />
            <View>
              <Card style={[styles.contactoCards]} >
                <CardItem style={[styles.contactoCardsItems]}>
                  <Body style={[styles.contactoCardsBody]}>
                    <TouchableNativeFeedback  onPress={() => {this.setEditContactVisible(true);}}>
                      <View style={[styles.contactoCardTop]} >
                      <View style={[styles.contactNombre, styles.contactDato]} >
                        <Icon type="FontAwesome" name='user' style={[styles.iconEmpresarialContacto, styles.iconContact]} />
                        <Text style={[styles.contactText]}>
                          Raul Alonso
                        </Text>
                      </View>
                      <View style={[styles.contactCargo, styles.contactDato]} >
                        <Text style={[styles.contactText]}>
                            Gerente General
                        </Text>
                      </View>
                    </View>
                    </TouchableNativeFeedback>
                    <View style={[styles.contactoCardBot]} >
                      <View style={[styles.contactllamar, styles.contactDato]} >
                        <Icon type="FontAwesome" name='phone' style={[styles.iconEmpresarialContacto, styles.iconContact]} />
                        <Text style={[styles.contactText]}>
                          Llamar
                        </Text>
                      </View>
                      <View style={[styles.contactMail, styles.contactDato]} >
                        <Icon type="FontAwesome" name='envelope' style={[styles.iconEmpresarialContacto, styles.iconContact]} />
                        <Text style={[styles.contactText]}>
                          Correo
                        </Text>
                      </View>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </View>
            <View>
              <Button style={[styles.iniciarSesionBtn]} onPress={() => {this.setNewContactVisible(true);}}>
                <Text style={[styles.iniciarSesionBtnText, styles.textBtnNewContact]}>Nuevo Contacto</Text>
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
            }}>
              <Header>
                <Left>
                  <Button transparent onPress={() => {this.setEditContactVisible(!this.state.editContactVisible);}} >
                      <Icon name='arrow-back' />
                  </Button>
                </Left>
                <Body>
                  <Title>Editar Contacto</Title>
                </Body>
                <Right />
              </Header>
              <Content>
                <View style={{padding: 30}}>
                  <Form style={[styles.formFicha]}>
                    <Item>
                      <Input placeholder="Nombre" />
                    </Item>
                    <Item last>
                      <Input placeholder="Apellido Paterno" />
                    </Item>
                    <Item>
                      <Input placeholder="Apellido Materno" />
                    </Item>
                    
                    <Item>
                      <Button transparent iconRight style={[styles.btnPickProductsFicha]} onPress={this.dniModal} >
                        <Text style={[styles.dateFicha, styles.btnListFicha, styles.dateBtnListFichaProducts]} >Tipo de Documento</Text>
                        <Icon type="FontAwesome" name='caret-down' />
                      </Button>
                    </Item>
                    <Item last>
                      <Input placeholder="Nº de Documento" />
                    </Item>
                    <Item>
                      <Input placeholder="Correo Electrónico" />
                    </Item>
                    <Item last>
                      <Input placeholder="Cargo" />
                    </Item>
                    <Item>
                      <Input placeholder="Nº de Celular" />
                    </Item>
                    <Item last>
                      <Input placeholder="Nº de Telefono" />
                    </Item>
                    <Item last>
                      <Input placeholder="Cuenta Skype" />
                    </Item>
                  </Form>
                </View>
              </Content>
            </Modal>

            <ModalC 
            isVisible={this.state.dniIsModalVisible} 
            onBackdropPress={() => this.setState({ dniIsModalVisible: false })}
            style={[styles.modalFicha]} >
              <View style={{ flex: 1 }}>
                  <List style={[styles.listFicha, styles.listModal]} >
                      <Text primary style={[styles.tittleFicha]} note >Sectores</Text>
                      {
                          empresasHData.listaSectores.map(function (sector, index) {
                          return (
                              <ListItem style={[styles.listItemFicha, styles.listItemModal]} >
                                  <Body style={[styles.itemBodyFicha]} >
                                      <Text style={[styles.dateFicha]}>{sector.nombre}</Text>
                                  </Body>
                              </ListItem> 
                          )
                          })
                      } 
                  </List>
              </View>
            </ModalC>

          </Content>
        </View>
    );
  }
}

module.exports = Contactos;