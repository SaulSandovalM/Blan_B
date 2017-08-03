import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView} from 'react-native';
import {firebaseRef} from './Firebase';
import FBSDK, {LoginButton, AccessToken} from 'react-native-fbsdk';
import {Button, Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Login extends Component {
  state = {
    email: '',
    contraseña: '',
    error: '',
    credential: ''
  };
  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
  }

  componentWillMount() {
    this.authenticateUser();
  }

  authenticateUser = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      const {accessToken} = data
      const credential = FacebookAuthProvider.credential(accessToken)
      firebaseRef.signInWithCredential(credential).then((credentials) => {

        Actions.Inicio()
      }, (error) => {
        console.log("Sign in error", error)
      })
    }).catch((error) => {
      console.log("Sign in error", error)
    });
  }

  onButtonPress() {
    const {email, contraseña} = this.state;
    this.setState({error: ''});
    firebaseRef.auth().signInWithEmailAndPassword(email, contraseña).then(this.onLoginSuccess).catch(() => {
      firebaseRef.auth().createUserWithEmailAndPassword(email, contraseña).then(this.onLoginSuccess)
      .catch(this.onLoginFailed);
    });
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida'});
    alert('Verifica campos Perro')
  }

  onLoginSuccess() {
    this.setState({email: '', contraseña: '', error: ''});
  }

  render() {
    return (
      <Image source={require('../imgs/fn.jpg')} style={{
        justifyContent: 'space-around',
        flex: 2,
        height: null,
        width: null,
        opacity: 15}}>

        <Text style={{color: 'white', fontSize: 40, alignSelf: 'center', fontWeight: 'bold', marginTop: 20, backgroundColor: 'transparent'}}>BIENVENIDO</Text>

        <View style={{height: 70, flexDirection: 'row', justifyContent: 'space-around',alignItems: 'center'}}>

          <LoginButton readPermissions={['public_profile', 'email']} onLoginFinished={this.handleLoginFinished}
            onLogoutFinished={() => alert("Adios perro.")}/>
        </View>

        <Item rounded style={styles.inputRounded}>
          <Input style={{color: 'black'}}
            placeholder='Correo electrónico' keyboardType='email-address' placeholderTextColor='black' returnKeyType='next'
          value={this.state.text} onChangeText={email => this.setState({email})}/>
        </Item>
        <Item rounded style={styles.inputRounded}>
          <Input style={{color: 'black'}}
            placeholder='Contraseña' placeholderTextColor='black' secureTextEntry={true} value={this.state.contraseña}
            onChangeText={contraseña => this.setState({contraseña})}/>
        </Item>
        <Button rounded block style={styles.buttonIngreso} onPress={this.onButtonPress.bind(this)}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>INGRESAR</Text>
        </Button>

        <View style={{justifyContent: 'flex-end', backgroundColor: 'transparent'}}>
          <View style={{justifyContent: 'center', flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
            <Text>¿Aún no tienes cuenta?,</Text>
            <Text style={{fontWeight: 'bold'}} onPress={() => Actions.Registro()}>REGISTRATE</Text>
          </View>
        </View>
      </Image>
    );
  }
}

handleLoginFinished = (error, result) => {
  if (error) {
    console.error(error)
  } else if (result.isCancelled) {
    console.warn("login is cancelled.");
  } else {
    this.authenticateUser()
    alert('FuncionHandle')
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  },
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: '#f08080',
    borderWidth: 3,
    backgroundColor: 'white'
  },
  buttonIngreso: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#f08080'
  }
})

export default Login;
