import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs } from 'native-base';

export default class Ingresos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '$'
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <Image source={{
            uri: 'https://dm6jf9380nk1h.cloudfront.net/thumbor/NsBlFRM7rbPiDiiLP8dpboTJ-WQ=/1200x0/filters:no_upscale()/https://dm6jf9380nk1h.cloudfront.net/article/ec6533aa-e4ff-4b6a-9c47-7a5f3caeccaf.jpg'
          }} style={{
            height: 200,
            width: '100%'
          }}/>
          <Title style={{
            top: 10
          }}>Ingreso Mensual</Title>
          <View style={styles.align}>
            <TextInput style={{
              height: 40,
              width: 200,
              marginLeft: 10,
              top: 30
            }} onChangeText={(text) => this.setState({text})} value={this.state.text}/>
            <Text style={styles.texto}>Trabajo</Text>
          </View>
          <View style={styles.align}>
            <TextInput style={{
              height: 40,
              width: 200,
              marginLeft: 10,
              top: 30
            }} onChangeText={(text) => this.setState({text})} value={this.state.text}/>
            <Text style={styles.texto}>Otros</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    color: "green"
  },
  align: {
    flexDirection: 'row'
  },
  texto: {
    fontSize: 20,
    top: 32
  }
});

module.export = Ingresos;
