import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Ingresos from './Ingresos';
import Gastos from './Gastos';
import Terminos from './Terminos';
import Ahorros from './Ahorros';
import Perfil from './Perfil';
import Log from './Log';
import Registro from './Registro';
import Inicio from '../components/Inicio';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Ter" component={Terminos} header={null} initial/>
        <Scene key="Logg" component={Log} header={null}/>
        <Scene key="Registro" component={Registro} header={null}/>
        <Scene key="Inicio" header={null} component={Inicio}/>
        <Scene key="Perfil" header={null} component={Perfil}/>
        <Scene key="Ingresos" header={null} component={Ingresos}/>
        <Scene key="Gastos" header={null} component={Gastos}/>
        <Scene key="Ahorros" header={null} component={Ahorros}/>
      </Scene>
    </Router>
  );
}
export default Routes;
