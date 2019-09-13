import React, { Component } from "react";
import { FlatList } from 'react-native';
import styles from './Style.js';
import { View } from 'native-base';
import Contactos from "./Contactos";

export default class EmpresaHList extends Component {

  render() {
      
    return (
        <View style={[styles.containerEmpresasList]}>
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
                    cargo:'Gerente',
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
                    cargo:'Gerente',
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
                    cargo:'Gerente',
                },
            ]}
            renderItem={({item, index}) => <Contactos item={item}/>}
            keyExtractor={(item, index) => item + index}
            />
        </View>
        
    );
  }
}

module.exports = EmpresaHList;