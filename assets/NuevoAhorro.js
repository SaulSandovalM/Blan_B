import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Image } from 'react-native';
import {View, Container, Content, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, Item, Fab, Input} from 'native-base';
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/Ahorro.png';
import {Actions} from 'react-native-router-flux';

export default class NuevoAhorro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1",
    };
  }
  onValueChange(value : string) {
    this.setState({selected1: value});
  }
  render() {
    return (
      <Container style={styles.back}>
        <Cabecera2/>
        <Content>
            <Image source={imgLogo} style={styles.img}/>

          <View>
            <Title>¿Cuanto quieres ahorrar?</Title>
          </View>

          <View style={styles.inputStyle}>
          <View>
            <Text style={styles.texto}>Ingresa la cantidad que deseas Ahorrar</Text>
          </View>

          <View>
            <Item rounded style={styles.input}>
              <Input placeholder='$' keyboardType='numeric'/>
            </Item>
          </View>

          <View>
            <Text style={styles.texto}>Nombre de su Ahorro</Text>
          </View>

          <View>
            <Item rounded style={styles.input}>
              <Input placeholder='Nombre' keyboardType='numeric'/>
            </Item>
          </View>
        </View>
        </Content>

        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight">
          <Icon name="add"/>
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    color: "green"
  },
  img: {
    height: 200,
    width: '100%',
    flex: 1
  },
  inputStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    borderColor: '#f08080',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    borderColor: '#f08080',
    marginTop: 10,
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  back: {
    backgroundColor: "white"
  }
});

module.export = NuevoAhorro;
