import React, { Component } from 'react'
import { TouchableHighlight } from 'react-native'
import styles from 'styles/contactos'
import estilo from 'styles/styles'
import { Text, View, Icon, Card, CardItem, Body } from 'native-base'

export default class ContactoBox extends Component {
  render() {
    const contact = this.props.item
    return (
      <Card style={[estilo.contactoCards]}>
        <CardItem style={[estilo.contactoCardsItems]}>
          <Body style={[estilo.contactoCardsBody]}>
            <TouchableHighlight >
              <View style={[estilo.contactoCardTop]}>
                <View style={[ estilo.contactDato, estilo.contactNombre ]} >
                  <View style={{flexDirection: 'row', justifyContent:'flex-start',}} >
                    <Icon type="FontAwesome" name="user" style={[ estilo.iconEmpresarialContacto, estilo.iconContact ]} />
                    <Text style={[ estilo.contactText, estilo.contactNombreText ]} >
                      {contact.nombre} {contact.apellidoPaterno}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row',}} >
                    <Icon type="FontAwesome" name="user" style={[ estilo.iconEmpresarialContacto, estilo.iconContact, {color: '#fff',}]} />
                    <Text style={[estilo.contactText, estilo.contactCargo]}>
                      {contact.cargo}
                    </Text>
                  </View>
                </View>
                <View style={[ estilo.contactEdit, estilo.contactDato ]} >
                  <Icon type="FontAwesome" name="edit" style={[ estilo.iconEmpresarialContacto, estilo.iconContact, estilo.editContactIcon ]} />
                </View>
              </View>
            </TouchableHighlight>
            <View style={[estilo.contactoCardBot]}>
              <TouchableHighlight>
                <View style={[ estilo.contactllamar, estilo.contactDato ]} >
                  <Icon type="FontAwesome" name="phone" style={[ estilo.iconEmpresarialContacto, estilo.iconContact ]} />
                  <Text style={[ estilo.contactText, estilo.contactllamarText ]} >
                    Llamar
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={[ estilo.contactMail, estilo.contactDato ]} >
                  <Icon type="FontAwesome" name="envelope" style={[ estilo.iconEmpresarialContacto, estilo.iconContact ]} />
                  <Text style={[ estilo.contactText, estilo.contactMailText ]} >
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
