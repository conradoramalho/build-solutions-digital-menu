import React from 'react';
import styled from 'styled-components/native';
import Carousel from './Carousel/Carousel';
import Menu from './Menu/Menu';

const Wrapper = styled.View`
  flex-direction: row;
`;

const MenuWrapper = styled.View`
  flex: 2;
`;

const SlideWrapper = styled.View`
  flex: 8;
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
