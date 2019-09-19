import React from 'react';
import { View, Image } from 'react-native';
import Menu from '../modules/Home/Menu/Menu';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
`;

const MenuWrapper = styled.View`
  flex: 2;
`;

const SlideWrapper = styled.View`
  flex: 8;
`;

const ImageWrapper = styled.Image`
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
          <ImageWrapper source={{ uri: 'http://placehold.jp/1000x800.png' }} />
        </SlideWrapper>
      </Wrapper>
    );
  }
}

export default HomeScreen;
