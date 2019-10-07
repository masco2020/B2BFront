import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { View } from 'native-base'
import ContactoBox from 'components/ContactoBox'

export default class ContactoList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => <ContactoBox item={item} />}
          keyExtractor={item => item.idContacto.toString()}
        />
      </View>
    )
  }
}
