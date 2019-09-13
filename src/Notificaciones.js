import React, { Component } from "react";
import { Container, Drawer, StyleProvider, Root, Text, View, Content, Card, CardItem, Body, Header, Item, Icon, Input, Button, Left, Right, Segment, Picker, Form, Title, Footer, FooterTab } from 'native-base';
import styles from './Style.js';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Actions } from 'react-native-router-flux';
import SideBar from './SideBar';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default class Notificaciones extends Component {
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    const Titulo = 'Exportadores';
    const noLeftView = false
    const styleLogin = styles
    return (
      <StyleProvider style={getTheme(material)}>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Root>
            <Container>
              <AppHeader openDrawer={this.openDrawer.bind(this)} Titulo={Titulo} noLeftView={noLeftView} styleLogin={styleLogin} />
              <Content >
                <Text>Notificaciones</Text>
              </Content>
              <AppFooter/>
            </Container>
          </Root>
        </Drawer>
      </StyleProvider>
    );
  }
}
module.exports = Notificaciones;