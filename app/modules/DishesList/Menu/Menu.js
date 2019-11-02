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

const Wrapper = styled.View`
  width: 333px;
  padding-left: 40px;
`;

const Button = styled.TouchableOpacity`
  padding: 20px;
  margin: 0 20px;
`;

const ButtonText = styled.Text`
  font-size: 25px;
  font-family: Quicksand-Medium;
  color: #6f6f6f;
`;

function Menu({ navigate }) {
  return (
    <Wrapper>
      <FlatList
        data={MENU}
        renderItem={({ item }) => (
          <Button onPress={() => navigate('Home')}>
            <ButtonText>{item.label}</ButtonText>
          </Button>
        )}
        keyExtractor={item => item.id}
      />
    </Wrapper>
  );
}

export default Menu;
