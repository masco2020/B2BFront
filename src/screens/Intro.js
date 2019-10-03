import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, } from 'react-native'
import { Button, } from 'native-base'
import AppIntroSlider from 'react-native-app-intro-slider'
import Block from 'components/Block'

const slides = [
  {
    welcome: require('../assets/b2b-welcome.png'),
    imageBackground: require('../assets/intro1.png')
  },
  {
    subtitle: null,
    title: 'Contacta',
    text: 'con empresas expotadoras\ny compradoras rapidamente.',
    image: require('../assets/compradores.png'),
    imageBackground: require('../assets/intro2.png')
  },
  
  {
    subtitle: null,
    title: 'Elige',
    text: 'empresas de diversos\nsectores como Agronegocios,\nIndustria de la Vestimenta y\ndecoración, entre otras.',
    image: require('../assets/exportadores.png'),
    imageBackground: require('../assets/intro3.png')
  },
  {
    subtitle: 'Tendrás una',
    title: 'Bitacora',
    text: 'de información actualizada\npor todos tus colegas.',
    image: require('../assets/icon-bitacora.png'),
    imageBackground: require('../assets/intro3.png')
  }
]

export default class IntroApp extends React.Component {
  _onDone = () => {
    this.props.navigation.navigate('Login')
  }
  state = {
    showRealApp: false
  };
  _renderItem = ({ item }) => {
    if(item.subtitle != null){
      none = {display: 'flex',}
    }else{
      none = {display: 'none',}
    }
    return (
      <Block
        flex
        style={{
          backgroundColor: item.backgroundColor,
        }}>
        <ImageBackground
          source={item.imageBackground}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <View style={{padding:16,}}>
            <View style={[styles.boxBtnRight]} >
              <Button transparent onPress={() => this.props.navigation.navigate('Login')} ><Text style={[styles.btnRight, styles.whiteText]} >Saltar</Text></Button>
            </View>
            <View style={{flex:6}}>
              <View style={[styles.welcomeBox]}>
                <Image style={[styles.welcome]}  source={item.welcome} />
              </View>
              <Image  style={[styles.image]}  source={item.image} />
              <Text  style={[styles.subtitle, styles.whiteText, none]} >{item.subtitle}</Text>
              <Text  style={[styles.title, styles.whiteText]} >{item.title}</Text>
              <Text  style={[styles.text, styles.whiteText]} >{item.text}</Text>
            </View>
            
          </View>
          
        </ImageBackground>
      </Block>
    )
  }

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
          showNextButton={false}
          showDoneButton={false}
          dotStyle={{backgroundColor:'transparent', borderWidth: 1.5, borderColor: '#fff', height:20,width:20,borderRadius:50,}}
          activeDotStyle={{backgroundColor:'#fff', borderWidth: 1.5, borderColor: '#fff', height:20,width:20,borderRadius:50,}}
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
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
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
    height: 140,
    width: 140,
  },
  subtitle:{
    fontSize:24,
    marginBottom: 3,
  },
  title:{
    fontSize:42,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text:{
    fontSize:24,
  },
});