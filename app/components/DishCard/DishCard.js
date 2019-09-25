import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const DishCard = () => {
  return (
    <View>
      <Image source={{ uri: `http://placehold.jp/${100}x${100}.png` }} />
      <Text>Gran Prime Burguer</Text>
      <Text>R$ 37,00</Text>
      <Text>
        Hamburguer de picanha envolvido por uma massa de pizza, cebola
        caramelizada, picles e cheddar
      </Text>
      <Button>Ver mais</Button>
      <Button>Adicionar</Button>
    </View>
  );
};

export default DishCard;
