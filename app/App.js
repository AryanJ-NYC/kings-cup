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
    const {rank, suit} = this.state.deck.topCard;

    return (
      <View style={styles.container}>
        <PlayingCard rank={rank} suit={suit} />
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
