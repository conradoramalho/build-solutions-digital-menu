import React from 'react';
import { View, Text } from 'react-native';
import Menu from '../modules/Home/Menu/Menu';
import styled from 'styled-components/native';
import DishCard from '../components/DishCard/DishCard';
import Modal from 'react-native-modal';

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

function DishesList() {
  const itens = Array(3).fill(0);

  return (
    <Wrapper>
      <MenuWrapper>
        <Menu />
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
      <Modal isVisible={true}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </Wrapper>
  );
}

export default DishesList;
