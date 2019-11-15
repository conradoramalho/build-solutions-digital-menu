import React from 'react';
import {FlatList, Text} from 'react-native';
import Menu from './Menu/Menu';
import styled from 'styled-components/native';
import DishDealCard from '../../components/DishDealCard/DishDealCard';

const Wrapper = styled.View`
  flex-direction: row;
`;

const MenuWrapper = styled.View`
  width: 280px;
`;

const Container = styled.View`
  width: 1000px;
  margin: auto;
  background-color: #fafafa;
  flex-direction: row;
`;

function DishesList({navigation}) {
  const itens = Array(20).fill({});

  return (
    <Wrapper>
      <MenuWrapper>
        <Menu navigate={navigation.navigate} />
      </MenuWrapper>
      <Container>
        <FlatList
          numColumns={3}
          data={itens}
          renderItem={({item}) => <DishDealCard />}
          keyExtractor={item => item.id}
        />
      </Container>
    </Wrapper>
  );
}

export default DishesList;
