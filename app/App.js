import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Deck from "./Deck";
import PlayingCard from './PlayingCard';
import Rule from './Rule';

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
        <View style={{ alignContent: 'center', width: 323, flexDirection: 'column' }}>
          <PlayingCard rank={rank} suit={suit} />
          <Rule rank={rank} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
