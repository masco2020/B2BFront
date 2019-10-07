/* eslint-disable max-len */
import React from 'react'
import { Dimensions, Text, View, Image, ImageBackground } from 'react-native'
import { Button } from 'native-base'
import AppIntroSlider from 'react-native-app-intro-slider'
import Block from 'components/Block'
import styles from 'styles/intro'

const { height, width } = Dimensions.get('screen')

const slides = [
  {
    welcome: require('../assets/b2b-welcome.png'),
    imageBackground: require('../assets/intro1.png'),
  },
  {
    subtitle: null,
    title: 'Contacta',
    text: 'con empresas expotadoras\ny compradoras rapidamente.',
    image: require('../assets/compradores.png'),
    imageBackground: require('../assets/intro2.png'),
  },

  {
    subtitle: null,
    title: 'Elige',
    text:
      'empresas de diversos\nsectores como Agronegocios,\nIndustria de la Vestimenta y\ndecoración, entre otras.',
    image: require('../assets/exportadores.png'),
    imageBackground: require('../assets/intro3.png'),
  },
  {
    subtitle: 'Tendrás una',
    title: 'Bitacora',
    text: 'de información actualizada\npor todos tus colegas.',
    image: require('../assets/icon-bitacora.png'),
    imageBackground: require('../assets/intro3.png'),
  },
]

export default class IntroApp extends React.Component {
  state = {
    showRealApp: false,
  }

  _onDone = () => {
    this.props.navigation.navigate('Login')
  }

  _renderItem = ({ item }) => {
    return (
      <Block flex>
        <ImageBackground
          source={item.imageBackground}
          style={{ width, height }}>
          <View style={{ padding: 16 }}>
            <View style={[styles.boxBtnRight]}>
              <Button transparent onPress={this._onDone}>
                <Text style={[styles.btnRight, styles.whiteText]}>Saltar</Text>
              </Button>
            </View>
            <Block flex={6}>
              <View style={[styles.welcomeBox]}>
                <Image style={[styles.welcome]} source={item.welcome} />
              </View>
              <Image style={[styles.image]} source={item.image} />
              {item.subtitle && (
                <Text style={[styles.subtitle, styles.whiteText]}>
                  {item.subtitle}
                </Text>
              )}
              <Text style={[styles.title, styles.whiteText]}>{item.title}</Text>
              <Text style={[styles.text, styles.whiteText]}>{item.text}</Text>
            </Block>
          </View>
        </ImageBackground>
      </Block>
    )
  }

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        keyExtractor={(o, i) => `slide_${i}`}
        slides={slides}
        onDone={this._onDone}
        showNextButton={false}
        showDoneButton={false}
        dotStyle={{
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderColor: '#fff',
          height: 20,
          width: 20,
          borderRadius: 50,
        }}
        activeDotStyle={{
          backgroundColor: '#fff',
          borderWidth: 1.5,
          borderColor: '#fff',
          height: 20,
          width: 20,
          borderRadius: 50,
        }}
      />
    )
  }
}
