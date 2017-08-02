import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Button, Icon, Item, Input} from 'native-base';
import {firebaseRef} from './Firebase';
import {Actions} from 'react-native-router-flux';
import Inicio from '../components/Inicio';
import Login from './Login';

class Log extends Component {
  state = {loggedIn: null};

  componentWillMount(){
      firebaseRef.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Inicio />;
      case false:
        return <Login />;

    }
  }

    render(){
        return(
          <View style={{flex: 1}}>

            {this.renderContent()}

          </View>
        );
    }
}
const styles = StyleSheet.create({

  image: {

    width: '100%',
    height: '100%'
  }
})
export default Log;
