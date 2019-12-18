import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styled from 'styled-components/native';

import {START_MENU} from '../../../constants';

const Wrapper = styled.View`
  width: 336px;
  background-color: #fefefe;
`;

const Button = styled.TouchableOpacity`
  padding: 20px 50px;
  ${props =>
    props.isActive
      ? `border-left-color: #e12537; border-left-width: 10; padding-left: 40px;`
      : ''};
`;

const ButtonText = styled.Text`
  font-family: Quicksand;
  font-size: 26.7px;
  font-weight: 500;
  color: #6f6f6f;
`;

function Menu({navigate, active}) {
  return (
    <Wrapper>
      <FlatList
        data={START_MENU}
        renderItem={({item}) => (
          <Button
            onPress={() => navigate(item.to)}
            isActive={active === item.id}>
            <ButtonText>{item.title}</ButtonText>
          </Button>
        )}
        keyExtractor={item => item.id}
      />
    </Wrapper>
  );
}

export default Menu;
