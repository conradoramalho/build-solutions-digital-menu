import React from 'react';
import { View, Text } from 'react-native';
import Menu from './Menu/Menu';
import styled from 'styled-components/native';
import DishCard from './Dish/DishCard';

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

function DishesList({ navigation }) {
  const itens = Array(1).fill(0);

  return (
    <Wrapper>
      <MenuWrapper>
        <Text>Dishes List</Text>
        <Menu navigate={navigation.navigate} />
      </MenuWrapper>
      <Container>
        {itens.map(() => (
          <DishCard />
        ))}
        {/* <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          /> */}
      </Container>
    </Wrapper>
  );
}

export default DishesList;
