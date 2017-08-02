{/*import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
import { Container, Content, Card, CardItem, Body, Icon, Button, List, ListItem, Left, Right } from 'native-base';
import Footers from '../assets/Footers';
import {Actions} from 'react-native-router-flux';
import Grafica from '../assets/Grafica';

export default class tabOne extends Component {
  render() {
    return (
      <Container style={styles.back}>
        <Content>
          <Card style={styles.card}>
            <CardItem header>
              <Text>Ser mas ahorrativo</Text>
            </CardItem>

            <CardItem footer>
              <Text style={styles.color}>0%</Text>
            </CardItem>
          </Card>

          <Card style={styles.card2}>
            <CardItem header>
              <Icon active name="chatbubbles"/>
              <Text style={styles.texto}>Dinero</Text>
            </CardItem>
            <CardItem style={styles.cardItem}>
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
                <Text sttle={styles.texto}>Ingresos</Text>
            </Button>
          </Card>

          <Card style={styles.borde}>
            <Button iconLeft transparent onPress={()=>Actions.Gastos()} style={styles.boton}>
              <Icon name='alert'/>
                <Text style={styles.texto2}>Gastos</Text>
            </Button>
          </Card>

          <Card style={styles.borde}>
            <Button iconLeft transparent onPress={()=>Actions.Ahorros()} style={styles.boton}>
              <Icon name='beaker' />
                <Text style={styles.texto3}>Ahorros</Text>
            </Button>
          </Card>
          </View>

          <Card>
          <CardItem header>
             <Text>Vista General</Text>
           </CardItem>
            <List>
       <ListItem icon>
         <Left>
           <Icon name="home" />
         </Left>
         <Body>
           <Text>Ingresos</Text>
         </Body>
         <Right>
           <Text>$5,000.00</Text>
         </Right>
       </ListItem>
       <ListItem icon>
         <Left>
           <Icon name="wifi" />
         </Left>
         <Body>
           <Text>Gastos</Text>
         </Body>
         <Right>
           <Text>$5000.00</Text>
         </Right>
       </ListItem>
       <ListItem icon>
         <Left>
           <Icon name="paper" />
         </Left>
         <Body>
           <Text>Tarjetas</Text>
         </Body>
         <Right>
           <Text>$500.00</Text>
         </Right>
       </ListItem>
     </List>
          </Card>
          <Card>
          <CardItem header>
             <Text>Gasto por categoría</Text>
           </CardItem>
            <CardItem>
              <Body>
                <Grafica/>
              </Body>
              <Left>
                <Text>Hola</Text>
              </Left>
            </CardItem>
          </Card>
          <View style={styles.align}>
            <Button iconLeft transparent onPress={()=>Actions.Ingresos()}>
              <Icon name='cash' />
                <Text>Ingresos</Text>
            </Button>
            <Button iconLeft transparent onPress={()=>Actions.Gastos()}>
              <Icon name='alert'/>
                <Text>Gastos</Text>
            </Button>
            <Button iconLeft transparent onPress={()=>Actions.Ahorros()}>
              <Icon name='beaker' />
                <Text>Ahorros</Text>
            </Button>
          </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    color: "#D27D66",
    fontSize: 12
  },
  texto2: {
    color: "#4DA49B",
    fontSize: 12
  },
  texto3: {
    color: "#7EAD47",
    fontSize: 12
  },
  color: {
    color: "#D27D66"
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  borde: {
    width: '33%',
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  boton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  back: {
    backgroundColor: "white"
  },
  card: {
    alignItems: 'center',
    height: 250
  },
  card2: {
    alignItems: 'center',
    height: 200
  },
  cardItem: {
    alignItems: 'center'
  }
});

module.export = tabOne;*/}

import React, { Component } from 'react';
import {StyleSheet, View, Button} from 'react-native'
import { Container, Header, Content,Left,List,Icon,Switch , ListItem,Thumbnail,Right,Badge , Card, CardItem, Body, Text } from 'native-base';
import Grafica from '../assets/Grafica';

export default class tabOne extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
          <CardItem header>
             <Text>Vista General</Text>
           </CardItem>
            <List>
       <ListItem icon>
         <Left>
           <Icon name="home" />
         </Left>
         <Body>
           <Text>Ingresos</Text>
         </Body>
         <Right>
           <Text>$5,000.00</Text>
         </Right>
       </ListItem>
       <ListItem icon>
         <Left>
           <Icon name="wifi" />
         </Left>
         <Body>
           <Text>Gastos</Text>
         </Body>
         <Right>
           <Text>$5000.00</Text>
         </Right>
       </ListItem>
       <ListItem icon>
         <Left>
           <Icon name="paper" />
         </Left>
         <Body>
           <Text>Tarjetas</Text>
         </Body>
         <Right>
           <Text>$500.00</Text>
         </Right>
       </ListItem>
     </List>
          </Card>
          <Card>
          <CardItem header>
             <Text>Gasto por categoría</Text>
           </CardItem>
            <CardItem>
              <Body>
                <Grafica/>
              </Body>
              <Left>
                <Text>Hola</Text>
              </Left>
            </CardItem>
          </Card>
          <View style={styles.align}>
            <Button iconLeft transparent onPress={()=>Actions.Ingresos()}>
              <Icon name='cash' />
                <Text>Ingresos</Text>
            </Button>
            <Button iconLeft transparent onPress={()=>Actions.Gastos()}>
              <Icon name='alert'/>
                <Text>Gastos</Text>
            </Button>
            <Button iconLeft transparent onPress={()=>Actions.Ahorros()}>
              <Icon name='beaker' />
                <Text>Ahorros</Text>
            </Button>
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
  }
});

module.export = tabOne;
