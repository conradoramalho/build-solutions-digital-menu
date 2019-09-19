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
          source={{ uri: `http://placehold.jp/${500}x${500}.png` }}
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
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
      />
    );
  }
}

export default HomeCarousel;
