import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {firebaseRef} from './Firebase';
import {Button, Icon, Item, Input} from 'native-base';
import FBSDK, {LoginButton, AccessToken} from 'react-native-fbsdk';

class Login extends Component {
  state = {
    email: '',
    contraseña: '',
    error: '',
    credential: ''
  };

  componentWillMount() {
    this.authenticateUser();
  }

  authenticateUser = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      const {accessToken} = data
      const credential = FacebookAuthProvider.credential(accessToken)
      firebaseRef.signInWithCredential(credential).then((credentials) => {
        this.setState({credentials})

      }, (error) => {
        console.log("Sign in error", error)
      })
    })
  }

  onButtonPress() {
    const {email, contraseña} = this.state;

    this.setState({error: ''});

    firebaseRef.auth().signInWithEmailAndPassword(email, contraseña).then(this.onLoginSuccess.bind(this)).catch(() => {
      firebaseRef.auth().createUserWithEmailAndPassword(email, contraseña).then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFailed.bind(this));
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
      <Image source={require('../imgs/fn.jpg')} style={styles.imagen}>

        <Text style={styles.texto}>BIENVENIDO</Text>

        <View style={styles.view1}>

          <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={ this.handleLoginFinished }
          onLogoutFinished={() => alert("Adios perro.")}/>
        </View>

        <Item rounded style={styles.inputRounded}>
          <Input style={styles.input}
          placeholder='Correo electrónico' keyboardType='email-address' placeholderTextColor='white'
          returnKeyType='next' value={this.state.text} onChangeText={email => this.setState({email})}/>
        </Item>

        <Item rounded style={styles.inputRounded}>
          <Input style={styles.input}
          placeholder='Contraseña' placeholderTextColor='white' secureTextEntry={true}
          value={this.state.contraseña} onChangeText={contraseña => this.setState({contraseña})}/>
        </Item>

        <Button rounded block style={styles.buttonIngreso} onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.boton}>INGRESAR</Text>
        </Button>

        <View style={styles.view2}>
          <View style={styles.view3}>
            <Text>¿Aún no tienes cuenta?,</Text>
            <Text style={styles.registrate}>REGISTRATE</Text>
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
    borderWidth: 3
  },
  buttonIngreso: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    backgroundColor: '#f08080'
  },
  imagen: {
    justifyContent: 'space-around',
    flex: 2,
    height: null,
    width: null,
    opacity: 15
  },
  texto: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: 'transparent'
  },
  view1: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  view2: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  view3: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10
  },
  input: {
    color: 'white'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  },
  registrate: {
    fontWeight: 'bold'
  }
})

export default Login;
