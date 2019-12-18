import React from 'react';
import {FlatList} from 'react-native';
import Menu from '../Home/Menu/Menu';

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
  background-color: #f7f7f7;
  flex-direction: row;
  padding: 40px 0 40px 40px;
`;

function DishesList({navigation}) {
  const itens = Array(20).fill({});

  return (
    <Wrapper>
      <MenuWrapper>
        <Menu navigate={navigation.navigate} active={3} />
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
