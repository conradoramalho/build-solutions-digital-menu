import React from 'react';
import styled from 'styled-components/native';

import Carousel from '../modules/Home/Carousel/Carousel';
import Menu from '../modules/Home/Menu/Menu';

const Wrapper = styled.View`
  flex-direction: row;
`;

const MenuWrapper = styled.View`
  flex: 2;
`;

const SlideWrapper = styled.View`
  flex: 8;
  margin: auto;
  background-color: red;
  flex-direction: column;
`;

const CarouselStyled = styled(Carousel)`
  width: 100%;
  height: 100%;
`;

class HomeScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
        <SlideWrapper>
          <Carousel />
        </SlideWrapper>
      </Wrapper>
    );
  }
}

{
  /* <ImageWrapper source={{ uri: 'http://placehold.jp/1000x800.png' }} /> */
}
export default HomeScreen;
