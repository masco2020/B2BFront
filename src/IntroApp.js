import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import {
  Button,
} from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Actions } from 'react-native-router-flux';

const slides = [
  {
    welcome: require('./assets/b2b-welcome.png'),
    imageBackground: require('./assets/intro1.png')
  },
  {
    title: 'Contacta',
    text: 'con empresas expotadoras\ny compradoras rapidamente.',
    image: require('./assets/compradores.png'),
    imageBackground: require('./assets/intro2.png')
  },
  {
    title: 'Elige',
    text: 'empresas de diversos\nsectores como Agronegocios,\nIndustria de la Vestimenta y\ndecoración, entre otras.',
    image: require('./assets/exportadores.png'),
    imageBackground: require('./assets/intro3.png')
  },
  {
    subtitle: 'Tendrás una',
    title: 'Bitacora',
    text: 'de información actualizada\npor todos tus colegas.',
    image: require('./assets/icon-bitacora.png'),
    imageBackground: require('./assets/intro3.png')
  }
];

export default class IntroApp extends React.Component {

  goLogin = () => {
    Actions.Login();
  };
  
  state = {
    showRealApp: false
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <ImageBackground
          source={item.imageBackground}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <View style={{padding:16,}}>
            <View style={[styles.boxBtnRight]} >
              <Button transparent onPress={() => this.goLogin()} ><Text style={[styles.btnRight, styles.whiteText]} >Saltar</Text></Button>
            </View>
            <View style={{flex:6}}>
              <View style={[styles.welcomeBox]}>
                <Image style={[styles.welcome]}  source={item.welcome} />
              </View>
              <Image  style={[styles.image]}  source={item.image} />
              <Text  style={[styles.subtitle, styles.whiteText]} >{item.subtitle}</Text>
              <Text  style={[styles.title, styles.whiteText]} >{item.title}</Text>
              <Text  style={[styles.text, styles.whiteText]} >{item.text}</Text>
            </View>
            
          </View>
          
        </ImageBackground>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <IntroApp />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          slides={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  boxBtnRight:{
    flex:1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 36,
  },
  btnRight:{
    fontSize:28,
    fontWeight: 'bold',
  },
  whiteText:{
    color: '#fff',
  },
  welcomeBox:{
    alignContent: 'center',
    alignSelf: 'center',
    width: '75%',
    marginTop:'25%',
  },
  welcome:{
    resizeMode: "contain",
    width:'100%',
  },
  image:{
    marginLeft:2,
    marginBottom: 5,
  },
  subtitle:{
    fontSize:20,
    marginBottom: 5,
  },
  title:{
    fontSize:38,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text:{
    fontSize:20,
  },
});


module.exports = IntroApp;
