import React from 'react';
import { Image } from 'react-native';
import { SUITS } from './constants'

function PlayingCard({rank, suit}) {
  const suitName = SUITS[suit].toLowerCase();
  return <Image
      source={require(`./assets/cards/${rank}_of_${suitName}.png`)}
      style={{width: 222, height: 323, resizeMode: "contain"}}
    />
}

export default PlayingCard;
