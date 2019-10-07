import React from 'react'
import { AsyncStorage, TouchableOpacity, View } from 'react-native'
import DrawerItem from 'navigation/DrawerItem'
import { connect } from 'components/AppProvider'
import { withNavigation } from 'react-navigation'

function Logout(props) {
  async function logout() {
    try {
      props.dispatch({ type: 'APP_LOADING', payload: true })
      await props.api.logout({ IdUsuario: props.user.idUsuario })
      props.dispatch({ type: 'LOGOUT' })
      props.navigation.navigate('Intro')
      props.dispatch({ type: 'APP_LOADING', payload: false })
      await AsyncStorage.setItem('user', '')
    } catch (error) {
      console.info('Error en logout', error)
    }
  }

  return (
    <TouchableOpacity onPress={logout}>
      <View style={{ paddingHorizontal: 12 }}>
        <DrawerItem title="Salir" />
      </View>
    </TouchableOpacity>
  )
}
export default connect(({ context, api, dispatch }) => ({
  api,
  dispatch,
  user: context.user,
}))(withNavigation(Logout))
