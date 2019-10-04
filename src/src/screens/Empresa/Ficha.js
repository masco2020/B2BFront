import React, { Component } from 'react'
import styles from 'styles/ficha'
import estilo from 'styles/styles'
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
  Root,
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

  renderModalSector(){
    const data = this.props.navigation.getParam('data', {})
    return(
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
    )
  }

  renderFicha(){
    const data = this.props.navigation.getParam('data', {})
    return(
      <Content style={[estilo.contentFicha]} >
        <Form style={[estilo.formFicha]}>
          <List style={[estilo.listFicha]} >
            <ListItem style={[estilo.listItemFicha]} >
              <Body style={[estilo.itemBodyFicha]} >
                <Text style={[estilo.tittleFicha]}  note>Tipo de Cliente</Text>
                <Text style={[estilo.dateFicha]}  >{data.tipoCliente}</Text>
              </Body>
            </ListItem>
            <ListItem style={[estilo.listItemFicha]}>
              <Body style={[estilo.itemBodyFicha]}>
                <Text style={[estilo.tittleFicha]} note>Nombre Comercial</Text>
                <Text style={[estilo.dateFicha]}>{data.nombre}</Text>
              </Body>
            </ListItem>
            <ListItem style={[estilo.listItemFicha]}>
              <Body style={[estilo.itemBodyFicha]}>
                <Text style={[estilo.tittleFicha]} note>Razón Social</Text>
                <Text style={[estilo.dateFicha]}>{data.razonSocial}</Text>
              </Body>
            </ListItem>
            <ListItem style={[estilo.listItemFicha]}>
              <Body style={[estilo.itemBodyFicha]}>
                <Text style={[estilo.tittleFicha]} note>RUC</Text>
                <Text style={[estilo.dateFicha]}>{data.ruc}</Text>
              </Body>
            </ListItem>
            <ListItem style={[estilo.listItemFicha]}>
              <Body style={[estilo.itemBodyFicha]}>
                <Text style={[estilo.tittleFicha]} note>Sectores</Text>
                <Button bordered iconRight style={[estilo.btnPicker, estilo.borderBtn]} onPress={this.sectoresModal} >
                  <Text style={[estilo.dateFicha, estilo.btnListFicha, estilo.dateBtnListFichaSectores]} >Ver Sectores</Text>
                  <Icon type="FontAwesome" name='caret-down' />
                </Button>
              </Body>
            </ListItem>
          </List>
          <List style={[estilo.listFicha]} >
            <ListItem style={[estilo.listItemFicha]} >
              <Body style={[estilo.itemBodyFicha]} >
                <Text style={[estilo.tittleFicha]} note>Productos</Text>
                <Button bordered iconRight style={[estilo.btnPicker, estilo.borderBtn]} onPress={this.sectoresModal} >
                  <Text style={[estilo.dateFicha, estilo.btnListFicha, estilo.dateBtnListFichaProducts]} >Ver Productos</Text>
                  <Icon type="FontAwesome" name='caret-down' />
                </Button>
              </Body>
            </ListItem>
          </List>
          <List style={[estilo.listFicha]} >
            <ListItem style={[estilo.listItemFicha]} >
              <Body style={[estilo.itemBodyFicha]} >
                <Text style={[estilo.tittleFicha]} note>Dirección</Text>
                <Text style={[estilo.dateFicha]}>{data.tipoCliente}</Text>
                <View style={[estilo.boxBtnLocationFicha]} >
                  <Button bordered style={[estilo.btnAddLocationFicha, estilo.borderBtn]} >
                    <Text style={[estilo.dateFicha, estilo.textBtnAddLocationFicha]} >Ingresar Ubicación</Text>
                  </Button>
                  <Button style={[estilo.btnVerLocationFicha, estilo.borderBtn]} >
                    <Text style={[estilo.dateFicha, estilo.textBtnVerLocationFicha]} >Ver Mapa</Text>
                  </Button>
                </View>
              </Body>
            </ListItem>
          </List>
          <List style={[estilo.listFicha]} >
            <ListItem style={[estilo.listItemFicha]} >
              <Body style={[estilo.itemBodyFicha]} >
                <Text style={[estilo.tittleFicha]}  note>Nº Telefonico Empresarial</Text>
                <Text style={[estilo.dateFicha]}  >{data.telefonoEmpresarial}</Text>
              </Body>
            </ListItem>
            <ListItem style={[estilo.listItemFicha, estilo.listItemFichaContac]}>
              <Body style={[estilo.itemBodyFicha]}>
                <Text style={[estilo.tittleFicha]} note>Correo Empresarial</Text>
                <Text style={[estilo.dateFicha]}>{data.correoEmpresarial}</Text>
              </Body>
            </ListItem>
          </List>
        </Form>
      </Content>
    )
  }

  render() {
    return (
      <Block flex style={{backgroundColor: '#fff'}}>
      {this.renderFicha()}
      {this.renderModalSector()}
        
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
