import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Container, Content, Button, Icon, Item, Input} from 'native-base';
import Cabecera2 from './Cabecera2';
import {Actions} from 'react-native-router-flux';

class Registro extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.view}>

            <Icon name='person' style={styles.iconStyle}/>
            <Text style={styles.regisTex}>REGISTRO</Text>

            <Item rounded style={styles.inputStyle}>
              <Input placeholder='Nombre' returnKeyType='next'/>
            </Item>

            <Item rounded style={styles.inputStyle}>
              <Input placeholder='Correo electrónico' keyboardType='email-address' returnKeyType='next'/>
            </Item>

            <Item rounded style={styles.inputStyle}>
              <Input placeholder='Contraseña' secureTextEntry={true}/>
            </Item>

            <Button rounded block style={styles.buttonStyle}>
              <Text style={styles.color}>CREAR CUENTA</Text>
            </Button>

            <View style={styles.footerStyle}>
              <Text>¿Ya tienes cuenta?,</Text>
              <Text style={styles.font} onPress={()=>Actions.Login()}>INGRESA</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    backgroundColor: '#f08080'
  },
  inputStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    borderColor: '#f08080'
  },
  iconStyle: {
    fontSize: 100,
    color: '#f08080',
    alignSelf: 'center'
  },
  regisTex: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 10
  },
  footerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  color: {
    color: 'white'
  },
  font: {
    fontWeight: 'bold'
  }
})

export default Registro;
