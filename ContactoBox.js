import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  Modal,
  ScrollView
} from 'react-native';
import styles from './Style.js';
import {
  Container,
  Root,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
  View,
  Icon,
  Picker,
  Left,
  Card,
  CardItem,
  Body,
  Title,
  Content,
  Grid,
  Header,
  Right,
  List,
  ListItem
} from 'native-base';
// import IconF from 'react-native-vector-icons/dist/FontAwesome';
import ModalC from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import ModalNuevoContacto from './NuevoContacto';

export default class ContactoBox extends Component {
  render() {
    const contact = this.props.item;
    return (
      <Card style={[styles.contactoCards]}>
        <CardItem style={[styles.contactoCardsItems]}>
          <Body style={[styles.contactoCardsBody]}>
            <View style={[styles.contactoCardTop]}>
              <View
                style={[
                  styles.contactNombre,
                  styles.contactDato
                ]}
              >
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
              <ScrollView
                style={[styles.contactCargoScroll]}
                horizontal={true}
                contentInset
              >
                <View
                  style={[
                    styles.contactCargo,
                    styles.contactDato
                  ]}
                >
                  <Text style={[styles.contactText]}>
                    -{contact.cargo}
                  </Text>
                </View>
              </ScrollView>
            </View>
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
