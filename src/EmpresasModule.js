import React, { Component } from "react";
import { Platform, StyleSheet, TouchableNativeFeedback, Modal } from 'react-native';
import styles from './Style.js';
import { Container, Drawer, StyleProvider, Root, Text, Form, Item, Label, Input, Button, View, Icon, Picker, Header, Left, Body, Title, Right, Content } from 'native-base';
import IconF from 'react-native-vector-icons/dist/FontAwesome';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Actions } from 'react-native-router-flux';
import SideBar from './SideBar';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import ModulTabs from './ModulTabs'

export default class EmpresasModule extends Component {
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    
    const empresasHData = this.props.empresasHData
    const Titulo = empresasHData.nombre
    const styleLogin = styles
    const noLeftView = false
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
              <AppHeader openDrawer={this.openDrawer.bind(this)} Titulo={Titulo} noLeftView={noLeftView}  styleLogin={styleLogin} />
                <ModulTabs empresasHData={empresasHData} />
              <AppFooter/>
            </Container>
          </Root>
        </Drawer>
      </StyleProvider>
    );
  }
}

module.exports = EmpresasModule;