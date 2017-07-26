import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Icon, Item, Input, Container, Content} from 'native-base';
import {firebaseRef} from './Firebase';
import imgLogo from '../imgs/Logo.png';
import {Actions} from 'react-native-router-flux';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      status: ''
    }
    this._login = this._login.bind(this)
    this._reg = this._reg.bind(this)
  }

  _login() {
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
    })
     Actions.Inicio()
  }

  _reg(){
    Actions.Registro()
  }

  render() {
    return (
      <Container style={{backgroundColor: "white"}}>
        <Content>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
            <View style={{flex: 2}}>
              <Image source={imgLogo} style={styles.image}/>
            </View>

            <View style={{height: 70, flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity style={{margin: 10}}>
                <Icon name="logo-facebook" style={{color: '#3B5998', fontSize: 40}} />
              </TouchableOpacity>

              <TouchableOpacity style={{ margin: 10 }}>
                <Icon name="logo-googleplus" style={{ color: '#c71610', fontSize: 40 }}/>
              </TouchableOpacity>
            </View>

            <Item rounded style={styles.inputRounded}>
              <Input placeholder='Correo electrónico' keyboardType='email-address' returnKeyType='next'
                onChangeText={(text) => this.setState({email: text})} value={this.state.email}/>
            </Item>
            <Item rounded style={styles.inputRounded}>
              <Input placeholder='Contraseña' secureTextEntry={true}
                onChangeText={(text) => this.setState({password: text})} value={this.state.password}/>
            </Item>
            <Button rounded block style={styles.buttonIngreso} onPress={this._login}>
              <Text style={{ color: 'white' }}>INGRESAR</Text>
            </Button>

            <View style={{ justifyContent: 'flex-end' }}>
              <View style={{justifyContent: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
                <Text>¿Aún no tienes cuenta?</Text>
                <Text style={{ fontWeight: 'bold' }} onPress={this._reg}>REGISTRATE</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350
  },
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: '#f08080'
  },
  buttonIngreso: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#f08080'
  },
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: '#f08080'
  },
  buttonIngreso: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#f08080'
  }
});

export default Login;
