import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import Menu from './Menu/Menu';
import styled from 'styled-components/native';
import DishCard from '../../components/DishCard/DishCard';
import DishDetailsModal from './Dish/DishDetailsModal';
import AddDishModal from './Dish/AddDishModal/AddDishModal';

import Cart from '../Cart/Cart';

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

function DishesList({navigation}) {
  const [dishModalItem, setDishModalItem] = useState({});
  const [addDishModalItem, setAddDishModalItem] = useState({});

  useEffect(() => {
    console.log('dishModalItem: ', dishModalItem);
  }, [dishModalItem]);

  const itens = Array(20).fill({
    id: 2,
    title: 'Gran Prime Burguer',
    price: 'R$ 37,00',
    description:
      'Hamburguer de picanha envolvido por uma massa de pizza, cebola caramelizada, picles e cheddar',
  });

  return (
    <>
      <Wrapper>
        <MenuWrapper>
          <Menu navigate={navigation.navigate} />
        </MenuWrapper>
        <Container>
          <FlatList
            data={itens}
            renderItem={({item}) => (
              <DishCard
                openDetailsModal={() => setDishModalItem(item)}
                openAddModal={() => setAddDishModalItem(item)}
              />
            )}
            keyExtractor={item => item.id}
          />
        </Container>
      </Wrapper>

      <DishDetailsModal
        isVisible={!!dishModalItem.id}
        onClose={() => setDishModalItem({})}
        dish={dishModalItem}
      />

      {/* <AddDishModal
        isVisible={!!addDishModalItem.id}
        onClose={() => setAddDishModalItem({})}
        dish={addDishModalItem}
      />
 */}
      <Cart
        isVisible={!!addDishModalItem.id}
        onClose={() => setAddDishModalItem({})}
        dish={addDishModalItem}></Cart>
    </>
  );
}

export default DishesList;
