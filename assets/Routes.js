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
import NuevoAhorro from './NuevoAhorro';
import Grafica from './Grafica';
import Log from './Log';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Ter" header={null} component={Terminos} initial/>
        <Scene key="Log" header={null} component={Log}/>
        <Scene key="Login" header={null} component={Login}/>
        <Scene key="Registro" header={null} component={Registro}/>
        <Scene key="Inicio" header={null} component={Inicio}/>
        <Scene key="Perfil" header={null} component={Perfil}/>
        <Scene key="Ingresos" header={null} component={Ingresos}/>
        <Scene key="Gastos" header={null} component={Gastos}/>
        <Scene key="Ahorros" header={null} component={Ahorros}/>
        <Scene key="NuevoAhorro" header={null} component={NuevoAhorro}/>
        <Scene key="Grafica" header={null} component={Grafica}/>
      </Scene>
    </Router>
  );
}
export default Routes;
