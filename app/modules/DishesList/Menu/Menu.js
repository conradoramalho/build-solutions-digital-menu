import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, TouchableOpacity, FlatList, Text} from 'react-native';
import styled from 'styled-components/native';

import {
  getMainCategories,
  setCurrentCategory,
} from '../../../actions/categoryActions';

const Button = styled.TouchableOpacity`
  height: 73;
  justify-content: center;
  padding-left: ${props => (props.active ? 50 : 65)};
  ${props =>
    props.active ? `border-left-color: #e12537; border-left-width: 10;` : ''};
`;

const ButtonText = styled.Text`
  font-size: 25px;
  font-family: ${props =>
    props.active ? 'Quicksand-Bold' : 'Quicksand-Medium'};
  color: ${props => (props.active ? `#e12537` : '#6f6f6f')};
`;

function Menu({navigate}) {
  const {mainCategory, currentCategory} = useSelector(({category}) => category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainCategories());
  }, []);

  const setCategory = categoryId => {
    dispatch(setCurrentCategory(categoryId));
  };

  return (
    <FlatList
      data={mainCategory.list}
      renderItem={({item}) => (
        <Button
          onPress={() => setCategory(item.id)}
          active={item.id === currentCategory.id}>
          <ButtonText active={item.id === currentCategory.id}>
            {item.name}
          </ButtonText>
        </Button>
      )}
      keyExtractor={item => item.id}
      extraData={currentCategory.id}
    />
  );
}

export default Menu;
