import React from 'react';
import { View } from 'react-native';
import Card from '../Card/Card';

const Cards = ({ cards }) => {
  return (
    <View>
      {cards.map(({ nombre, onPress, key }) => (
        <Card key={key} title={nombre} onPress={onPress} />
      ))}
    </View>
  );
};

export default Cards;