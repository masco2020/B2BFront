import React, { Component } from "react";
import { TouchableNativeFeedback } from 'react-native';
import { Text, View, Card, CardItem, Badge } from 'native-base';
import styles from './Style.js';
import { Actions } from 'react-native-router-flux';

export default class EmpresaHBox extends Component {

  goEmpresasModule = (empresasHData) => {
    Actions.EmpresasModule({empresasHData})
  };

  render() {
      const empresasHData = this.props.item
    return (
                <TouchableNativeFeedback style={[styles.empresaTouch]} onPress={()=> this.goEmpresasModule(empresasHData)} >
            <Card style={[styles.cartEmpresas]} >
                    <CardItem bordered style={[styles.cartItemNamesEmpresas]} >
                        <Text style={[styles.textNamesEmpresas]} >{empresasHData.nombre}</Text>
                    </CardItem>
                    <CardItem bordered style={[styles.cartItemDatesEmpresas]} >
                        <Text style={[styles.textDatesEmpresas]} >RUC: {empresasHData.ruc}</Text>
                        <View style={[styles.cartItemDatesEmpresasBoxSectorBadge]} >
                            {
                                empresasHData.listaSectores.map(function (sector, index) {
                                return (
                                    <Badge style={[styles.circulSector, { backgroundColor: sector.color,}]}>
                                        <Text style={[styles.textcirculSector]}>{sector.letra}</Text>
                                    </Badge>
                                )
                                })
                            }
                        </View>
                    </CardItem>
            </Card>
                </TouchableNativeFeedback>
    );
  }
}

module.exports = EmpresaHBox;