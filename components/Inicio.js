import React, { Component } from 'react';
import Cabecera from '../assets/Cabecera';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';

export default class Inicio extends Component {
  render() {
    return (
      <Container>
        <Cabecera/>
      <Tabs>
        <Tab heading="YO">
          <Tab1 />
        </Tab>
        <Tab heading="RETOS">
          <Tab2 />
        </Tab>
      </Tabs>
    </Container>
    );
  }
}

module.export = Inicio;
