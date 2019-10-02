import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import styles from 'styles/contactos'
import { Text, View, Icon, Card, CardItem, Body } from 'native-base'

export default class ContactoBox extends Component {
  render() {
    const contact = this.props.item
    return (
      <Card style={[styles.contactoCards]}>
        <CardItem style={[styles.contactoCardsItems]}>
          <Body style={[styles.contactoCardsBody]}>
            <View style={[styles.contactoCardTop]}>
              <View style={[styles.contactNombre, styles.contactDato]}>
                <Icon
                  type="FontAwesome"
                  name="user"
                  style={[styles.iconEmpresarialContacto, styles.iconContact]}
                />
                <Text style={[styles.contactText, styles.contactNombreText]}>
                  {contact.nombre} {contact.apellidoPaterno}
                </Text>
              </View>
              <ScrollView
                style={[styles.contactCargoScroll]}
                horizontal={true}
                contentInset>
                <View style={[styles.contactCargo, styles.contactDato]}>
                  <Text style={[styles.contactText]}>-{contact.cargo}</Text>
                </View>
              </ScrollView>
            </View>
            <View style={[styles.contactoCardBot]}>
              <View style={[styles.contactllamar, styles.contactDato]}>
                <Icon
                  type="FontAwesome"
                  name="phone"
                  style={[styles.iconEmpresarialContacto, styles.iconContact]}
                />
                <Text style={[styles.contactText, styles.contactllamarText]}>
                  Llamar
                </Text>
              </View>
              <View style={[styles.contactMail, styles.contactDato]}>
                <Icon
                  type="FontAwesome"
                  name="envelope"
                  style={[styles.iconEmpresarialContacto, styles.iconContact]}
                />
                <Text style={[styles.contactText, styles.contactMailText]}>
                  Correo
                </Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    )
  }
}
