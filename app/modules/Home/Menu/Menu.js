import React from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';

import { START_MENU } from '../../../constants';

const Button = styled.TouchableOpacity`
  padding: 20px;
  margin: 0 20px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
`;

function Menu() {
  const onSelect = () => {
    console.log('ok');
  };

  return (
    <SafeAreaView>
      <FlatList
        data={START_MENU}
        renderItem={({ item }) => (
          <Button onPress={onSelect}>
            <ButtonText>{item.title}</ButtonText>
          </Button>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Menu;
