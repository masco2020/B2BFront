import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableNativeFeedback, Modal, } from 'react-native';
import styles from './Style.js';
import IconF from 'react-native-vector-icons/FontAwesome';
import { Container, Drawer, StyleProvider, Root, Text, Form, Item, Label, Input, Button, View, Icon, Picker, Header, Tab, Tabs, Left, Body, Title, Right, Content, Grid, List, ListItem, CheckBox, DatePicker } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Historico extends Component {

  state = {
    modalVisible: false,
  };
  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    const empresasHData = this.props.empresasHData;
    return (
      <Container>
        <Button onPress={() => { this.setModalVisible(true); }}>
          <Icon type="FontAwesome" name="search" />
        </Button>
        
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => {
                  this.setModalVisible(
                    !this.state.modalVisible
                  );
                }}
              >
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Gestiona accesos</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <View style={{padding: 30}}>
              <List>
                <ListItem style={[styles.listItem, {marginTop:10,}]} first>
                  <Body style={[styles.itemBodyFicha]} >
                    <Text style={[styles.itemTitle]}  note>Tipo de archivo</Text>
                  </Body>
                </ListItem>
                <ListItem style={[styles.listItem]} >
                  <Left style={[styles.itemBodyFicha]} >
                    <Text style={[styles.dateFicha, styles.textItem]}  >Fotografía</Text>
                  </Left>
                  <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
                </ListItem>
                <ListItem style={[styles.listItem]} >
                  <Left style={[styles.itemBodyFicha]} >
                    <Text style={[styles.dateFicha, styles.textItem]}  >Audio</Text>
                  </Left>
                  <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                </ListItem>
                <ListItem style={[styles.listItem]} >
                  <Left style={[styles.itemBodyFicha]} >
                    <Text style={[styles.dateFicha, styles.textItem]}  >Mapa de sitio</Text>
                  </Left>
                  <Right><CheckBox color={'#D80212'} checked={true} /></Right>
                </ListItem>
                <ListItem style={[styles.listItemFicha]} >
                    <Body style={[styles.itemBodyFicha]} >
                        <Text style={[styles.tittleFicha]} note>Fecha</Text>
                        <Button bordered style={[styles.btnPicker, styles.borderBtn]} onPress={this.sectoresModal} >
                          <DatePicker
                          defaultDate={new Date(2018, 4, 4)}
                          minimumDate={new Date(2018, 1, 1)}
                          maximumDate={new Date(2018, 12, 31)}
                          locale={"es"}
                          timeZoneOffsetInMinutes={undefined}
                          modalTransparent={false}
                          animationType={"fade"}
                          androidMode={"default"}
                          placeHolderText="Selecciona la fecha"
                          textStyle={{ color: "#D80212" }}
                          placeHolderTextStyle={{ color: "#7e7e7d" }}
                          onDateChange={this.setDate}
                          disabled={false}
                          />
                        </Button>
                        <Text style={[styles.dateFicha, styles.btnListFicha, styles.dateBtnListFichaProducts]} >
                          {this.state.chosenDate.toString().substr(4, 12)}
                        </Text>
                    </Body>
                </ListItem>
                <ListItem style={[styles.listItem, {marginTop:10,}]}>
                  <Body style={[styles.itemBodyFicha]} >
                    <Text style={[styles.itemTitle]}  note>Usuario</Text>
                  </Body>
                </ListItem>
                <ListItem style={[styles.listItem]} >
                  <View style={[styles.searchBarH]}>
                    <Item style={{borderBottomWidth: 0,}}>
                      <Input style={{height: 40, paddingTop: 0, paddingBottom: 0,}} placeholder="Busca Usuario" />
                      <IconF style={[styles.searchBarHIcon, {color: '#7e7e7d',},]} name="search" />
                    </Item>
                  </View>
                </ListItem>
              </List>
              <Button block small style={[styles.filtrarBtn]}>
                <Text style={[styles.filtrarBtnText, styles.borderBtn]}>Filtrar</Text>
              </Button>
            </View>
          </Content>
        </Modal>

      </Container>
    );
  }
}

module.exports = Historico;
