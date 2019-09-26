import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  Modal,
  ScrollView
} from 'react-native';
import styles from './Style.js';
import {
  Container, Root, Text, Form, Item, Label, Input, Button, View, Icon, Picker, Left, Card, CardItem, Body, Title, Content, Grid, Header, Right, List, ListItem, } from 'native-base';
// import IconF from 'react-native-vector-icons/dist/FontAwesome';
import ModalC from 'react-native-modal';
import { Actions } from 'react-native-router-flux';

export default class ContactoBox extends Component {
  render() {
    const contact = this.props.item;
    return (
      <Card style={[styles.contactoCards]}>
        <CardItem style={[styles.contactoCardsItems]}>
          <Body style={[styles.contactoCardsBody]}>
            <TouchableHighlight >
              <View style={[styles.contactoCardTop]}>
                <View
                  style={[
                    styles.contactDato,
                    styles.contactNombre
                  ]}
                >
                  <View style={{flexDirection: 'row', justifyContent:'flex-start',}} >
                    <Icon
                      type="FontAwesome"
                      name="user"
                      style={[
                        styles.iconEmpresarialContacto,
                        styles.iconContact
                      ]}
                    />
                    <Text
                      style={[
                        styles.contactText,
                        styles.contactNombreText
                      ]}
                    >
                      {contact.nombre} {contact.apellidoPaterno}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row',}} >
                    <Icon
                      type="FontAwesome"
                      name="user"
                      style={[
                        styles.iconEmpresarialContacto,
                        styles.iconContact,
                      {color: '#fff',}]}
                    />
                    <Text style={[styles.contactText, styles.contactCargo]}>
                      {contact.cargo}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.contactEdit,
                    styles.contactDato
                  ]}
                >
                  <Icon
                      type="FontAwesome"
                      name="edit"
                      style={[
                        styles.iconEmpresarialContacto,
                        styles.iconContact,
                        styles.editContactIcon
                      ]}
                    />
                </View>
              </View>
            </TouchableHighlight>
            <View style={[styles.contactoCardBot]}>
              <View
                style={[
                  styles.contactllamar,
                  styles.contactDato
                ]}
              >
                <Icon
                  type="FontAwesome"
                  name="phone"
                  style={[
                    styles.iconEmpresarialContacto,
                    styles.iconContact
                  ]}
                />
                <Text
                  style={[
                    styles.contactText,
                    styles.contactllamarText
                  ]}
                >
                  Llamar
                </Text>
              </View>
              <View
                style={[
                  styles.contactMail,
                  styles.contactDato
                ]}
              >
                <Icon
                  type="FontAwesome"
                  name="envelope"
                  style={[
                    styles.iconEmpresarialContacto,
                    styles.iconContact
                  ]}
                />
                <Text
                  style={[
                    styles.contactText,
                    styles.contactMailText
                  ]}
                >
                  Correo
                </Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

module.exports = ContactoBox;
