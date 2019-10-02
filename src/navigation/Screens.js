/* eslint-disable react/display-name */

import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// screens
import Intro from 'screens/Intro'
import Login from 'screens/Login'
import Perfil from 'screens/Perfil'
import Empresa from 'screens/Exportador'
import Historico from 'screens/Empresa/Historico'
import Ficha from 'screens/Empresa/Ficha'
import Contactos from 'screens/Empresa/Contactos'

// import Menu from './Menu'
import { getDrawerOptions, getHeaderOptions, defaultStackConfig } from './utils'
import theme from 'themes/default'

const EmpresaTabs = createMaterialTopTabNavigator(
  {
    Ficha,
    Historico,
    Contactos,
  },
  {
    lazy: true,
    tabBarOptions: {
      style: { backgroundColor: theme.COLORS.PRIMARY },
    },
  }
)

const EmpresaStack = createStackNavigator(
  {
    EmpresaList: {
      screen: Empresa,
      navigationOptions: getHeaderOptions({
        title: 'Exportadores',
        noShadow: true,
      }),
    },
    EmpresaDetalle: {
      screen: EmpresaTabs,
      navigationOptions: getHeaderOptions({
        title: nav => nav.getParam('data', {}).nombre,
        noShadow: true,
        back: true,
      }),
    },
  },
  defaultStackConfig
)

const PerfilStack = createStackNavigator(
  {
    Perfil: {
      screen: Perfil,
      navigationOptions: getHeaderOptions({ title: 'Perfil' }),
    },
  },
  defaultStackConfig
)

const AppStack = createDrawerNavigator(
  {
    Perfil: {
      screen: PerfilStack,
      navigationOptions: getDrawerOptions({ title: 'Perfil' }),
    },
    Empresas: {
      screen: EmpresaStack,
      navigationOptions: getDrawerOptions({ title: 'Empresas' }),
    },
  }
  // Menu
)

const IntroStack = createStackNavigator(
  { Intro: Intro },
  { headerMode: 'none' }
)
const AuthStack = createStackNavigator({ Login: Login }, { headerMode: 'none' })

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Intro: IntroStack,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Intro',
    }
  )
)

export default AppContainer
