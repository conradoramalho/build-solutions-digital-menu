import React from 'react';
import Menu from '../modules/Home/Menu/Menu';
import styled from 'styled-components/native';
import DishCard from '../components/DishCard/DishCard';

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
    </Wrapper>
  );
}

export default DishesList;
