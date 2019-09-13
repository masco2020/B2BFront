import React, { Component } from "react";
import { Platform, StyleSheet, TouchableNativeFeedback, } from 'react-native';
import { Container, Drawer, StyleProvider, Root, Text, View, Content, Card, CardItem, Body, Header, Left, Button, Icon, Title, Right } from 'native-base';
import styles from './Style.js';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { Actions } from 'react-native-router-flux';
import SideBar from './SideBar';
import AppHeader from './AppHeader';

export default class Perfil extends Component {
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  goHome = () => {
    Actions.Home()
  };
  
  render() {
    const Titulo = 'Perfil';
    const styleLogin = styles
    return (
      <StyleProvider style={getTheme(material)}>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Root>
            <Container>
              <Header >
                <Left>
                  <Button transparent onPress={()=> this.openDrawer()}>
                      <Icon name='menu' />
                  </Button>
                </Left>
                <Body >
                  <Title>{Titulo}</Title>
                </Body>
                <Right>
                </Right>
              </Header>
              <View style={[styles.perfilView]} >
                  <Text style={[styles.text1Perfil]} >
                      ¿Que perfil quieres asesorar?
                  </Text>
              </View>
              <View style={[styles.perfilOptions]} >
                  <Card style={[styles.perfilCards]} >
                      <CardItem style={[styles.perfilCardsItems]}>
                          <Body style={[styles.perfilCardsItemsBody]}>
                              <Text style={[styles.perfilCardsItemsText]}>
                                  Compradores
                              </Text>
                          </Body>
                      </CardItem>
                  </Card>
                  <Card style={[styles.perfilCards, {marginTop: 35,}]}>
                    <TouchableNativeFeedback onPress={()=> this.goHome()} >
                      <CardItem style={[styles.perfilCardsItems]}>
                        <Body style={[styles.perfilCardsItemsBody]}>
                            <Text style={[styles.perfilCardsItemsText]}>
                                Exportadores
                            </Text>
                        </Body>
                        </CardItem>
                    </TouchableNativeFeedback>
                  </Card>
              </View>
            </Container>
          </Root>
        </Drawer>
      </StyleProvider>
    );
  }
}

module.exports = Perfil;