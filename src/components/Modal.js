import React from 'react'
import { Modal as NativeModal } from 'react-native'
import { Button, Icon, Header, Left, Body, Title, Right } from 'native-base'

export default class Modal extends React.PureComponent {
  render() {
    return (
      <NativeModal
        animationType="slide"
        transparent={false}
        visible={this.props.visible}
        onRequestClose={this.props.onRequestClose}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.onRequestClose}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.header}</Title>
          </Body>
          <Right />
        </Header>
        {this.props.children}
      </NativeModal>
    )
  }
}
