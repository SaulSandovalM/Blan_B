import React, { Component } from 'react';
import Cabecera from '../assets/Cabecera';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';

export default class Inicio extends Component {
  render() {
    return (
      <Container>
        <Cabecera/>
      <Tabs style={{backgroundColor="white"}}>
        <Tab heading="YO">
          <Tab1 />
        </Tab>
        <Tab heading="NOTICIAS">
          <Tab2 />
        </Tab>
      </Tabs>
    </Container>
    );
  }
}

const styles = StyleSheet.create({

});

module.export = Inicio;
