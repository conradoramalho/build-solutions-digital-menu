import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import {HamburguerHome} from '../../../assets/images';
import {useSelector, useDispatch} from 'react-redux';
import {getHighlights} from '../../../actions/homeActions';

const {width: viewportWidth, height} = Dimensions.get('window');

const DATA = [
  {title: 'ABCDEFG'},
  {title: 'ABCDEFG'},
  {title: 'ABCDEFG'},
  {title: 'ABCDEFG'},
  {title: 'ABCDEFG'},
];

const Container = styled.View`
  position: relative;
`;

const ImageWrapper = styled.Image`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.View`
  width: 100%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.45);
  position: absolute;
  bottom: 0;
  z-index: 5;
  padding: 30px 70px;
`;

const Title = styled.Text`
  font-size: 30px;
  color: #fff;
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  color: #fff;
  font-size: 25px;
`;

function HomeCarousel() {
  const {highlights} = useSelector(({home}) => home);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHighlights());
  }, []);

  const renderItem = ({item, index}) => {
    console.log('item: ', item);
    return (
      <Container>
        <TextContainer>
          <Title>{item.title}</Title>
          <Subtitle>{item.description}</Subtitle>
        </TextContainer>
        <ImageWrapper source={{uri: `http://168.194.230.42:5600${item.img}`}} />
      </Container>
    );
  };

  return (
    <Carousel
      data={highlights}
      renderItem={renderItem}
      sliderWidth={1030}
      itemWidth={1030}
    />
  );
}

export default HomeCarousel;
