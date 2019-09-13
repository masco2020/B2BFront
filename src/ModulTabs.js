import React, { Component } from "react";
import { Platform, StyleSheet, TouchableNativeFeedback, Modal } from 'react-native';
import styles from './Style.js';
import { Container, Drawer, StyleProvider, Root, Text, Form, Item, Label, Input, Button, View, Icon, Picker, Header, Tab, Tabs, Left, Body, Title, Right, Content, Grid } from 'native-base';
import IconF from 'react-native-vector-icons/dist/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Tabficha from './Ficha';
import Tabcontactos from './Contactos';
import Tabhistorico from './Historico';

export default class ModulTabs extends Component {
  

  render() {
    const empresasHData = this.props.empresasHData
    return (
          <Grid>
            <Tabs>
              <Tab heading="Ficha">
                <Tabficha empresasHData={empresasHData} />
              </Tab>
              <Tab heading="Contacto">
                <Tabcontactos empresasHData={empresasHData} />
              </Tab>
              <Tab heading="Historico">
                <Tabhistorico empresasHData={empresasHData} />
              </Tab>
            </Tabs>
          </Grid>
    );
  }
}

module.exports = ModulTabs;