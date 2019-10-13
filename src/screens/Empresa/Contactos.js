import React from 'react'
import { FlatList } from 'react-native'
import { Text, Button, View, Content } from 'native-base'

import styles from 'styles/contactos'
import { fw, fz } from 'styles/styles'
import ContactoBox from 'components/ContactoBox'
import Block from 'components/Block'
import Icon from 'components/Icon'
import { Hbar } from 'components/styled'

class Contactos extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Contactos',
  }

  showContact = item => {
    const data = this.props.navigation.getParam('data', {})
    this.props.navigation.navigate('ContactoEditor', {
      type: 'edit',
      data: item,
      idEmpresa: data.idEmpresa,
    })
  }

  createContact = () => {
    const data = this.props.navigation.getParam('data', {})
    this.props.navigation.navigate('ContactoEditor', {
      type: 'create',
      idEmpresa: data.idEmpresa,
    })
  }

  render() {
    const data = this.props.navigation.getParam('data', {})
    const info = [
      { icon: 'phone', prop: 'telefono' },
      { icon: 'envelope', prop: 'email' },
    ]

    return (
      <Block flex>
        <Content style={[styles.contentContactos]}>
          <View  style={{ marginVertical: 10}}>
            {info.map(contact => (
              <Block key={contact.icon} flex row style={[styles.infoContacto]}>
                <Block middle>
                  <Icon name={contact.icon} primary style={fz.n18} />
                </Block>
                <Text selectable style={[styles.infoText]}>
                  {data[contact.prop]}
                </Text>
              </Block>
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
            <Button styles={{borderRadius: 8}} onPress={this.createContact}>
              <Text style={[{textTransform: 'capitalize'}, fz.n20]} >Nuevo Contacto</Text>
            </Button>
          </Block>
        </Content>
      </Block>
    )
  }
}

export default Contactos
