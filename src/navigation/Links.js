import React from 'react'
import { AsyncStorage, Linking, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import DrawerItem from 'navigation/DrawerItem'
import Touchable from 'components/Touchable'
import { connect } from 'components/AppProvider'

function LogoutLink(props) {
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

export function Web() {
  function onPress() {
    Linking.openURL('https://b2b.promperu.gob.pe/')
  }

  return (
    <Touchable onPress={onPress}>
      <View style={{ paddingHorizontal: 12 }}>
        <DrawerItem title="Visitar la web" iconName="laptop" />
      </View>
    </Touchable>
  )
}

function LinkBase({ routeName, ...props }) {
  function navigate() {
    props.navigation.navigate(routeName)
  }

  return (
    <Touchable onPress={navigate}>
      <View style={{ paddingHorizontal: 12 }}>
        <DrawerItem {...props} />
      </View>
    </Touchable>
  )
}

export const Logout = connect(({ context, api, dispatch }) => ({
  api,
  dispatch,
  user: context.user,
}))(withNavigation(LogoutLink))

export const Link = withNavigation(LinkBase)
