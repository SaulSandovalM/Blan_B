import React, {Component} from 'react';
import Cabecera from '../assets/Cabecera';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Ingresos from '../assets/Ingresos';
import Gastos from '../assets/Gastos';
import Terminos from '../assets/Terminos';
import Ahorros from '../assets/Ahorros';
import Perfil from '../assets/Perfil';
import Registro from '../assets/Registro';
import Login from '../assets/Login';
import {firebaseRef} from '../assets/Firebase';

export default class Inicio extends Component {
  state = {
    loggedIn: null
  };
  componentWillMount() {
    firebaseRef.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <TouchableOpacity onPress={() => firebaseRef.auth().signOut()}>
            <Text>Cerrar Sesión</Text>
          </TouchableOpacity>
        );
      case false:
        return <Login/>;
    }
  }

  render() {
    return (
      <Container style={styles.back}>
        <Cabecera/>

          <View style={{flex: 1}}>
            {this.renderContent()}
          </View>
          
        <Tabs>
          <Tab heading="YO">
            <Tab1/>
          </Tab>
          <Tab heading="NOTICIAS">
            <Tab2/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  }
});

module.export = Inicio;
