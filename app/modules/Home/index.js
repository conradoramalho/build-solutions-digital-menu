import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import Carousel from './Carousel/Carousel';
import Menu from './Menu/Menu';
import {getHighlights} from '../../actions/homeActions';

const Wrapper = styled.View`
  flex-direction: row;
`;

const MenuWrapper = styled.View`
  width: 280px;
`;

const Text = styled.Text``;

const SlideWrapper = styled.View`
  width: 944px;
  margin: auto;
  flex-direction: column;
`;

function HomeScreen({navigation}) {
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHighlights());
  }, []);

  return (
    <Wrapper>
      <MenuWrapper>
        <Text>{JSON.stringify(state)}</Text>
        <Menu navigate={navigation.navigate} active={2} />
      </MenuWrapper>
      <SlideWrapper>
        <Carousel />
      </SlideWrapper>
    </Wrapper>
  );
}

export default HomeScreen;
