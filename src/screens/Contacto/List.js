import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { View } from 'native-base'
import ContactoBox from 'components/ContactoBox'
import contacts from 'mockup/contacts'

export default class ContactoList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={contacts}
          renderItem={({ item }) => <ContactoBox item={item} />}
          keyExtractor={(item, index) => item.idContacto + index}
        />
      </View>
    )
  }
}
