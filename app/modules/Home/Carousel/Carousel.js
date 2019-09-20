import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';

const { width: viewportWidth, height } = Dimensions.get('window');

const DATA = [
  { title: 'ABCDEFG' },
  { title: 'ABCDEFG' },
  { title: 'ABCDEFG' },
  { title: 'ABCDEFG' },
  { title: 'ABCDEFG' },
];

const ImageWrapper = styled.Image`
  width: 100%;
  height: 100%;
`;

class HomeCarousel extends Component {
  _renderItem({ item, index }) {
    return (
      <View>
        <ImageWrapper
          source={{ uri: `http://placehold.jp/${1030}x${700}.png` }}
        />
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={DATA}
        renderItem={this._renderItem}
        sliderWidth={1030}
        itemWidth={1030}
      />
    );
  }
}

export default HomeCarousel;