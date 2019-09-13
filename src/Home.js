import React, { Component } from "react";
import { Container, Drawer, StyleProvider, Root, Text, View, Content, Card, CardItem, Body, Header, Item, Icon, Input, Button, Left, Right, Segment, Picker, Form, Title, Badge } from 'native-base';
import styles from './Style.js';
import IconF from 'react-native-vector-icons/FontAwesome';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import SideBar from './SideBar';
import AppFooter from './AppFooter';
import EmpresaHList from './EmpresaHList';

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
                {/* <Icon name='options' /> */}
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
              <Content >
                <Form style={[styles.formFilterHome]} >
                  <View style={[styles.searchBarH]}>
                    <Item style={{borderBottomWidth: 0,}}>
                      <Input style={{height: 40, paddingTop: 0, paddingBottom: 0,}} placeholder="Busca Empresas Exportadoras" />
                      <IconF style={[styles.searchBarHIcon]} name="search" />
                    </Item>
                  </View>
                  <View style={[styles.btnBoxFilter]}>
                    <Button style={[styles.btnFilter]}>
                      <Icon style={[styles.iconFilterH]} type="FontAwesome" name="sliders" />
                    </Button>
                  </View>
                  
                 {/*  <Button style={[styles.formFilterHomeBtn]} >
                    <Icon type="FontAwesome" name="sliders" />
                    <Picker
                      mode="dropdown"
                      placeholder="Select your SIM"
                      itemStyle={{
                        marginLeft: 0,
                        paddingLeft: 10
                      }}
                      style={{ width: undefined }}
                      selectedValue={this.state.selected}
                      onValueChange={this.onValueChange.bind(this)}
                    >
                      <Picker.Item label="Agronegocios" value="key1" />
                      <Picker.Item label="Exportación de servicios" value="key2" />
                      <Picker.Item label="Insdustria de la vestimenta y decoración" value="key3" />
                      <Picker.Item label="Manufacturas diversas" value="key4" />
                      <Picker.Item label="Productos Pesqueros" value="key5" />
                    </Picker>
                  </Button>
                 */}</Form>
                <View style={{borderBottomWidth: 1,borderBottomColor: '#ddd',margin:15,}} />
                <EmpresaHList />
              </Content>
              <AppFooter/>
            </Container>
          </Root>
        </Drawer>
      </StyleProvider>
    );
  }
}

/* export default class Home extends Component {
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  constructor(props) {
    super(props);
    this.firstpage = this.firstpage.bind(this);
    this.secondpage = this.secondpage.bind(this);
    this.thirdpage = this.thirdpage.bind(this);
    this.state = {
      page: 1,
      firstpageactive: true,
      secondpageactive: false,
      thirdpageactive: false,

    };
  }
  
  render() {
    const Titulo = 'Home';
    const noLeftView = false
    const styleLogin = styles

    const page = this.state.page;
    let shows = null;
    if (page == 1) {
      shows = <Text > hello </Text>
    } else if (page == 2) {
      shows = <Text > hello page 2 </Text>
    } if (page == 3) {
      shows = <Text > hello page 3 </Text>
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Drawer
          side = "right"
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Root>
            <Container>
              <Header searchBar rounded hasSegment>
                <Item style={{flex: 6,}}>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" />
                </Item>
                <Right style={{flex: 1,}}>
                  <Button transparent onPress={()=> this.openDrawer()}>
                      <Icon name='menu' />
                  </Button>
                </Right>
              </Header>
              <Segment>
                <Button first active={this.state.firstpageactive} onPress= {this.firstpage}>
                  <Text>Empresa</Text>
                </Button>
                <Button active={this.state.secondpageactive} onPress= {this.secondpage}>
                  <Text>Producto</Text>
                </Button>
                <Button last  active={this.state.thirdpageactive} onPress= {this.thirdpage}>
                  <Text>Ciudad</Text>
                </Button>
              </Segment>
                <Content padder>
                  {shows}
                </Content>
            </Container>
          </Root>
        </Drawer>
      </StyleProvider>
    );
  }

  firstpage() {
    this.setState({
      page: 1,
      firstpageactive: true,
      secondpageactive: false,
      thirdpageactive: false
    })
  }

  secondpage() {
    this.setState({
      page: 2,
      firstpageactive: false,
      secondpageactive: true,
      thirdpageactive: false,
    })
  }
  
} */

module.exports = Home;