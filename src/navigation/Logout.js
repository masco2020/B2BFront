import React from 'react'
import { AsyncStorage, TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import DrawerItem from 'navigation/DrawerItem'
import { connect } from 'components/AppProvider'

function Logout(props) {
  async function logout() {
    try {
      props.dispatch({ type: 'APP_LOADING', payload: true })
      await props.api.logout({ IdUsuario: props.user.idUsuario })
    } catch (error) {
      console.info('Error en logout', error)
    } finally {
      props.dispatch({ type: 'LOGOUT' })
      await AsyncStorage.setItem('user', '')
      props.dispatch({ type: 'APP_LOADING', payload: false })
      props.navigation.navigate('Intro')
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
