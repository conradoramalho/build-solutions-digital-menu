import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import {HamburguerHome} from '../../../assets/images';

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
  const renderItem = ({item, index}) => {
    return (
      <Container>
        <TextContainer>
          <Title>Cream Cheese Bacon Rib</Title>
          <Subtitle>
            Pão especial, hambúrguer artesanal de costela bovina 200g, cream
            cheese Philadelphia, bacon em fatias, cebola caramelizada…
          </Subtitle>
        </TextContainer>
        <ImageWrapper source={HamburguerHome} />
      </Container>
    );
  };

  return (
    <Carousel
      data={DATA}
      renderItem={renderItem}
      sliderWidth={1030}
      itemWidth={1030}
    />
  );
}

export default HomeCarousel;
