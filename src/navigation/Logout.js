import React from 'react'
import { AsyncStorage, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import DrawerItem from 'navigation/DrawerItem'
import Touchable from 'components/Touchable'
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
    <Touchable onPress={logout}>
      <View style={{ paddingHorizontal: 12 }}>
        <DrawerItem title="Cerrar Sesión" />
      </View>
    </Touchable>
  )
}
export default connect(({ context, api, dispatch }) => ({
  api,
  dispatch,
  user: context.user,
}))(withNavigation(Logout))
