import React, { Component } from 'react'
import { Container, Drawer, StyleProvider, Root, Text, View, Content, Card, CardItem, Header, Item, Icon, Input, Button, Left, Right, Segment, Picker, Form, Title, Badge, List, ListItem, Body, CheckBox } from 'native-base'
import ModalC from 'react-native-modal'
import { Modal } from 'react-native'

import IconF from 'react-native-vector-icons/FontAwesome'
import styles from 'styles/exportador'
import estilo from 'styles/styles'
import Block from 'components/Block'
import EmpresaList from 'screens/Empresa/List'
import { Hbar } from '../components/styled'

const options = [
  { active: true, label: 'Empresa' },
  { active: false, label: 'Producto' },
  { active: false, label: 'Ciudad' },
]

export default class Home extends Component {
  state = {
    masFiltros: false,
    leyendaModalVisible: false,
    selectCheck: false,
    sectorModalVisible: false,
  };

  setMasFiltros(visible) {
    this.setState({
      masFiltros: visible
    });
  };

  leyendaModal = () => {
    this.setState({
      leyendaModalVisible: !this.state.leyendaModalVisible
    });
  };

  sectorModal = () => {
    this.setState({
      sectorModalVisible: !this.state.sectorModalVisible
    })
  }

  selectCheckable = () => {
    this.setState({
      selectCheck: !this.state.selectCheck
    });
  };

  renderModalLeyenda() {
    return (
      <ModalC
      isVisible={this.state.leyendaModalVisible}
      onBackdropPress={() => this.setState({ leyendaModalVisible: false })}
      style={[estilo.modalLeyenda]} >
        <View style={[estilo.modalLeyendaBox]}>
            <Text style={[estilo.LeyendaTitel]} >Reconócelos</Text>
            <View style={{borderBottomWidth: 1,borderBottomColor: '#ddd',marginTop:5,marginBottom:5,}} />
            <Text style={[estilo.leyendaText]}>Aprende como reconocer los sectores facilmente con nuestros iconos de colores:</Text>
            <List>
              <ListItem style={[estilo.leyendaSector]} >
                <Badge style={[estilo.circulLeyenda, { backgroundColor: '#86BA24',}]}>
                  <Text style={[estilo.textcirculLeyenda]}>A</Text>
                </Badge>
                <Text style={{color: '#86BA24', fontSize: 16,}} >Agronegocios</Text>
              </ListItem>
              <ListItem style={[estilo.leyendaSector]} >
                <Badge style={[estilo.circulLeyenda, { backgroundColor: '#E00613',}]}>
                  <Text style={[estilo.textcirculLeyenda]}>E</Text>
                </Badge>
                <Text style={{color: '#E00613', fontSize: 16,}} >Exportación de Servicios</Text>
              </ListItem>
              <ListItem style={[estilo.leyendaSector]} >
                <Badge style={[estilo.circulLeyenda, { backgroundColor: '#A0137B',}]}>
                  <Text style={[estilo.textcirculLeyenda]}>I</Text>
                </Badge>
                <Text style={{color: '#A0137B', fontSize: 16,}} >Industria de la vestimenta y decoración</Text>
              </ListItem>
              <ListItem style={[estilo.leyendaSector]} >
                <Badge style={[estilo.circulLeyenda, { backgroundColor: '#FFCC21',}]}>
                  <Text style={[estilo.textcirculLeyenda]}>M</Text>
                </Badge>
                <Text style={{color: '#FFCC21', fontSize: 16,}} >Manufacturas Diversas</Text>
              </ListItem>
              <ListItem style={[estilo.leyendaSector]} >
                <Badge style={[estilo.circulLeyenda, { backgroundColor: '#0071B8',}]}>
                  <Text style={[estilo.textcirculLeyenda]}>P</Text>
                </Badge>
                <Text style={{color: '#0071B8', fontSize: 16,}} >Productos Pesqueros</Text>
              </ListItem>
            </List>
        </View>
      </ModalC>
    )
  } 

