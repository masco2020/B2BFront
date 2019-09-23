import React, { Component } from "react";
import { Modal } from 'react-native';
import { Container, Drawer, StyleProvider, Root, Text, View, Content, Card, CardItem, Header, Item, Icon, Input, Button, Left, Right, Segment, Picker, Form, Title, Badge, List, ListItem, Body, CheckBox } from 'native-base';
import styles from './Style.js';
import IconF from 'react-native-vector-icons/FontAwesome';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import SideBar from './SideBar';
import AppFooter from './AppFooter';
import EmpresaHList from './EmpresaHList';
import ModalC from "react-native-modal";

export default class Home extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

 /*  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  } */

  state = {
    masFiltros: false,
    leyendaModalVisible: false,
    selectCheck: false,
    sectorModalVisible: false
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

  render() {
    const Titulo = 'Exportadores';
    const noLeftView = false
    return (
      <StyleProvider style={getTheme(material)}>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Root>
            <Container>
              <Header hasSegment>
                <Left>
                  <Button transparent onPress={()=> this.openDrawer()}>
                      <Icon name='menu' />
                  </Button>
                </Left>
                <Body>
                  <Title>{Titulo}</Title>
                </Body>
                <Right></Right>
              </Header>
              <Segment style={[styles.segmentsFilters]}>
                <Button first active style={[styles.btnSegmen ,styles.btnSegmenFirstHome]}>
                  <Text style={[styles.textBtnSegmen]}>Empresa</Text>
                </Button>
                <Button style={[styles.btnSegmen]}>
                  <Text style={[styles.textBtnSegmen]}>Producto</Text>
                </Button>
                <Button last  style={[styles.btnSegmen ,styles.btnSegmenLastHome]}>
                  <Text style={[styles.textBtnSegmen]}>Ciudad</Text>
                </Button>

              </Segment>

                <Form style={[styles.formFilterHome]} >
                  <View style={[styles.searchBarH]}>
                    <Item style={{borderBottomWidth: 0,}}>
                      <Input style={{height: 40, paddingTop: 0, paddingBottom: 0,}} placeholder="Busca Empresas Exportadoras" />
                      <IconF style={[styles.searchBarHIcon]} name="search" />
                    </Item>
                  </View>
                  <View style={[styles.btnBoxFilter]}>
                    <Button style={[styles.btnFilter]} onPress={this.sectorModal} >
                    {/* onPress={() => {this.setMasFiltros(true);}} */}
                    {/* onPress={this.leyendaModal}  */}
                      <Icon style={[styles.iconFilterH]} type="FontAwesome" name="sliders" />
                    </Button>
                  </View>
                </Form>
                <View style={{borderBottomWidth: 1,borderBottomColor: '#ddd',margin:15,}} />
                <Content >
                <EmpresaHList />

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
                      <ListItem style={[styles.listItem, {marginTop:10,}]} first>
                        <Body style={[styles.itemBodyFicha]} >
                          <Text style={[styles.itemTitle]}  note>Sector</Text>
                        </Body>
                      </ListItem>
                      <ListItem style={[styles.listItem]} >
                        <Left style={[styles.itemBodyFicha]} >
                          <Text style={[styles.dateFicha, styles.textItem]}  >Agronegocios</Text>
                        </Left>
                        <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
                      </ListItem>
                      <ListItem style={[styles.listItem]} >
                        <Left style={[styles.itemBodyFicha]} >
                          <Text style={[styles.dateFicha, styles.textItem]}  >Exportación de Servicios</Text>
                        </Left>
                        <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                      </ListItem>
                      <ListItem style={[styles.listItem]} >
                        <Left style={[styles.itemBodyFicha]} >
                          <Text style={[styles.dateFicha, styles.textItem]}  >Industria de la vestimenta y decoración</Text>
                        </Left>
                        <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                      </ListItem>
                      <ListItem style={[styles.listItem]} >
                        <Left style={[styles.itemBodyFicha]} >
                          <Text style={[styles.dateFicha, styles.textItem]}  >Manufacturas Diversas</Text>
                        </Left>
                        <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                      </ListItem>
                      <ListItem style={[styles.listItem]} >
                        <Left style={[styles.itemBodyFicha]} >
                          <Text style={[styles.dateFicha, styles.textItem]}  >Productos Pesqueros</Text>
                        </Left>
                        <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                      </ListItem>
                    </List>
                    <View style={{borderBottomWidth: 2,borderBottomColor: '#D80212',margin:15,}} />
                    <Button transparent style={[styles.masFiltrosBtn]} onPress={() => {this.setMasFiltros(true);}} >
                      <Text style={[styles.masFiltrosBtnText]}>Ver más filtros</Text>
                    </Button>
                  </View>
                </ModalC>

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
                        <ListItem style={[styles.listItem, {marginTop:10,}]} first>
                          <Body style={[styles.itemBodyFicha]} >
                            <Text style={[styles.itemTitle]}  note>Sector</Text>
                          </Body>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Agronegocios</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Exportación de Servicios</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Industria de la vestimenta y decoración</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Manufacturas Diversas</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Productos Pesqueros</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem, {marginTop:10,}]}>
                          <Body style={[styles.itemBodyFicha]} >
                            <Text style={[styles.itemTitle]}  note>Tipo de Negocio</Text>
                          </Body>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Tipo A</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Tipo B</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Tipo C</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem, {marginTop:10,}]}>
                          <Body style={[styles.itemBodyFicha]} >
                            <Text style={[styles.itemTitle]}  note>Tamaño</Text>
                          </Body>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Pequeño</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Mediano</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Grande</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <Left style={[styles.itemBodyFicha]} >
                            <Text style={[styles.dateFicha, styles.textItem]}  >Extra Grande</Text>
                          </Left>
                          <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                        </ListItem>
                        <ListItem style={[styles.listItem, {marginTop:10,}]}>
                          <Body style={[styles.itemBodyFicha]} >
                            <Text style={[styles.itemTitle]}  note>Ciudad</Text>
                          </Body>
                        </ListItem>
                        <ListItem style={[styles.listItem]} >
                          <View style={[styles.searchBarH]}>
                            <Item style={{borderBottomWidth: 0,}}>
                              <Input style={{height: 40, paddingTop: 0, paddingBottom: 0,}} placeholder="Busca Ciudad" />
                              <IconF style={[styles.searchBarHIcon, {color: '#D80212',},]} name="search" />
                            </Item>
                          </View>
                        </ListItem>
                      </List>
                      <Button block small style={[styles.filtrarBtn]}>
                        <Text style={[styles.filtrarBtnText]}>Filtrar</Text>
                      </Button>
                    </View>
                  </Content>
                </Modal>

                <ModalC
                isVisible={this.state.leyendaModalVisible}
                onBackdropPress={() => this.setState({ leyendaModalVisible: false })}
                style={[styles.modalLeyenda]} >
                  <View style={[styles.modalLeyendaBox]}>
                      <Text style={[styles.LeyendaTitel]} >Reconócelos</Text>
                      <View style={{borderBottomWidth: 1,borderBottomColor: '#ddd',marginTop:5,marginBottom:5,}} />
                      <Text style={[styles.leyendaText]}>Aprende como reconocer los sectores facilmente con nuestros iconos de colores:</Text>
                      <List>
                        <ListItem style={[styles.leyendaSector]} >
                          <Badge style={[styles.circulLeyenda, { backgroundColor: '#86BA24',}]}>
                            <Text style={[styles.textcirculLeyenda]}>A</Text>
                          </Badge>
                          <Text style={{color: '#86BA24', fontSize: 16,}} >Agronegocios</Text>
                        </ListItem>
                        <ListItem style={[styles.leyendaSector]} >
                          <Badge style={[styles.circulLeyenda, { backgroundColor: '#E00613',}]}>
                            <Text style={[styles.textcirculLeyenda]}>E</Text>
                          </Badge>
                          <Text style={{color: '#E00613', fontSize: 16,}} >Exportación de Servicios</Text>
                        </ListItem>
                        <ListItem style={[styles.leyendaSector]} >
                          <Badge style={[styles.circulLeyenda, { backgroundColor: '#A0137B',}]}>
                            <Text style={[styles.textcirculLeyenda]}>I</Text>
                          </Badge>
                          <Text style={{color: '#A0137B', fontSize: 16,}} >Industria de la vestimenta y decoración</Text>
                        </ListItem>
                        <ListItem style={[styles.leyendaSector]} >
                          <Badge style={[styles.circulLeyenda, { backgroundColor: '#FFCC21',}]}>
                            <Text style={[styles.textcirculLeyenda]}>M</Text>
                          </Badge>
                          <Text style={{color: '#FFCC21', fontSize: 16,}} >Manufacturas Diversas</Text>
                        </ListItem>
                        <ListItem style={[styles.leyendaSector]} >
                          <Badge style={[styles.circulLeyenda, { backgroundColor: '#0071B8',}]}>
                            <Text style={[styles.textcirculLeyenda]}>P</Text>
                          </Badge>
                          <Text style={{color: '#0071B8', fontSize: 16,}} >Productos Pesqueros</Text>
                        </ListItem>
                      </List>
                  </View>
                </ModalC>

              </Content>
              <AppFooter/>
            </Container>
          </Root>
        </Drawer>
      </StyleProvider>
    );
  }
}


module.exports = Home;