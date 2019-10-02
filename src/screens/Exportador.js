import React, { Component } from 'react'
import {
  Button,
  Content,
  Item,
  Icon,
  Input,
  Segment,
  Text,
  View,
  Root,
} from 'native-base'
// import ModalC from 'react-native-modal'
import { Modal } from 'react-native'

import styles from 'styles/exportador'
import Block from 'components/Block'
import EmpresaList from 'screens/Empresa/List'
import { Hbar } from '../components/styled'

const options = [
  { active: true, label: 'Empresa' },
  { active: false, label: 'Producto' },
  { active: false, label: 'Ciudad' },
]

export default class Home extends Component {
  state = {
    leyendaModalVisible: false,
    selected: undefined,
  }

  onValueChange(value) {
    this.setState({
      selected: value,
    })
  }

  toggleModal = () => {
    this.setState({
      leyendaModalVisible: !this.state.leyendaModalVisible,
    })
  }

  renderModal() {
    return (
      <Modal
        visible={this.state.leyendaModalVisible}
        onRequestClose={this.toggleModal}
        presentationStyle="formSheet"
        transparent={false}
        animationType="slide"
        // style={[styles.modalLeyenda]}
      >
        <View style={[styles.modalLeyendaV]}>
          <Text>Reconócelos</Text>
          <Hbar />
          <Text>
            Aprende como reconocer los sectores facilmente con nuestros iconos
            de colores:
          </Text>
        </View>
      </Modal>
    )
  }

  renderSearch() {
    return (
      <Block row>
        <Content>
          <Item style={{ borderBottomWidth: 0 }}>
            <Input placeholder="Busca Empresas Exportadoras" />
            <Icon name="ios-search" />
          </Item>
        </Content>
        <Button transparent onPress={this.toggleModal}>
          <Icon type="FontAwesome" name="sliders" />
        </Button>
      </Block>
    )
  }

  renderEmpresa() {
    return (
      <Block flex>
        {this.renderSearch()}
        <Hbar />
        <Content>
          <EmpresaList />
        </Content>
        {this.renderModal()}
      </Block>
    )
  }

  render() {
    return (
      <Root>
        <Segment>
          {options.map((option, index) => (
            <Button key={index} active={option.active}>
              <Text>{option.label}</Text>
            </Button>
          ))}
        </Segment>
        {this.renderEmpresa()}
        {/* <AppFooter /> */}
      </Root>
    )
  }
}
