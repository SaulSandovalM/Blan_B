import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
import { Container, Content, Card, CardItem, Body, Icon, Button } from 'native-base';
import Footers from '../assets/Footers';
import {Actions} from 'react-native-router-flux';
import Grafica from '../assets/Grafica';

export default class tabOne extends Component {
  render() {
    return (
      <Container style={{backgroundColor: "white"}}>
        <Content>
          <Card style={{ alignItems: 'center', height: 250 }}>
            <CardItem header>
              <Text>Ser mas ahorrativo</Text>
            </CardItem>

            <CardItem footer>
              <Text style={styles.color}>0%</Text>
            </CardItem>
          </Card>

          <Card style={{
            alignItems: 'center',
            height: 200,
          }}>
            <CardItem header>
              <Icon active name="chatbubbles"/>
              <Text style={styles.texto}>Dinero</Text>
            </CardItem>
            <CardItem style={{
              alignItems: 'center'
            }}>
              <Text>
                Es hora de ahorrar
              </Text>
            </CardItem>
            <CardItem footer>
              <Text>0 ----- 6 ----- 12 ----- 16 ----- 18 ----- 24</Text>
            </CardItem>
          </Card>

          <View style={styles.align}>
            <Card style={styles.borde}>
            <Button iconLeft transparent onPress={()=>Actions.Ingresos()} style={styles.boton}>
              <Icon name='cash' />
                <Text>Ingresos</Text>
            </Button>
          </Card>

          <Card style={styles.borde}>
            <Button iconLeft transparent onPress={()=>Actions.Gastos()} style={styles.boton}>
              <Icon name='alert'/>
                <Text>Gastos</Text>
            </Button>
          </Card>

          <Card style={styles.borde}>
            <Button iconLeft transparent onPress={()=>Actions.Grafica()} style={styles.boton} >
              <Icon name='beaker' />
                <Text>Ahorros</Text>
            </Button>
          </Card>
          </View>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  texto: {
    color: "green",
    fontSize: 12
  },
  color: {
    color: "green"
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
    borderColor: 'green'
  },
  borde: {
    width: '33%',
    height: 100,
    justifyContent: 'center'
  }
});

module.export = tabOne;
