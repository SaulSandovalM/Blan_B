import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Left, Body, Icon, Card, CardItem, List, ListItem} from 'native-base';
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/Ingresos.png';
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
                  <Icon name="calculator" style={{color: '#ff5722'}}/>
                </Left>
                <Body>
                  <Valores />
                </Body>
              </ListItem>

              <ListItem icon>
                <Left>
                  <Icon name="calendar" style={{color: '#2196f3'}}/>
                </Left>
                <Body>
                  <Fecha />
                </Body>
              </ListItem>

              <ListItem icon>
                <Left>
                  <Icon name="paper" style={{color: '#3f51b5'}}/>
                </Left>
                <Body>
                  <Text style={{marginLeft: 15, color:'#424242'}}>Descripción</Text>
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
