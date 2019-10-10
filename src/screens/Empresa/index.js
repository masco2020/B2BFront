import React, { Component } from 'react'
import {
  Badge,
  Body,
  Button,
  CheckBox,
  Content,
  Icon,
  Input,
  Item,
  Left,
  List,
  ListItem,
  Segment,
  Radio,
  Right,
  Text,
  View,
} from 'native-base'
import ModalC from 'react-native-modal'
import Modal from 'components/Modal'

import styles from 'styles/exportador'
import Block from 'components/Block'
import EmpresaList from 'screens/Empresa/List'
import { Hbar } from 'components/styled'
import Theme from 'themes/default'

const options = [
  { active: true, label: 'Empresa' },
  { active: false, label: 'Producto' },
  { active: false, label: 'Ciudad' },
]

export default class Home extends Component {
  state = {
    masFiltros: false,
    leyendaModalVisible: false,
    selectCheck: false,
    sectorModalVisible: false,
  }

  setMasFiltros(visible) {
    this.setState({
      masFiltros: visible,
    })
  }

  leyendaModal = () => {
    this.setState({
      leyendaModalVisible: !this.state.leyendaModalVisible,
    })
  }

  sectorModal = () => {
    this.setState({
      sectorModalVisible: !this.state.sectorModalVisible,
    })
  }

  selectCheckable = () => {
    this.setState({
      selectCheck: !this.state.selectCheck,
    })
  }

