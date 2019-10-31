import React from 'react'
import { FlatList, Linking } from 'react-native'
import { Text, Button, View, Content } from 'native-base'

import styles from 'styles/contactos'
import { fz } from 'styles/styles'
import ContactoBox from 'components/ContactoBox'
import Block from 'components/Block'
import Icon from 'components/Icon'
import { Hbar } from 'components/styled'
import { connect } from 'components/AppProvider'
import Touchable from 'components/Touchable'

class Contactos extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Contactos',
  }

  showContact = item => {
    const data = this.props.empresa
    this.props.navigation.navigate('ContactoEditor', {
      type: 'edit',
      data: item,
      idEmpresa: data.idEmpresa,
    })
  }

  createContact = () => {
    const data = this.props.empresa
    this.props.navigation.navigate('ContactoEditor', {
      type: 'create',
      idEmpresa: data.idEmpresa,
    })
  }

  render() {
    const data = this.props.empresa
    const info = [
      {
        icon: 'phone',
        prop: 'telefono',
        link: () => Linking.openURL(`tel:${data.telefono}`),
      },
      {
        icon: 'envelope',
        prop: 'email',
        link: () => Linking.openURL(`mailto:${data.email}`),
      },
    ]

    return (
      <Block flex>
        <Content style={[styles.contentContactos]}>
          <View style={{ marginVertical: 10 }}>
            {info.map(contact => (
              <Touchable key={contact.icon} onPress={info.link}>
                <Block flex row style={[styles.infoContacto]}>
                  <Block middle>
                    <Icon name={contact.icon} primary style={fz.n18} />
                  </Block>
                  <Text selectable style={[styles.infoText]}>
                    {data[contact.prop]}
                  </Text>
                </Block>
              </Touchable>
            ))}
          </View>
          <Hbar />
          <FlatList
            data={data.listaContactos}
            renderItem={({ item }) => (
              <ContactoBox item={item} onPress={this.showContact} />
            )}
            keyExtractor={item => item.idContacto.toString()}
          />
          <Block center style={{ marginVertical: 32 }}>
            <Button onPress={this.createContact}>
              <Text style={[{ textTransform: 'capitalize' }, fz.n20]}>
                Nuevo Contacto
              </Text>
            </Button>
          </Block>
        </Content>
      </Block>
    )
  }
}

export default connect(ctx => ({
  dispatch: ctx.dispatch,
  empresa: ctx.context.empresa,
}))(Contactos)
