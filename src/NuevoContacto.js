import React, { Component } from "react";
import { Platform, StyleSheet, TouchableNativeFeedback, Modal } from 'react-native';
import styles from './Style.js';
import { Text, Form, Item, Input, Button, View, Icon, Left, Body, Title, Content, Header, Right } from 'native-base';

export default class NuevoContacto extends Component {
  state = {
    newContactVisible: this.props.newContactVisible
  }

  render() {
    const empresasHData = this.props.empresasHData
    return (
       
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.newContactVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
              <Header>
                <Left>
                  <Button transparent onPress={() => {this.props.setNewContactVisible(!this.state.newContactVisible);}} >
                      <Icon name='arrow-back' />
                  </Button>
                </Left>
                <Body>
                  <Title>Nuevo Contacto</Title>
                </Body>
                <Right />
              </Header>
              <Content >
                <View>
                  <Form style={[styles.formFicha]}>
                    <Item style={[styles.itemNewContact]} >
                      <Input placeholder="Nombre" />
                    </Item>
                    <Item  style={[styles.itemNewContact]} >
                      <Input placeholder="Apellido Paterno" />
                    </Item>
                    <Item style={[styles.itemNewContact]} >
                      <Input placeholder="Apellido Materno" />
                    </Item>
                    
                    <Item style={[styles.itemNewContact]} >
                      <Button transparent iconRight style={[styles.btnPicker]} onPress={()=> this.props.dniModal} >
                        <Text style={[styles.tipoDocumentBtnText]} >Tipo de Documento</Text>
                        <Icon type="FontAwesome" name='caret-down' />
                      </Button>
                    </Item>
                    <Item style={[styles.itemNewContact]} >
                      <Input placeholder="Nº de Documento" />
                    </Item>
                    <Item style={[styles.itemNewContact]} >
                      <Input placeholder="Correo Electrónico" />
                    </Item>
                    <Item style={[styles.itemNewContact]} >
                      <Input placeholder="Cargo" />
                    </Item>
                    <Item style={[styles.itemNewContact]} >
                      <Input placeholder="Nº de Celular" />
                    </Item>
                    <Item style={[styles.itemNewContact]} >
                      <Input placeholder="Nº de Telefono" />
                    </Item>
                    <Item style={[styles.itemNewContact]} last>
                      <Input placeholder="Cuenta Skype" />
                    </Item>
                  </Form>
                </View>
              </Content>
            </Modal>
    );
  }
}

module.exports = NuevoContacto;