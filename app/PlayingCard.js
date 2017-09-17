import React from 'react';
import {View, Text} from 'react-native';

function PlayingCard({rank, suit}) {
  return (
    <View>
      <Text>Card {rank} {suit}</Text>
    </View>
  )
}

export default PlayingCard;
