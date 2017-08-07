import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Left, Body, Icon, Card, CardItem, List, ListItem} from 'native-base';
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/ingreso.jpg';
import Valores from '../components/Modal';
import Fecha from '../components/Fecha';

export default class Ingresos extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Cabecera2/>
        <Content>
          <Image source={imgLogo} style={styles.img}/>
          <Card>
            <CardItem header>
              <Text>Nuevo Ingreso</Text>
            </CardItem>

            <List>
              <ListItem icon>
                <Left>
                  <Icon name="star"/>
                </Left>
                <Body>
                  <Valores/>
                </Body>
              </ListItem>

              <ListItem icon>
                <Left>
                  <Icon name="calendar"/>
                </Left>
                <Body>
                  <Fecha />
                </Body>
              </ListItem>

              <ListItem icon>
                <Left>
                  <Icon name="paper"/>
                </Left>
                <Body>
                  <Text>Descripción</Text>
                </Body>
              </ListItem>
            </List>

          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "white"
  },
  color: {
    color: "green"
  },
  align: {
    flexDirection: 'row'
  },
  texto: {
    fontSize: 20,
    top: 32
  },
  img: {
    height: 200,
    width: '100%'
  }
});

module.export = Ingresos;
