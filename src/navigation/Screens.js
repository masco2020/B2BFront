/* eslint-disable react/display-name */

import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// screens
import Loading from 'screens/Loading'
import Intro from 'screens/Intro'
import Login from 'screens/Login'
import Perfil from 'screens/Perfil'
import Empresa from 'screens/Empresa'
import Historico from 'screens/Empresa/Historico'
import Ficha from 'screens/Empresa/Ficha'
import Contactos from 'screens/Empresa/Contactos'

import Menu from './Menu'
import { getDrawerOptions, getHeaderOptions, defaultStackConfig } from './utils'
import Theme from 'themes/default'

const EmpresaTabs = createMaterialTopTabNavigator(
  {
    Ficha,
    Historico,
    Contactos,
  },
  {
    lazy: true,
    tabBarOptions: {
      style: { backgroundColor: Theme.COLORS.PRIMARY },
    },
  }
)

const EmpresaStack = createStackNavigator(
  {
    Exportador: {
      screen: Empresa,
      params: { esExportador: true },
      navigationOptions: getHeaderOptions({
        title: 'Exportadores',
        // headerProps: {
        //   noShadow: true,
        // },
      }),
    },
    Comprador: {
      screen: Empresa,
      params: { esExportador: false },
      navigationOptions: getHeaderOptions({
        title: 'Compradores',
        // headerProps: {
        //   noShadow: true,
        // },
      }),
    },
    EmpresaDetalle: {
      screen: EmpresaTabs,
      navigationOptions: getHeaderOptions({
        title: nav => nav.getParam('data', {}).nombreEmpresa,
        headerProps: {
          noShadow: true,
          back: true,
        },
      }),
    },
  },
  defaultStackConfig
)

const PerfilStack = createStackNavigator(
  {
    Perfil: {
      screen: Perfil,
      navigationOptions: getHeaderOptions({ title: 'B2B' }),
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
  },
  Menu
)

const IntroStack = createStackNavigator(
  { Intro: Intro },
  { headerMode: 'none' }
)
const AuthStack = createStackNavigator({ Login: Login }, { headerMode: 'none' })

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      Intro: IntroStack,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Loading',
    }
  )
)

export default AppContainer
