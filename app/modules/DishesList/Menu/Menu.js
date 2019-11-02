import React from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';

const MENU = [
  { label: 'Aperitivos' },
  { label: 'Pizzas' },
  { label: 'Massas' },
  { label: 'Hamburguer' },
  { label: 'Pratos Quentes' },
  { label: 'Bebidas' },
];

const Button = styled.TouchableOpacity`
  padding: 20px;
  margin: 0 20px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
`;

function Menu({ navigate }) {
  return (
    <SafeAreaView>
      <FlatList
        data={MENU}
        renderItem={({ item }) => (
          <Button onPress={() => navigate('Home')}>
            <ButtonText>{item.label}</ButtonText>
          </Button>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Menu;