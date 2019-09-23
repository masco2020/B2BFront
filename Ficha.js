import React, { Component } from "react";
import { Platform, StyleSheet, TouchableNativeFeedback } from 'react-native';
import styles from './Style.js';
import { Container, Drawer, StyleProvider, Root, Text, Form, Item, Label, Input, Button, View, Icon, Picker, Header, Tab, Tabs, Left, Body, Title, Right, Content, Grid, List, ListItem } from 'native-base';
import Modal from "react-native-modal";
// import IconF from 'react-native-vector-icons/dist/FontAwesome';
// import { Actions } from 'react-native-router-flux';


export default class Ficha extends Component {

    state = {
        isModalVisible: false,
        sectorIsModalVisible: false
    };

    sectoresModal = () => {
        this.setState({
            sectorIsModalVisible: !this.state.sectorIsModalVisible
        });
    };

    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
    };

  render() {
      const empresasHData = this.props.empresasHData
    return (
        <View style={[styles.containerFicha]} >
          <Content style={[styles.contentFicha]} >
              <Form style={[styles.formFicha]}>
                  <List style={[styles.listFicha]} >
                    <ListItem style={[styles.listItemFicha]} >
                        <Body style={[styles.itemBodyFicha]} >
                            <Text style={[styles.tittleFicha]}  note>Tipo de Cliente</Text>
                            <Text style={[styles.dateFicha]}  >{empresasHData.tipoCliente}</Text>
                        </Body>
                    </ListItem>
                    <ListItem style={[styles.listItemFicha]}>
                        <Body style={[styles.itemBodyFicha]}>
                            <Text style={[styles.tittleFicha]} note>Nombre Comercial</Text>
                            <Text style={[styles.dateFicha]}>{empresasHData.nombre}</Text>
                        </Body>
                    </ListItem>
                    <ListItem style={[styles.listItemFicha]}>
                        <Body style={[styles.itemBodyFicha]}>
                            <Text style={[styles.tittleFicha]} note>Razón Social</Text>
                            <Text style={[styles.dateFicha]}>{empresasHData.razonSocial}</Text>
                        </Body>
                    </ListItem>
                    <ListItem style={[styles.listItemFicha]}>
                        <Body style={[styles.itemBodyFicha]}>
                            <Text style={[styles.tittleFicha]} note>RUC</Text>
                            <Text style={[styles.dateFicha]}>{empresasHData.ruc}</Text>
                        </Body>
                    </ListItem>
                    <ListItem style={[styles.listItemFicha]}>
                        <Body style={[styles.itemBodyFicha]}>
                            <Text style={[styles.tittleFicha]} note>Sectores</Text>
                            <Button bordered iconRight style={[styles.btnPicker]} onPress={this.sectoresModal} >
                                <Text style={[styles.dateFicha, styles.btnListFicha, styles.dateBtnListFichaSectores]} >Ver Sectores</Text>
                                <Icon type="FontAwesome" name='caret-down' />
                            </Button>
                        </Body>
                    </ListItem>
                </List>
                <List style={[styles.listFicha]} >
                    <ListItem style={[styles.listItemFicha]} >
                        <Body style={[styles.itemBodyFicha]} >
                            <Text style={[styles.tittleFicha]} note>Productos</Text>
                            <Button bordered iconRight style={[styles.btnPicker]} onPress={this.toggleModal} >
                                <Text style={[styles.dateFicha, styles.btnListFicha, styles.dateBtnListFichaProducts]} >Ver Productos</Text>
                                <Icon type="FontAwesome" name='caret-down' />
                            </Button>
                        </Body>
                    </ListItem>
                </List>
                <List style={[styles.listFicha]} >
                    <ListItem style={[styles.listItemFicha]} >
                        <Body style={[styles.itemBodyFicha]} >
                            <Text style={[styles.tittleFicha]} note>Dirección</Text>
                            <Text style={[styles.dateFicha]}>{empresasHData.tipoCliente}</Text>
                            <View style={[styles.boxBtnLocationFicha]} >
                                <Button bordered style={[styles.btnAddLocationFicha]} >
                                    <Text style={[styles.dateFicha, styles.textBtnAddLocationFicha]} >Ingresar Ubicación</Text>
                                </Button>
                                <Button style={[styles.btnVerLocationFicha]} >
                                    <Text style={[styles.dateFicha, styles.textBtnVerLocationFicha]} >Ver Mapa</Text>
                                </Button>
                            </View>
                        </Body>
                    </ListItem>
                </List>
                <List style={[styles.listFicha]} >
                    <ListItem style={[styles.listItemFicha]} >
                        <Body style={[styles.itemBodyFicha]} >
                            <Text style={[styles.tittleFicha]}  note>Nº Telefonico Empresarial</Text>
                            <Text style={[styles.dateFicha]}  >{empresasHData.telefonoEmpresarial}</Text>
                        </Body>
                    </ListItem>
                    <ListItem style={[styles.listItemFicha, styles.listItemFichaContac]}>
                        <Body style={[styles.itemBodyFicha]}>
                            <Text style={[styles.tittleFicha]} note>Correo Empresarial</Text>
                            <Text style={[styles.dateFicha]}>{empresasHData.correoEmpresarial}</Text>
                        </Body>
                    </ListItem>
                </List>
              </Form>
          </Content>

          <Modal
          isVisible={this.state.sectorIsModalVisible}
          onBackdropPress={() => this.setState({ sectorIsModalVisible: false })}
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
          </Modal>

          <Modal isVisible={this.state.isModalVisible} style={{
          margin: 0,
          backgroundColor: 'white',
          height: 'auto',
          flex:0 ,
          bottom: 0,
          position: 'absolute',
          width: '100%'
          }} >
            <View style={{ flex: 1 }}>
              <Text>I am the modal content!</Text>
              {/* <List style={[styles.listFicha]} >
                    {
                        empresasHData.listaSectores.listaProducto.map(function (producto, index) {
                        return (
                            <ListItem style={[styles.listItemFicha, styles.listItemFichaSector]} >
                                <Body style={[styles.itemBodyFicha]} >
                                    <Text style={[styles.dateFicha]}>{producto.nombre}</Text>
                                </Body>
                            </ListItem>
                        )
                        })
                    }
                </List> */}
              <Button title="Hide modal" onPress={this.toggleModal} />
            </View>
          </Modal>
      </View>
    );
  }
}

module.exports = Ficha;