import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import IntroApp from './IntroApp';
import Login from './Login';
import Perfil from './Perfil';
import Home from './Home';
import Notificaciones from './Notificaciones';
import EmpresasModule from './EmpresasModule';

export default class AppB2B extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene
            key="IntroApp"
            component={IntroApp}
            title="IntroApp"
            initial={true}
            hideNavBar
          />
          <Scene
            key="Login"
            component={Login}
            title="Login"
            hideNavBar
          />
          <Scene
            key="Perfil"
            component={Perfil}
            title="Perfil"
            hideNavBar
          />
          <Scene
            key="Home"
            component={Home}
            title="Home"
            hideNavBar
          />
          <Scene
            key="Notificaciones"
            component={Notificaciones}
            title="Notificaciones"
            hideNavBar
          />
          <Scene
            key="EmpresasModule"
            component={EmpresasModule}
            title="EmpresasModule"
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}
