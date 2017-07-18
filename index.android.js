/**
 * Plan B App With React Native
 * @Fixter
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Inicio from './components/Inicio';

export default class Blan_B extends Component {
  render() {
    return (
      <Inicio/>
    );
  }
}


AppRegistry.registerComponent('Blan_B', () => Blan_B);
