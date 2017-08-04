import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, Card, CardItem, List, ListItem } from 'native-base';
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/ingreso.jpg';
import Valores from '../components/Modal';

export default class Gastos extends Component {


  render() {
    return (
      <Container style={{backgroundColor: "white"}}>
        <Cabecera2/>
        <Content>
          <Image source={imgLogo} style={styles.img}/>
          <Card>
        <CardItem header>
            <Text>Nuevo gasto</Text>
          </CardItem>

          <List>
            <ListItem icon>
              <Left>
                <Icon name="star" />
              </Left>
              <Body>
                <Valores/>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="calendar" />
              </Left>
              <Body>
                <Text>03 ago.,2017</Text>
              </Body>

            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="paper" />
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
