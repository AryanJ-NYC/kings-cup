import React from 'react';
import { Image, View } from 'react-native';
import { SUITS } from './constants'

function PlayingCard({rank, suit}) {
  const suitName = SUITS[suit].toLowerCase();
  return (
    <View style={{ alignSelf: 'center', borderWidth: 'hairline', borderRadius: '12px' }}>
      <Image
        source={require(`./assets/cards/${rank}_of_${suitName}.png`)}
        style={{width: 222, height: 323, resizeMode: "contain"}}
      />
    </View>
  )
}

export default PlayingCard;
