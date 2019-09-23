import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./assets/compradores.png'),
    backgroundColor: '#59b2ab',
    imageBackground: require('./assets/intro1.png')
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/compradores.png'),
    backgroundColor: '#febe29',
    imageBackground: require('./assets/intro2.png')
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text:
      "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('./assets/compradores.png'),
    backgroundColor: '#22bcb5',
    imageBackground: require('./assets/intro3.png')
  }
];

export default class IntroApp extends React.Component {
  state = {
    showRealApp: false
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: item.backgroundColor,
          flex: 1,
          flexDirection: 'column'
        }}
      >
        <ImageBackground
          source={item.imageBackground}
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          <Text>{item.title}</Text>
          <Image source={item.image} />
          <Text>{item.text}</Text>
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
module.exports = IntroApp;
