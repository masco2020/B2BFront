import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Root, StyleProvider } from 'native-base'
import { useScreens } from 'react-native-screens'

import getTheme from 'native-base-theme/components'
import material from 'native-base-theme/variables/material'
import Block from 'components/Block'
import AppProvider, { connect } from 'components/AppProvider'
import Screens from 'navigation/Screens'
import Theme from 'themes/default'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay'

useScreens()

class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Root>
          <Block flex style={{ paddingTop: StatusBar.currentHeight }}>
            <StatusBar
              backgroundColor={Theme.COLORS.PRIMARY}
              barStyle="dark-content"
            />
            <Screens />
          </Block>
          <OrientationLoadingOverlay
            visible={this.props.loading}
            color="white"
            indicatorSize="large"
            messageFontSize={24}
            message="Cargando"
          />
        </Root>
      </StyleProvider>
    )
  }
}

const AppData = connect(({ context }) => ({
  loading: context.app.loading,
}))(App)

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
      <AppProvider>
        <AppData />
      </AppProvider>
    )
  }
}
