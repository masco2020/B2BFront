import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Root, StyleProvider } from 'native-base'

import getTheme from 'native-base-theme/components'
import material from 'native-base-theme/variables/material'
import Block from 'components/Block'
import Screens from 'navigation/Screens'

export default class AppB2B extends Component {
  state = {
    loading: true,
  }

  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      )
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Root>
          <Block flex style={{ paddingTop: StatusBar.currentHeight }}>
            <Screens />
          </Block>
        </Root>
      </StyleProvider>
    )
  }
}
