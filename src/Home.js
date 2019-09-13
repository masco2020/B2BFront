import React, { Component } from "react";
import { Container, Drawer, StyleProvider, Root, Text, View, Content, Card, CardItem, Header, Item, Icon, Input, Button, Left, Right, Segment, Picker, Form, Title, Badge, List, ListItem, Body } from 'native-base';
import styles from './Style.js';
import IconF from 'react-native-vector-icons/FontAwesome';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
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
  
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  state = {
    leyendaModalVisible: false
  };

  leyendaModal = () => {
      this.setState({
          leyendaModalVisible: !this.state.leyendaModalVisible
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
                    <Button style={[styles.btnFilter]} onPress={this.leyendaModal} >
                      <Icon style={[styles.iconFilterH]} type="FontAwesome" name="sliders" />
                    </Button>
                  </View>
                </Form>
                <View style={{borderBottomWidth: 1,borderBottomColor: '#ddd',margin:15,}} />
                <Content >
                <EmpresaHList />

                <ModalC 
                isVisible={this.state.leyendaModalVisible} 
                onBackdropPress={() => this.setState({ leyendaModalVisible: false })}
                style={[styles.modalLeyenda]} >
                  <View style={[styles.modalLeyendaV]}>
                      <Text>Reconócelos</Text>
                      <View style={{borderBottomWidth: 1,borderBottomColor: '#ddd',margin:15,}} />
                      <Text>Aprende como reconocer los sectores facilmente con nuestros iconos de colores:</Text>
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