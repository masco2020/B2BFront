import React, { Component } from 'react'
import styles from 'styles/contactos'
import { fw } from 'styles/styles'
import { Text, Card, CardItem } from 'native-base'
import Block from 'components/Block'
import Icon from 'components/Icon'
import { LinkText } from 'components/styled'
import Touchable from './Touchable'

export default class ContactoBox extends Component {
  openEditor = () => {
    this.props.onPress(this.props.item)
  }

  render() {
    const contact = this.props.item
    return (
      <Touchable onPress={this.openEditor}>
        <Card noShadow style={[styles.contactoCards]}>
          <CardItem bordered style={{justifyContent: 'space-between'}} >
            <Block row left>
              <Block middle>
                <Icon style={{width: 18}} active name="user-alt" primary />
              </Block>
              <Block style={[styles.blockText]}>
                <Text selectable style={[styles.textBox, fw.bold]}>
                {contact.nombres} {contact.apellidoPaterno}
                </Text>
                <Text style={styles.cargoStyle}>{contact.nombres}</Text>
              </Block>
            </Block>
            <Block middle>
              <Icon style={{width: 18}} active name="edit" primary />
            </Block>
          </CardItem>
          <CardItem>
            <Block flex row left space="between">
              <Block row>
                <Block middle>
                  <Icon active name="phone" primary />
                </Block>
                <LinkText style={fw.bold}>Llamar</LinkText>
              </Block>
              <Block row>
                <Block middle>
                  <Icon active name="envelope" primary />
                </Block>
                <LinkText style={fw.bold}>Correo</LinkText>
              </Block>
            </Block>
          </CardItem>
        </Card>
      </Touchable>
    )
  }
}
