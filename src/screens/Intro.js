import React from 'react'
import { Text, Image, ImageBackground } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import Block from 'components/Block'

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('assets/compradores.png'),
    backgroundColor: '#59b2ab',
    imageBackground: require('assets/intro1.png'),
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('assets/compradores.png'),
    backgroundColor: '#febe29',
    imageBackground: require('assets/intro2.png'),
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('assets/compradores.png'),
    backgroundColor: '#22bcb5',
    imageBackground: require('assets/intro3.png'),
  },
]

export default class IntroApp extends React.Component {
  _onDone = () => {
    this.props.navigation.navigate('Login')
  }

  _renderItem = ({ item }) => {
    return (
      <Block
        flex
        style={{
          backgroundColor: item.backgroundColor,
        }}>
        <ImageBackground
          source={item.imageBackground}
          style={{ width: '100%' }}>
          <Text>{item.title}</Text>
          <Image source={item.image} />
          <Text>{item.text}</Text>
        </ImageBackground>
      </Block>
    )
  }

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        slides={slides}
        onDone={this._onDone}
      />
    )
  }
}
