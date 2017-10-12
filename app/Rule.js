import React from 'react';
import { Text, View } from 'react-native';
import { RULES } from './constants';

export default function Rule ({ rank }) {
  return (
    <View>
      <Text style={{ textAlign: 'center' }}>{RULES[rank].name}</Text>
      <Text style={{ textAlign: 'center' }}>{RULES[rank].description}</Text>
    </View>
  );
}