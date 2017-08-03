import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Button, Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';



class Bienvenido extends Component {
    render(){
        return(

    <Image source={require('../imgs/nn.jpg')} style={{justifyContent: 'space-between', flex: 2, height: null, width: null}}>

    <View style={{justifyContent: 'flex-end'}}>
          <View style={{justifyContent: 'center', flexDirection: 'column', marginBottom: 10, marginTop: 20, alignItems:'center'}}>
          <Text style={{ fontWeight:'bold', fontSize: 30}}>PLAN B APP, </Text>
          <Text style={{ fontSize: 20}} >Tu mejor asesor financiero</Text>
          </View>
          </View>

<View>
          <Button rounded block style={styles.buttonIngreso} onPress={()=> Actions.Ter()} >
            <Text style={{color: 'white', fontWeight:'bold'}}>EMPECEMOS</Text>
          </Button>



          <Text style={{fontWeight:'bold', alignSelf:'center'}} >www.fixter.org</Text>

</View>

          </Image>

        );
    }
}



const styles = StyleSheet.create({

  image: {

    width: '100%',
    height: '100%'

  },
  inputRounded: {
    marginRight: 40, marginLeft: 40, marginBottom: 10, borderColor: '#f08080', borderWidth: 3
  },
  buttonIngreso: {
    marginRight: 40, marginLeft: 40, marginBottom: 10, backgroundColor: '#f08080'
  }
})
export default Bienvenido;
