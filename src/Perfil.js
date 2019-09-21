import React, { Component } from "react";
import { Platform, StyleSheet, TouchableHighlight, Image, } from 'react-native';
import { Container, Drawer, StyleProvider, Root, Text, View, Content, Card, CardItem, Body, Header, Left, Button, Icon, Title, Right, } from 'native-base';
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
                <Body>
                  <Title>{Titulo}</Title>
                </Body>
                <Right>
                </Right>
              </Header>
              <Content>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', paddingBottom: 30,}}>
                    <View style={[styles.perfilView]} >
                        <Text style={[styles.text1Perfil]} >
                          Elige el tipo de{"\n"}empresa de tu interés
                        </Text>
                    </View>
                    <View style={[styles.perfilOptions]} >
                        <Card style={[styles.perfilCards]} >
                            <CardItem style={[styles.perfilCardsItems, styles.iconPerfilItem]} header>
                              <Image source={require('./assets/compradores.png')}  style={[styles.perfilIcon]} />
                            </CardItem>
                            <CardItem style={[styles.perfilCardsItems, styles.txtPerfilItem]}>
                                <Body style={[styles.perfilCardsItemsBody]}>
                                    <Text numberOfLines={1} style={[styles.perfilCardsItemsText]}>
                                        Compradores
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <TouchableHighlight onPress={()=> this.goHome()} style={{width: '100%',}}>
                          <Card style={[styles.perfilCards, {marginTop: 35,}]}>
                            <CardItem style={[styles.perfilCardsItems, styles.iconPerfilItem]} header>
                              <Image source={require('./assets/exportadores.png')}  style={[styles.perfilIcon]} />
                            </CardItem>
                            <CardItem style={[styles.perfilCardsItems, styles.txtPerfilItem]}>
                              <Body style={[styles.perfilCardsItemsBody]}>
                                  <Text numberOfLines={1} style={[styles.perfilCardsItemsText]}>
                                      Exportadores
                                  </Text>
                              </Body>
                              </CardItem>
                          </Card>
                        </TouchableHighlight>
                    </View>
                </View>
              </Content>
              
            </Container>
          </Root>
        </Drawer>
      </StyleProvider>
    );
  }
}

module.exports = Perfil;