import React from 'react';
import { FlatList, Text } from 'react-native';
import Menu from './Menu/Menu';
import styled from 'styled-components/native';
import DishCard from '../../components/DishCard/DishCard';

const Wrapper = styled.View`
  flex-direction: row;
`;

const MenuWrapper = styled.View`
  width: 280px;
`;

const Container = styled.View`
  width: 1000px;
  margin: auto;
  flex-direction: column;
`;

function DishesList({ navigation }) {
  const itens = Array(20).fill({});

  return (
    <Wrapper>
      <MenuWrapper>
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
