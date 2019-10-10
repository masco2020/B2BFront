import React, { Component } from 'react'
import styles from 'styles/contactos'
import { fw } from 'styles/styles'
import { Text, Card, CardItem } from 'native-base'
import Block from 'components/Block'
import Icon from 'components/Icon'
import { LinkText } from 'components/styled'

export default class ContactoBox extends Component {
  render() {
    const contact = this.props.item
    return (
      <Card noShadow style={[styles.contactoCards]}>
        <CardItem bordered>
          <Block row left>
            <Block middle>
              <Icon active name="user" primary />
            </Block>
            <Text selectable style={[styles.infoText]}>
              {contact.nombres} {contact.apellidoPaterno}
            </Text>
          </Block>
        </CardItem>
        <CardItem>
          <Block flex row space="between">
            <Block row>
              <Block middle>
                <Icon active name="phone" primary />
              </Block>
              <LinkText style={fw.bold} >Llamar</LinkText>
            </Block>
            <Block row>
              <Block middle>
                <Icon active name="envelope" primary />
              </Block>
              <LinkText style={fw.bold} >Correo</LinkText>
            </Block>
          </Block>
        </CardItem>
      </Card>
    )
  }
}
