import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SearchGameScreen from './app/screens/bountyflow/search';
import BountyConainer from './app/screens/bountyflow';

export default class App extends Component {
  render() {
    return (
      <BountyConainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
