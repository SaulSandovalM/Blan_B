import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Ingresos from './Ingresos';
import Gastos from './Gastos';
import Terminos from './Terminos';
import Ahorros from './Ahorros';
import Perfil from './Perfil';
import Login from './Login';
import Registro from './Registro';
import Inicio from '../components/Inicio';
import NuevoGasto from './NuevoGasto';
import NuevoAhorro from './NuevoAhorro';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Ter" header={null} component={Terminos} initial/>
        <Scene key="Login" header={null} component={Login}/>
        <Scene key="Registro" header={null} component={Registro}/>
        <Scene key="Inicio" header={null} component={Inicio}/>
        <Scene key="Perfil" header={null} component={Perfil}/>
        <Scene key="Ingresos" header={null} component={Ingresos}/>
        <Scene key="Gastos" header={null} component={Gastos}/>
        <Scene key="Ahorros" header={null} component={Ahorros}/>
        <Scene key="NuevoGasto" header={null} component={NuevoGasto}/>
        <Scene key="NuevoAhorro" header={null} component={NuevoAhorro}/>
      </Scene>
    </Router>
  );
}
export default Routes;
