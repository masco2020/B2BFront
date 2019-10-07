import React from 'react'
import { AsyncStorage, ActivityIndicator, StatusBar } from 'react-native'
import Block from 'components/Block'
import { connect } from 'components/AppProvider'

class LoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const user = await AsyncStorage.getItem('user')

    if (user) {
      const userData = JSON.parse(user)
      this.props.dispatch({ type: 'LOGIN', payload: userData })
      this.props.api.setToken(userData.token)
    }

    this.props.dispatch({ type: 'APP_LOADING', payload: false })
    this.props.navigation.navigate(user ? 'App' : 'Intro')
  }

  render() {
    return (
      <Block flex center>
        <StatusBar barStyle="default" />
        <ActivityIndicator />
      </Block>
    )
  }
}

export default connect(ctx => ({
  api: ctx.api,
  dispatch: ctx.dispatch,
}))(LoadingScreen)