  renderModalLeyenda() {
    return (
      <ModalC
        isVisible={this.state.leyendaModalVisible}
        onBackdropPress={() => this.setState({ leyendaModalVisible: false })}
        style={[styles.modalLeyenda]}>
        <View style={[styles.modalLeyendaBox]}>
          <Text style={[styles.LeyendaTitel]}>Reconócelos</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ddd',
              marginTop: 5,
              marginBottom: 5,
            }}
          />
          <Text style={[styles.leyendaText]}>
            Aprende como reconocer los sectores facilmente con nuestros iconos
            de colores:
          </Text>
          <List>
            <ListItem style={[styles.leyendaSector]}>
              <Badge
                style={[styles.circulLeyenda, { backgroundColor: '#86BA24' }]}>
                <Text style={[styles.textcirculLeyenda]}>A</Text>
              </Badge>
              <Text style={{ color: '#86BA24', fontSize: 16 }}>
                Agronegocios
              </Text>
            </ListItem>
            <ListItem style={[styles.leyendaSector]}>
              <Badge
                style={[styles.circulLeyenda, { backgroundColor: '#E00613' }]}>
                <Text style={[styles.textcirculLeyenda]}>E</Text>
              </Badge>
              <Text style={{ color: '#E00613', fontSize: 16 }}>
                Exportación de Servicios
              </Text>
            </ListItem>
            <ListItem style={[styles.leyendaSector]}>
              <Badge
                style={[styles.circulLeyenda, { backgroundColor: '#A0137B' }]}>
                <Text style={[styles.textcirculLeyenda]}>I</Text>
              </Badge>
              <Text style={{ color: '#A0137B', fontSize: 16 }}>
                Industria de la vestimenta y decoración
              </Text>
            </ListItem>
            <ListItem style={[styles.leyendaSector]}>
              <Badge
                style={[styles.circulLeyenda, { backgroundColor: '#FFCC21' }]}>
                <Text style={[styles.textcirculLeyenda]}>M</Text>
              </Badge>
              <Text style={{ color: '#FFCC21', fontSize: 16 }}>
                Manufacturas Diversas
              </Text>
            </ListItem>
            <ListItem style={[styles.leyendaSector]}>
              <Badge
                style={[styles.circulLeyenda, { backgroundColor: '#0071B8' }]}>
                <Text style={[styles.textcirculLeyenda]}>P</Text>
              </Badge>
              <Text style={{ color: '#0071B8', fontSize: 16 }}>
                Productos Pesqueros
              </Text>
            </ListItem>
          </List>
        </View>
      </ModalC>
    )
  }

  renderModalSectores() {
    return (
      <ModalC
        isVisible={this.state.sectorModalVisible}
        onBackdropPress={() => this.setState({ sectorModalVisible: false })}
        style={{
          margin: 0,
          backgroundColor: 'white',
          height: 'auto',
          flex: 0,
          bottom: 0,
          position: 'absolute',
          width: '100%',
        }}>
        <View style={{ flex: 1, padding: 16 }}>
          <List>
            <ListItem style={[styles.listItem, { marginTop: 10 }]} first>
              <Body style={[styles.itemBodyFicha]}>
                <Text style={[styles.itemTitle]} note>
                  Sector
                </Text>
              </Body>
            </ListItem>
            <ListItem style={[styles.listItem]}>
              <Left style={[styles.itemBodyFicha]}>
                <Text style={[styles.dateFicha, styles.textItem]}>
                  Agronegocios
                </Text>
              </Left>
              <Right>
                <CheckBox
                  color={Theme.COLORS.PRIMARY}
                  checked={this.state.selectCheck}
                  onPress={this.selectCheckable}
                />
              </Right>
            </ListItem>
            <ListItem style={[styles.listItem]}>
              <Left style={[styles.itemBodyFicha]}>
                <Text style={[styles.dateFicha, styles.textItem]}>
                  Exportación de Servicios
                </Text>
              </Left>
              <Right>
                <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
              </Right>
            </ListItem>
            <ListItem style={[styles.listItem]}>
              <Left style={[styles.itemBodyFicha]}>
                <Text style={[styles.dateFicha, styles.textItem]}>
                  Industria de la vestimenta y decoración
                </Text>
              </Left>
              <Right>
                <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
              </Right>
            </ListItem>
            <ListItem style={[styles.listItem]}>
              <Left style={[styles.itemBodyFicha]}>
                <Text style={[styles.dateFicha, styles.textItem]}>
                  Manufacturas Diversas
                </Text>
              </Left>
              <Right>
                <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
              </Right>
            </ListItem>
            <ListItem style={[styles.listItem]}>
              <Left style={[styles.itemBodyFicha]}>
                <Text style={[styles.dateFicha, styles.textItem]}>
                  Productos Pesqueros
                </Text>
              </Left>
              <Right>
                <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
              </Right>
            </ListItem>
          </List>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Theme.COLORS.PRIMARY,
              margin: 15,
            }}
          />
          <Button
            transparent
            style={[styles.masFiltrosBtn]}
            onPress={() => {
              this.setMasFiltros(true)
            }}>
            <Text style={[styles.masFiltrosBtnText]}>Ver más filtros</Text>
          </Button>
        </View>
      </ModalC>
    )
  }

  renderModal() {
    return (
      <Modal
        header="Filtros"
        visible={this.state.masFiltros}
        onRequestClose={() => {
          this.setMasFiltros(!this.state.masFiltros)
        }}>
        <Content>
          <View style={{ padding: 30 }}>
            <List>
              <ListItem style={[styles.listItem, { marginTop: 10 }]} first>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.itemTitle]} note>
                    Sector
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Agronegocios
                  </Text>
                </Left>
                <Right>
                  <CheckBox
                    color={Theme.COLORS.PRIMARY}
                    checked={this.state.selectCheck}
                    onPress={this.selectCheckable}
                  />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Exportación de Servicios
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Industria de la vestimenta y decoración
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Manufacturas Diversas
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Productos Pesqueros
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem, { marginTop: 10 }]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.itemTitle]} note>
                    Tipo de Negocio
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Tipo A
                  </Text>
                </Left>
                <Right>
                  <CheckBox
                    color={Theme.COLORS.PRIMARY}
                    checked={this.state.selectCheck}
                    onPress={this.selectCheckable}
                  />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Tipo B
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Tipo C
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem, { marginTop: 10 }]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.itemTitle]} note>
                    Tamaño
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Pequeño
                  </Text>
                </Left>
                <Right>
                  <CheckBox
                    color={Theme.COLORS.PRIMARY}
                    checked={this.state.selectCheck}
                    onPress={this.selectCheckable}
                  />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Mediano
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Grande
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Extra Grande
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem, { marginTop: 10 }]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.itemTitle]} note>
                    Ciudad
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <View style={[styles.searchBarH]}>
                  <Item style={{ borderBottomWidth: 0 }}>
                    <Input
                      style={{ height: 40, paddingTop: 0, paddingBottom: 0 }}
                      placeholder="Busca Ciudad"
                    />
                    <Icon
                      type="FontAwesome5"
                      color={Theme.COLORS.PRIMARY}
                      style={[styles.searchBarHIcon]}
                      name="search"
                    />
                  </Item>
                </View>
              </ListItem>
            </List>
            <Button block small style={[styles.filtrarBtn, styles.borderBtn]}>
              <Text style={[styles.filtrarBtnText]}>Filtrar</Text>
            </Button>
          </View>
        </Content>
      </Modal>
    )
  }

  renderModalCompradores() {
    return (
      <Modal
        header="Filtros"
        visible={this.state.masFiltros}
        onRequestClose={() => {
          this.setMasFiltros(!this.state.masFiltros)
        }}>
        <Content>
          <View style={{ padding: 30 }}>
            <List>
              <ListItem style={[styles.listItem]} first>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.itemTitle]} note>
                    Sector
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Agronegocios
                  </Text>
                </Left>
                <Right>
                  <CheckBox
                    color={Theme.COLORS.PRIMARY}
                    checked={this.state.selectCheck}
                    onPress={this.selectCheckable}
                  />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Exportación de Servicios
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Industria de la vestimenta y decoración
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Manufacturas Diversas
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Productos Pesqueros
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem, { marginTop: 10 }]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.itemTitle]} note>
                    Alcance
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Tipo A
                  </Text>
                </Left>
                <Right>
                  <CheckBox
                    color={Theme.COLORS.PRIMARY}
                    checked={this.state.selectCheck}
                    onPress={this.selectCheckable}
                  />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    A nivel nacional
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    A Nivel Ciudad
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    A nivel internacional
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    A nivel región
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem, { marginTop: 10 }]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.itemTitle]} note>
                    Tamaño
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Pequeño
                  </Text>
                </Left>
                <Right>
                  <CheckBox
                    color={Theme.COLORS.PRIMARY}
                    checked={this.state.selectCheck}
                    onPress={this.selectCheckable}
                  />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Mediano
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Grande
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>
                    Extra Grande
                  </Text>
                </Left>
                <Right>
                  <CheckBox color={Theme.COLORS.PRIMARY} checked={true} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem, { marginTop: 10 }]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.itemTitle]} note>
                    ¿Ha Importado del Perú?
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>Si</Text>
                </Left>
                <Right>
                  <Radio
                    selected={this.state.selectCheck}
                    onPress={this.selectCheckable}
                  />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <Left style={[styles.itemBodyFicha]}>
                  <Text style={[styles.dateFicha, styles.textItem]}>No</Text>
                </Left>
                <Right>
                  <Radio selected={false} />
                </Right>
              </ListItem>
              <ListItem style={[styles.listItemFicha]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.tittleFicha]} note>
                    Indicar: ¿A que medio realizo el contacto?
                  </Text>
                  <Button
                    bordered
                    iconRight
                    style={[styles.btnPicker, styles.borderBtn]}
                    onPress={this.MediosModal}>
                    <Text
                      style={[
                        styles.dateFicha,
                        styles.btnListFicha,
                        styles.dateBtnListFichaSectores,
                      ]}>
                      Medio de Contacto
                    </Text>
                    <Icon type="FontAwesome" name="caret-down" />
                  </Button>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItem, { marginTop: 10 }]}>
                <Body style={[styles.itemBodyFicha]}>
                  <Text style={[styles.itemTitle]} note>
                    Pais
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={[styles.listItem]}>
                <View style={[styles.searchBarH]}>
                  <Item style={{ borderBottomWidth: 0 }}>
                    <Input
                      style={{ height: 40, paddingTop: 0, paddingBottom: 0 }}
                      placeholder="Busca Pais"
                    />
                    <Icon
                      type="FontAwesome5"
                      color={Theme.COLORS.PRIMARY}
                      style={[styles.searchBarHIcon]}
                      name="search"
                    />
                  </Item>
                </View>
              </ListItem>
            </List>
            <Button block small style={[styles.filtrarBtn, styles.borderBtn]}>
              <Text style={[styles.filtrarBtnText]}>Filtrar</Text>
            </Button>
          </View>
        </Content>
      </Modal>
    )
  }

  renderSegment() {
    return (
      <Segment>
        {options.map((option, index) => (
          <Button
            first={index === 0}
            last={index === options.length}
            key={index}
            active={option.active}>
            <Text>{option.label}</Text>
          </Button>
        ))}
      </Segment>
    )
  }

  renderSearch() {
    return (
      <Block row style={{ padding: Theme.SIZES.BASE }}>
        <Content style={[styles.searchBarH]}>
          <Item style={{ borderBottomWidth: 0 }}>
            <Input
              style={{ height: 40, paddingTop: 0, paddingBottom: 0 }}
              placeholder="Busca por empresa"
            />
            <Icon
              style={[styles.searchBarHIcon]}
              color={Theme.COLORS.BLACK}
              type="FontAwesome"
              name="search"
            />
          </Item>
        </Content>
        <Button
          style={{
            backgroundColor: Theme.COLORS.PRIMARY,
            borderRadius: 9,
            marginLeft: 16,
          }}
          onPress={this.sectorModal}>
          <Icon
            style={[styles.iconFilterH]}
            type="FontAwesome"
            name="sliders"
          />
        </Button>
      </Block>
    )
  }

  render() {
    const esExportador = this.props.navigation.getParam('esExportador')

    return (
      <Block flex>
        {this.renderSegment()}
        {this.renderSearch()}
        <Hbar />
        <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
          <EmpresaList esExportador={esExportador} />
        </Content>
        {this.renderModalLeyenda()}
        {this.renderModalSectores()}
        {this.renderModal()}
      </Block>
    )
  }
}
