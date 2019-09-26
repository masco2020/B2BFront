import React, { Component } from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import styles from './Style.js';
import { Actions } from 'react-native-router-flux';

export default class AppHeader extends Component {
  
  state = {
    noLeft: this.props.noLeftView
  }

  render() {
    const Titulo = this.props.Titulo
    const noLeft = this.state.noLeft
    const styleLogin = this.props.styleLogin
    return (
        <Header noLeft={noLeft} >
            <Left>
              <Button transparent onPress= {() => {Actions.pop(); }} >
                  <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body style={[styleLogin.bodyH]}>
            <Title>{Titulo}</Title>
            </Body>
            <Right style={[styleLogin.rightBtn]}>
              <Button transparent onPress={()=> this.props.openDrawer()}>
                  <Icon name='menu' />
              </Button>
            </Right>
        </Header>
    );
  }
}
module.exports = AppHeader;