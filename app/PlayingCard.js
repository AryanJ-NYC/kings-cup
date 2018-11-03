import React from 'react';
import { Image, View } from 'react-native';
import { cards } from './lib';
import { SUITS } from './constants'

function PlayingCard({rank, suit}) {
  const suitName = SUITS[suit].toLowerCase();
  return (
    <View style={{ alignSelf: 'center', borderWidth: 1, borderRadius: 12 }}>
      <Image
        source={cards[suitName][rank]}
        style={{width: 222, height: 323, resizeMode: "contain"}}
      />
    </View>
  )
}

export default PlayingCard;
