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
import Help from 'screens/Empresa/Help'
import Ficha from 'screens/Empresa/Ficha'
import Contactos from 'screens/Empresa/Contactos'
import ContactoEditor from 'screens/Contacto/Editor'

import Menu from './Menu'
import { getDrawerOptions, getHeaderOptions, defaultStackConfig } from './utils'

const EmpresaTabs = createMaterialTopTabNavigator(
  {
    Ficha,
    Historico,
    Contactos,
  },
  {
    lazy: true,
    tabBarOptions: {
      style: { backgroundColor: '#6d6d6b' },
    },
  }
)

const EmpresaStack = createStackNavigator(
  {
    Exportador: {
      screen: Empresa,
      params: { esExportador: true },
      navigationOptions: getHeaderOptions({ title: 'Exportadores' }),
    },
    Comprador: {
      screen: Empresa,
      params: { esExportador: false },
      navigationOptions: getHeaderOptions({ title: 'Compradores' }),
    },
    Help: {
      screen: Help,
      navigationOptions: getHeaderOptions({
        title: 'Ayuda',
        headerProps: { back: true },
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
    ContactoEditor: {
      screen: ContactoEditor,
      navigationOptions: getHeaderOptions({
        title: nav =>
          nav.getParam('type') === 'create'
            ? 'Nuevo Contacto'
            : 'Editar Contacto',
        headerProps: { back: true },
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
      navigationOptions: getDrawerOptions({
        title: 'Perfil',
        iconName: 'globe-americas',
      }),
    },
    Empresas: {
      screen: EmpresaStack,
      navigationOptions: getDrawerOptions({
        title: 'Empresas',
        iconName: 'laptop',
      }),
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
