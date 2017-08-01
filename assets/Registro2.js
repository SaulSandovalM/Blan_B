import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Button, Icon, Item, Input} from 'native-base';
import {firebaseRef} from './Firebase';
import imgLogo from '../imgs/planb1.jpg';
{/*¿¡Actions?*/}
class Registro extends Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      verifyPassword: ''
    }
      this._register = this._register.bind(this)
  }

  _register(){
    if( this.state.password == this.state.verifyPassword ){
    firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){
      console.log(error.code)
      console.log(error.message)
      })
      {/*¿Actions.Principal?*/}
    } else {
      console.log("No coinciden Contraseñas");
    }
  }

  render() {
    return(
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>

        <Icon name= 'person' style={styles.iconStyle}/>
        <Text style={styles.regisTex}>REGISTRO</Text>

      <Item rounded style={styles.inputStyle}>
        <Input placeholder='Nombre' returnKeyType= 'next'/>
      </Item>

      <Item rounded style={styles.inputStyle}>
        <Input
          placeholder='Correo electrónico'
          keyboardType= 'email-address'
          returnKeyType= 'next'
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}/>
      </Item>

      <Item rounded style={styles.inputStyle}>
        <Input
          placeholder='Contraseña'
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}/>
      </Item>

      <Item rounded style={styles.inputStyle}>
        <Input
          placeholder='Verificar Contraseña'
          secureTextEntry={true}
          onChangeText={(text) => this.setState({verifyPassword: text})}
          value={this.state.verifyPassword}
        />
      </Item>

      <Button rounded block style={styles.buttonStyle} onPress={this._register}>
        <Text style={{color: 'white'}}>CREAR CUENTA</Text>
      </Button>

      <View style={styles.footerStyle}>
      <Text>¿Ya tienes cuenta?, </Text>
      <Text style={styles.font}>INGRESA</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop:10,
    backgroundColor: '#f08080'
  },
  inputStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop:10,
    borderColor: '#f08080'
  },
  iconStyle:{
    fontSize: 100,
    color: '#f08080',
    alignSelf: 'center'
  },
  regisTex: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop:10
  },
  footerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10
  },
  font: {
    fontWeight: 'bold'
  }
})

export default Registro;
