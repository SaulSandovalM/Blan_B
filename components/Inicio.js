import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Cabecera from '../assets/Cabecera';

export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
      <Cabecera hasTabs />
      <Tabs >
        <Tab heading="Tab1">
          <Tab1 />
        </Tab>
        <Tab heading="Tab2">
          <Tab2 />
        </Tab>
      </Tabs>
      </Container>
    );
  }
}
