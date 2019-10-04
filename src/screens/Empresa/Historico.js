import React, { Component } from 'react'
import { TouchableHighlight, Modal } from 'react-native'
import { Container, Text, Item, Input, Button, View, Icon, Header, Left, Body, Title, Right, Content, List, ListItem, CheckBox, DatePicker } from 'native-base'
import IconF from 'react-native-vector-icons/FontAwesome';
import estilo from 'styles/styles'

export default class Historico extends Component {
  static navigationOptions = {
    tabBarLabel: 'Historico',
  }

  /* state = {
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
  } */


 

render() {
  const data = this.props.navigation.getParam('data', {})
  return (
    <Container>
      <Button onPress={() => { this.setModalVisible(true); }}>
        <Icon type="FontAwesome" name="search" />
      </Button>
      
      {/* <Modal
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
            <Title>Buscar por</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{padding: 30}}>
            <List>
              <ListItem style={[estilo.listItem, {marginTop:10,}]} first>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>Tipo de archivo</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Fotografía</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={this.state.selectCheck} onPress={this.selectCheckable} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Audio</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <Left style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.dateFicha, estilo.textItem]}  >Mapa de sitio</Text>
                </Left>
                <Right><CheckBox color={'#D80212'} checked={true} /></Right>
              </ListItem>
              <ListItem style={[estilo.listItemFicha]} >
                  <Body style={[estilo.itemBodyFicha]} >
                      <Text style={[estilo.tittleFicha]} note>Fecha</Text>
                      <Button bordered style={[estilo.btnPicker, estilo.borderBtn]} onPress={this.sectoresModal} >
                        <DatePicker
                        defaultDate={new Date(2019, 4, 4)}
                        minimumDate={new Date(2008, 1, 1)}
                        maximumDate={new Date(2030, 12, 31)}
                        locale={"es"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Selecciona la fecha"
                        textStyle={{ color: "#D80212" }}
                        placeHolderTextStyle={{ color: "#7e7e7d" }}
                        onDateChange={this.setDate}
                        datePickerTextColor={{color:"#7e7e7d"}}
                        datePickerBg={{backgroundColor:"#D80212"}}
                        disabled={false}
                        />
                      </Button>
                      <Text style={[estilo.dateFicha, estilo.btnListFicha, estilo.dateBtnListFichaProducts]} >
                        {this.state.chosenDate.toString().substr(4, 12)}
                      </Text>
                  </Body>
              </ListItem>
              <ListItem style={[estilo.listItem, {marginTop:10,}]}>
                <Body style={[estilo.itemBodyFicha]} >
                  <Text style={[estilo.itemTitle]}  note>Usuario</Text>
                </Body>
              </ListItem>
              <ListItem style={[estilo.listItem]} >
                <View style={[estilo.searchBarH]}>
                  <Item style={{borderBottomWidth: 0,}}>
                    <Input style={{height: 40, paddingTop: 0, paddingBottom: 0,}} placeholder="Busca Usuario" />
                    <IconF style={[estilo.searchBarHIcon, {color: '#7e7e7d',},]} name="search" />
                  </Item>
                </View>
              </ListItem>
            </List>
            <Button block small style={[estilo.filtrarBtn]}>
              <Text style={[estilo.filtrarBtnText, estilo.borderBtn]}>Filtrar</Text>
            </Button>
          </View>
        </Content>
      </Modal> */}
    </Container>
  );
}
}
