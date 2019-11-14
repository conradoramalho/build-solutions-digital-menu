import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styled from 'styled-components/native';

import {START_MENU} from '../../../constants';

const Button = styled.TouchableOpacity`
  padding: 20px;
  margin: 0 20px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
`;

function Menu({navigate}) {
  return (
    <SafeAreaView>
      <FlatList
        data={START_MENU}
        renderItem={({item}) => (
          <Button onPress={() => navigate(item.to)}>
            <ButtonText>{item.title}</ButtonText>
          </Button>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Menu;
