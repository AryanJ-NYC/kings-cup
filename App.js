import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Deck from "./app/Deck";
import PlayingCard from './app/PlayingCard';
import Rule from './app/Rule';

export default class App extends Component {
  constructor() {
    super();
    this.deck = new Deck();
    this.state = {
      topCard: this.deck.topCard,
    };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.setState({ topCard: this.deck.getNextCard() });
  }

  render() {
    const {rank, suit} = this.state.topCard;

    return (
      <View style={styles.container}>
        <Text>Cards Remaining: {this.deck.deck.length}</Text>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={{ maxWidth: '50%' }}>
            <PlayingCard rank={rank} suit={suit} />
            <Rule rank={rank} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
  },
});
