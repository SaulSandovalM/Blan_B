import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Image, TextInput} from 'react-native';
import {
  View,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Tab,
  Tabs,
  Picker,
  Item as FormItem,
  Fab
} from 'native-base';
const Item = Picker.Item;
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/Ahorro.png';
import {Actions} from 'react-native-router-flux';

export default class NuevoAhorro extends Component {
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
      <Container style={{
        backgroundColor: "white"
      }}>
        <Cabecera2/>
        <Content>
          <View>
            <Image source={imgLogo} style={styles.img}/>
          </View>

          <View>
            <Title>¿Cuanto quieres ahorrar?</Title>
          </View>

          <View>
            <Text>Ingresa la cantidad que deseas Ahorrar</Text>
          </View>

          <View>
            <TextInput keyboardType='numeric' onChangeText={(text) => this.setState({text})} value={this.state.text}/>
          </View>

          <View>
            <Text>Nombre de su Ahorro</Text>
          </View>

          <View>
            <TextInput/>
          </View>

          <View>
            <Text>Ingresa una imagen</Text>
          </View>

          <View>
            <Button><Text>Selecciona Imagen</Text></Button>
          </View>
        </Content>

        <Fab active={this.state.active} direction="up" containerStyle={{}} style={{
          backgroundColor: '#5067FF'
        }} position="bottomRight">
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
  View: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  }
});

module.export = NuevoAhorro;
