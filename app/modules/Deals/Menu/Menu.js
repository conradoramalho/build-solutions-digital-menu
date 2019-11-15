import React from 'react';
import {SafeAreaView, TouchableOpacity, FlatList, Text} from 'react-native';
import styled from 'styled-components/native';

const MENU = [
  {label: 'Aperitivos'},
  {label: 'Pizzas'},
  {label: 'Massas'},
  {id: 1, label: 'Hamburguer'},
  {label: 'Pratos Quentes'},
  {label: 'Bebidas'},
];

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
  return (
    <FlatList
      data={MENU}
      renderItem={({item}) => (
        <Button onPress={() => navigate('Home')} active={item.id === 1}>
          <ButtonText active={item.id === 1}>{item.label}</ButtonText>
        </Button>
      )}
      keyExtractor={item => item.id}
    />
  );
}

export default Menu;