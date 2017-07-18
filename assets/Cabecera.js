import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs } from 'native-base';

export default class Cabecera extends Component {
  render() {
    return (
        <Header style={{backgroundColor: "white"}}>
          <Left>
            <Title style={{color: 'black'}}>Plan_B</Title>
          </Left>
          <Right>
            <Button transparent>
              <Icon name='pin' />
            </Button>
            <Button transparent>
              <Icon name='person' />
            </Button>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white"
  },
  color: {
    color: "green"
  },
});

module.export = Cabecera;
