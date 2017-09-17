import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from "./Deck";
import PlayingCard from './PlayingCard';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: new Deck(),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <PlayingCard rank='5' suit='J'></PlayingCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
