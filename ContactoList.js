import React, { Component } from "react";
import { FlatList } from 'react-native';
import styles from './Style.js';
import { View } from 'native-base';
import ContactoBox from "./ContactoBox";

export default class ContactoList extends Component {

  render() {
      
    return (
        <View>
            <FlatList
            data={[
                {
                    idContacto: '1',
                    nombre: 'Raul', 
                    apellidoPaterno: 'Alonso',
                    apellidoMaterno:'Martinez',
                    DNI: '09372649',
                    celular:'+51 564 683 454', 
                    telefono: '01 558 5445 554',
                    correo: 'raul@peruexportaciones.pe',
                    cargo:'Gerente General',
                },
                {
                    idContacto: '2',
                    nombre: 'Silvia', 
                    apellidoPaterno: 'Martinez',
                    apellidoMaterno: 'Fernandez',
                    DNI: '09263749',
                    celular:'+51 564 683 454', 
                    telefono: '01 558 5445 554',
                    correo: 'raul@peruexportaciones.pe',
                    cargo:'Representante Legal',
                },
                {
                    idContacto: '3',
                    nombre: 'Luis', 
                    apellidoPaterno: 'Fernandez',
                    apellidoMaterno: 'Guerrero',
                    DNI: '20937649',
                    celular:'+51 564 683 454', 
                    telefono: '01 558 5445 554',
                    correo: 'raul@peruexportaciones.pe',
                    cargo:'Gerente Comercial',
                },
            ]}
            renderItem={({item, index}) => <ContactoBox item={item} />}
            keyExtractor={(item, index) => item + index}
            />
        </View>
        
    );
  }
}

module.exports = ContactoList;