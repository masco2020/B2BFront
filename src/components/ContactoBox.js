import React, { Component } from 'react'
import { Text, Card, CardItem } from 'native-base'
import { Linking } from 'react-native'

import Block from 'components/Block'
import Icon from 'components/Icon'
import { LinkText } from 'components/styled'
import Touchable from 'components/Touchable'
import styles from 'styles/contactos'
import { fw } from 'styles/styles'

export default class ContactoBox extends Component {
  openEditor = () => {
    this.props.onPress(this.props.item)
  }

  doCall = () => {
    const contact = this.props.item
    Linking.openURL(`tel:${contact.celular}`)
  }
  doEmail = () => {
    const contact = this.props.item
    Linking.openURL(`mailto:${contact.email}?subject=Contacto`)
  }

  render() {
    const contact = this.props.item
    return (
      <Card noShadow style={[styles.contactoCards]}>
        <CardItem bordered style={styles.boxTop}>
          <Touchable onPress={this.openEditor}>
            <Block row>
              <Block>
                <Icon size={18} name="user-alt" primary />
              </Block>
              <Block>
                <Text selectable style={[styles.textBox, styles.nombreBox]}>
                  {contact.nombres} {contact.apellidoPaterno}
                </Text>
                <Text
                  style={[styles.textBox, styles.cargoBox]}
                  numberOfLines={1}>
                  {contact.tipoCargo.nombre}
                </Text>
              </Block>
              <Block>
                <Icon size={18} name="edit" primary />
              </Block>
            </Block>
          </Touchable>
        </CardItem>
        <CardItem>
          <Block flex row left space="between">
            <Block row>
              <Block middle>
                <Icon name="phone" primary />
              </Block>
              <Touchable onPress={this.doCall}>
                <LinkText style={[fw.bold /* , fz.n18 */]}>Llamar</LinkText>
              </Touchable>
            </Block>
            <Block row>
              <Block middle>
                <Icon name="envelope" primary />
              </Block>
              <Touchable onPress={this.doEmail}>
                <LinkText style={[fw.bold /* , fz.n18 */]}>Correo</LinkText>
              </Touchable>
            </Block>
          </Block>
        </CardItem>
      </Card>
    )
  }
}
