import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Fab
} from 'native-base';

export default class Ahorros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1",
      text: '$'
    };
  }
  onValueChange(value : string) {
    this.setState({selected1: value});
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.texto}>Vacaciones</Text>
                  <Text note style={styles.texto}>Fecha: 20 de Diciembre 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{
                uri: 'http://www.zaveapp.com/hs-fs/hubfs/cerdito_playero.png?t=1499964087431&width=320&name=cerdito_playero.png'
              }} style={{
                height: 200,
                width: '100%',
                flex: 1
              }}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="cash"/>
                  <Text>Llevas $100.00 de $2,500.00</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.texto}>Carro</Text>
                  <Text note style={styles.texto}>Fecha: 20 de Septiembre 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{
                uri: 'http://www.zaveapp.com/hs-fs/hubfs/cerdito_playero.png?t=1499964087431&width=320&name=cerdito_playero.png'
              }} style={{
                height: 200,
                width: '100%',
                flex: 1
              }}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="cash"/>
                  <Text>Llevas $100.00 de $2,500.00</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.texto}>Videojuegos</Text>
                  <Text note style={styles.texto}>Fecha: 20 de Agosto 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{
                uri: 'http://www.zaveapp.com/hs-fs/hubfs/cerdito_playero.png?t=1499964087431&width=320&name=cerdito_playero.png'
              }} style={{
                height: 200,
                width: '100%',
                flex: 1
              }}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="cash"/>
                  <Text>Llevas $100.00 de $2,500.00</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  align: {
    flexDirection: 'row'
  },
  texto: {
    fontSize: 20,
    color: "green",
    alignItems: 'center'
  }
});

module.export = Ahorros;