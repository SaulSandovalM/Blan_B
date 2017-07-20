import React, { Component } from 'react';
import Cabecera from '../assets/Cabecera';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Ingresos from '../assets/Ingresos';
import Gastos from '../assets/Gastos';
import Terminos from '../assets/Terminos';
import Ahorros from '../assets/Ahorros';

export default class Inicio extends Component {
  render() {
    return (
      <Container>
        <Cabecera/>
        <Ahorros/>
      {/*<Tabs>
        <Tab heading="YO">
          <Tab1 />
        </Tab>
        <Tab heading="NOTICIAS">
          <Tab2 />
        </Tab>
      </Tabs>*/}
    </Container>
    );
  }
}

module.export = Inicio;
