import React, { Component } from 'react'
import { TouchableHighlight } from 'react-native'
import styles from 'styles/contactos'
import { Text, View, Icon, Card, CardItem, Body } from 'native-base'

export default class ContactoBox extends Component {
  render() {
    const contact = this.props.item
    return (
      <Card style={[styles.contactoCards]}>
        <CardItem style={[styles.contactoCardsItems]}>
          <Body style={[styles.contactoCardsBody]}>
            <TouchableHighlight>
              <View style={[styles.contactoCardTop]}>
                <View style={[styles.contactDato, styles.contactNombre]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Icon
                      type="FontAwesome"
                      name="user"
                      style={[
                        styles.iconEmpresarialContacto,
                        styles.iconContact,
                      ]}
                    />
                    <Text
                      style={[styles.contactText, styles.contactNombreText]}>
                      {contact.nombre} {contact.apellidoPaterno}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon
                      type="FontAwesome"
                      name="user"
                      style={[
                        styles.iconEmpresarialContacto,
                        styles.iconContact,
                        { color: '#fff' },
                      ]}
                    />
                    <Text style={[styles.contactText, styles.contactCargo]}>
                      {contact.cargo}
                    </Text>
                  </View>
                </View>
                <View style={[styles.contactEdit, styles.contactDato]}>
                  <Icon
                    type="FontAwesome"
                    name="edit"
                    style={[
                      styles.iconEmpresarialContacto,
                      styles.iconContact,
                      styles.editContactIcon,
                    ]}
                  />
                </View>
              </View>
            </TouchableHighlight>
            <View style={[styles.contactoCardBot]}>
              <TouchableHighlight>
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
              </TouchableHighlight>
              <TouchableHighlight>
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
              </TouchableHighlight>
            </View>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

