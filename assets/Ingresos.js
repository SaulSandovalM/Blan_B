import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {
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
  Item,
  Input,
  Fab
} from 'native-base';
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/ingreso.jpg';

export default class Ingresos extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Cabecera2/>
        <Content>
          <Image source={imgLogo} style={styles.img}/>

          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
            <View>
              <Title style={{
                top: 10,
                color: "black"
              }}>Ingreso Mensual</Title>
            </View>

            <View>
              <Text style={styles.texto}>Trabajo</Text>
            </View>

            <View>
              <Item rounded style={styles.inputStyle}>
                <Input placeholder='$' keyboardType='numeric' returnKeyType='next'/>
              </Item>
            </View>
          </View>
        </Content>

            {/*<View>
              <Text style={styles.texto}>Otros</Text>
            </View>

            <View>
              <Item rounded style={styles.inputStyle}>
                <Input placeholder='$' keyboardType='numeric' returnKeyType='next'/>
              </Item>
            </View>

        <Fab
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight">
          <Icon name="add" />
        </Fab>*/}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    color: "green"
  },
  inputStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    borderColor: '#f08080'
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 20
  },
  img: {
    height: 200,
    width: '100%'
  }
});

module.export = Ingresos;
