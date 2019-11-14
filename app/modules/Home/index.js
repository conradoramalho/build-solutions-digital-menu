import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import Carousel from './Carousel/Carousel';
import Menu from './Menu/Menu';
import Button from '../../components/Button/Button';
import Garcom from '../../assets/icon_garcom.svg';

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
        <Garcom />
        <Menu navigate={navigation.navigate} />
      </MenuWrapper>
      <SlideWrapper>
        <Carousel />
      </SlideWrapper>
    </Wrapper>
  );
}

export default HomeScreen;