  renderModalSectores() {
    return (
      <ModalC
      isVisible={this.state.sectorModalVisible}
      onBackdropPress={() => this.setState({ sectorModalVisible: false })}
      style={{
      margin: 0,
      backgroundColor: 'white',
      height: 'auto',
      flex:0 ,
      bottom: 0,
      position: 'absolute',
      width: '100%'
      }} >
        <View style={{ flex: 1, padding: 16, }}>
          <List>
            <ListItem style={[estilo.listItem, {marginTop:10,}]} first>
              <Body style={[estilo.itemBodyFicha]} >
                <Text style={[estilo.itemTitle]}  note>Sector</Text>
              </Body>
            </ListItem>
            <ListItem style={[estilo.listItem]} >
              <Left style={[estilo.itemBodyFicha]} >
                <Text style={[estilo.dateFicha, estilo.textItem]}  >Agronegocios</Text>
              </Left>
              <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
            </ListItem>
            <ListItem style={[estilo.listItem]} >
              <Left style={[estilo.itemBodyFicha]} >
                <Text style={[estilo.dateFicha, estilo.textItem]}  >Exportación de Servicios</Text>
              </Left>
              <Right><CheckBox color={'#D80212'} checked={true} /></Right>
            </ListItem>
            <ListItem style={[estilo.listItem]} >
              <Left style={[estilo.itemBodyFicha]} >
                <Text style={[estilo.dateFicha, estilo.textItem]}  >Industria de la vestimenta y decoración</Text>
              </Left>
              <Right><CheckBox color={'#D80212'} checked={true} /></Right>
            </ListItem>
            <ListItem style={[estilo.listItem]} >
              <Left style={[estilo.itemBodyFicha]} >
                <Text style={[estilo.dateFicha, estilo.textItem]}  >Manufacturas Diversas</Text>
              </Left>
              <Right><CheckBox color={'#D80212'} checked={true} /></Right>
            </ListItem>
            <ListItem style={[estilo.listItem]} >
              <Left style={[estilo.itemBodyFicha]} >
                <Text style={[estilo.dateFicha, estilo.textItem]}  >Productos Pesqueros</Text>
              </Left>
              <Right><CheckBox color={'#D80212'} checked={true} /></Right>
            </ListItem>
          </List>
          <View style={{borderBottomWidth: 2,borderBottomColor: '#D80212',margin:15,}} />
          <Button transparent style={[estilo.masFiltrosBtn]} onPress={() => {this.setMasFiltros(true);}} >
            <Text style={[estilo.masFiltrosBtnText]}>Ver más filtros</Text>
          </Button>
        </View>
      </ModalC>
    )
  }

  renderModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.masFiltros}
        onRequestClose={() => { Alert.alert('Modal has been closed.'); }}
      >
        <Header>
          <Left>
            <Button transparent onPress={() => {this.setMasFiltros(!this.state.masFiltros);}} >
                <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Filtros</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{padding: 30}}>
            <List>
              <ListItem style={[estilo.listItem, {marginTop:10,}]} first>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>Sector</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Agronegocios</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Exportación de Servicios</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Industria de la vestimenta y decoración</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Manufacturas Diversas</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Productos Pesqueros</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem, {marginTop:10,}]}>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>Tipo de Negocio</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Tipo A</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Tipo B</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Tipo C</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem, {marginTop:10,}]}>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>Tamaño</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Pequeño</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Mediano</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Grande</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Extra Grande</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem, {marginTop:10,}]}>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>Ciudad</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <View style={[estilo.searchBarH]}>
                  <Item style={{borderBottomWidth: 0,}}>
                    <Input style={{height: 40, paddingTop: 0, paddingBottom: 0,}} placeholder="Busca Ciudad" />
                    <IconF style={[estilo.searchBarHIcon, {color: '#D80212',},]} name="search" />
                  </Item>
                </View>
              </ListItem>
            </List>
            <Button block small style={[estilo.filtrarBtn, estilo.borderBtn]}>
              <Text style={[estilo.filtrarBtnText]}>Filtrar</Text>
            </Button>
          </View>
        </Content>
      </Modal>
    )
  }

  renderModalCompradores() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.masFiltros}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
      }}>
        <Header>
          <Left>
            <Button transparent onPress={() => {this.setMasFiltros(!this.state.masFiltros);}} >
                <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Filtros</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{padding: 30}}>
            <List>
              <ListItem style={[estilo.listItem]} first>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>Sector</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Agronegocios</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Exportación de Servicios</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Industria de la vestimenta y decoración</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Manufacturas Diversas</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Productos Pesqueros</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem, {marginTop:10,}]}>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>Alcance</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Tipo A</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >A nivel nacional</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >A Nivel Ciudad</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >A nivel internacional</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >A nivel región</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem, {marginTop:10,}]}>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>Tamaño</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Pequeño</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Mediano</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Grande</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Extra Grande</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem, {marginTop:10,}]}>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>¿Ha Importado del Perú?</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Si</Text>
                </Left>
                <Right><Radio selected={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >No</Text>
                </Left>
                <Right><Radio selected={false} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItemFicha]}>
                  <Body style={[estilo.itemBodyFicha]}>
                      <Text style={[estilo.tittleFicha]} note>Indicar: ¿A que medio realizo el contacto?</Text>
                      <Button bordered iconRight style={[estilo.btnPicker, estilo.borderBtn]} onPress={this.MediosModal} >
                          <Text style={[estilo.dateFicha, estilo.btnListFicha, estilo.dateBtnListFichaSectores]} >Medio de Contacto</Text>
                          <Icon type="FontAwesome" name='caret-down' />
                      </Button>
                  </Body>
              </ListItem>
              <ListItem style={[estilo.listItem, {marginTop:10,}]}>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>Pais</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <View style={[estilo.searchBarH]}>
                  <Item style={{borderBottomWidth: 0,}}>
                    <Input style={{height: 40, paddingTop: 0, paddingBottom: 0,}} placeholder="Busca Pais" />
                    <IconF style={[estilo.searchBarHIcon, {color: '#D80212',},]} name="search" />
                  </Item>
                </View>
              </ListItem>
            </List>
            <Button block small style={[estilo.filtrarBtn, estilo.borderBtn]}>
              <Text style={[estilo.filtrarBtnText]}>Filtrar</Text>
            </Button>
          </View>
        </Content>
      </Modal>
    )
  }

  renderSearch() {
    return (
      <Block row style={{ padding: 16 }}>
        <Content style={[estilo.searchBarH]}>
          <Item style={{ borderBottomWidth: 0 }}>
            <Input style={{height: 40, paddingTop: 0, paddingBottom: 0,}} placeholder="Busca por empresa" />
            <Icon style={[estilo.searchBarHIcon]} type="FontAwesome" name="search" />
          </Item>
        </Content>
        <Button style={{backgroundColor: '#D80212', borderRadius: 9, marginLeft: 16,}} onPress={this.sectorModal}>
          <Icon style={[estilo.iconFilterH]} type="FontAwesome" name="sliders" />
        </Button>
      </Block>
    )
  }

  renderEmpresa() {
    return (
      <Block flex style={{backgroundColor: '#fff'}}>
        {this.renderSearch()}
        <Hbar />
        <Content>
          <EmpresaList />
        </Content>
        {this.renderModalLeyenda()}
        {this.renderModalSectores()}
        {this.renderModal()}
      </Block>
    )
  }

  render() {
    return (
      <Root style={{backgroundColor: '#fff'}}>
        <Segment style={[estilo.segmentsFilters]}>
          {options.map((option, index) => (
            <Button key={index} active={option.active}>
              <Text style={[estilo.textBtnSegmen]}>{option.label}</Text>
            </Button>
          ))}
        </Segment>
        {this.renderEmpresa()}
        {/* <AppFooter /> */}
      </Root>
    )
  }
}
