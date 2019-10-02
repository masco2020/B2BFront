import React, { Component } from 'react'
import styles from 'styles/ficha'
import {
  Text,
  View,
  Form,
  Button,
  Icon,
  Body,
  Content,
  List,
  ListItem,
} from 'native-base'
import Modal from 'react-native-modal'
import Block from 'components/Block'

export default class Ficha extends Component {
  static navigationOptions = {
    tabBarLabel: 'Ficha',
  }

  state = {
    isModalVisible: false,
    sectorIsModalVisible: false,
  }

  sectoresModal = () => {
    this.setState({
      sectorIsModalVisible: !this.state.sectorIsModalVisible,
    })
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    })
  }

  render() {
    const data = this.props.navigation.getParam('data', {})

    return (
      <Block flex>
        <Content style={[styles.contentFicha]}>
          <Form style={[styles.formFicha]}>
            <List style={[styles.listFicha]}>
              <ListItem style={[styles.listItemFicha]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.tittleFicha]} note>
                    Tipo de Cliente
                  </Text>
                  <Text style={[styles.dateFicha]}>{data.tipoCliente}</Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItemFicha]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.tittleFicha]} note>
                    Nombre Comercial
                  </Text>
                  <Text style={[styles.dateFicha]}>{data.nombre}</Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItemFicha]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.tittleFicha]} note>
                    Razón Social
                  </Text>
                  <Text style={[styles.dateFicha]}>{data.razonSocial}</Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItemFicha]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.tittleFicha]} note>
                    RUC
                  </Text>
                  <Text style={[styles.dateFicha]}>{data.ruc}</Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItemFicha]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.tittleFicha]} note>
                    Sectores
                  </Text>
                  <Button
                    bordered
                    iconRight
                    style={[styles.btnPicker]}
                    onPress={this.sectoresModal}>
                    <Text
                      style={[
                        styles.dateFicha,
                        styles.btnListFicha,
                        styles.dateBtnListFichaSectores,
                      ]}>
                      Ver Sectores
                    </Text>
                    <Icon type="FontAwesome" name="caret-down" />
                  </Button>
                </Body>
              </ListItem>
            </List>
            <List style={[styles.listFicha]}>
              <ListItem style={[styles.listItemFicha]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.tittleFicha]} note>
                    Productos
                  </Text>
                  <Button
                    bordered
                    iconRight
                    style={[styles.btnPicker]}
                    onPress={this.toggleModal}>
                    <Text
                      style={[
                        styles.dateFicha,
                        styles.btnListFicha,
                        styles.dateBtnListFichaProducts,
                      ]}>
                      Ver Productos
                    </Text>
                    <Icon type="FontAwesome" name="caret-down" />
                  </Button>
                </Body>
              </ListItem>
            </List>
            <List style={[styles.listFicha]}>
              <ListItem style={[styles.listItemFicha]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.tittleFicha]} note>
                    Dirección
                  </Text>
                  <Text style={[styles.dateFicha]}>{data.direccion}</Text>
                  <View style={[styles.boxBtnLocationFicha]}>
                    <Button bordered style={[styles.btnAddLocationFicha]}>
                      <Text
                        style={[
                          styles.dateFicha,
                          styles.textBtnAddLocationFicha,
                        ]}>
                        Ingresar Ubicación
                      </Text>
                    </Button>
                    <Button style={[styles.btnVerLocationFicha]}>
                      <Text
                        style={[
                          styles.dateFicha,
                          styles.textBtnVerLocationFicha,
                        ]}>
                        Ver Mapa
                      </Text>
                    </Button>
                  </View>
                </Body>
              </ListItem>
            </List>
            <List style={[styles.listFicha]}>
              <ListItem style={[styles.listItemFicha]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.tittleFicha]} note>
                    Nº Telefonico Empresarial
                  </Text>
                  <Text style={[styles.dateFicha]}>
                    {data.telefonoEmpresarial}
                  </Text>
                </Body>
              </ListItem>
              <ListItem
                style={[styles.listItemFicha, styles.listItemFichaContac]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.tittleFicha]} note>
                    Correo Empresarial
                  </Text>
                  <Text style={[styles.dateFicha]}>
                    {data.correoEmpresarial}
                  </Text>
                </Body>
              </ListItem>
            </List>
          </Form>
        </Content>

        <Modal
          isVisible={this.state.sectorIsModalVisible}
          onBackdropPress={() => this.setState({ sectorIsModalVisible: false })}
          style={[styles.modalFicha]}>
          <View style={{ flex: 1 }}>
            <List style={[styles.listFicha, styles.listModal]}>
              <Text primary style={[styles.tittleFicha]} note>
                Sectores
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
        </Modal>

        <Modal
          isVisible={this.state.isModalVisible}
          style={{
            margin: 0,
            backgroundColor: 'white',
            height: 'auto',
            flex: 0,
            bottom: 0,
            position: 'absolute',
            width: '100%',
          }}>
          <View style={{ flex: 1 }}>
            <Text>I am the modal content!</Text>
            {/* <List style={[styles.listFicha]}>
              {data.listaSectores.listaProducto.map(function(
                producto,
                index
              ) {
                return (
                  <ListItem
                    style={[styles.listItemFicha, styles.listItemFichaSector]}>
                    <Body style={[styles.itemBodyFicha]}>
                      <Text style={[styles.dateFicha]}>{producto.nombre}</Text>
                    </Body>
                  </ListItem>
                )
              })}
            </List> */}
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </Block>
    )
  }
}
