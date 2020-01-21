import React from 'react';
import styled from 'styled-components/native';
import Carousel from './Carousel/Carousel';
import Menu from './Menu/Menu';

const Wrapper = styled.View`
  flex-direction: row;
`;

const MenuWrapper = styled.View`
  width: 280px;
`;

const Text = styled.Text``;

const SlideWrapper = styled.View`
  width: 1030px;
  margin: auto;
  flex-direction: column;
`;

function HomeScreen({navigation}) {
  return (
    <Wrapper>
      <MenuWrapper>
        <Menu navigate={navigation.navigate} active={2} />
      </MenuWrapper>
      <SlideWrapper>
        <Carousel />
      </SlideWrapper>
    </Wrapper>
  );
}

export default HomeScreen;
