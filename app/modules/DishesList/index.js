import React from 'react';
import { FlatList, Text } from 'react-native';
import Menu from './Menu/Menu';
import styled from 'styled-components/native';
import DishCard from '../../components/DishCard/DishCard';

const Wrapper = styled.View`
  flex-direction: row;
`;

const MenuWrapper = styled.View`
  flex: 2;
`;

const Container = styled.View`
  flex: 8;
  margin: auto;
  flex-direction: column;
`;

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

function DishesList({ navigation }) {
  const itens = Array(20).fill({});

  return (
    <Wrapper>
      <MenuWrapper>
        <Text>Dishes List</Text>
        <Menu navigate={navigation.navigate} />
      </MenuWrapper>
      <Container>
        <FlatList
          data={itens}
          renderItem={({ item }) => <DishCard />}
          keyExtractor={item => item.id}
        />
      </Container>
    </Wrapper>
  );
}

export default DishesList;
