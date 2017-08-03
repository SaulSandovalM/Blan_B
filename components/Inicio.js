import React, {Component} from 'react';
import Cabecera from '../assets/Cabecera';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs } from 'native-base';
import tabOne from './tabOne';
import tabTwo from './tabTwo';
import Ingresos from '../assets/Ingresos';
import Gastos from '../assets/Gastos';
import Terminos from '../assets/Terminos';
import Ahorros from '../assets/Ahorros';
import Perfil from '../assets/Perfil';

export default class Inicio extends Component {
  render() {
    return (
      <Container >
        <Cabecera/>
        <Tabs>
          <Tab heading="YO">
            
          </Tab>
          <Tab heading="NOTICIAS">

          </Tab>
        </Tabs>
      </Container>
    );
  }
}

module.export = Inicio;
